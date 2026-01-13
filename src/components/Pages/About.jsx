import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '../UI';
import './Pages.css';

export default function About() {
    return (
        <>
            <Helmet>
                <title>About StuCarbon | Free Student Carbon Footprint Calculator</title>
                <meta name="description" content="Learn about StuCarbon, the free Student Carbon Footprint Calculator designed to help college and university students measure and reduce their environmental impact." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://stucarbon.com/about" />
            </Helmet>

            <div className="about-page">
                <header className="about-hero animate-fade-in">
                    <div className="about-hero-emoji">🌱</div>
                    <h1>About <span className="text-gradient">StuCarbon</span></h1>
                    <p>
                        Empowering students to understand and reduce their carbon footprint through
                        simple, actionable insights.
                    </p>
                </header>

                <section className="about-mission">
                    <h2>🎯 Our Mission</h2>
                    <p>
                        We believe every student can make a difference. StuCarbon provides a free, easy-to-use
                        Student Carbon Footprint Calculator that helps you understand your environmental impact
                        and discover practical ways to live more sustainably on campus.
                    </p>
                </section>

                <section className="about-features">
                    <div className="about-feature animate-slide-up">
                        <div className="about-feature-icon">⏱️</div>
                        <h3>Quick & Easy</h3>
                        <p>
                            Our Student Carbon Footprint Calculator takes less than 2 minutes.
                            Just 8 simple questions about your daily habits.
                        </p>
                    </div>

                    <div className="about-feature animate-slide-up">
                        <div className="about-feature-icon">🎓</div>
                        <h3>Made for Students</h3>
                        <p>
                            Designed specifically for college and university students, covering
                            dorm life, campus commuting, and student lifestyles.
                        </p>
                    </div>

                    <div className="about-feature animate-slide-up">
                        <div className="about-feature-icon">📊</div>
                        <h3>Science-Based</h3>
                        <p>
                            Our calculations are based on EPA data and peer-reviewed research
                            on carbon emissions from various activities.
                        </p>
                    </div>

                    <div className="about-feature animate-slide-up">
                        <div className="about-feature-icon">💡</div>
                        <h3>Personalized Tips</h3>
                        <p>
                            Get actionable recommendations tailored to your lifestyle to reduce
                            your carbon footprint starting today.
                        </p>
                    </div>

                    <div className="about-feature animate-slide-up">
                        <div className="about-feature-icon">🔒</div>
                        <h3>Privacy First</h3>
                        <p>
                            No account required. Your quiz data is processed locally and never
                            stored on our servers.
                        </p>
                    </div>

                    <div className="about-feature animate-slide-up">
                        <div className="about-feature-icon">🆓</div>
                        <h3>100% Free</h3>
                        <p>
                            StuCarbon is completely free to use. No hidden fees, no premium
                            features locked behind paywalls.
                        </p>
                    </div>
                </section>

                <section className="legal-content" style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <h2>Why Carbon Footprint Matters</h2>
                    <p>
                        The average college student produces approximately <strong>350 kg of CO2 per month</strong>
                        through transportation, food, energy use, and digital activities. Understanding your
                        carbon footprint is the first step toward reducing your environmental impact.
                    </p>
                    <p>
                        Students represent the future leaders of our world. By making sustainable choices now,
                        you're not just reducing emissions – you're building habits that will benefit the
                        planet for decades to come.
                    </p>

                    <div style={{ marginTop: '2rem' }}>
                        <Link to="/">
                            <Button variant="primary" size="lg" icon="🚀">
                                Calculate Your Footprint
                            </Button>
                        </Link>
                    </div>
                </section>

                <section className="legal-content" style={{ marginTop: '3rem' }}>
                    <h2>How It Works</h2>
                    <ol>
                        <li><strong>Take the Quiz:</strong> Answer 8 simple questions about your daily habits</li>
                        <li><strong>See Your Score:</strong> View your monthly CO2 emissions in kg</li>
                        <li><strong>Understand Your Impact:</strong> See how you compare to the average student</li>
                        <li><strong>Get Tips:</strong> Receive personalized recommendations to reduce your footprint</li>
                        <li><strong>Share & Challenge:</strong> Share your results and challenge friends to beat your score</li>
                    </ol>
                </section>

                <section className="legal-content" style={{ marginTop: '3rem' }}>
                    <h2>Contact Us</h2>
                    <p>
                        Have questions, feedback, or suggestions? We'd love to hear from you!
                        Visit our <Link to="/contact">Contact page</Link> to get in touch.
                    </p>
                    <p>
                        For partnership inquiries or press requests, please email us at{' '}
                        <a href="mailto:hello@stucarbon.com">hello@stucarbon.com</a>.
                    </p>
                </section>
            </div>
        </>
    );
}
