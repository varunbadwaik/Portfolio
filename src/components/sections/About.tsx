"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiDownload, FiMapPin, FiCalendar } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi2";

const education = [
    {
        degree: "B.Tech — Electronics and Communication Engineering",
        school: "Priyadarshini College of Engineering, Nagpur",
        year: "2022 – 2026",
        description: "CGPA: 6.1 · AI/ML, Data Analytics, Generative AI focus",
    },
    {
        degree: "Higher Secondary Education",
        school: "R.S.S.G.K Agrawal High School & Jr. College, Tumsar",
        year: "2021 – 2022",
        description: "76% · Computer Science",
    },
    {
        degree: "Secondary Education",
        school: "Matoshree Vidya Mandir & Junior College, Tumsar",
        year: "2020 – 2021",
        description: "77.20% · Science",
    },
];

const interests = ["🤖 Generative AI", "📊 Data Analytics", "🧠 Machine Learning", "🔧 Automation", "🌍 Open Source"];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section section-alt">
            <div ref={ref} style={{ maxWidth: 1000, margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Get to know the person behind the code
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 48,
                        alignItems: "start",
                    }}
                    className="about-grid"
                >
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass-card" style={{ padding: 32 }}>
                            <h3
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "1.4rem",
                                    marginBottom: 16,
                                }}
                            >
                                Hello! 👋
                            </h3>
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.8,
                                    marginBottom: 16,
                                }}
                            >
                                I&apos;m a final-year B.Tech student and aspiring AI Engineer with hands-on
                                experience in Generative AI, Large Language Models, RAG systems, and data
                                analytics. Proficient in Python, SQL, and modern AI frameworks, I build
                                scalable, real-world AI solutions.
                            </p>
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.8,
                                    marginBottom: 24,
                                }}
                            >
                                When I&apos;m not building AI agents, you&apos;ll find me wrangling data into
                                dashboards, experimenting with LangChain pipelines, or exploring n8n
                                workflow automation.
                            </p>

                            <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
                                <span className="badge">
                                    <FiMapPin size={14} /> Nagpur, India
                                </span>
                                <span className="badge">
                                    <FiCalendar size={14} /> Available Now
                                </span>
                            </div>

                            <a href="/resume.pdf" download="Varun_Badwaik_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex" }}>
                                <FiDownload size={18} />
                                Download Resume
                            </a>
                        </div>

                        {/* Interests */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="glass-card"
                            style={{ padding: 24, marginTop: 24 }}
                        >
                            <h4
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "1.1rem",
                                    marginBottom: 16,
                                }}
                            >
                                Interests & Hobbies
                            </h4>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                                {interests.map((interest) => (
                                    <span key={interest} className="badge" style={{ fontSize: "0.9rem", padding: "8px 16px" }}>
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "1.3rem",
                                marginBottom: 24,
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                            }}
                        >
                            <HiOutlineAcademicCap size={24} style={{ color: "var(--brand-primary)" }} />
                            Education
                        </h3>

                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            {education.map((edu, i) => (
                                <motion.div
                                    key={edu.degree}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
                                    className="glass-card"
                                    style={{ padding: 24 }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            justifyContent: "space-between",
                                            gap: 12,
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <div>
                                            <h4
                                                style={{
                                                    fontFamily: "var(--font-heading)",
                                                    fontSize: "1.05rem",
                                                    marginBottom: 4,
                                                }}
                                            >
                                                {edu.degree}
                                            </h4>
                                            <p style={{ color: "var(--brand-primary)", fontWeight: 500, fontSize: "0.9rem" }}>
                                                {edu.school}
                                            </p>
                                        </div>
                                        <span className="badge">{edu.year}</span>
                                    </div>
                                    <p
                                        style={{
                                            color: "var(--text-secondary)",
                                            fontSize: "0.9rem",
                                            marginTop: 8,
                                        }}
                                    >
                                        {edu.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
        </section>
    );
}
