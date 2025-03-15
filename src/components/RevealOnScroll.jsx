import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && ref.current) {
                    ref.current.classList.add("visible");
                }
            },
            { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="reveal opacity-0 transition-opacity duration-700 ease-in-out">
            {children}
        </div>
    );
};
