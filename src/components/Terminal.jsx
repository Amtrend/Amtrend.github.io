import { useState, useEffect, useRef } from "react";
import { commandsLogicData } from "../data/commands";
import { skillsData } from "../data/skills";
import { projectsData } from "../data/projects";
import Prompt from "./Prompt";
import { useTheme } from "../hooks/useTheme";
import { useUI } from "../hooks/useUI";
import { fetchGithubData } from "../utils/githubApi";
import { fetchWeather, fetchUserLocation } from "../utils/apiServices";

function Terminal({ info }) {
  // references to DOM elements
  const historyRef = useRef(null); // to control scrolling inside the terminal
  const inputRef = useRef(null); // to focus on the input

  // get the function of switching the theme from the context
  const { toggleTheme } = useTheme();

  // get the function to show the modal from the UI context
  const { openModal } = useUI();

  // Loading command history from localStorage or starting from scratch
  const [commandsHistory, setCommandsHistory] = useState(() => {
    const saved = localStorage.getItem("terminal_history");
    return saved ? JSON.parse(saved) : [];
  });
  const [historyIndex, setHistoryIndex] = useState(-1); // to navigate through history using arrows
  const [input, setInput] = useState(''); // current text in input
  const [visitor, setVisitor] = useState('guest@unknown'); // to display in the prompt, by default guest@unknown, then updated based on IP
  
  // array of elements displayed in the terminal (user input + responses)
  const [history, setHistory] = useState([]);
  const isFetched = useRef(false);

  useEffect(() => {
    if (isFetched.current) return;

    const initSync = async () => {
      isFetched.current = true;
      
      const data = await fetchGithubData("Amtrend", "Amtrend.github.io");


      const ghBlock = data ? (
        <div key="gh-sync" className="mb-4 font-mono text-[13px]">
          <div className="text-gray-400">[SYSTEM] Initializing GitHub Oauth... OK</div>
          <div className="grid grid-cols-1 gap-1 ml-2 border-l border-white/10 pl-3 my-2">
            <div><span className="text-gray-500">Repository:</span> {data.name}</div>
            <div><span className="text-gray-500">Active Branch:</span> {data.branch}</div>
            <div><span className="text-gray-500">Last Commit:</span> "{data.lastCommitMsg}"</div>
            <div><span className="text-gray-500">Timestamp:</span> {data.lastCommitDate}</div>
          </div>
        </div>
      ) : (
        <div key="gh-fail" className="text-red-500/50 italic mb-2">[SYSTEM] Connection lost. Offline mode active.</div>
      );

      const welcomeBlock = [
        <div key="w1" className="font-bold mb-2" style={{ color: 'var(--accent-1)' }}>--- Welcome to Alex CV v2.0.0 ---</div>,
        <div key="w2" className="text-gray-400 mb-4">Type <span className="text-yellow-300">"help"</span> to see available commands.</div>
      ];
      setHistory([ghBlock, ...welcomeBlock]);
    };

    initSync();
  }, []);

  const execute = (rawInput) => {
    const fullInput = rawInput?.trim();
    if (!fullInput) return;

    // save the command to history
    setCommandsHistory(prev => {
        const newH = [...prev, fullInput];
        localStorage.setItem("terminal_history", JSON.stringify(newH));
        return newH;
    });

    const args = fullInput.split(' ');
    const cmd = args[0].toLowerCase();

    // a string that simulates user input
    const currentInputRow = (
      <div className="flex items-start flex-wrap mb-1" key={Date.now() + Math.random()}>
        <Prompt user={visitor} />
        <span className="text-white flex-1 break-words">{fullInput}</span>
      </div>
    );

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    if (cmd === 'weather') {
      const location = visitor.split('@')[1];
      const city = args.slice(1).join(' ');
      const targetCity = city || (location !== 'unknown' && location !== 'remote' ? location : 'Kirov');
      setHistory(prev => [...prev, currentInputRow, <div key={Date.now() + 1}>Fetchig weather for {targetCity} ...</div>]);

      fetchWeather(targetCity).then(data => {
        const result = data ? (
          <div key={Date.now()} className="text-yellow-400 italic">{data}</div>
        ) : (
          <div key={Date.now()} className="text-red-400">Error: Could not fetch weather.</div>
        );
        setHistory(prev => [...prev, result]);
      });
      return;
    }

    let response = null;
    if (cmd === 'skills' && args[1]) {
      const skill = skillsData.find(s => s.name.toLowerCase() === args[1].toLowerCase());
      response = skill ? `[${skill.name}]: ${skill.description}` : `Skill not found`;
    } else if (cmd === 'project' && args.length > 1) {
      const pName = args.slice(1).join(' ');
      const proj = projectsData.find(p => p.title.toLowerCase() === pName.toLowerCase());
      response = proj ? `[${proj.title}]: ${proj.description}` : `Project not found`;
    } else if (commandsLogicData[cmd]) {
      // call a function from the command object
      response = cmd === 'about' ? commandsLogicData[cmd](info) : commandsLogicData[cmd]();
    } else if (cmd === 'sudo') {
      response = "Nice try, but you have no power here. 🧙‍♂️";
    } else if (cmd === 'theme') {
      toggleTheme();
      const nextTheme = document.body.classList.contains('dark') ? 'Ubuntu' : 'Dark';
      response = `Switching system theme to: ${nextTheme}... Done.`;
    } else if (cmd === 'contact') {
      openModal();
      response = "Opening contact form...";
    } else {
      response = `Command not found: ${cmd}`;
    }

    // generate JSX for the response and save it to the terminal history.
    if (response) {
      const responseRow = (
        <div key={Date.now() + Math.random()} className="text-gray-400 mb-3 ml-2 italic whitespace-pre-wrap">
          {response}
        </div>
      );
      setHistory(prev => [...prev, currentInputRow, responseRow]);
    }
  };

  // latest ref pattern for working with external events, so that you always have the latest execute function inside the handler
  const executeRef = useRef(execute);
  useEffect(() => {
    executeRef.current = execute;
  });
  // listen to the custom run-terminal event to execute commands externally (from Skills or Projects)
  useEffect(() => {
    const handleExternal = (e) => {
      executeRef.current(e.detail);
      // Scroll the page to the terminal so the user can see the answer.
      historyRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      inputRef.current?.focus();
    };
    window.addEventListener('run-terminal', handleExternal);
    return () => window.removeEventListener('run-terminal', handleExternal);
  }, []);

  // Automatic scrolling inside the terminal when adding new lines
  useEffect(() => {
    if (historyRef.current) historyRef.current.scrollTop = historyRef.current.scrollHeight;
  }, [history]);

  // We determine the user's city by IP upon first boot.
  useEffect(() => {
    fetchUserLocation().then(city => setVisitor(`guest@${city}`));
  }, []);

  // key processing
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const all = [...Object.keys(commandsLogicData), 'clear', 'weather', 'theme', 'contact'];
      const match = all.find(c => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }

    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      let newIndex = historyIndex;
      if (e.key === 'ArrowUp' && historyIndex < commandsHistory.length - 1) newIndex++;
      else if (e.key === 'ArrowDown' && historyIndex > -1) newIndex--;
      if (newIndex !== historyIndex) {
        setHistoryIndex(newIndex);
        setInput(newIndex === -1 ? '' : commandsHistory[commandsHistory.length - 1 - newIndex]);
      }
    }

    if (e.key === 'Enter') {
      execute(input);
      setInput('');
      setHistoryIndex(-1);
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="max-w-2xl mx-auto mt-10 overflow-hidden rounded-lg shadow-2xl font-mono border text-sm cursor-text"
      style={{ backgroundColor: 'var(--bg-term)', borderColor: 'var(--border)' }}>
      <div className="flex items-center justify-between px-4 py-2" style={{ backgroundColor: 'var(--bg-term-header)' }}>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs italic" style={{ color: 'var(--text-secondary)' }}>{visitor}</div>
      </div>
      <div ref={historyRef} className="p-4 h-80 overflow-y-auto" style={{ color: 'var(--text-secondary)' }}>
        {history.map((line, i) => <div key={i}>{line}</div>)}
        <div className="flex items-start mt-2">
          <Prompt user={visitor} />
          <input
            ref={inputRef}
            className="flex-1 bg-transparent border-none outline-none"
            style={{ color: 'var(--text-primary)' }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
