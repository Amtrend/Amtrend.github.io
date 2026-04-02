import { useTheme } from "../hooks/useTheme";

function Header({ name, role }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex flex-col items-center py-10 relative">
      <div className="absolute right-0 top-10 flex items-center gap-3">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          {theme === 'dark' ? 'Dark' : 'Ubuntu'}
        </span>
        <button
          onClick={toggleTheme}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none cursor-pointer ${
            theme === 'ubuntu' ? 'bg-orange-600' : 'bg-slate-700'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
              theme === 'ubuntu' ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
      <h1 className="text-6xl font-black bg-gradient-to-r bg-clip-text text-transparent"
          style={{ 
          backgroundImage: theme === 'dark' 
            ? 'linear-gradient(to right, #60a5fa, #34d399)' 
            : 'linear-gradient(to right, #e95420, #f4a62a)' 
        }}
      >
        {name}
      </h1>
      <p className="mt-2 text-slate-400 font-mono text-lg">
        {role}
      </p>
    </header>
  )
}

export default Header;
