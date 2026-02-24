"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowDown, FiMail } from "react-icons/fi";

const roles = [
    "AI Engineer",
    "Data Analytics Enthusiast",
    "Full-Stack Developer",
    "Gen AI Explorer",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && text === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(
                () => {
                    setText(
                        isDeleting
                            ? currentRole.substring(0, text.length - 1)
                            : currentRole.substring(0, text.length + 1)
                    );
                },
                isDeleting ? 40 : 80
            );
        }
        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section
            id="home"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                padding: "120px 24px 80px",
            }}
        >
            {/* Background gradient orbs */}
            <div
                style={{
                    position: "absolute",
                    top: "-20%",
                    right: "-10%",
                    width: 600,
                    height: 600,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)",
                    filter: "blur(80px)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "-20%",
                    left: "-10%",
                    width: 500,
                    height: 500,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)",
                    filter: "blur(80px)",
                    pointerEvents: "none",
                }}
            />

            {/* Floating grid pattern */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "radial-gradient(var(--border-primary) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    opacity: 0.3,
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    maxWidth: 900,
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="badge" style={{ fontSize: "0.85rem", padding: "6px 16px" }}>
                        ✨ Available for opportunities
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    style={{
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        fontWeight: 900,
                        marginTop: 24,
                        marginBottom: 8,
                        lineHeight: 1.1,
                    }}
                >
                    Hi, I&apos;m{" "}
                    <span
                        style={{
                            background: "var(--gradient-hero)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Varun Badwaik
                    </span>
                </motion.h1>

                {/* Typewriter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                        color: "var(--text-secondary)",
                        marginBottom: 24,
                        minHeight: "2rem",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 500,
                    }}
                >
                    {text}
                    <span
                        style={{
                            borderRight: "3px solid var(--brand-primary)",
                            marginLeft: 2,
                            animation: "blink 1s step-end infinite",
                        }}
                    />
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    style={{
                        fontSize: "1.1rem",
                        color: "var(--text-secondary)",
                        maxWidth: 600,
                        margin: "0 auto 40px",
                        lineHeight: 1.7,
                    }}
                >
                    Aspiring AI Engineer with hands-on experience in Generative AI, LLMs, and RAG systems.
                    Focused on building scalable, real-world AI solutions with Python and modern AI frameworks.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
                >
                    <a href="#projects" className="btn-primary">
                        <FiArrowDown size={18} />
                        View My Work
                    </a>
                    <a href="#contact" className="btn-secondary">
                        <FiMail size={18} />
                        Contact Me
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{
                        marginTop: 80,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                    }}
                >
                    <span style={{ fontSize: "0.8rem", color: "var(--text-tertiary)" }}>
                        Scroll Down
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <FiArrowDown size={20} style={{ color: "var(--text-tertiary)" }} />
                    </motion.div>
                </motion.div>
            </div>

            {/* Blink keyframe */}
            <style jsx global>{`
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
        </section>
    );
}
