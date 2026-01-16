import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Layout
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import TopNav from './components/Layout/TopNav';

// Calculator Components
import Landing from './components/Landing/Landing';
import Quiz from './components/Quiz/Quiz';
import Results from './components/Results/Results';
import Tips from './components/Tips/Tips';
import ShareCard from './components/Share/ShareCard';

// Kids Calculator Components
import { KidsLanding, KidsQuiz, KidsResults } from './components/Kids';

// Pages
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Blog, { BlogPost } from './components/Pages/Blog';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
import TermsOfService from './components/Pages/TermsOfService';
import HomePage from './components/Pages/HomePage';

// Utils
import { calculateFootprint } from './utils/carbonCalculator';
import { safeJsonStringify } from './utils/jsonLd';

import './index.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Calculator flow screens
const SCREENS = {
  LANDING: 'landing',
  QUIZ: 'quiz',
  RESULTS: 'results',
  TIPS: 'tips'
};

// Student Calculator page with flow
function StudentCalculator() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.LANDING);
  const [results, setResults] = useState(null);
  const [showShare, setShowShare] = useState(false);

  const handleStartQuiz = () => {
    setCurrentScreen(SCREENS.QUIZ);
    window.scrollTo(0, 0);
  };

  const handleQuizComplete = (answers) => {
    const calculatedResults = calculateFootprint(answers);
    setResults(calculatedResults);
    setCurrentScreen(SCREENS.RESULTS);
    window.scrollTo(0, 0);
  };

  const handleShowTips = () => {
    setCurrentScreen(SCREENS.TIPS);
    window.scrollTo(0, 0);
  };

  const handleBackToResults = () => {
    setCurrentScreen(SCREENS.RESULTS);
    window.scrollTo(0, 0);
  };

  const handleShare = () => {
    setShowShare(true);
  };

  const handleCloseShare = () => {
    setShowShare(false);
  };

  const handleRetake = () => {
    setResults(null);
    setCurrentScreen(SCREENS.QUIZ);
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    setResults(null);
    setCurrentScreen(SCREENS.LANDING);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Helmet>
        <title>Student Carbon Footprint Calculator | StuCarbon - 100% Free Quiz</title>
        <meta name="description" content="What's your carbon score? 🎓 Take the 2-minute Student Footprint Quiz! Find out if your dorm life, diet, and commute are eco-friendly—or eco-disasters. 🌍💸" />
        <link rel="canonical" href="https://stucarbon.com/students" />
      </Helmet>

      {currentScreen === SCREENS.LANDING && (
        <Landing onStart={handleStartQuiz} />
      )}

      {currentScreen === SCREENS.QUIZ && (
        <Quiz onComplete={handleQuizComplete} onGoHome={handleGoHome} />
      )}

      {currentScreen === SCREENS.RESULTS && results && (
        <Results
          results={results}
          onShowTips={handleShowTips}
          onShare={handleShare}
          onRetake={handleRetake}
          onGoHome={handleGoHome}
        />
      )}

      {currentScreen === SCREENS.TIPS && results && (
        <Tips
          tips={results.personalizedTips}
          onBack={handleBackToResults}
          onShare={handleShare}
          onGoHome={handleGoHome}
        />
      )}

      {showShare && results && (
        <ShareCard
          results={results}
          onClose={handleCloseShare}
        />
      )}
    </>
  );
}

// Kids Calculator page with its own flow
function KidsCalculator() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [score, setScore] = useState(null);

  const handleStartQuiz = () => {
    setCurrentScreen('quiz');
    window.scrollTo(0, 0);
  };

  const handleQuizComplete = (totalScore, answers) => {
    setScore(totalScore);
    setCurrentScreen('results');
    window.scrollTo(0, 0);
  };

  const handleRetake = () => {
    setScore(null);
    setCurrentScreen('quiz');
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    setScore(null);
    setCurrentScreen('landing');
    window.scrollTo(0, 0);
  };

  // Inject JSON-LD structured data directly into head
  useEffect(() => {
    const kidsStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Carbon Footprint Calculator for Kids",
      "alternateName": "StuCarbon Kids Planet Hero Quiz",
      "description": "A free, fun carbon footprint calculator designed for kids ages 8-12. Children answer 6 simple questions about their daily habits and earn a Planet Hero Animal Badge while learning about environmental impact.",
      "url": "https://stucarbon.com/kids",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "audience": {
        "@type": "Audience",
        "audienceType": "Children",
        "suggestedMinAge": "8",
        "suggestedMaxAge": "12"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Organization",
        "name": "StuCarbon"
      },
      "educationalLevel": "Elementary School",
      "learningResourceType": "Interactive Quiz",
      "teaches": ["Environmental Awareness", "Carbon Footprint", "Sustainability for Kids"]
    };

    // Remove existing and create new script
    const existingScript = document.getElementById('ld-kids-app');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = 'ld-kids-app';
    script.type = 'application/ld+json';
    script.textContent = safeJsonStringify(kidsStructuredData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('ld-kids-app');
      if (el) el.remove();
    };
  }, []);

  return (
    <>
      <Helmet>
        {/* Primary SEO Meta Tags */}
        <title>Carbon Footprint Calculator for Kids | Free Environmental Quiz | StuCarbon</title>
        <meta name="title" content="Carbon Footprint Calculator for Kids | Free Environmental Quiz | StuCarbon" />
        <meta name="description" content="Kids! Become a Planet Hero today! 🦸‍♂️ Take our fun, free Carbon Footprint Quiz. Answer simple questions, earn badges, and learn how to save the Earth!" />
        <meta name="keywords" content="carbon footprint calculator for kids, kids carbon footprint quiz, children's environmental calculator, carbon footprint for children, kid-friendly carbon calculator, eco quiz for kids, environmental quiz for children, planet hero quiz, free kids carbon calculator, carbon footprint game for kids" />
        <link rel="canonical" href="https://stucarbon.com/kids" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stucarbon.com/kids" />
        <meta property="og:title" content="Carbon Footprint Calculator for Kids | Free Planet Hero Quiz" />
        <meta property="og:description" content="Fun, free carbon footprint calculator for kids! Help your child learn about their environmental impact with our kid-friendly 2-minute quiz. Earn a Planet Hero Animal Badge!" />
        <meta property="og:image" content="https://stucarbon.com/og-image-kids.png" />
        <meta property="og:site_name" content="StuCarbon" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://stucarbon.com/kids" />
        <meta name="twitter:title" content="Carbon Footprint Calculator for Kids | Free Planet Hero Quiz" />
        <meta name="twitter:description" content="Fun, free carbon footprint calculator for kids! Help your child learn about their environmental impact with our kid-friendly 2-minute quiz." />
        <meta name="twitter:image" content="https://stucarbon.com/og-image-kids.png" />
      </Helmet>

      {currentScreen === 'landing' && (
        <KidsLanding onStart={handleStartQuiz} />
      )}

      {currentScreen === 'quiz' && (
        <KidsQuiz onComplete={handleQuizComplete} onGoHome={handleGoHome} />
      )}

      {currentScreen === 'results' && score !== null && (
        <KidsResults score={score} onRetake={handleRetake} onGoHome={handleGoHome} />
      )}
    </>
  );
}

function App() {
  const location = useLocation();

  // Hide navbar on calculator pages to keep them clean
  const isHomePage = location.pathname === '/';
  const isStudentsPage = location.pathname.startsWith('/students');
  const isKidsPage = location.pathname.startsWith('/kids');
  const hideNavbar = isHomePage || isStudentsPage || isKidsPage;

  return (
    <>
      <ScrollToTop />
      <Helmet>
        <title>Student Carbon Footprint Calculator | StuCarbon - Calculate Your Impact</title>
        <meta name="title" content="Student Carbon Footprint Calculator | StuCarbon - Calculate Your Impact" />
        <meta name="description" content="What's your campus impact? 🌍 Take our free, 2-minute Student Carbon Footprint Calculator. Get personalized tips to save money and the planet!" />
        <meta name="keywords" content="student carbon footprint calculator, carbon footprint quiz, student sustainability, campus carbon calculator, college carbon footprint, environmental impact calculator, student eco calculator, carbon emissions student, university sustainability" />
        <meta name="author" content="StuCarbon" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://stucarbon.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stucarbon.com/" />
        <meta property="og:title" content="Student Carbon Footprint Calculator | StuCarbon" />
        <meta property="og:description" content="Free 2-minute quiz to calculate your carbon footprint as a student. Get personalized tips to reduce your environmental impact!" />
        <meta property="og:image" content="https://stucarbon.com/og-image.png" />
        <meta property="og:site_name" content="StuCarbon" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://stucarbon.com/" />
        <meta property="twitter:title" content="Student Carbon Footprint Calculator | StuCarbon" />
        <meta property="twitter:description" content="Free 2-minute quiz to calculate your carbon footprint as a student. Get personalized tips to reduce your environmental impact!" />
        <meta property="twitter:image" content="https://stucarbon.com/og-image.png" />
      </Helmet>
      <TopNav />

      <main style={{ paddingTop: '3.5rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentCalculator />} />
          <Route path="/kids" element={<KidsCalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
