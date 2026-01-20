import { Link } from 'react-router-dom';
import { Button } from '../UI';
import '../Landing/Landing.css';
import './Kids.css';

export default function KidsLanding({ onStart }) {
    return (
        <div className="kids-modern-layout animate-fade-in">
            {/* Ambient Background */}
            <div className="kids-ambient-orb orb-1" />
            <div className="kids-ambient-orb orb-2" />

            {/* Floating Animations */}
            <div className="floating-container">
                <span className="floating-item float-1">☁️</span>
                <span className="floating-item float-2">🍃</span>
                <span className="floating-item float-3">🦋</span>
                <span className="floating-item float-4">🌞</span>
                <span className="floating-item float-5">🌱</span>
            </div>

            <main className="kids-hero">


                {/* SEO OPTIMIZED H1 */}
                <h1 className="kids-title-display">
                    <span className="accent-nature">Carbon Footprint</span><br />
                    Calculator <span style={{ color: 'var(--kids-primary)' }}>for Kids</span>
                </h1>

                <p className="kids-lead-text">
                    The fun, fast, and free way to learn about your impact on the planet.
                    No math required—just 2 minutes to become a Planet Hero! 🌍
                </p>

                {/* Mobile-First Bento Grid */}
                <div className="kids-bento-grid">
                    <div className="bento-card highlight">
                        <div className="bento-icon">⏱️</div>
                        <h3>2 Minute Quiz</h3>
                        <p>Super fast questions designed just for kids.</p>
                    </div>
                    <div className="bento-card">
                        <div className="bento-icon">🏆</div>
                        <h3>Earn Badges</h3>
                        <p>Become a Planet Hero and collect stickers!</p>
                    </div>
                    <div className="bento-card">
                        <div className="bento-icon">🔒</div>
                        <h3>100% Private</h3>
                        <p>No signup needed. Your data stays yours.</p>
                    </div>
                </div>

                {/* High-Impact CTA Area */}
                <div className="kids-action-area">
                    <button onClick={onStart} className="kids-primary-btn">
                        Start Your Quiz <span className="btn-icon">🚀</span>
                    </button>

                    <div className="kids-trust-row">
                        <div className="trust-badge">✅ Free Forever</div>
                        <div className="trust-badge">🛡️ Anonymous</div>
                    </div>
                </div>
            </main>



            {/* Compact SEO Section */}
            <section className="kids-seo-compact">
                <h2>🌍 Why use a Carbon Footprint Calculator for Kids?</h2>
                <p>
                    Every time we use energy, drive in a car, or eat food, we leave a "footprint" on the Earth.
                </p>

                <ul className="kids-seo-list">
                    <li>Discover your impact in 2 minutes</li>
                    <li>Learn simple ways to protect nature</li>
                    <li>Ride a bike, save energy, and be a hero!</li>
                </ul>

                <p style={{ opacity: 0.7, fontSize: '0.85rem', marginTop: '2rem', borderTop: '2px dashed #eee', paddingTop: '1rem' }}>
                    100% Free Educational Tool for Ages 8-12.
                </p>
            </section>
        </div>
    );
}

