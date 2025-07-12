import { useEffect, useState } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled 
                ? "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg" 
                : "bg-transparent"
        }`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a href="#home" className="font-mono text-xl font-bold text-white hover:text-blue-400 transition-colors">
                        Walker<span className="text-blue-500">.dev</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button 
                        className="w-8 h-8 relative cursor-pointer z-50 md:hidden flex flex-col justify-center items-center"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                            menuOpen ? 'rotate-45 translate-y-1' : ''
                        }`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                            menuOpen ? 'opacity-0' : ''
                        }`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                            menuOpen ? '-rotate-45 -translate-y-1' : ''
                        }`}></span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <a 
                                key={index}
                                href={item.href} 
                                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        
                        {/* Resume Button */}
                        <a 
                            href="/resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg 
                                font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};