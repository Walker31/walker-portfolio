import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        { name: "Flutter", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Jetpack Compose", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 }
    ];
    
    const backendSkills = [
        { name: "Node.js", level: 88 },
        { name: "Django", level: 82 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 }
    ];

    const programmingLanguages = [
        { name: "C++", level: 85 },
        { name: "Python", level: 88 },
        { name: "Java", level: 80 },
        { name: "Kotlin", level: 85 },
        { name: "C", level: 82 },
        { name: "JavaScript", level: 85 }
    ];

    const experiences = [
        {
            title: "Product Engineering Intern",
            company: "KANINI Software Solutions",
            period: "May 2025 - Present",
            description: "Currently part of the backend development team for a web-based Healthcare Appointment Management System, focusing on building secure and scalable RESTful APIs with Node.js and Express.js. Responsibilities include implementing JWT-based role-based access control, designing real-time appointment scheduling features, and integrating email/SMS notifications."
        },
        {
            title: "Deputy Manager, Public Relations and Hospitality",
            company: "Currents - NIT Trichy",
            period: "Dec 2023 - Apr 2025",
            description: "Led a 12-member team to manage logistics and hospitality for 800+ participants and 20+ guest speakers at national-level technical symposium. Coordinated with multiple sub-teams to ensure smooth operations and improved participant satisfaction by 15%."
        },
        {
            title: "Coordinator, Public Relations and Logistics",
            company: "Pragyan - NIT Trichy",
            period: "Oct 2023 - Jun 2024",
            description: "Coordinated hospitality and logistics of 1500+ participants from various colleges for Pragyan'24, an international techno-management festival, ensuring seamless event experience."
        }
    ];

    const achievements = [
        "Secured Rank 1 in International English Olympiad at School level (2015)",
        "Secured Rank 3 in National Mathematics Olympiad at School level (2014)",
        "Web Development Bootcamp Certification (Udemy)",
        "Ethical Hacking Certification (NPTEL)"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 
                        bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Personal Info */}
                        <div className="space-y-8">
                            <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-6 text-white">Who I Am</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    I'm a passionate B.Tech student in Electrical and Electronics Engineering at NIT Trichy, 
                                    with a strong foundation in both web and mobile development. My journey in technology 
                                    started with curiosity and has evolved into a deep love for creating innovative solutions 
                                    that solve real-world problems.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    I believe in writing clean, maintainable code and staying up-to-date with the latest 
                                    technologies. Currently working as a Product Engineering Intern at KANINI Software Solutions, 
                                    I focus on building scalable applications and creating exceptional user experiences.
                                </p>
                            </div>

                            {/* Education */}
                            <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                                    <span className="mr-3">🎓</span> Education
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-400">B.Tech in Electrical & Electronics Engineering</h4>
                                        <p className="text-gray-400">National Institute of Technology, Trichy</p>
                                        <p className="text-sm text-gray-500">2022 - Present | CGPA: 6.95</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-400">Class XII</h4>
                                        <p className="text-gray-400">Sri Vidhya International Residential School, Chennai</p>
                                        <p className="text-sm text-gray-500">2022 | CBSE | 92.6%</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-400">Class X</h4>
                                        <p className="text-gray-400">New Doon Blossoms School, Dehradun</p>
                                        <p className="text-sm text-gray-500">2020 | ICSE | 93.5%</p>
                                    </div>
                                </div>
                            </div>

                            {/* Achievements */}
                            <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                                    <span className="mr-3">🏆</span> Academic Achievements
                                </h3>
                                <div className="space-y-3">
                                    {achievements.map((achievement, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <span className="text-blue-400 mt-1">•</span>
                                            <p className="text-gray-300 text-sm">{achievement}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Skills & Experience */}
                        <div className="space-y-8">
                            {/* Technical Skills */}
                            <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-400 mb-4">Frontend Development</h4>
                                        <div className="space-y-3">
                                            {frontendSkills.map((skill, index) => (
                                                <div key={index} className="space-y-2">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-300">{skill.name}</span>
                                                        <span className="text-blue-400">{skill.level}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                                        <div 
                                                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                                                            style={{ width: `${skill.level}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-400 mb-4">Backend Development</h4>
                                        <div className="space-y-3">
                                            {backendSkills.map((skill, index) => (
                                                <div key={index} className="space-y-2">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-300">{skill.name}</span>
                                                        <span className="text-blue-400">{skill.level}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                                        <div 
                                                            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                                                            style={{ width: `${skill.level}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-400 mb-4">Programming Languages</h4>
                                        <div className="space-y-3">
                                            {programmingLanguages.map((skill, index) => (
                                                <div key={index} className="space-y-2">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-300">{skill.name}</span>
                                                        <span className="text-blue-400">{skill.level}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                                        <div 
                                                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                                                            style={{ width: `${skill.level}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                                    <span className="mr-3">💼</span> Experience
                                </h3>
                                <div className="space-y-6">
                                    {experiences.map((exp, index) => (
                                        <div key={index} className="border-l-2 border-blue-500/50 pl-4">
                                            <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                                            <p className="text-blue-400 font-medium">{exp.company}</p>
                                            <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                                            <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};