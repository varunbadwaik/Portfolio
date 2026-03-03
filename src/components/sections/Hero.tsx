"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiArrowDown, FiMail } from "react-icons/fi";

const roles = [
    "AI & ML Enthusiast",
    "Full-Stack Developer",
    "Data Analytics Explorer",
    "Problem Solver",
];

export default function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[currentRole];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && displayText === role) {
            timeout = setTimeout(() => setIsDeleting(true), 2200);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
        } else {
            const speed = isDeleting ? 40 : 70;
            timeout = setTimeout(() => {
                setDisplayText(
                    isDeleting ? role.substring(0, displayText.length - 1) : role.substring(0, displayText.length + 1)
                );
            }, speed);
        }
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    const scrollTo = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "120px 24px 80px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Subtle nature background elements */}
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    right: "8%",
                    fontSize: "8rem",
                    opacity: 0.04,
                    transform: "rotate(15deg)",
                    pointerEvents: "none",
                    userSelect: "none",
                }}
            >
                🌿
            </div>
            <div
                style={{
                    position: "absolute",
                    bottom: "15%",
                    left: "5%",
                    fontSize: "6rem",
                    opacity: 0.04,
                    transform: "rotate(-20deg)",
                    pointerEvents: "none",
                    userSelect: "none",
                }}
            >
                🍃
            </div>

            <div ref={ref} style={{ maxWidth: 720, textAlign: "center" }}>
                {/* Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        fontSize: "1rem",
                        color: "var(--brand-primary)",
                        fontWeight: 500,
                        marginBottom: 16,
                        letterSpacing: "0.04em",
                    }}
                >
                    Hello, I&apos;m
                </motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(2.5rem, 6vw, 3.8rem)",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: 16,
                        lineHeight: 1.1,
                    }}
                >
                    Varun Badwaik
                </motion.h1>

                {/* Typewriter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    style={{
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 24,
                    }}
                >
                    <span
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.3rem",
                            color: "var(--text-secondary)",
                            fontWeight: 400,
                        }}
                    >
                        {displayText}
                        <span
                            style={{
                                borderRight: "2px solid var(--brand-primary)",
                                marginLeft: 2,
                                animation: "blink 1s steps(1) infinite",
                            }}
                        />
                    </span>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{
                        fontSize: "1.05rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        maxWidth: 540,
                        margin: "0 auto 36px",
                    }}
                >
                    I enjoy building thoughtful digital experiences — from intelligent AI systems
                    to clean, user-friendly interfaces. Let&apos;s create something meaningful together.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.65 }}
                    style={{
                        display: "flex",
                        gap: 14,
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <button className="btn-primary" onClick={() => scrollTo("#projects")}>
                        View My Work <FiArrowDown size={16} />
                    </button>
                    <button className="btn-secondary" onClick={() => scrollTo("#contact")}>
                        <FiMail size={16} /> Say Hello
                    </button>
                </motion.div>
            </div>

            {/* Blink keyframe */}
            <style jsx global>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </section>
    );
}
