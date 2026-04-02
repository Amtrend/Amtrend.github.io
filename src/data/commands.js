import { skillsData } from "./skills";
import { projectsData } from "./projects";

export const commandsLogicData = {
  help: () => 'Available commands: help, clear, about, skills, date, weather, sys, projects, theme, contact',
  skills: () => {
    const list = skillsData.map(s => s.name).join(', ');
    return `My stack: ${list}.\nType "skills [name]" for more info.`;
  },
  projects: () => {
    const list = projectsData.map(p => p.title).join('\n - ');
    return `Experience & Projects:\n - ${list}\nType "project [name]" for details.`;
  },
  date: () => new Date().toLocaleString(),
  about: (info) => info,
  sys: () => {
    const { language, hardwareConcurrency, deviceMemory } = window.navigator;
    const ua = navigator.userAgent;
    let browser = "Unknown";
    if (ua.includes("Chrome") && !ua.includes("Edg")) {
      browser = "Google Chrome";
    } else if (ua.includes("Edg")) {
      browser = "Microsoft Edge";
    } else if (ua.includes("Firefox")) {
      browser = "Mozilla Firefox";
    } else if (ua.includes("Safari") && !ua.includes("Chrome")) {
      browser = "Apple Safari";
    }
    const os = navigator.userAgentData?.platform || navigator.platform || "Unknown OS";
    return (
      `OS: ${os} | Browser: ${browser} | Cores: ~${hardwareConcurrency} threads | RAM: ~${deviceMemory} GB | Language: ${language} | Resolution: ${window.screen.width}x${window.screen.height}`
    );
  }
};
