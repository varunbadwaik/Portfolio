"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FiExternalLink, FiGithub, FiX, FiStar } from "react-icons/fi";

const projectCategories = ["All", "AI", "Data", "IoT"];

const projects = [
    {
        title: "The Analyst — AI Data Intelligence",
        description:
            "AI-powered data intelligence platform that cleans, analyzes, visualizes, and exports datasets using free LLM models via OpenRouter.",
        longDescription:
            "Built a full-stack AI-powered data analysis platform using React and Vite. Upload CSV, JSON, Excel, or TXT files and let AI automatically clean, analyze, and visualize your data. Features include interactive Chart.js dashboards (bar, line, pie, doughnut, radar, polar area charts), KPI cards, AI-powered chat for asking questions about your data, Excel export, and a premium dark glassmorphism UI with light/dark mode toggle.",
        techStack: ["React", "Vite", "Chart.js", "OpenRouter AI", "SheetJS", "CSS"],
        category: "AI",
        featured: true,
        liveUrl: "https://the-analyst-nine.vercel.app/",
        githubUrl: "https://github.com/varunbadwaik/The-Analyst-",
    },
    {
        title: "AgentIQ — AI Knowledge Assistant",
        description:
            "RAG-powered assistant for multi-format enterprise documents with semantic search, ChromaDB vector database, and interactive Streamlit dashboard.",
        longDescription:
            "Developed a RAG-powered assistant to query multi-format enterprise documents with semantic search. Integrated ChromaDB vector database with OpenAI embeddings improving retrieval relevance. Built scalable FastAPI backend for document ingestion and conversational querying. Designed interactive Streamlit dashboard enabling real-time chat and document upload.",
        techStack: ["Python", "FastAPI", "LangChain", "ChromaDB", "Streamlit", "OpenAI"],
        category: "AI",
        featured: true,
        liveUrl: "https://agent-iq-ai-knowledge-assistant-mai.vercel.app/",
        githubUrl: "https://github.com/varunbadwaik/AgentIQ-AI-Knowledge-Assistant",
    },
    {
        title: "Active-Scholar AI Research Agent",
        description:
            "Multi-agent research system to automate academic paper analysis and summarization with real-time visualization of agent reasoning.",
        longDescription:
            "Designed multi-agent research system to automate academic paper analysis and summarization. Implemented agent pipelines to search, analyze, and synthesize scholarly content using LLMs. Built custom RAG workflow improving document retrieval efficiency. Enabled real-time visualization of agent reasoning for better interpretability.",
        techStack: ["Python", "LangGraph", "LangChain", "FastAPI"],
        category: "AI",
        featured: true,
        liveUrl: "https://active-scholar-ai-research-agent.vercel.app/",
        githubUrl: "https://github.com/varunbadwaik/Active-Scholar-AI-Research-Agent",
    },
    {
        title: "HR Attrition Analysis & Reporting",
        description:
            "Engineered a data wrangling pipeline for IBM HR dataset (1,470 records) implementing ETL concepts with 10+ visualizations focused on Design Thinking.",
        longDescription:
            "Processed and analyzed IBM HR dataset (1,470 records) using Python and statistical methods. Identified key attrition drivers through EDA and feature correlation analysis. Identified critical business drivers behind a 16% attrition rate using descriptive statistics. Built 10+ visualizations focused on Design Thinking to support data-driven HR decision-making.",
        techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "ETL"],
        category: "Data",
        featured: false,
        liveUrl: "",
        githubUrl: "https://github.com/varunbadwaik/HR_Attrition",
    },
    {
        title: "Prime Video Dashboard",
        description:
            "Interactive Power BI dashboards to visualize content distribution trends for Prime Video, with data cleansing pipeline in Python.",
        longDescription:
            "Performed large-scale data cleaning and exploratory analysis using Pandas and NumPy. Developed interactive Power BI dashboards to visualize content growth and genre distribution, adhering to UI/UX best practices. Extracted actionable insights regarding country-wise content distribution to support strategic decision-making.",
        techStack: ["Python", "Pandas", "NumPy", "Power BI"],
        category: "Data",
        featured: false,
        liveUrl: "",
        githubUrl: "https://github.com/varunbadwaik/Prime-Video",
    },
    {
        title: "IoT Solar Monitoring System",
        description:
            "Real-time solar monitoring system with ESP32, sensor interfacing, and a web-based dashboard for voltage and current metrics.",
        longDescription:
            "Built a real-time monitoring system applying Agile development practices to iterate on features from sensor interfacing to data visualization. Developed a web-based UI using HTML/CSS to present real-time voltage and current metrics in a user-friendly scorecard format. Integrated ESP32 microcontroller with embedded C for sensor data acquisition.",
        techStack: ["ESP32", "Embedded C", "Python", "HTML/CSS"],
        category: "IoT",
        featured: false,
        liveUrl: "",
        githubUrl: "https://github.com/varunbadwaik",
    },
];

function ProjectModal({
    project,
    onClose,
}: {
    project: (typeof projects)[0];
    onClose: () => void;
}) {
    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="modal-content"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                style={{ padding: 32 }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 20,
                    }}
                >
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                            <h3
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "1.5rem",
                                }}
                            >
                                {project.title}
                            </h3>
                            {project.featured && (
                                <span
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 4,
                                        padding: "4px 10px",
                                        background: "linear-gradient(135deg, #f59e0b, #f97316)",
                                        color: "#fff",
                                        borderRadius: "var(--radius-full)",
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                    }}
                                >
                                    <FiStar size={12} /> Featured
                                </span>
                            )}
                        </div>
                        <span className="badge">{project.category}</span>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: "var(--bg-tertiary)",
                            border: "1px solid var(--border-primary)",
                            borderRadius: "50%",
                            width: 36,
                            height: 36,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "var(--text-secondary)",
                        }}
                    >
                        <FiX size={18} />
                    </button>
                </div>

                <p
                    style={{
                        color: "var(--text-secondary)",
                        lineHeight: 1.8,
                        marginBottom: 24,
                    }}
                >
                    {project.longDescription}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                    {project.techStack.map((tech) => (
                        <span key={tech} className="badge">
                            {tech}
                        </span>
                    ))}
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            <FiExternalLink size={16} /> Live Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            <FiGithub size={16} /> Source Code
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

    const filtered =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="projects" className="section section-alt">
            <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        A selection of projects that showcase my skills and passion for building
                    </p>
                </motion.div>

                {/* Filter */}
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
                    {projectCategories.map((cat) => (
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

                {/* Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                        gap: 24,
                    }}
                >
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.1 * i }}
                            className="glass-card"
                            style={{ cursor: "pointer", position: "relative" }}
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Thumbnail placeholder */}
                            <div
                                style={{
                                    height: 200,
                                    background: "var(--gradient-card)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "3rem",
                                    position: "relative",
                                }}
                            >
                                {project.featured && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 12,
                                            right: 12,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4,
                                            padding: "4px 10px",
                                            background: "linear-gradient(135deg, #f59e0b, #f97316)",
                                            color: "#fff",
                                            borderRadius: "var(--radius-full)",
                                            fontSize: "0.75rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        <FiStar size={12} /> Featured
                                    </div>
                                )}
                                <span style={{ opacity: 0.5 }}>
                                    {project.category === "AI" ? "🤖" : project.category === "Data" ? "📊" : "⚡"}
                                </span>
                            </div>

                            <div style={{ padding: 24 }}>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "1.15rem",
                                        marginBottom: 8,
                                    }}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    style={{
                                        color: "var(--text-secondary)",
                                        fontSize: "0.9rem",
                                        lineHeight: 1.6,
                                        marginBottom: 16,
                                    }}
                                >
                                    {project.description}
                                </p>

                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 6,
                                        marginBottom: 16,
                                    }}
                                >
                                    {project.techStack.slice(0, 3).map((tech) => (
                                        <span key={tech} className="badge" style={{ fontSize: "0.75rem" }}>
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="badge" style={{ fontSize: "0.75rem" }}>
                                            +{project.techStack.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div style={{ display: "flex", gap: 12 }}>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 6,
                                                color: "var(--brand-primary)",
                                                fontWeight: 500,
                                                fontSize: "0.85rem",
                                                textDecoration: "none",
                                            }}
                                        >
                                            <FiExternalLink size={14} /> Demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 6,
                                                color: "var(--text-secondary)",
                                                fontWeight: 500,
                                                fontSize: "0.85rem",
                                                textDecoration: "none",
                                            }}
                                        >
                                            <FiGithub size={14} /> Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
