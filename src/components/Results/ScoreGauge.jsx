import { useEffect, useState } from 'react';
import './Results.css';

export default function ScoreGauge({ score, rating, maxScore = 700 }) {
    const [animatedScore, setAnimatedScore] = useState(0);
    const [dashOffset, setDashOffset] = useState(691);

    // Circle calculations
    const radius = 110;
    const circumference = 2 * Math.PI * radius;
    const percentage = Math.min(score / maxScore, 1);

    useEffect(() => {
        // Animate the score counting up
        const duration = 1500;
        const steps = 60;
        const increment = score / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= score) {
                setAnimatedScore(score);
                clearInterval(timer);
            } else {
                setAnimatedScore(Math.round(current));
            }
        }, duration / steps);

        // Animate the gauge fill
        setTimeout(() => {
            setDashOffset(circumference * (1 - percentage));
        }, 100);

        return () => clearInterval(timer);
    }, [score, percentage, circumference]);

    // Determine gradient color based on score
    const getGradientId = () => {
        if (score < 200) return 'excellentGradient';
        if (score < 350) return 'goodGradient';
        if (score < 500) return 'averageGradient';
        return 'highGradient';
    };

    return (
        <div className="score-gauge-container">
            <svg className="score-gauge" viewBox="0 0 240 240">
                <defs>
                    <linearGradient id="excellentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                    <linearGradient id="goodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                    <linearGradient id="averageGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                    <linearGradient id="highGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#fb7185" />
                    </linearGradient>
                </defs>

                {/* Background circle */}
                <circle
                    className="score-gauge-bg"
                    cx="120"
                    cy="120"
                    r={radius}
                />

                {/* Filled circle */}
                <circle
                    className="score-gauge-fill"
                    cx="120"
                    cy="120"
                    r={radius}
                    stroke={`url(#${getGradientId()})`}
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                />
            </svg>

            <div className="score-center">
                <div className="score-value" style={{ color: rating.color }}>
                    {animatedScore}
                </div>
                <div className="score-unit">kg CO₂/month</div>
                <div
                    className="score-rating"
                    style={{
                        background: `${rating.color}20`,
                        color: rating.color
                    }}
                >
                    <span>{rating.emoji}</span>
                    <span>{rating.title}</span>
                </div>
            </div>
        </div>
    );
}
