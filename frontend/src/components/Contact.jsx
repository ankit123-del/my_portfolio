import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting contact form", error);
            setStatus('error');
        }

        setTimeout(() => setStatus(null), 5000);
    };

    return (
        <section id="contact" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Have a highly interactive project in mind or just want to say hi? I'm always open to discussing new opportunities or freelance projects.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card"
                        style={{ padding: '3rem' }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Contact Information</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ background: 'var(--accent-glow)', padding: '1rem', borderRadius: '50%', color: 'var(--accent)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Location</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Agra Road Jaipur, Rajasthan</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ background: 'var(--accent-glow)', padding: '1rem', borderRadius: '50%', color: 'var(--accent)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Email</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>heyankitsharma6260@gmail.com</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ background: 'var(--accent-glow)', padding: '1rem', borderRadius: '50%', color: 'var(--accent)' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Phone</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>+91 8769882582</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <div className="input-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="input-field"
                                required
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input-field"
                                required
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="input-field"
                                rows="5"
                                required
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }} disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : <>Send Message <Send size={20} /></>}
                        </button>

                        {status === 'success' && <p style={{ color: '#4ade80', marginTop: '1rem' }}>Message sent successfully!</p>}
                        {status === 'error' && <p style={{ color: '#f87171', marginTop: '1rem' }}>Something went wrong. Please try again.</p>}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
