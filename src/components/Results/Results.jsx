import { AVERAGE_STUDENT_FOOTPRINT } from '../../data/questions';
import { Button } from '../UI';
import ScoreGauge from './ScoreGauge';
import CategoryBreakdown from './CategoryBreakdown';
import FunEquivalents from './FunEquivalents';
import './Results.css';

export default function Results({ results, onShowTips, onShare, onRetake, onGoHome }) {
    const { total, breakdown, comparison, rating, funEquivalents } = results;

    return (
        <div className="results-container">
            {/* Logo - always visible for navigation */}
            <div className="results-logo" onClick={onGoHome}>
                <span className="results-logo-icon">🌱</span>
                <span className="results-logo-text">StuCarbon</span>
            </div>

            <div className="results-header">
                <h2 className="results-title">
                    <span className="text-gradient">Your Carbon Footprint</span> {rating.emoji}
                </h2>
                <p className="results-subtitle">{rating.description}</p>
            </div>

            {/* Score Gauge */}
            <div className="score-section">
                <ScoreGauge score={total} rating={rating} />

                {/* Comparison */}
                <div className="comparison-card">
                    <span className="comparison-icon">
                        {comparison.isBetter ? '🎉' : '📈'}
                    </span>
                    <p className="comparison-text">
                        You're{' '}
                        <span className={`comparison-highlight ${comparison.isBetter ? '' : 'worse'}`}>
                            {Math.abs(comparison.percentageDiff)}% {comparison.isBetter ? 'better' : 'higher'}
                        </span>{' '}
                        than the average student ({AVERAGE_STUDENT_FOOTPRINT} kg/month)
                    </p>
                </div>
            </div>

            {/* Category Breakdown */}
            <CategoryBreakdown breakdown={breakdown} />

            {/* Fun Equivalents */}
            <FunEquivalents equivalents={funEquivalents} />

            {/* Action Buttons */}
            <div className="results-actions">
                <Button variant="primary" onClick={onShowTips} icon="💡">
                    Get Personalized Tips
                </Button>
                <Button variant="secondary" onClick={onShare} icon="📤">
                    Share Results
                </Button>
                <Button variant="ghost" onClick={onRetake}>
                    Retake Quiz 🔄
                </Button>
            </div>
        </div>
    );
}
