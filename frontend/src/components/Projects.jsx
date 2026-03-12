import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        // Fetch projects from backend
        // Use a fallback in case backend is not running to ensure demo works
        const fetchProjects = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/projects');
                const data = await res.json();
                setProjects(data);
                setLoading(false);
            } catch (error) {
                console.log("Using fallback data since API failed:", error);
                setProjects([
                    {
                        id: 1,
                        title: "E-Commerce Platform",
                        description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
                        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
                        tech: ["React", "Node.js", "MongoDB", "Stripe"],
                        github: "#",
                        demo: "https://ankit123-del.github.io/HER-S-WISH/"
                    },
                    {
                        id: 2,
                        title: "AI Chat Application",
                        description: "Real-time chat application with LLM integration for intelligent responses.",
                        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
                        tech: ["Vite", "Express", "Socket.io", "OpenAI"],
                        github: "#",
                        demo: "#"
                    },
                    {
                        id: 3,
                        title: "Portfolio Website",
                        description: "A modern, highly interactive portfolio website with dynamic animations.",
                        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
                        tech: ["React", "Framer Motion", "Vanilla CSS"],
                        github: "#",
                        demo: "#"
                    }
                ]);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.tech.includes(filter));

    // Get unique tech tags for filter
    const allTech = ['All', ...new Set(projects.flatMap(p => p.tech))];

    if (loading) return <div className="section container" style={{ textAlign: 'center' }}>Loading...</div>;

    return (
        <section id="projects" className="section" style={{ position: 'relative' }}>
            <div className="bg-glow" style={{ bottom: '10%', right: '10%', background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)' }}></div>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Selected <span className="gradient-text">Works</span></h2>
                </motion.div>

                {/* Filter constraints */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    {allTech.map(t => (
                        <button
                            key={t}
                            onClick={() => setFilter(t)}
                            style={{
                                padding: '0.5rem 1.5rem',
                                borderRadius: '30px',
                                border: '1px solid var(--glass-border)',
                                background: filter === t ? 'var(--accent)' : 'var(--glass-bg)',
                                color: 'white',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}
                >
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="glass-card"
                                style={{ display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        className="hvr-img"
                                    />
                                    <style>{`.glass-card:hover .hvr-img { transform: scale(1.1); }`}</style>
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', color: 'white' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, flex: 1 }}>
                                        {project.description}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                        {project.tech.map(t => (
                                            <span key={t} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', color: 'var(--accent)' }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'white'}>
                                            <Github size={18} /> Code
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'white'}>
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
