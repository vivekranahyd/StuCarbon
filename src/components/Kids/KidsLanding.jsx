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



            {/* Clean SEO Accordion Section */}
            <section className="kids-seo-accordion">
                <div className="accordion-header-row">
                    <h2>📚 Education Corner</h2>
                    <span className="badge-new">For Parents & Teachers</span>
                </div>

                <div className="accordion-item">
                    <details>
                        <summary>What is a Carbon Footprint? (Simple Definition)</summary>
                        <p>
                            Think of a carbon footprint like a mark you leave in the sand, but for the air!
                            Every time we use electricity, ride in a car, or buy new toys, it uses energy that comes from fossil fuels.
                            This releases "greenhouse gases" that wrap around the Earth like a blanket and make it warmer.
                            Our <strong>Carbon Footprint Calculator for Kids</strong> helps you measure your mark and learn how to make it smaller!
                        </p>
                    </details>
                </div>

                <div className="accordion-item">
                    <details>
                        <summary>Why is this tool free for schools & homeschooling?</summary>
                        <p>
                            StuCarbon is committed to 100% free environmental education. We believe every child should have access to
                            STEM tools that help them understand climate change. This calculator is designed as a perfect
                            <strong>homeschooling resource</strong> or classroom activity for grades 3-7 (Ages 8-12).
                            No email or signup is required, ensuring total student privacy.
                        </p>
                    </details>
                </div>

                <div className="accordion-item">
                    <details>
                        <summary>How can kids reduce their carbon footprint?</summary>
                        <p>
                            Small steps make a big difference! Here are 3 easy ways for kids to be Planet Heroes:
                        </p>
                        <ul className="kids-seo-list">
                            <li>🚲 <strong>Travel Green:</strong> Walk, bike, or take the bus to school instead of a car.</li>
                            <li>🍔 <strong>Eat Smart:</strong> Try "Meatless Mondays" – veggies use way less water and energy than meat!</li>
                            <li>💡 <strong>Power Down:</strong> Turn off lights and video games when you leave the room.</li>
                        </ul>
                    </details>
                </div>
            </section>
        </div>
    );
}

