"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiDatabase, FiBarChart2 } from "react-icons/fi";
import {
    SiPython,
    SiTensorflow,
    SiScikitlearn,
    SiPandas,
    SiNumpy,
    SiMysql,
    SiMongodb,
    SiDocker,
    SiGit,
    SiGithub,
    SiStreamlit,

    SiFastapi,
    SiLangchain,
    SiHuggingface,
    SiTableau,
    SiSupabase,
    SiVercel,
    SiRender,
    SiHtml5,
    SiCss3,
    SiCplusplus,
    SiN8N,

} from "react-icons/si";

const categories = ["All", "AI & GenAI", "Programming & ML", "Backend & Tools", "Data & Viz"];

const skills = [
    // AI & Generative AI
    { name: "LangChain", icon: SiLangchain, category: "AI & GenAI", level: 88 },
    { name: "Hugging Face", icon: SiHuggingface, category: "AI & GenAI", level: 80 },
    { name: "RAG Systems", icon: FiDatabase, category: "AI & GenAI", level: 85 },
    { name: "FastAPI", icon: SiFastapi, category: "AI & GenAI", level: 82 },
    // Programming & ML
    { name: "Python", icon: SiPython, category: "Programming & ML", level: 92 },
    { name: "TensorFlow", icon: SiTensorflow, category: "Programming & ML", level: 75 },
    { name: "Scikit-learn", icon: SiScikitlearn, category: "Programming & ML", level: 78 },
    { name: "Pandas", icon: SiPandas, category: "Programming & ML", level: 88 },
    { name: "NumPy", icon: SiNumpy, category: "Programming & ML", level: 85 },
    { name: "C/C++", icon: SiCplusplus, category: "Programming & ML", level: 65 },
    // Backend & Tools
    { name: "Git", icon: SiGit, category: "Backend & Tools", level: 85 },
    { name: "GitHub", icon: SiGithub, category: "Backend & Tools", level: 88 },
    { name: "Docker", icon: SiDocker, category: "Backend & Tools", level: 60 },
    { name: "Vercel", icon: SiVercel, category: "Backend & Tools", level: 78 },
    { name: "Render", icon: SiRender, category: "Backend & Tools", level: 72 },
    { name: "n8n", icon: SiN8N, category: "Backend & Tools", level: 70 },
    // Data & Viz
    { name: "MySQL", icon: SiMysql, category: "Data & Viz", level: 80 },
    { name: "ChromaDB", icon: FiDatabase, category: "Data & Viz", level: 78 },
    { name: "Supabase", icon: SiSupabase, category: "Data & Viz", level: 72 },
    { name: "Power BI", icon: FiBarChart2, category: "Data & Viz", level: 85 },
    { name: "Streamlit", icon: SiStreamlit, category: "Data & Viz", level: 82 },
    { name: "Tableau", icon: SiTableau, category: "Data & Viz", level: 65 },
    { name: "Matplotlib", icon: SiPython, category: "Data & Viz", level: 80 },
    { name: "HTML/CSS", icon: SiHtml5, category: "Data & Viz", level: 78 },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered =
        activeCategory === "All"
            ? skills
            : skills.filter((s) => s.category === activeCategory);

    return (
        <section id="skills" className="section">
            <div ref={ref} style={{ maxWidth: 1000, margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">
                        Technologies I work with to build AI-powered and data-driven solutions
                    </p>
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 8,
                        marginBottom: 48,
                        flexWrap: "wrap",
                    }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: "8px 20px",
                                borderRadius: "var(--radius-full)",
                                border: "1px solid var(--border-primary)",
                                background:
                                    activeCategory === cat ? "var(--brand-primary)" : "var(--bg-card)",
                                color: activeCategory === cat ? "#fff" : "var(--text-secondary)",
                                fontWeight: 500,
                                fontSize: "0.9rem",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Skill grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: 20,
                    }}
                >
                    {filtered.map((skill, i) => (
                        <motion.div
                            key={`${skill.name}-${skill.category}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.1 * i }}
                            className="glass-card"
                            style={{ padding: 24 }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginBottom: 12,
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                    <div
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: "var(--radius-md)",
                                            background: "var(--gradient-card)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--brand-primary)",
                                        }}
                                    >
                                        <skill.icon size={20} />
                                    </div>
                                    <span
                                        style={{
                                            fontWeight: 600,
                                            fontSize: "0.95rem",
                                        }}
                                    >
                                        {skill.name}
                                    </span>
                                </div>
                                <span
                                    style={{
                                        color: "var(--brand-primary)",
                                        fontWeight: 700,
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    {skill.level}%
                                </span>
                            </div>
                            <div className="skill-bar-track">
                                <motion.div
                                    className="skill-bar-fill"
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                    transition={{ duration: 1.2, delay: 0.2 + 0.05 * i, ease: "easeOut" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
