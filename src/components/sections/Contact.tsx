"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { FiSend, FiMail, FiMapPin, FiPhone, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const socialLinks = [
    { icon: FaGithub, href: "https://github.com/varunbadwaik", label: "GitHub", color: "#333" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn", color: "#0077b5" },
    { icon: FaXTwitter, href: "https://x.com/varunbadwaik", label: "Twitter/X", color: "#1da1f2" },
    { icon: FaInstagram, href: "https://www.instagram.com/varun_badwaik/", label: "Instagram", color: "#e4405f" },
];

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus("sending");

        // EmailJS integration placeholder
        // To enable real email sending, replace with:
        // import emailjs from '@emailjs/browser';
        // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');

        // Simulating send for demo
        setTimeout(() => {
            setStatus("sent");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="section">
            <div ref={ref} style={{ maxWidth: 1000, margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Have a question or want to work together? Drop me a message!
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.5fr",
                        gap: 40,
                        alignItems: "start",
                    }}
                    className="contact-grid"
                >
                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass-card" style={{ padding: 32, marginBottom: 24 }}>
                            <h3
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "1.3rem",
                                    marginBottom: 24,
                                }}
                            >
                                Contact Info
                            </h3>

                            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                                    <div
                                        style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: "var(--radius-md)",
                                            background: "var(--gradient-card)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--brand-primary)",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <FiMail size={20} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginBottom: 2 }}>
                                            Email
                                        </p>
                                        <a
                                            href="mailto:varunbadwaik72@gmail.com"
                                            style={{
                                                color: "var(--text-primary)",
                                                textDecoration: "none",
                                                fontWeight: 500,
                                                fontSize: "0.95rem",
                                            }}
                                        >
                                            varunbadwaik72@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                                    <div
                                        style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: "var(--radius-md)",
                                            background: "var(--gradient-card)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--brand-primary)",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <FiMapPin size={20} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginBottom: 2 }}>
                                            Location
                                        </p>
                                        <p style={{ fontWeight: 500, fontSize: "0.95rem" }}>Nagpur, India</p>
                                    </div>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                                    <div
                                        style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: "var(--radius-md)",
                                            background: "var(--gradient-card)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--brand-primary)",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <FiPhone size={20} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginBottom: 2 }}>
                                            Phone
                                        </p>
                                        <p style={{ fontWeight: 500, fontSize: "0.95rem" }}>+91 75883 53703</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="glass-card" style={{ padding: 24 }}>
                            <h4
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "1rem",
                                    marginBottom: 16,
                                }}
                            >
                                Follow Me
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
                                            width: 44,
                                            height: 44,
                                            borderRadius: "var(--radius-md)",
                                            background: "var(--bg-tertiary)",
                                            border: "1px solid var(--border-primary)",
                                            color: "var(--text-secondary)",
                                            transition: "all 0.25s ease",
                                            textDecoration: "none",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = "#fff";
                                            e.currentTarget.style.background = s.color;
                                            e.currentTarget.style.borderColor = s.color;
                                            e.currentTarget.style.transform = "translateY(-3px)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = "var(--text-secondary)";
                                            e.currentTarget.style.background = "var(--bg-tertiary)";
                                            e.currentTarget.style.borderColor = "var(--border-primary)";
                                            e.currentTarget.style.transform = "translateY(0)";
                                        }}
                                    >
                                        <s.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="glass-card"
                            style={{ padding: 32 }}
                        >
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 20,
                                }}
                                className="form-row"
                            >
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label className="form-label" htmlFor="contact-name">
                                        Name *
                                    </label>
                                    <input
                                        id="contact-name"
                                        className="form-input"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={(e) => handleChange("name", e.target.value)}
                                        style={errors.name ? { borderColor: "#ef4444" } : {}}
                                    />
                                    {errors.name && <p className="form-error">{errors.name}</p>}
                                </div>

                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label className="form-label" htmlFor="contact-email">
                                        Email *
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        className="form-input"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => handleChange("email", e.target.value)}
                                        style={errors.email ? { borderColor: "#ef4444" } : {}}
                                    />
                                    {errors.email && <p className="form-error">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="form-group" style={{ marginTop: 20 }}>
                                <label className="form-label" htmlFor="contact-subject">
                                    Subject *
                                </label>
                                <input
                                    id="contact-subject"
                                    className="form-input"
                                    placeholder="What's this about?"
                                    value={formData.subject}
                                    onChange={(e) => handleChange("subject", e.target.value)}
                                    style={errors.subject ? { borderColor: "#ef4444" } : {}}
                                />
                                {errors.subject && <p className="form-error">{errors.subject}</p>}
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="contact-message">
                                    Message *
                                </label>
                                <textarea
                                    id="contact-message"
                                    className="form-input"
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => handleChange("message", e.target.value)}
                                    style={{
                                        resize: "vertical",
                                        minHeight: 120,
                                        ...(errors.message ? { borderColor: "#ef4444" } : {}),
                                    }}
                                />
                                {errors.message && <p className="form-error">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="btn-primary"
                                disabled={status === "sending"}
                                style={{
                                    width: "100%",
                                    justifyContent: "center",
                                    opacity: status === "sending" ? 0.7 : 1,
                                }}
                            >
                                {status === "sending" ? (
                                    "Sending..."
                                ) : status === "sent" ? (
                                    <>
                                        <FiCheckCircle size={18} /> Message Sent!
                                    </>
                                ) : status === "error" ? (
                                    <>
                                        <FiAlertCircle size={18} /> Failed, Try Again
                                    </>
                                ) : (
                                    <>
                                        <FiSend size={18} /> Send Message
                                    </>
                                )}
                            </button>

                            {status === "sent" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        textAlign: "center",
                                        color: "#22c55e",
                                        marginTop: 16,
                                        fontSize: "0.9rem",
                                        fontWeight: 500,
                                    }}
                                >
                                    Thank you! I&apos;ll get back to you within 24 hours.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
