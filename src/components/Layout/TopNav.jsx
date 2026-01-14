import { Link, useLocation } from 'react-router-dom';
import './TopNav.css';

export default function TopNav() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isStudents = location.pathname.startsWith('/students');
    const isKids = location.pathname.startsWith('/kids');
    const isBlog = location.pathname.startsWith('/blog');

    return (
        <nav className="top-nav">
            <div className="top-nav-links">
                <Link
                    to="/"
                    className={`top-nav-link ${isHome ? 'active' : ''}`}
                >
                    🏠 Home
                </Link>
                <Link
                    to="/students"
                    className={`top-nav-link ${isStudents ? 'active' : ''}`}
                >
                    🎓 Student Calculator
                </Link>
                <Link
                    to="/kids"
                    className={`top-nav-link ${isKids ? 'active' : ''}`}
                >
                    🧸 Kids Calculator
                </Link>
                <Link
                    to="/blog"
                    className={`top-nav-link ${isBlog ? 'active' : ''}`}
                >
                    📝 Blog
                </Link>
            </div>
        </nav>
    );
}
