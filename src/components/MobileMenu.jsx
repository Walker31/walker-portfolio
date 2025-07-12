import { useEffect } from "react"

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    const menuItems = [
        { href: "#home", label: "Home", icon: "🏠" },
        { href: "#about", label: "About", icon: "👨‍💻" },
        { href: "#projects", label: "Projects", icon: "💼" },
        { href: "#contact", label: "Contact", icon: "📧" }
    ];

    return (
        <div className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md z-40 
            flex flex-col items-center justify-center transition-all duration-500 ease-in-out
            ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            
            {/* Close Button */}
            <button 
                onClick={() => setMenuOpen(false)} 
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer
                    hover:text-blue-400 transition-colors duration-300 z-50"
                aria-label="Close Menu" 
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Menu Items */}
            <div className="text-center space-y-8">
                {menuItems.map((item, index) => (
                    <a 
                        key={index}
                        href={item.href}
                        onClick={() => setMenuOpen(false)} 
                        className={`block text-3xl font-semibold text-white transform transition-all duration-500
                            hover:text-blue-400 hover:scale-110 ${
                                menuOpen 
                                    ? "opacity-100 translate-y-0" 
                                    : "opacity-0 translate-y-8"
                            }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-center justify-center space-x-3">
                            <span className="text-2xl">{item.icon}</span>
                            <span>{item.label}</span>
                        </div>
                    </a>
                ))}
            </div>

            {/* Social Links */}
            <div className="absolute bottom-12 flex space-x-6">
                <a href="https://github.com/walker31" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
                <a href="https://linkedin.com/in/aditya-janga" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>
                <a href="mailto:aditya.janga@example.com"
                   className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636zM12 13.5L1.636 4.909h20.728L12 13.5z"/>
                    </svg>
                </a>
            </div>
        </div>
    );
};