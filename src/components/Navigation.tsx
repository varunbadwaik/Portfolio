"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certs" },

    { href: "#contact", label: "Contact" },
];

export default function Navigation() {
    const { theme, toggle } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveSection(`#${sections[i]}`);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    padding: scrolled ? "12px 24px" : "20px 24px",
                    background: scrolled ? "var(--bg-nav)" : "transparent",
                    backdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
                    borderBottom: scrolled ? "1px solid var(--border-primary)" : "none",
                    transition: "all 0.3s ease",
                }}
            >
                <div
                    style={{
                        maxWidth: 1200,
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            handleClick("#home");
                        }}
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 800,
                            fontSize: "1.5rem",
                            background: "var(--gradient-hero)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textDecoration: "none",
                        }}
                    >
                        VB
                    </a>

                    {/* Desktop Links */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                        }}
                        className="nav-desktop"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleClick(link.href);
                                }}
                                style={{
                                    padding: "8px 16px",
                                    borderRadius: "var(--radius-full)",
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    color:
                                        activeSection === link.href
                                            ? "var(--brand-primary)"
                                            : "var(--text-secondary)",
                                    background:
                                        activeSection === link.href
                                            ? "var(--gradient-card)"
                                            : "transparent",
                                    textDecoration: "none",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Theme toggle */}
                        <button
                            onClick={toggle}
                            aria-label="Toggle theme"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                background: "var(--bg-tertiary)",
                                border: "1px solid var(--border-primary)",
                                color: "var(--brand-primary)",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                                marginLeft: 8,
                            }}
                        >
                            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>
                    </div>

                    {/* Mobile hamburger */}
                    <div className="nav-mobile" style={{ display: "none", alignItems: "center", gap: 8 }}>
                        <button
                            onClick={toggle}
                            aria-label="Toggle theme"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                background: "var(--bg-tertiary)",
                                border: "1px solid var(--border-primary)",
                                color: "var(--brand-primary)",
                                cursor: "pointer",
                            }}
                        >
                            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>
                        <button
                            onClick={() => setMobileOpen(true)}
                            aria-label="Open menu"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 40,
                                height: 40,
                                borderRadius: "var(--radius-md)",
                                background: "var(--bg-tertiary)",
                                border: "1px solid var(--border-primary)",
                                color: "var(--text-primary)",
                                cursor: "pointer",
                            }}
                        >
                            <HiMenuAlt3 size={22} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            className="nav-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            className="nav-drawer"
                            initial={{ x: 300 }}
                            animate={{ x: 0 }}
                            exit={{ x: 300 }}
                            transition={{ type: "spring", damping: 25, stiffness: 250 }}
                        >
                            <button
                                onClick={() => setMobileOpen(false)}
                                aria-label="Close menu"
                                style={{
                                    position: "absolute",
                                    top: 24,
                                    right: 24,
                                    background: "none",
                                    border: "none",
                                    color: "var(--text-primary)",
                                    cursor: "pointer",
                                }}
                            >
                                <HiX size={24} />
                            </button>

                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleClick(link.href);
                                        }}
                                        style={{
                                            padding: "12px 16px",
                                            borderRadius: "var(--radius-md)",
                                            fontSize: "1rem",
                                            fontWeight: 600,
                                            color:
                                                activeSection === link.href
                                                    ? "var(--brand-primary)"
                                                    : "var(--text-primary)",
                                            background:
                                                activeSection === link.href
                                                    ? "var(--gradient-card)"
                                                    : "transparent",
                                            textDecoration: "none",
                                            transition: "all 0.2s ease",
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Responsive styles */}
            <style jsx global>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile {
            display: flex !important;
          }
        }
      `}</style>
        </>
    );
}
