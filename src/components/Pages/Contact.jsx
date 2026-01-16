import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../UI';
import './Pages.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, this would send to a backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | StuCarbon - Student Carbon Footprint Calculator</title>
                <meta name="description" content="Have questions or eco-ideas? Contact the StuCarbon team! We love hearing from students, educators, and partners. Let's collaborate for a greener future. 💬" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://stucarbon.com/contact" />
            </Helmet>

            <div className="contact-page">
                <header className="contact-header animate-fade-in">
                    <div className="contact-header-emoji">💬</div>
                    <h1>Contact <span className="text-gradient">Us</span></h1>
                    <p>Have questions or feedback? We'd love to hear from you!</p>
                </header>

                {submitted ? (
                    <div className="contact-form" style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                        <h2>Thank You!</h2>
                        <p style={{ color: 'var(--gray-600)', marginTop: '1rem' }}>
                            We've received your message and will get back to you within 24-48 hours.
                        </p>
                    </div>
                ) : (
                    <form className="contact-form animate-slide-up" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="form-input"
                                placeholder="What's this about?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                placeholder="Tell us what's on your mind..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Button type="submit" variant="primary" size="lg" style={{ width: '100%' }}>
                            Send Message 📤
                        </Button>
                    </form>
                )}

                <div className="contact-info">
                    <div className="contact-info-item">
                        <span className="contact-info-icon">📧</span>
                        <span>hello@stucarbon.com</span>
                    </div>
                    <div className="contact-info-item">
                        <span className="contact-info-icon">🌐</span>
                        <span>stucarbon.com</span>
                    </div>
                </div>
            </div>
        </>
    );
}
