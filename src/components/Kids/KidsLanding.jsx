import { Link } from 'react-router-dom';
import { Button } from '../UI';
import '../Landing/Landing.css';
import './Kids.css';

export default function KidsLanding({ onStart }) {
    return (
        <div className="landing-container">
            {/* Decorative Blobs */}
            <div className="landing-blob landing-blob-1" />
            <div className="landing-blob landing-blob-2" />
            <div className="landing-blob landing-blob-3" />

            {/* Subtle animated elements - keep for kids */}
            <div className="kids-floating-elements" aria-hidden="true">
                <span className="kids-float kids-float-1">🌿</span>
                <span className="kids-float kids-float-2">🦋</span>
                <span className="kids-float kids-float-3">⭐</span>
                <span className="kids-float kids-float-4">🌸</span>
                <span className="kids-float kids-float-5">🐝</span>
            </div>

            <div className="landing-content animate-fade-in">
                <Link to="/" className="landing-brand">
                    <span className="landing-logo">🌱</span>
                    <span className="landing-brand-name">StuCarbon</span>
                </Link>

                <h1 className="landing-title">
                    <span className="text-gradient">Kids Carbon Footprint</span>{' '}
                    Calculator
                </h1>

                <p className="landing-subtitle">
                    Calculate your environmental impact in under 2 minutes.
                    Get personalized tips to reduce your carbon footprint! 🌍
                </p>

                {/* Feature Pills */}
                <div className="landing-features">
                    <div className="landing-feature">
                        <span className="landing-feature-icon">⏱️</span>
                        <span>Under 2 minutes</span>
                    </div>
                    <div className="landing-feature">
                        <span className="landing-feature-icon">📊</span>
                        <span>6 simple questions</span>
                    </div>
                    <div className="landing-feature">
                        <span className="landing-feature-icon">🏆</span>
                        <span>Earn a badge</span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="landing-cta-group">
                    <div className="landing-cta">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={onStart}
                            icon="🚀"
                        >
                            Calculate
                        </Button>
                        <span className="cta-free-label">FREE!</span>
                    </div>
                </div>

                <div className="landing-time">
                    <span>✅</span>
                    <span>Free • No signup required • 100% anonymous</span>
                </div>

                {/* Stats */}
                <div className="landing-stats">
                    <div className="landing-stat">
                        <div className="landing-stat-value">200kg</div>
                        <div className="landing-stat-label">Avg Kids CO₂/month</div>
                    </div>
                    <div className="landing-stat">
                        <div className="landing-stat-value">6</div>
                        <div className="landing-stat-label">Quick Questions</div>
                    </div>
                    <div className="landing-stat landing-stat-free">
                        <div className="landing-stat-value">100%</div>
                        <div className="landing-stat-label">Free Forever</div>
                    </div>
                </div>
            </div>

            {/* SEO: Hidden text */}
            <p className="kids-seo-text">
                Free carbon footprint calculator for kids ages 8-12. Learn about environmental impact through fun questions.
            </p>
        </div>
    );
}
