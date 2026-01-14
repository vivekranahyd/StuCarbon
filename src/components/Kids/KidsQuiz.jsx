import { useState } from 'react';
import { kidsQuestions } from '../../data/kidsQuestions';
import './Kids.css';

export default function KidsQuiz({ onComplete, onGoHome }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [selectedOption, setSelectedOption] = useState(null);
    const [showReaction, setShowReaction] = useState(false);
    const [reaction, setReaction] = useState('');

    const question = kidsQuestions[currentQuestion];
    const totalQuestions = kidsQuestions.length;
    const progress = ((currentQuestion) / totalQuestions) * 100;

    const handleOptionSelect = (option) => {
        setSelectedOption(option.id);
        setReaction(option.reaction);
        setShowReaction(true);

        setAnswers(prev => ({
            ...prev,
            [question.id]: option
        }));

        // Auto-advance after showing reaction
        setTimeout(() => {
            setShowReaction(false);
            if (currentQuestion < totalQuestions - 1) {
                setCurrentQuestion(prev => prev + 1);
                setSelectedOption(null);
            } else {
                // Calculate total score
                const totalScore = Object.values({ ...answers, [question.id]: option })
                    .reduce((sum, opt) => sum + opt.value, 0);
                onComplete(totalScore, { ...answers, [question.id]: option });
            }
        }, 1200);
    };

    // Progress emoji indicators
    const progressEmojis = ['🌱', '🌿', '🌲', '🌳', '🌴', '🌍'];

    return (
        <section className="kids-quiz" aria-label="Carbon footprint quiz for kids">
            {/* Reaction Overlay */}
            {showReaction && (
                <div className="kids-reaction-overlay" role="dialog" aria-label="Feedback message">
                    <div className="kids-reaction-box">
                        <span className="kids-reaction-emoji" aria-hidden="true">{question.mascot}</span>
                        <p className="kids-reaction-text">{reaction}</p>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="kids-quiz-header">
                <div className="kids-quiz-title">
                    <span>Planet Hero Quiz</span>
                    <span className="kids-free-small">FREE!</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="kids-progress">
                <div className="kids-progress-bar">
                    <div
                        className="kids-progress-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="kids-progress-text">
                    {progressEmojis.map((emoji, i) => (
                        <span
                            key={i}
                            className={`kids-progress-emoji ${i < currentQuestion ? 'completed' : ''} ${i === currentQuestion ? 'current' : ''}`}
                        >
                            {emoji}
                        </span>
                    ))}
                </div>
            </div>

            {/* Question Card */}
            <div className="kids-question-card">
                <div className="kids-question-number">
                    <span className="kids-q-emoji">{question.emoji}</span>
                    <span>Question {currentQuestion + 1} of {totalQuestions}</span>
                </div>

                <h2 className="kids-question-text">
                    {question.question}
                </h2>

                {/* Options */}
                <div className="kids-options">
                    {question.options.map((option) => (
                        <button
                            key={option.id}
                            className={`kids-option ${selectedOption === option.id ? 'selected' : ''}`}
                            onClick={() => handleOptionSelect(option)}
                            disabled={selectedOption !== null}
                        >
                            <span className="kids-option-emoji">{option.emoji}</span>
                            <span className="kids-option-label">{option.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Encouragement */}
            <div className="kids-encouragement">
                <span>🌟</span>
                <span>You're doing great!</span>
                <span>🌟</span>
            </div>
        </section>
    );
}
