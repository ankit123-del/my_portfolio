import React from 'react';
import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', padding: '4rem 0 2rem 0', marginTop: '4rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    <div>
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>
                            <span className="gradient-text">Portfolio</span>
                        </h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            A showcase of some of my selected works, experimenting with modern frontend tools and dynamic animations. Let's create something extraordinary.
                        </p>
                    </div>

                    <div>
                        <h5 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'white' }}>Quick Links</h5>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0 }}>
                            <li><a href="#home" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--accent)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Home</a></li>
                            <li><a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--accent)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Projects</a></li>
                            <li><a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--accent)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'white' }}>Socials</h5>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://github.com/ankit123-del" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--glass-bg)', padding: '0.8rem', borderRadius: '50%', color: 'var(--text-secondary)', transition: 'all 0.3s' }} onMouseOver={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'var(--accent-glow)' }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--glass-bg)' }}>
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/ankit-sharma045/" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--glass-bg)', padding: '0.8rem', borderRadius: '50%', color: 'var(--text-secondary)', transition: 'all 0.3s' }} onMouseOver={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'var(--accent-glow)' }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--glass-bg)' }}>
                                <Linkedin size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--glass-bg)', padding: '0.8rem', borderRadius: '50%', color: 'var(--text-secondary)', transition: 'all 0.3s' }} onMouseOver={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'var(--accent-glow)' }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--glass-bg)' }}>
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
