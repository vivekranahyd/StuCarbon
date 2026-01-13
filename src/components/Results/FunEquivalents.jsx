export default function FunEquivalents({ equivalents }) {
    return (
        <div className="equivalents-section animate-slide-up">
            <h3 className="section-title">🌍 That's Equivalent To...</h3>

            <div className="equivalents-grid">
                {equivalents.map((item, index) => (
                    <div
                        key={item.name}
                        className="equivalent-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <span className="equivalent-emoji">{item.emoji}</span>
                        <div className="equivalent-content">
                            <div className="equivalent-value">{item.value.toLocaleString()}</div>
                            <div className="equivalent-label">{item.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
