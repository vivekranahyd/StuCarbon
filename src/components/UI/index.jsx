import './UI.css';

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    onClick,
    disabled = false,
    className = '',
    ...props
}) {
    const sizeClass = size !== 'md' ? `btn-${size}` : '';

    return (
        <button
            className={`btn btn-${variant} ${sizeClass} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {icon && <span className="btn-icon">{icon}</span>}
            {children}
        </button>
    );
}

export function ProgressBar({ current, total, showLabel = true }) {
    const percentage = Math.round((current / total) * 100);

    return (
        <div className="progress-container">
            {showLabel && (
                <div className="progress-label">
                    <span>Question {current} of {total}</span>
                    <span>{percentage}%</span>
                </div>
            )}
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}

export function Card({ children, variant = 'solid', className = '', ...props }) {
    const variantClass = variant === 'glass' ? 'card-glass' : '';

    return (
        <div className={`card ${variantClass} ${className}`} {...props}>
            {children}
        </div>
    );
}

export function Badge({ children, variant = 'primary', className = '' }) {
    return (
        <span className={`badge badge-${variant} ${className}`}>
            {children}
        </span>
    );
}

export function EmojiBadge({ emoji, className = '' }) {
    return (
        <div className={`emoji-badge ${className}`}>
            {emoji}
        </div>
    );
}
