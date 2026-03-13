import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Palette, Zap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section" style={{ position: 'relative' }}>
            <div className="bg-glow" style={{ top: '10%', left: '5%', background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 60%)' }}></div>
            
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '3rem', textAlign: 'center' }}
                >
                    <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                        I'm a passionate Full Stack Developer with an eye for design and a drive to create elegant, scalable solutions.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card"
                        style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderRadius: '24px' }}
                    >
                        <h3 style={{ fontSize: '1.8rem', color: 'white', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <User size={28} color="var(--accent)" />
                            My Journey
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                            I started my coding journey curious about how things work on the internet. Since then, I've immersed myself in crafting fluid user experiences and robust backend architectures.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                            Whether it's deploying APIs, optimizing React performance, or breathing life into a layout with CSS animations, I love taking a project from an idea to a fully fledged application.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                        {[
                            { icon: <Code size={24} color="#3b82f6" />, title: 'Frontend Magic', desc: 'React, Vue, Tailwind, Framer Motion - crafting experiences.' },
                            { icon: <Zap size={24} color="#eab308" />, title: 'Backend Power', desc: 'Node.js, Express, databases, and seamless API integrations.' },
                            { icon: <Palette size={24} color="#ec4899" />, title: 'Design Focus', desc: 'UI/UX principles, modern typography, and vibrant aesthetics.' },
                        ].map((skill, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass-card"
                                style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', borderRadius: '16px', transition: 'transform 0.3s' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(-10px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                            >
                                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                                    {skill.icon}
                                </div>
                                <div>
                                    <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{skill.title}</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{skill.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
