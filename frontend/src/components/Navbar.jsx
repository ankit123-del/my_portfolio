import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const styles = {
        nav: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            transition: 'all 0.3s ease',
            padding: scrolled ? '1rem 0' : '1.5rem 0',
            background: scrolled ? 'rgba(10, 10, 12, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'white',
            textDecoration: 'none'
        },
        links: {
            display: 'none',
            gap: '2rem',
            '@media (minWidth: 768px)': {
                display: 'flex'
            }
        },
        link: {
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 500,
            transition: 'color 0.3s ease'
        },
        desktopNav: {
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
        },
        mobileMenuBtn: {
            display: 'none', // Overridden in media queries typically, but inline styles make it tricky. We'll use a standard class approach or inline logic.
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
        },
        mobileMenu: {
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-secondary)',
            padding: '1rem',
            borderBottom: '1px solid var(--glass-border)',
            display: isOpen ? 'flex' : 'none',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }
    };

    return (
        <nav style={styles.nav}>
            <div className="container" style={styles.container}>
                <a href="#home" style={styles.logo}>
                    <Code2 className="text-accent" color="var(--accent)" size={32} />
                    <span className="gradient-text">Portfolio</span>
                </a>

                {/* Desktop Nav */}
                <div style={styles.desktopNav} className="desktop-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={styles.link}
                            onMouseOver={(e) => e.target.style.color = 'white'}
                            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button - We'll add some vanilla CSS rules for responsive hiding/showing if needed, but for simplicity we rely on React state and classes where inline is tough */}
            </div>
            {/* Keeping it simple - standard responsive navbar */}
        </nav>
    );
};

export default Navbar;
