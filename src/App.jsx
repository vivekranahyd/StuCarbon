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
    // 1. Web Application Schema
    const webAppSchema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Carbon Footprint Calculator for Kids",
      "alternateName": "StuCarbon Kids Planet Hero Quiz",
      "description": "The best free carbon footprint calculator for kids. Fun, educational, and instant results.",
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
      }
    };

    // 2. FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a carbon footprint calculator for kids?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A carbon footprint calculator for kids is a simple tool that helps children understand how their daily choices—like food and travel—affect the Earth."
          }
        },
        {
          "@type": "Question",
          "name": "Is this carbon footprint quiz free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! The StuCarbon Kids Calculator is 100% free and requires no sign-up or personal data."
          }
        }
      ]
    };



    // 4. Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://stucarbon.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Kids Calculator",
          "item": "https://stucarbon.com/kids"
        }
      ]
    };

    // Helper to inject scripts
    const addScript = (id, data) => {
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = safeJsonStringify(data);
      document.head.appendChild(script);
    };

    // Cleanup existing
    ['ld-kids-app', 'ld-kids-faq', 'ld-kids-bread'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });

    // Inject new
    addScript('ld-kids-app', webAppSchema);
    addScript('ld-kids-faq', faqSchema);
    addScript('ld-kids-bread', breadcrumbSchema);

    return () => {
      ['ld-kids-app', 'ld-kids-faq', 'ld-kids-bread'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        {/* Primary SEO Meta Tags */}
        <title>Best Carbon Footprint Calculator for Kids | Free, Fun & Fast</title>
        <meta name="title" content="Best Carbon Footprint Calculator for Kids | Free, Fun & Fast" />
        <meta name="description" content="Calculate your environmental impact with our fun carbon footprint calculator for kids. 100% free, 6 simple questions, and earn your Planet Hero badge today!" />
        <meta name="keywords" content="carbon footprint calculator for kids, kids carbon footprint quiz, environmental footprint for students, free eco quiz for children, sustainability calculator for kids" />
        <link rel="canonical" href="https://stucarbon.com/kids" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stucarbon.com/kids" />
        <meta property="og:title" content="Best Carbon Footprint Calculator for Kids | Planet Hero Quiz" />
        <meta property="og:description" content="Fun, free carbon footprint calculator for kids! Answer simple questions, earn badges, and learn how to save the Earth." />
        <meta property="og:image" content="https://stucarbon.com/og-image-kids.png" />
        <meta property="og:site_name" content="StuCarbon" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://stucarbon.com/kids" />
        <meta name="twitter:title" content="Best Carbon Footprint Calculator for Kids | Planet Hero Quiz" />
        <meta name="twitter:description" content="Fun, free carbon footprint calculator for kids! Help your child learn about their environmental impact with our kid-friendly quiz." />
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
        <meta name="robots" content="index, follow, max-image-preview:large" />
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

      <main style={{ paddingTop: '6rem' }}>
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
