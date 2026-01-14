import { Link } from 'react-router-dom';
import '../Pages/Pages.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <span>🌱</span>
                        <span>StuCarbon</span>
                        <span className="footer-free-badge">100% FREE</span>
                    </div>
                </div>

                <div className="footer-nav">
                    <h4>Calculators</h4>
                    <ul>
                        <li><Link to="/">Student Quiz 🎓</Link></li>
                        <li><Link to="/kids">Kids Quiz 🧸</Link></li>
                        <li><Link to="/about">How It Works</Link></li>
                    </ul>
                </div>

                <div className="footer-nav">
                    <h4>Resources</h4>
                    <ul>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/blog/understanding-carbon-footprint">Carbon Footprint Guide</Link></li>
                        <li><Link to="/blog/sustainable-dorm-living">Sustainability Tips</Link></li>
                    </ul>
                </div>

                <div className="footer-nav">
                    <h4>Legal</h4>
                    <ul>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-service">Terms of Service</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">
                    © {currentYear} StuCarbon. All rights reserved. | stucarbon.com | <strong>100% Free Forever</strong>
                </p>
                <div className="footer-links">
                    <Link to="/privacy-policy">Privacy</Link>
                    <Link to="/terms-of-service">Terms</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
