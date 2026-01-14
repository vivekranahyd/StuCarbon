import { useState } from 'react';
import { Link } from 'react-router-dom';
import { questions } from '../../data/questions';
import { Button, ProgressBar } from '../UI';
import './Quiz.css';

export default function Quiz({ onComplete, onGoHome }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isTransitioning, setIsTransitioning] = useState(false);

    const question = questions[currentQuestion];
    const totalQuestions = questions.length;
    const selectedOption = answers[question.id];

    const handleOptionSelect = (optionId) => {
        // Store the answer
        const newAnswers = {
            ...answers,
            [question.id]: optionId
        };
        setAnswers(newAnswers);

        // Auto-advance after a brief delay to show selection
        setIsTransitioning(true);

        setTimeout(() => {
            if (currentQuestion < totalQuestions - 1) {
                // Go to next question
                setCurrentQuestion(prev => prev + 1);
            } else {
                // Quiz complete - submit with the new answers
                onComplete(newAnswers);
            }
            setIsTransitioning(false);
        }, 400);
    };

    const handleNext = () => {
        if (!selectedOption) return;

        setIsTransitioning(true);

        setTimeout(() => {
            if (currentQuestion < totalQuestions - 1) {
                setCurrentQuestion(prev => prev + 1);
            } else {
                // Quiz complete
                onComplete(answers);
            }
            setIsTransitioning(false);
        }, 300);
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentQuestion(prev => prev - 1);
                setIsTransitioning(false);
            }, 300);
        }
    };

    const isLastQuestion = currentQuestion === totalQuestions - 1;

    return (
        <div className="quiz-container">
            {/* Header with Home button and title */}
            <div className="quiz-top-header">
                <button className="quiz-home-btn" onClick={onGoHome}>
                    🏠 Home
                </button>
                <div className="quiz-logo">
                    <span className="quiz-logo-icon">🌱</span>
                    <span className="quiz-logo-text">StuCarbon</span>
                </div>
            </div>

            <div className="quiz-header">
                <h2 className="quiz-title">
                    <span className="text-gradient">Quick Carbon Check</span> 🌱
                </h2>
                <p className="quiz-subtitle">Answer honestly - no judgment, just insights!</p>
            </div>

            <div className="quiz-progress">
                <ProgressBar current={currentQuestion + 1} total={totalQuestions} />
            </div>

            <div className={`question-card ${isTransitioning ? '' : 'question-entering'}`}>
                <div className="question-number">
                    <span>{question.emoji}</span>
                    <span>Question {currentQuestion + 1}</span>
                </div>

                <div className="question-emoji">{question.emoji}</div>

                <h3 className="question-text">{question.question}</h3>

                <div className="options-grid">
                    {question.options.map(option => (
                        <button
                            key={option.id}
                            className={`option-button ${selectedOption === option.id ? 'selected' : ''}`}
                            onClick={() => handleOptionSelect(option.id)}
                            disabled={isTransitioning}
                        >
                            <span className="option-emoji">{option.emoji}</span>
                            <div className="option-content">
                                <span className="option-label">{option.label}</span>
                            </div>
                            <div className="option-check">
                                {selectedOption === option.id && (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="quiz-navigation">
                <Button
                    variant="ghost"
                    onClick={handleBack}
                    disabled={currentQuestion === 0}
                >
                    ← Back
                </Button>

                <Button
                    variant="primary"
                    onClick={handleNext}
                    disabled={!selectedOption}
                >
                    {isLastQuestion ? 'See Results 🎉' : 'Next →'}
                </Button>
            </div>
        </div>
    );
}
