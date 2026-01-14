import { Link } from 'react-router-dom';
import { Button } from '../UI';
import './Landing.css';

export default function Landing({ onStart }) {
    return (
        <div className="landing-container">
            {/* Decorative Blobs */}
            <div className="landing-blob landing-blob-1" />
            <div className="landing-blob landing-blob-2" />
            <div className="landing-blob landing-blob-3" />

            <div className="landing-content animate-fade-in">
                <Link to="/" className="landing-brand">
                    <span className="landing-logo">🌱</span>
                    <span className="landing-brand-name">StuCarbon</span>
                </Link>

                <h1 className="landing-title">
                    <span className="text-gradient">Student Carbon Footprint</span>{' '}
                    Calculator
                </h1>

                <p className="landing-subtitle">
                    Calculate your environmental impact in under 2 minutes.
                    Get personalized tips to reduce your carbon footprint as a student! 🌍
                </p>

                {/* Feature Pills */}
                <div className="landing-features">
                    <div className="landing-feature">
                        <span className="landing-feature-icon">⏱️</span>
                        <span>Under 2 minutes</span>
                    </div>
                    <div className="landing-feature">
                        <span className="landing-feature-icon">📊</span>
                        <span>8 simple questions</span>
                    </div>
                    <div className="landing-feature">
                        <span className="landing-feature-icon">💡</span>
                        <span>Personalized tips</span>
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
                        <div className="landing-stat-value">350kg</div>
                        <div className="landing-stat-label">Avg Student CO₂/month</div>
                    </div>
                    <div className="landing-stat">
                        <div className="landing-stat-value">8</div>
                        <div className="landing-stat-label">Quick Questions</div>
                    </div>
                    <div className="landing-stat landing-stat-free">
                        <div className="landing-stat-value">100%</div>
                        <div className="landing-stat-label">Free Forever</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
