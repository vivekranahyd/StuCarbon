import { useEffect, useState } from 'react';

const categoryEmojis = {
    transport: '🚗',
    food: '🍔',
    digital: '🎮',
    housing: '🏠',
    energy: '⚡',
    lifestyle: '👕'
};

export default function CategoryBreakdown({ breakdown }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 500);
    }, []);

    // Sort categories by value
    const sortedCategories = Object.entries(breakdown)
        .sort((a, b) => b[1].value - a[1].value);

    // Calculate for donut chart
    const total = sortedCategories.reduce((sum, [, data]) => sum + data.value, 0);
    const radius = 80;
    const circumference = 2 * Math.PI * radius;

    let currentOffset = 0;

    return (
        <div className="breakdown-section animate-slide-up">
            <h3 className="section-title">📊 Your Impact Breakdown</h3>

            {/* Donut Chart */}
            <div className="donut-container">
                <div className="donut-chart">
                    <svg viewBox="0 0 200 200">
                        {sortedCategories.map(([category, data], index) => {
                            const segmentLength = (data.value / total) * circumference;
                            const offset = currentOffset;
                            currentOffset += segmentLength;

                            return (
                                <circle
                                    key={category}
                                    className="donut-segment"
                                    cx="100"
                                    cy="100"
                                    r={radius}
                                    stroke={data.color}
                                    strokeDasharray={`${isVisible ? segmentLength : 0} ${circumference}`}
                                    strokeDashoffset={-offset}
                                    style={{
                                        transition: `stroke-dasharray 1s ease ${index * 0.1}s`,
                                        transform: 'rotate(-90deg)',
                                        transformOrigin: 'center'
                                    }}
                                />
                            );
                        })}
                    </svg>
                </div>

                <div className="donut-legend">
                    {sortedCategories.map(([category, data]) => (
                        <div key={category} className="legend-item">
                            <div
                                className="legend-color"
                                style={{ background: data.color }}
                            />
                            <span>{data.label} ({data.percentage}%)</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Breakdown Cards */}
            <div className="breakdown-grid">
                {sortedCategories.map(([category, data], index) => (
                    <div
                        key={category}
                        className="breakdown-card"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            borderColor: data.color
                        }}
                    >
                        <div
                            className="breakdown-icon"
                            style={{ background: `${data.color}20` }}
                        >
                            {categoryEmojis[category]}
                        </div>
                        <div className="breakdown-label">{data.label}</div>
                        <div className="breakdown-value" style={{ color: data.color }}>
                            {data.value} kg
                        </div>
                        <div className="breakdown-percent">{data.percentage}% of total</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
