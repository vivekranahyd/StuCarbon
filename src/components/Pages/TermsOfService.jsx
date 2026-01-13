import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function TermsOfService() {
    return (
        <>
            <Helmet>
                <title>Terms of Service | StuCarbon - Student Carbon Footprint Calculator</title>
                <meta name="description" content="Read the Terms of Service for StuCarbon's Student Carbon Footprint Calculator. Understand your rights and responsibilities when using our service." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://stucarbon.com/terms-of-service" />
            </Helmet>

            <div className="legal-page">
                <header className="legal-header">
                    <h1 className="legal-title">Terms of Service</h1>
                    <p className="legal-updated">Last updated: January 14, 2026</p>
                </header>

                <div className="legal-content">
                    <p>
                        Welcome to StuCarbon! These Terms of Service ("Terms") govern your use of our website
                        at stucarbon.com and our Student Carbon Footprint Calculator (collectively, the "Service").
                        By accessing or using our Service, you agree to be bound by these Terms.
                    </p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using StuCarbon, you accept and agree to be bound by these Terms of
                        Service and our <Link to="/privacy-policy">Privacy Policy</Link>. If you do not agree
                        to these terms, please do not use our Service.
                    </p>

                    <h2>2. Description of Service</h2>
                    <p>
                        StuCarbon provides a free online Student Carbon Footprint Calculator that allows users to:
                    </p>
                    <ul>
                        <li>Estimate their monthly carbon dioxide (CO2) emissions based on lifestyle choices</li>
                        <li>Compare their carbon footprint to average student emissions</li>
                        <li>Receive personalized tips to reduce their environmental impact</li>
                        <li>Share their results on social media platforms</li>
                    </ul>

                    <h2>3. Use of the Service</h2>
                    <h3>3.1 Eligibility</h3>
                    <p>
                        You may use our Service if you are at least 13 years of age. If you are under 18,
                        you represent that you have your parent's or guardian's permission to use the Service.
                    </p>

                    <h3>3.2 Acceptable Use</h3>
                    <p>You agree NOT to:</p>
                    <ul>
                        <li>Use the Service for any unlawful purpose</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                        <li>Interfere with or disrupt the Service</li>
                        <li>Use automated systems to access the Service without permission</li>
                        <li>Copy, modify, or distribute our content without authorization</li>
                        <li>Use the Service to harass, abuse, or harm others</li>
                    </ul>

                    <h2>4. Intellectual Property</h2>
                    <p>
                        The Service and its original content, features, and functionality are owned by StuCarbon
                        and are protected by international copyright, trademark, and other intellectual property laws.
                    </p>
                    <p>
                        You may not reproduce, distribute, modify, create derivative works of, publicly display,
                        or exploit any of our content without prior written consent.
                    </p>

                    <h2>5. Disclaimer of Warranties</h2>
                    <p>
                        THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                        EITHER EXPRESS OR IMPLIED.
                    </p>
                    <p>We do not warrant that:</p>
                    <ul>
                        <li>The Service will be uninterrupted or error-free</li>
                        <li>The carbon footprint calculations are 100% accurate</li>
                        <li>The tips provided will result in specific carbon reductions</li>
                        <li>The Service will meet your specific requirements</li>
                    </ul>
                    <p>
                        <strong>Note:</strong> Carbon footprint calculations are estimates based on average data
                        and should be used for educational purposes only. Actual emissions may vary.
                    </p>

                    <h2>6. Limitation of Liability</h2>
                    <p>
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, STUCARBON SHALL NOT BE LIABLE FOR ANY INDIRECT,
                        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES,
                        WHETHER INCURRED DIRECTLY OR INDIRECTLY.
                    </p>

                    <h2>7. Third-Party Links and Advertisements</h2>
                    <p>
                        Our Service may contain links to third-party websites and display advertisements from
                        third-party advertisers (including Google AdSense). We are not responsible for the
                        content, privacy policies, or practices of third-party sites or advertisers.
                    </p>

                    <h2>8. Modifications to Service</h2>
                    <p>
                        We reserve the right to modify, suspend, or discontinue the Service at any time without
                        notice. We shall not be liable to you or any third party for any modification, suspension,
                        or discontinuance of the Service.
                    </p>

                    <h2>9. Changes to Terms</h2>
                    <p>
                        We may revise these Terms at any time by posting the updated version on this page.
                        Your continued use of the Service after changes indicates acceptance of the new Terms.
                    </p>

                    <h2>10. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of the
                        jurisdiction in which StuCarbon operates, without regard to conflict of law principles.
                    </p>

                    <h2>11. Contact Information</h2>
                    <p>
                        For questions about these Terms of Service, please contact us at:
                    </p>
                    <ul>
                        <li>Email: legal@stucarbon.com</li>
                        <li>Website: <Link to="/contact">stucarbon.com/contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
