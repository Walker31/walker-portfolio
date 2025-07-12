import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
            
            <RevealOnScroll>
                <div className="text-center z-10 px-4 relative">
                    <div className="mb-6">
                        <span className="text-blue-400 text-lg font-medium tracking-wider">Welcome to my portfolio</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                        Hi, I'm Aditya Janga
                    </h1>
                    
                    <div className="mb-8">
                        <span className="text-2xl md:text-3xl font-light text-gray-300">
                            B.Tech Student & Product Engineering Intern
                        </span>
                    </div>
                    
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                        I'm a passionate B.Tech student in Electrical and Electronics Engineering at NIT Trichy, 
                        currently working as a Product Engineering Intern at KANINI Software Solutions. 
                        I specialize in full-stack development, mobile app development, and creating innovative 
                        solutions that solve real-world problems.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <a  
                            href="#projects"
                            className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                        >
                            <span className="relative z-10">View Projects</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a
                            href="#contact"
                            className="group border-2 border-blue-500/50 text-blue-400 py-4 px-8 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 hover:text-blue-300"
                        >
                            Get In Touch
                        </a>
                    </div>
                    
                    {/* Social links */}
                    <div className="flex justify-center space-x-6 mt-12">
                        <a href="https://github.com/walker31" target="_blank" rel="noopener noreferrer" 
                           className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/aditya-janga" target="_blank" rel="noopener noreferrer"
                           className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="mailto:aditya.janga@example.com" 
                           className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636zM12 13.5L1.636 4.909h20.728L12 13.5z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
