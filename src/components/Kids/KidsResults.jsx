import { Link } from 'react-router-dom';
import { getAnimalBadge, kidsTips, AVERAGE_KIDS_SCORE } from '../../data/kidsQuestions';
import './Kids.css';

export default function KidsResults({ score, onRetake, onGoHome }) {
    const badge = getAnimalBadge(score);
    const isAboveAverage = score < AVERAGE_KIDS_SCORE;

    // Calculate Planet Points (inverse of carbon - lower is better!)
    const planetPoints = Math.max(0, 200 - score);

    return (
        <article className="kids-results" aria-label="Carbon footprint quiz results for kids">
            {/* Confetti Animation */}
            <div className="kids-confetti" aria-hidden="true">
                {['🎉', '⭐', '🌟', '✨', '🎊', '💫'].map((emoji, i) => (
                    <span key={i} className={`confetti-piece confetti-${i + 1}`}>{emoji}</span>
                ))}
            </div>

            {/* Header */}
            <div className="kids-results-header">
                <button className="kids-home-btn" onClick={onGoHome}>
                    🏠 Home
                </button>
                <div className="kids-quiz-title">
                    <span>Your Results!</span>
                    <span className="kids-free-small">FREE!</span>
                </div>
            </div>

            <div className="kids-results-content">
                {/* Badge Reveal */}
                <div className="kids-badge-reveal">
                    <div className="kids-badge-glow" style={{ '--badge-color': badge.color }}>
                        <span className="kids-badge-emoji">{badge.emoji}</span>
                    </div>
                    <h1 className="kids-badge-name">{badge.name}</h1>
                    <p className="kids-badge-message">{badge.message}</p>
                </div>

                {/* Planet Points */}
                <div className="kids-planet-points">
                    <div className="kids-points-circle">
                        <span className="kids-points-number">{planetPoints}</span>
                        <span className="kids-points-label">Planet Points</span>
                    </div>
                    <p className="kids-points-compare">
                        {isAboveAverage ? (
                            <>🌟 Wow! You scored higher than most kids!</>
                        ) : (
                            <>🌱 Every superhero starts somewhere!</>
                        )}
                    </p>
                </div>

                {/* Fun Comparison */}
                <div className="kids-fun-compare">
                    <h3>Your Earth-Helping Power:</h3>
                    <div className="kids-compare-items">
                        <div className="kids-compare-item">
                            <span className="kids-compare-emoji">🌳</span>
                            <span>Like planting {Math.max(1, Math.floor(planetPoints / 30))} trees!</span>
                        </div>
                        <div className="kids-compare-item">
                            <span className="kids-compare-emoji">🐢</span>
                            <span>Helping {Math.max(1, Math.floor(planetPoints / 20))} sea turtles!</span>
                        </div>
                        <div className="kids-compare-item">
                            <span className="kids-compare-emoji">🦋</span>
                            <span>Saving {Math.max(1, Math.floor(planetPoints / 10))} butterflies!</span>
                        </div>
                    </div>
                </div>

                {/* Tips Section */}
                <div className="kids-tips-section">
                    <h3>🌟 Become an Even Bigger Hero! 🌟</h3>
                    <div className="kids-tips-grid">
                        {kidsTips.slice(0, 4).map((tip, i) => (
                            <div key={i} className="kids-tip-card">
                                <span className="kids-tip-emoji">{tip.emoji}</span>
                                <span className="kids-tip-text">{tip.tip}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="kids-results-actions">
                    <button className="kids-action-btn kids-btn-primary" onClick={onRetake}>
                        <span>🔄</span>
                        <span>Try Again!</span>
                    </button>
                    <Link to="/" className="kids-action-btn kids-btn-secondary">
                        <span>🎓</span>
                        <span>Student Quiz</span>
                    </Link>
                </div>

                {/* Certificate Teaser */}
                <div className="kids-certificate">
                    <div className="kids-cert-border">
                        <span className="kids-cert-icon">🏆</span>
                        <h4>Planet Hero Certificate</h4>
                        <p>Awarded to: <strong>You!</strong></p>
                        <p>Badge: {badge.emoji} {badge.name}</p>
                        <p>Planet Points: {planetPoints}</p>
                        <p className="kids-cert-date">Date: {new Date().toLocaleDateString()}</p>
                    </div>
                    <p className="kids-cert-tip">📸 Take a screenshot to save your certificate!</p>
                </div>
            </div>
        </article>
    );
}
