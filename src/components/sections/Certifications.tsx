"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiAward } from "react-icons/fi";
import { SiOracle, SiCisco } from "react-icons/si";

const certCategories = [
    { name: "Cloud", color: "#06b6d4" },
    { name: "AI", color: "#8b5cf6" },
];

const certifications = [
    {
        name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle University",
        date: "Feb 2026",
        category: "Cloud",
        icon: SiOracle,
        verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=103409494OCI25AICFA",
        credentialId: "103409494OCI25AICFA",
    },
    {
        name: "Introduction to Modern AI",
        issuer: "Cisco Networking Academy",
        date: "Feb 2026",
        category: "AI",
        icon: SiCisco,
        verifyUrl: "https://www.netacad.com/",
        credentialId: "CISCO-AI-2026",
    },
];

export default function Certifications() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="certifications" className="section">
            <div ref={ref} style={{ maxWidth: 1000, margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Certifications</h2>
                    <p className="section-subtitle">
                        Professional credentials that validate my expertise
                    </p>
                </motion.div>

                {/* Category legend */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 20,
                        marginBottom: 40,
                        flexWrap: "wrap",
                    }}
                >
                    {certCategories.map((cat) => (
                        <div
                            key={cat.name}
                            style={{ display: "flex", alignItems: "center", gap: 8 }}
                        >
                            <div
                                style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: cat.color,
                                }}
                            />
                            <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                                {cat.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: 20,
                    }}
                >
                    {certifications.map((cert, i) => {
                        const catColor =
                            certCategories.find((c) => c.name === cert.category)?.color ||
                            "var(--brand-primary)";
                        return (
                            <motion.div
                                key={cert.credentialId}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.1 * i }}
                                className="glass-card"
                                style={{ padding: 24 }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 16,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: "var(--radius-md)",
                                            background: `${catColor}15`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: catColor,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <cert.icon size={24} />
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <h4
                                            style={{
                                                fontFamily: "var(--font-heading)",
                                                fontSize: "0.95rem",
                                                marginBottom: 4,
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {cert.name}
                                        </h4>
                                        <p
                                            style={{
                                                color: "var(--text-secondary)",
                                                fontSize: "0.85rem",
                                                marginBottom: 4,
                                            }}
                                        >
                                            {cert.issuer}
                                        </p>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 12,
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <span className="badge" style={{ borderColor: catColor }}>
                                                <FiAward size={12} /> {cert.date}
                                            </span>
                                            <a
                                                href={cert.verifyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 4,
                                                    color: "var(--brand-primary)",
                                                    fontSize: "0.8rem",
                                                    fontWeight: 500,
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <FiExternalLink size={12} /> Verify
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
