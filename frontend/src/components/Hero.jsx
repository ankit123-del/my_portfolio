import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
            <div className="bg-glow" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}></div>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}
                    >
                        Welcome to my universe
                    </motion.span>

                    <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>
                        Hi, I'm Ankit <br />
                        <span className="gradient-text">A Creative Developer</span>
                    </h1>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '500px' }}>
                        I craft immersive digital experiences blurring the lines between design and engineering. Let's build something extraordinary together.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn btn-primary">
                            View Work <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                        <a href="https://github.com/ankit123-del" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/ankit-sharma045/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:hello@example.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                >
                    {/* Abstract futuristic shape or image placeholder for premium feel */}
                    <div style={{
                        width: '100%',
                        maxWidth: '450px',
                        aspectRatio: '1',
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(236, 72, 153, 0.4))',
                        boxShadow: '0 0 50px rgba(99, 102, 241, 0.3)',
                        animation: 'morph 8s ease-in-out infinite',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(20px)'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=800&auto=format&fit=crop"
                            alt="Developer Profile"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'overlay', opacity: 0.8 }}
                        />
                        <style>
                            {`
                                @keyframes morph {
                                    0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
                                    50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
                                    100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
                                }
                            `}
                        </style>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
