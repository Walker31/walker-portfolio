import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            );
            
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const contactInfo = [
        {
            icon: "📧",
            title: "Email",
            value: "aditya.janga@example.com",
            link: "mailto:aditya.janga@example.com"
        },
        {
            icon: "📱",
            title: "Phone",
            value: "+91 98765 43210",
            link: "tel:+919876543210"
        },
        {
            icon: "📍",
            title: "Location",
            value: "NIT Trichy, Tamil Nadu, India",
            link: "#"
        }
    ];

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 
                            bg-clip-text text-transparent">
                            Get In Touch
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            I'm always interested in new opportunities and exciting projects. 
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    I'm currently available for freelance work and full-time opportunities. 
                                    If you have a project that needs some creative thinking, I'd love to hear about it.
                                </p>
                                
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <a 
                                            key={index}
                                            href={info.link}
                                            className="flex items-center space-x-4 p-4 rounded-lg border border-white/10 
                                                hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300 group"
                                        >
                                            <div className="text-2xl">{info.icon}</div>
                                            <div>
                                                <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                                                    {info.title}
                                                </h4>
                                                <p className="text-gray-400">{info.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                                    <div className="flex space-x-4">
                                        <a href="https://github.com/walker31" target="_blank" rel="noopener noreferrer"
                                           className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/5">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                        <a href="https://linkedin.com/in/aditya-janga" target="_blank" rel="noopener noreferrer"
                                           className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/5">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </a>
                                        <a href="https://twitter.com/aditya_janga" target="_blank" rel="noopener noreferrer"
                                           className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/5">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
                            
                            {submitStatus === "success" && (
                                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                                    <p className="text-green-400">Message sent successfully! I'll get back to you soon.</p>
                                </div>
                            )}
                            
                            {submitStatus === "error" && (
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                                    <p className="text-red-400">Oops! Something went wrong. Please try again.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <input 
                                            type="text"
                                            id="name" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required 
                                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white rounded-lg
                                                transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5
                                                placeholder-gray-500"
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <div className="relative">
                                        <input 
                                            type="email"
                                            id="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required 
                                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white rounded-lg
                                                transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5
                                                placeholder-gray-500"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <input 
                                        type="text"
                                        id="subject" 
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required 
                                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white rounded-lg
                                            transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5
                                            placeholder-gray-500"
                                        placeholder="Subject"
                                    />
                                </div>

                                <div className="relative">
                                    <textarea 
                                        id="message" 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required 
                                        rows={6}
                                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white rounded-lg
                                            transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5
                                            placeholder-gray-500 resize-none"
                                        placeholder="Your Message"
                                    />
                                </div>
                                
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg 
                                        font-medium transition-all duration-300 relative overflow-hidden 
                                        hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] disabled:opacity-50 
                                        disabled:cursor-not-allowed disabled:scale-100"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};