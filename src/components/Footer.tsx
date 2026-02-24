"use client";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiArrowUp } from "react-icons/fi";

const socialLinks = [
    { icon: FaGithub, href: "https://github.com/varunbadwaik", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com/varunbadwaik", label: "Twitter/X" },
    { icon: FaInstagram, href: "https://www.instagram.com/varun_badwaik/", label: "Instagram" },
];

const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            style={{
                background: "var(--bg-secondary)",
                borderTop: "1px solid var(--border-primary)",
                padding: "48px 24px 24px",
            }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: 40,
                    marginBottom: 40,
                }}
            >
                {/* Brand */}
                <div>
                    <h3
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 800,
                            fontSize: "1.4rem",
                            background: "var(--gradient-hero)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            marginBottom: 12,
                        }}
                    >
                        Varun Badwaik
                    </h3>
                    <p
                        style={{
                            color: "var(--text-secondary)",
                            fontSize: "0.9rem",
                            lineHeight: 1.6,
                        }}
                    >
                        Building AI-powered solutions and turning data into actionable insights.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4
                        style={{
                            fontWeight: 700,
                            marginBottom: 16,
                            fontSize: "0.95rem",
                            color: "var(--text-primary)",
                        }}
                    >
                        Quick Links
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {quickLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                style={{
                                    color: "var(--text-secondary)",
                                    textDecoration: "none",
                                    fontSize: "0.9rem",
                                    transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "var(--brand-primary)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "var(--text-secondary)")
                                }
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Social */}
                <div>
                    <h4
                        style={{
                            fontWeight: 700,
                            marginBottom: 16,
                            fontSize: "0.95rem",
                            color: "var(--text-primary)",
                        }}
                    >
                        Connect
                    </h4>
                    <div style={{ display: "flex", gap: 12 }}>
                        {socialLinks.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 40,
                                    height: 40,
                                    borderRadius: "var(--radius-md)",
                                    background: "var(--bg-tertiary)",
                                    border: "1px solid var(--border-primary)",
                                    color: "var(--text-secondary)",
                                    transition: "all 0.2s ease",
                                    textDecoration: "none",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#fff";
                                    e.currentTarget.style.background = "var(--brand-primary)";
                                    e.currentTarget.style.borderColor = "var(--brand-primary)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "var(--text-secondary)";
                                    e.currentTarget.style.background = "var(--bg-tertiary)";
                                    e.currentTarget.style.borderColor = "var(--border-primary)";
                                }}
                            >
                                <s.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid var(--border-primary)",
                    paddingTop: 20,
                }}
            >
                <p
                    style={{
                        color: "var(--text-tertiary)",
                        fontSize: "0.85rem",
                    }}
                >
                    © {new Date().getFullYear()} Varun Badwaik. All rights reserved.
                </p>

                <button
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "var(--gradient-hero)",
                        border: "none",
                        color: "#fff",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                    }}
                >
                    <FiArrowUp size={18} />
                </button>
            </div>
        </footer>
    );
}
