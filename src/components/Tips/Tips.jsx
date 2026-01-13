import { Button } from '../UI';
import './Tips.css';

export default function Tips({ tips, onBack, onShare, onGoHome }) {
    const { quickWins, impactful } = tips;

    // Calculate total potential savings
    const totalSavings = [...quickWins, ...impactful].reduce(
        (sum, tip) => sum + (tip.savings || 0),
        0
    );

    return (
        <div className="tips-container">
            {/* Logo - always visible for navigation */}
            <div className="tips-logo" onClick={onGoHome}>
                <span className="tips-logo-icon">🌱</span>
                <span className="tips-logo-text">StuCarbon</span>
            </div>

            <div className="tips-header">
                <h2 className="tips-title">
                    <span className="text-gradient">Your Action Plan</span> 💡
                </h2>
                <p className="tips-subtitle">
                    Small changes, big impact. Here's how you can reduce your footprint!
                </p>
            </div>

            {/* Quick Wins Section */}
            {quickWins.length > 0 && (
                <section className="tips-section">
                    <div className="tips-section-header">
                        <span className="tips-section-icon">⚡</span>
                        <h3 className="tips-section-title">Quick Wins This Week</h3>
                        <span className="tips-section-badge">Easy Starts</span>
                    </div>

                    <div className="tips-grid">
                        {quickWins.map((tip, index) => (
                            <TipCard key={`quick-${index}`} tip={tip} />
                        ))}
                    </div>
                </section>
            )}

            {/* High Impact Section */}
            {impactful.length > 0 && (
                <section className="tips-section">
                    <div className="tips-section-header">
                        <span className="tips-section-icon">🎯</span>
                        <h3 className="tips-section-title">Bigger Changes, Bigger Impact</h3>
                        <span className="tips-section-badge">High Impact</span>
                    </div>

                    <div className="tips-grid">
                        {impactful.map((tip, index) => (
                            <TipCard key={`impact-${index}`} tip={tip} />
                        ))}
                    </div>
                </section>
            )}

            {/* Potential Savings Banner */}
            {totalSavings > 0 && (
                <div className="potential-savings">
                    <span className="savings-icon">🌱</span>
                    <div className="savings-content">
                        <div className="savings-value">
                            Save up to {totalSavings}+ kg CO₂/month
                        </div>
                        <div className="savings-label">
                            By following these tips, that's {Math.round(totalSavings * 12)} kg/year!
                        </div>
                    </div>
                </div>
            )}

            {/* Actions */}
            <div className="tips-actions">
                <Button variant="primary" onClick={onShare} icon="📤">
                    Share My Results
                </Button>
                <Button variant="secondary" onClick={onBack}>
                    ← Back to Results
                </Button>
            </div>
        </div>
    );
}

function TipCard({ tip }) {
    return (
        <div className={`tip-card ${tip.impact}-impact`}>
            <span className="tip-icon">{tip.icon}</span>
            <div className="tip-content">
                <h4 className="tip-title">{tip.title}</h4>
                <p className="tip-description">{tip.description}</p>
                <div className="tip-meta">
                    {tip.savings > 0 && (
                        <span className="tip-savings">
                            <span>🌿</span>
                            Save {tip.savings}kg/month
                        </span>
                    )}
                    <span className="tip-category">{tip.category}</span>
                    <span className={`impact-badge ${tip.impact}`}>
                        {tip.impact === 'high' && '🔥 High Impact'}
                        {tip.impact === 'medium' && '⭐ Medium Impact'}
                        {tip.impact === 'low' && '✓ Keep it up!'}
                    </span>
                </div>
            </div>
        </div>
    );
}
