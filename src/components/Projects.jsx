import { projectsData } from "../data/projects";

function Projects() {
    return (
        <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8 border-b pb-2" style={{ color: 'var(--accent-1)' }}>
                Some projects & Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsData.map((p, i) => (
                    <div key={i} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{p.title}</h3>
                                {p.isPrivate ? (
                                    <span className="text-[10px] uppercase tracking-widest text-slate-500 border border-slate-700 px-2 py-0.5 rounded">
                                        Internal
                                    </span>
                                ) : (
                                    <a href={p.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-1)' }}>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                    </a>
                                )}
                            </div>
                            <button 
                                onClick={() => {
                                    const event = new CustomEvent('run-terminal', { detail: `project ${p.title}` });
                                    window.dispatchEvent(event);
                                }}
                                className="text-xs font-bold hover:text-white mb-6 uppercase tracking-wider flex items-center gap-1 transition-all group-hover:gap-2 cursor-pointer"
                                style={{ color: 'var(--accent-1)' }}
                            >
                                [ Read details ]
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {p.tech.map(t => (
                                <span key={t} className="px-2 py-0.5 text-[10px] font-medium rounded border" style={{ borderColor: 'var(--border)', color: 'var(--accent-1)' }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;