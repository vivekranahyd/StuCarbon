
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TopNav.css';

export default function TopNav() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    const isArticlePage = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';

    return (
        <nav className={`top-nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo - Earth & Nature Aesthetic */}
                <Link to="/" className="nav-logo" aria-label="StuCarbon Home">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
                        <defs>
                            <linearGradient id="natureGradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#065f46" /> {/* Forest Green */}
                                <stop offset="1" stopColor="#10b981" /> {/* Emerald */}
                            </linearGradient>
                            <linearGradient id="earthGradient" x1="10" y1="10" x2="30" y2="40" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#78350f" /> {/* Deep Earth Brown */}
                                <stop offset="1" stopColor="#b45309" /> {/* Golden Brown */}
                            </linearGradient>
                            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
                            </filter>
                        </defs>

                        {/* Elegant Leaf Shape (Green) */}
                        <path
                            d="M24 4C24 4 10 14 10 26C10 34.8 17.2 42 26 42C26 42 24 30 24 4Z"
                            fill="url(#natureGradient)"
                            filter="url(#softShadow)"
                        />

                        {/* Minimal Earth Accent (Brown) */}
                        <path
                            d="M24 42C24 42 38 32 38 20C38 14 34 8 24 4C27 16 26 36 24 42Z"
                            fill="url(#earthGradient)"
                            opacity="0.9"
                        />

                        {/* Central Vein */}
                        <path
                            d="M24 4C24 4 24 30 24 42"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            opacity="0.4"
                        />
                    </svg>
                </Link>

                {/* Desktop Links */}
                <div className="nav-links-desktop">
                    <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                    <Link to="/students" className={`nav-link ${isActive('/students') ? 'active' : ''}`}>Students Calculator</Link>
                    <Link to="/kids" className={`nav-link ${isActive('/kids') ? 'active' : ''}`}>Kids Calculator</Link>
                    <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`}>Blog</Link>
                </div>

                {isArticlePage && (
                    <div className="nav-article-title">
                        StuCarbon
                    </div>
                )}

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/" className={`mobile-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                    <Link to="/students" className={`mobile-link ${isActive('/students') ? 'active' : ''}`}>Students Calculator</Link>
                    <Link to="/kids" className={`mobile-link ${isActive('/kids') ? 'active' : ''}`}>Kids Calculator</Link>
                    <Link to="/blog" className={`mobile-link ${isActive('/blog') ? 'active' : ''}`}>Blog</Link>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div className="nav-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
            )}
        </nav>
    );
}
