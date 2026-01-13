import { useState } from 'react';
import { AVERAGE_STUDENT_FOOTPRINT } from '../../data/questions';
import './Share.css';

export default function ShareCard({ results, onClose }) {
    const [copied, setCopied] = useState(false);
    const { total, rating, comparison } = results;

    const shareText = `🌱 I just calculated my carbon footprint as a student!

📊 My score: ${total} kg CO₂/month
${rating.emoji} Rating: ${rating.title}
${comparison.isBetter ? '🎉' : '📈'} ${Math.abs(comparison.percentageDiff)}% ${comparison.isBetter ? 'better' : 'higher'} than average

Can you beat me? Calculate yours at: `;

    const shareUrl = window.location.href;

    const handleTwitterShare = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(twitterUrl, '_blank', 'width=550,height=420');
    };

    const handleWhatsAppShare = () => {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + shareUrl)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareText + shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="share-overlay" onClick={onClose}>
            <div className="share-modal" onClick={e => e.stopPropagation()}>
                <div className="share-header">
                    <h3 className="share-title">Share Your Results 📤</h3>
                    <button className="share-close" onClick={onClose}>✕</button>
                </div>

                {/* Preview Card */}
                <div className="share-card-preview">
                    <div className="share-card-brand">
                        <span>🌱</span>
                        <span>Student Carbon Calculator</span>
                    </div>

                    <div className="share-card-score">{total}</div>
                    <div className="share-card-unit">kg CO₂ per month</div>

                    <div className="share-card-rating">
                        <span>{rating.emoji}</span>
                        <span>{rating.title}</span>
                    </div>

                    <div className="share-card-comparison">
                        {comparison.isBetter ? '🎉' : '📈'}{' '}
                        {Math.abs(comparison.percentageDiff)}% {comparison.isBetter ? 'better' : 'higher'}{' '}
                        than average student ({AVERAGE_STUDENT_FOOTPRINT} kg)
                    </div>

                    <div className="share-card-cta">
                        🔥 Can you beat my score?
                    </div>
                </div>

                {/* Share Buttons */}
                <div className="share-buttons">
                    <button className="share-button twitter" onClick={handleTwitterShare}>
                        <span className="share-button-icon">𝕏</span>
                        <span>Share on X (Twitter)</span>
                    </button>

                    <button className="share-button whatsapp" onClick={handleWhatsAppShare}>
                        <span className="share-button-icon">💬</span>
                        <span>Share on WhatsApp</span>
                    </button>

                    <button
                        className={`share-button copy ${copied ? 'copied' : ''}`}
                        onClick={handleCopyLink}
                    >
                        <span className="share-button-icon">{copied ? '✓' : '📋'}</span>
                        <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                    </button>
                </div>
            </div>

            {copied && (
                <div className="copy-toast">
                    ✓ Copied to clipboard!
                </div>
            )}
        </div>
    );
}
