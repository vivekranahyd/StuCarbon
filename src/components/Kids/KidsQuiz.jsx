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
        <section className="kids-modern-layout kids-quiz-layout" aria-label="Carbon footprint quiz for kids">
            {/* Reaction Overlay */}
            {showReaction && (
                <div className="kids-reaction-overlay" role="dialog" aria-label="Feedback message">
                    <div className="reaction-card">
                        <span className="reaction-emoji" aria-hidden="true">{question.mascot}</span>
                        <p className="reaction-text">{reaction}</p>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="kids-pill-badge" style={{ margin: '0 0 1rem', alignSelf: 'flex-start' }}>
                <span>✨</span> Question {currentQuestion + 1} of {totalQuestions}
            </div>

            {/* Progress Bar */}
            <div className="quiz-progress-track">
                <div
                    className="quiz-progress-fill"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Question Card */}
            <div className="quiz-card">
                <h2 className="quiz-question">
                    {question.question}
                </h2>

                {/* Options */}
                <div className="quiz-options-stack">
                    {question.options.map((option) => (
                        <button
                            key={option.id}
                            className={`quiz-opt-btn ${selectedOption === option.id ? 'selected' : ''}`}
                            onClick={() => handleOptionSelect(option)}
                            disabled={selectedOption !== null}
                        >
                            <span style={{ fontSize: '1.5rem' }}>{option.emoji}</span>
                            <span>{option.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
