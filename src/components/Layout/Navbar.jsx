import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Pages/Pages.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <Link to="/" className="navbar-logo">
                    <span>🌱</span>
                    <span>StuCarbon</span>
                    <span className="navbar-free-badge">FREE</span>
                </Link>

                <button
                    className="navbar-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                <div className={`navbar-nav ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
                        Calculator
                    </Link>
                    <Link to="/kids" className="navbar-link navbar-link-kids" onClick={() => setIsOpen(false)}>
                        🧸 Kids
                    </Link>
                    <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link to="/blog" className="navbar-link" onClick={() => setIsOpen(false)}>
                        Blog
                    </Link>
                    <Link to="/contact" className="navbar-link" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                    {!isHome && (
                        <Link to="/" className="navbar-cta" onClick={() => setIsOpen(false)}>
                            Start Quiz 🚀
                            <span className="navbar-cta-free">FREE</span>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
