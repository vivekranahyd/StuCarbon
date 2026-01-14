import { Link } from 'react-router-dom';
import './Kids.css';

export default function KidsLanding({ onStart }) {
    return (
        <div className="kids-landing">
            {/* Animated Background Elements */}
            <div className="kids-bg-elements">
                <div className="kids-cloud kids-cloud-1">☁️</div>
                <div className="kids-cloud kids-cloud-2">☁️</div>
                <div className="kids-star kids-star-1">⭐</div>
                <div className="kids-star kids-star-2">🌟</div>
                <div className="kids-star kids-star-3">✨</div>
                <div className="kids-animal kids-animal-1">🦋</div>
                <div className="kids-animal kids-animal-2">🐝</div>
            </div>

            <div className="kids-landing-content">
                {/* Logo */}
                <div className="kids-logo">
                    <Link to="/" className="kids-logo-link">
                        <span className="kids-logo-icon">🌱</span>
                        <span className="kids-logo-text">StuCarbon</span>
                    </Link>
                    <span className="kids-badge">For Kids!</span>
                </div>

                {/* Earth Mascot */}
                <div className="kids-mascot">
                    <span className="kids-earth">🌍</span>
                    <div className="kids-mascot-speech">
                        <p>Hi friend! I'm Earth! 👋</p>
                        <p>Let's see how you help me stay healthy!</p>
                    </div>
                </div>

                {/* Title */}
                <h1 className="kids-title">
                    <span className="kids-title-main">Planet Hero</span>
                    <span className="kids-title-sub">Quiz</span>
                </h1>

                <p className="kids-subtitle">
                    Answer 6 fun questions and discover your <br />
                    <span className="kids-highlight">Animal Spirit Badge!</span> 🦁🐬🦅
                </p>

                {/* FREE Badge */}
                <div className="kids-free-badge">
                    <span className="free-star">⭐</span>
                    <span>100% FREE</span>
                    <span className="free-star">⭐</span>
                </div>

                {/* Fun Facts */}
                <div className="kids-fun-facts">
                    <div className="kids-fact">
                        <span className="kids-fact-emoji">🎮</span>
                        <span>Fun like a game!</span>
                    </div>
                    <div className="kids-fact">
                        <span className="kids-fact-emoji">⏰</span>
                        <span>Only 2 minutes!</span>
                    </div>
                    <div className="kids-fact">
                        <span className="kids-fact-emoji">🏆</span>
                        <span>Earn a badge!</span>
                    </div>
                </div>

                {/* CTA Button */}
                <button className="kids-start-btn" onClick={onStart}>
                    <span className="kids-btn-emoji">🚀</span>
                    <span>Start My Adventure!</span>
                    <span className="kids-btn-sparkle">✨</span>
                </button>

                {/* Parent Link */}
                <p className="kids-parent-link">
                    <Link to="/">Looking for the Student Calculator? →</Link>
                </p>
            </div>
        </div>
    );
}
