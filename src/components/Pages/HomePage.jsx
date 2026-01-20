import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="home-page">


            <h1 className="home-title">
                <span className="home-title-gradient">Carbon Footprint</span>{' '}
                Calculator
            </h1>

            <p className="home-subtitle">
                Measure your environmental impact with our free, easy-to-use calculators.
                Choose the quiz that fits you best! 🌍
            </p>

            <div className="home-calculators">
                {/* Student Calculator */}
                <Link to="/students" className="home-calc-card home-calc-student">
                    <div className="home-calc-icon">🎓</div>
                    <h2 className="home-calc-title">Student Calculator</h2>
                    <p className="home-calc-desc">For college & high school students (Ages 13+)</p>
                    <ul className="home-calc-features">
                        <li>8 detailed questions</li>
                        <li>Personalized eco tips</li>
                        <li>Compare with avg student</li>
                    </ul>
                    <span className="home-calc-cta">Start Quiz →</span>
                    <span className="home-calc-free">FREE</span>
                </Link>

                {/* Kids Calculator */}
                <Link to="/kids" className="home-calc-card home-calc-kids">
                    <div className="home-calc-icon">🧸</div>
                    <h2 className="home-calc-title">Kids Calculator</h2>
                    <p className="home-calc-desc">Fun quiz for children (Ages 8-12)</p>
                    <ul className="home-calc-features">
                        <li>6 simple questions</li>
                        <li>Earn a Planet Hero badge</li>
                        <li>Kid-friendly design</li>
                    </ul>
                    <span className="home-calc-cta">Start Quiz →</span>
                    <span className="home-calc-free">FREE</span>
                </Link>
            </div>

            <p className="home-footer-text">
                ✅ 100% Free • No signup required • Anonymous
            </p>
        </div>
    );
}
