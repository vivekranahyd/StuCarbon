import { Link } from 'react-router-dom';
import { getAnimalBadge, kidsTips, AVERAGE_KIDS_SCORE } from '../../data/kidsQuestions';
import './Kids.css';

export default function KidsResults({ score, onRetake, onGoHome }) {
    const badge = getAnimalBadge(score);
    const isAboveAverage = score < AVERAGE_KIDS_SCORE;

    // Calculate Planet Points (inverse of carbon - lower is better!)
    const planetPoints = Math.max(0, 200 - score);

    return (
        <article className="kids-modern-layout kids-quiz-layout" aria-label="Carbon footprint quiz results for kids">
            {/* Confetti Animation */}
            <div className="kids-confetti" aria-hidden="true">
                {['🎉', '⭐', '🌟', '✨', '🎊', '💫'].map((emoji, i) => (
                    <span key={i} className={`confetti-piece confetti-${i + 1}`}>{emoji}</span>
                ))}
            </div>

            {/* Header */}
            <div className="kids-pill-badge" style={{ margin: '0 auto 2rem' }}>
                <span>🏆</span> Quiz Complete!
            </div>

            {/* Badge Reveal */}
            <div className="quiz-card results-badge-reveal">
                <div className="badge-glow" style={{ '--badge-color': badge.color }}>
                    <span className="kids-badge-emoji">{badge.emoji}</span>
                </div>
                <h1 className="badge-title">{badge.name}</h1>
                <p style={{ color: 'var(--kids-text)', marginBottom: '1.5rem', fontWeight: 500 }}>
                    {badge.message}
                </p>

                {/* Planet Points */}
                <div className="points-display">
                    <span className="points-value">{planetPoints}</span>
                    <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--kids-primary)' }}>Planet Points</span>
                </div>

                <p className="kids-points-compare" style={{ fontSize: '0.9rem', color: 'var(--kids-text-muted)' }}>
                    {isAboveAverage ? (
                        <>🌟 Wow! You scored higher than most kids!</>
                    ) : (
                        <>🌱 Every superhero starts somewhere!</>
                    )}
                </p>
            </div>

            {/* Tips Section */}
            <div style={{ marginTop: '3rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, textAlign: 'center' }}>
                    Become an Even Bigger Hero!
                </h3>
                <div className="tips-grid-mini">
                    {kidsTips.slice(0, 3).map((tip, i) => (
                        <div key={i} className="tip-card-mini">
                            <span style={{ fontSize: '1.5rem' }}>{tip.emoji}</span>
                            <span>{tip.tip}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="kids-action-area" style={{ marginTop: '2rem' }}>
                <button className="kids-primary-btn" onClick={onRetake}>
                    Play Again <span className="btn-icon">🔄</span>
                </button>

                <Link to="/" className="home-link-btn">
                    Back to Student Calculator
                </Link>
            </div>
        </article>
    );
}
