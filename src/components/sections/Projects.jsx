import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
    {
        title: "Attendance App",
        description: "A User-friendly app to mark students' day-to-day attendance.",
        technologies: ["Jetpack Compose", "MySQL"],
        link: "#"
    },
    {
        title: "E-Commerce Platform",
        description: "A seamless online shopping experience with smart recommendations.",
        technologies: ["React.js", "MongoDB"],
        link: "#"
    },
    {
        title: "Lynk-To Chat App",
        description: "A real-time chat application with intelligent event tracking.",
        technologies: ["Flutter", "MySQL", "WebSockets"],
        link: "#"
    },
    {
        title: "Portfolio Website",
        description: "A personalized portfolio showcasing projects and achievements.",
        technologies: ["Next.js", "Tailwind CSS"],
        link: "#"
    }
];

const ProjectCard = ({ title, description, technologies, link }) => (
    <div className="p-6 rounded-xl border border-white/10 hover:scale-105 hover:border-blue-500/30 
        hover:shadow-lg transition-all">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, key) => (
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-5 rounded-full text-sm 
                    hover:bg-blue-500/20 hover:shadow-md transition-all">
                    {tech}
                </span>
            ))}
        </div>
        <div className="flex justify-between items-center my-4">
            <a href={link} className="text-blue-400 hover:text-blue-300 transition-colors">
                View Project →
            </a>
        </div>
    </div>
);

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex justify-center items-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
                    bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
