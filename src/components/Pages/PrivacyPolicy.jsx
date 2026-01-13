import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function PrivacyPolicy() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | StuCarbon - Student Carbon Footprint Calculator</title>
                <meta name="description" content="Read StuCarbon's Privacy Policy. Learn how we collect, use, and protect your data when using our Student Carbon Footprint Calculator." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://stucarbon.com/privacy-policy" />
            </Helmet>

            <div className="legal-page">
                <header className="legal-header">
                    <h1 className="legal-title">Privacy Policy</h1>
                    <p className="legal-updated">Last updated: January 14, 2026</p>
                </header>

                <div className="legal-content">
                    <p>
                        Welcome to StuCarbon ("we," "our," or "us"). We are committed to protecting your privacy
                        and ensuring transparency about how we handle any information when you use our Student
                        Carbon Footprint Calculator at stucarbon.com (the "Service").
                    </p>

                    <h2>1. Information We Collect</h2>

                    <h3>1.1 Quiz Response Data</h3>
                    <p>
                        When you use our Student Carbon Footprint Calculator, we collect the answers you provide
                        to our quiz questions. This includes information about your:
                    </p>
                    <ul>
                        <li>Transportation habits (commute method, car ownership, flights)</li>
                        <li>Food consumption patterns</li>
                        <li>Living situation and energy usage</li>
                        <li>Digital device usage</li>
                        <li>Shopping habits</li>
                    </ul>
                    <p>
                        <strong>Important:</strong> This data is processed locally in your browser and is NOT
                        stored on our servers. Your quiz responses are not linked to any personal identity.
                    </p>

                    <h3>1.2 Automatically Collected Information</h3>
                    <p>When you visit our website, we may automatically collect:</p>
                    <ul>
                        <li>Device information (browser type, operating system)</li>
                        <li>IP address (anonymized)</li>
                        <li>Pages visited and time spent on pages</li>
                        <li>Referring website</li>
                    </ul>

                    <h3>1.3 Cookies and Tracking Technologies</h3>
                    <p>
                        We use cookies and similar technologies to improve your experience and analyze website traffic.
                        These include:
                    </p>
                    <ul>
                        <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                        <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
                        <li><strong>Advertising cookies:</strong> Used by our advertising partners to show relevant ads</li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use collected information to:</p>
                    <ul>
                        <li>Provide and improve our Student Carbon Footprint Calculator</li>
                        <li>Analyze usage patterns and optimize user experience</li>
                        <li>Display relevant advertisements through Google AdSense</li>
                        <li>Respond to your inquiries and support requests</li>
                        <li>Comply with legal obligations</li>
                    </ul>

                    <h2>3. Third-Party Services</h2>

                    <h3>3.1 Google AdSense</h3>
                    <p>
                        We use Google AdSense to display advertisements. Google may use cookies to serve ads
                        based on your prior visits to our website or other websites. You can opt out of
                        personalized advertising by visiting{' '}
                        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                            Google Ad Settings
                        </a>.
                    </p>

                    <h3>3.2 Google Analytics</h3>
                    <p>
                        We use Google Analytics to analyze website traffic. This service may collect information
                        about your use of our website, which is transmitted to and stored by Google.
                    </p>

                    <h2>4. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your information.
                        However, no method of transmission over the internet is 100% secure.
                    </p>

                    <h2>5. Your Rights</h2>
                    <p>Depending on your location, you may have the right to:</p>
                    <ul>
                        <li>Access the personal information we hold about you</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to processing of your data</li>
                        <li>Withdraw consent at any time</li>
                    </ul>

                    <h2>6. Children's Privacy</h2>
                    <p>
                        Our Service is designed for students of all ages. We do not knowingly collect personal
                        information from children under 13. If you believe we have collected information from a
                        child under 13, please contact us immediately.
                    </p>

                    <h2>7. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes
                        by posting the new Privacy Policy on this page and updating the "Last updated" date.
                    </p>

                    <h2>8. Contact Us</h2>
                    <p>
                        If you have questions about this Privacy Policy, please contact us at:
                    </p>
                    <ul>
                        <li>Email: privacy@stucarbon.com</li>
                        <li>Website: <Link to="/contact">stucarbon.com/contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
