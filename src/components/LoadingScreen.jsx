import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [showProgress, setShowProgress] = useState(false);
    const [progress, setProgress] = useState(0);
    
    const fullText = "<Hello World />";

    useEffect(() => {
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            setIndex(index + 1);

            if (index > fullText.length) {
                clearInterval(interval);
                setShowProgress(true);
                
                // Simulate loading progress
                const progressInterval = setInterval(() => {
                    setProgress(prev => {
                        if (prev >= 100) {
                            clearInterval(progressInterval);
                            setTimeout(() => {
                                onComplete();
                            }, 500);
                            return 100;
                        }
                        return prev + 2;
                    });
                }, 50);
            }
        }, 100);
        
        return () => clearInterval(interval);
    }, [index, onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black text-gray-100 flex flex-col items-center justify-center">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
            
            <div className="relative z-10 text-center">
                {/* Logo/Brand */}
                <div className="mb-8">
                    <h1 className="text-4xl font-mono font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Walker.dev
                    </h1>
                </div>
                
                {/* Typing animation */}
                <div className="mb-8">
                    <div className="text-3xl font-mono font-bold">
                        {text}
                        <span className="animate-blink ml-1">|</span>
                    </div>
                </div>
                
                {/* Progress bar */}
                {showProgress && (
                    <div className="w-80 max-w-full">
                        <div className="mb-4 flex justify-between text-sm text-gray-400">
                            <span>Loading...</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                )}
                
                {/* Loading dots */}
                {!showProgress && (
                    <div className="flex justify-center space-x-2 mt-8">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                )}
            </div>
            
            {/* Footer text */}
            <div className="absolute bottom-8 text-center">
                <p className="text-gray-500 text-sm">Welcome to my portfolio</p>
            </div>
        </div>
    );
};