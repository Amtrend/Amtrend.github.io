import { skillsData } from "../data/skills";

function Skills() {
    return (
        <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8 border-b pb-2" style={{ color: 'var(--accent-1)' }}>
                Technical Stack
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skillsData.map((skill, i) => (
                    <div 
                        key={i} 
                        className="flex flex-col items-center p-4 bg-[#1e1e1e] rounded-xl border border-gray-800 transition-all duration-300 hover:border-gray-600 group cursor-pointer"
                        onMouseEnter={(e) => e.currentTarget.firstChild.style.color = skill.color}
                        onMouseLeave={(e) => e.currentTarget.firstChild.style.color = ''}
                        onClick={() => {
                            const event = new CustomEvent('run-terminal', { detail: `skills ${skill.name}` });
                            window.dispatchEvent(event);
                        }}
                        >
                        <skill.icon
                            size={40}
                            className="text-gray-500 transition-colors duration-300"
                            style={{ '--hover-color': skill.color }}
                        />

                        <span className="mt-3 text-gray-400 font-medium group-hover:text-white transition-colors">
                            {skill.name}
                        </span>

                        <span className="text-[10px] uppercase tracking-widgest text-gray-600 mt-1">
                            {skill.level}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );    
}

export default Skills;
