import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
    {
        title: "Connect - Matchmaking App",
        description: "A Full-Stack matchmaking application built with Flutter and Django, featuring swipe-based matching, real-time chat, and a machine learning-based recommendation system that analyses user swiping behaviour to identify preferences and suggest better matches. The recommendation system leverages collaborative filtering and content-based filtering to improve match accuracy over time.",
        technologies: ["Flutter", "Django", "Machine Learning", "Real-time Chat", "Recommendation System"],
        image: "💕",
        link: "https://github.com/walker31/connect-app",
        github: "https://github.com/walker31/connect-app",
        live: "https://connect-app-demo.vercel.app",
        features: ["Swipe-based matching", "ML recommendation system", "Real-time chat", "Collaborative filtering", "Content-based filtering"]
    },
    {
        title: "Lynk-To - Chat & Calendar App",
        description: "A cross-platform chat and calendar app designed for NIT Trichy students, developed using Flutter for consistent mobile experiences. It incorporates LangChain for advanced natural language processing to automate calendar updates from chat content, reducing manual effort. Features real-time messaging, automated event detection and unified communication tools.",
        technologies: ["Flutter", "Node.js", "Express.js", "MySQL", "LangChain", "NLP"],
        image: "💬",
        link: "https://github.com/walker31/lynk-to",
        github: "https://github.com/walker31/lynk-to",
        live: "https://lynk-to-demo.vercel.app",
        features: ["Real-time messaging", "Automated calendar updates", "NLP integration", "Event detection", "Unified communication"]
    },
    {
        title: "ATrack - Student Attendance Management",
        description: "A comprehensive mobile application developed using Kotlin for digitizing and streamlining student attendance management within educational institutions. Students can mark their daily attendance and keep track of the number of classes they have attended for each subject easily through this app.",
        technologies: ["Kotlin", "Android Studio", "SQLite", "Material Design"],
        image: "📱",
        link: "https://github.com/walker31/atrack",
        github: "https://github.com/walker31/atrack",
        live: "https://atrack-demo.vercel.app",
        features: ["Daily attendance tracking", "Subject-wise tracking", "Digital attendance", "Student dashboard", "Easy management"]
    },
    {
        title: "Healthcare Appointment Management System",
        description: "A web-based Healthcare Appointment Management System built during my internship at KANINI Software Solutions. Features secure RESTful APIs with JWT-based role-based access control, real-time appointment scheduling, and email/SMS notifications integration.",
        technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "RESTful APIs"],
        image: "🏥",
        link: "https://main.d2sjy3evn9ox1m.amplifyapp.com/",
        github: "https://github.com/walker31/healthcare-app",
        live: "https://main.d2sjy3evn9ox1m.amplifyapp.com/",
        features: ["JWT authentication", "Role-based access", "Real-time scheduling", "Email/SMS notifications", "Secure APIs"]
    },
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations, dark mode, and optimized performance. Built with React and Tailwind CSS, featuring interactive elements and professional design.",
        technologies: ["React.js", "Tailwind CSS", "Vite", "EmailJS", "Responsive Design"],
        image: "🎨",
        link: "https://github.com/walker31/portfolio",
        github: "https://github.com/walker31/portfolio",
        live: "https://aditya-janga.vercel.app",
        features: ["Responsive design", "Dark mode", "Smooth animations", "Contact form", "SEO optimized"]
    },
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with advanced features including AI-powered recommendations, real-time inventory management, secure payment processing, and responsive design for all devices.",
        technologies: ["React.js", "Node.js", "MongoDB", "Stripe API", "AI Recommendations"],
        image: "🛒",
        link: "https://github.com/walker31/ecommerce-platform",
        github: "https://github.com/walker31/ecommerce-platform",
        live: "https://ecommerce-demo.vercel.app",
        features: ["AI recommendations", "Payment processing", "Admin dashboard", "Real-time updates", "Inventory management"]
    }
];

const ProjectCard = ({ title, description, technologies, image, link, github, live, features }) => (
    <div className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 
        hover:scale-105 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
        
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{image}</div>
                <div className="flex space-x-2">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" 
                           className="text-gray-400 hover:text-blue-400 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    )}
                    {live && (
                        <a href={live} target="_blank" rel="noopener noreferrer" 
                           className="text-gray-400 hover:text-green-400 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    )}
                </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{title}</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm 
                        hover:bg-blue-500/20 hover:shadow-md transition-all duration-200">
                        {tech}
                    </span>
                ))}
            </div>
            
            <div className="space-y-2 mb-4">
                <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                    {features.map((feature, index) => (
                        <span key={index} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                            {feature}
                        </span>
                    ))}
                </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <a href={link} className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                    View Project →
                </a>
                <div className="flex space-x-2">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" 
                           className="text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded transition-colors">
                            Code
                        </a>
                    )}
                    {live && (
                        <a href={live} target="_blank" rel="noopener noreferrer" 
                           className="text-xs bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded transition-colors">
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
);

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex justify-center items-center py-20">
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 
                            bg-clip-text text-transparent">
                            Featured Projects
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Here are some of my recent projects that showcase my skills in full-stack development, 
                            mobile app development, and creating innovative solutions for real-world problems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                    
                    <div className="text-center mt-16">
                        <a href="https://github.com/walker31" target="_blank" rel="noopener noreferrer"
                           className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 
                           text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 
                           hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                            <span>View More on GitHub</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
