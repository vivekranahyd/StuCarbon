import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Layout
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

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

// Utils
import { calculateFootprint } from './utils/carbonCalculator';

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

// Home page with calculator flow
function Home() {
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
        <meta name="description" content="Calculate your carbon footprint as a student with our FREE 2-minute quiz. Get personalized tips to reduce your environmental impact on campus. Try StuCarbon now - 100% Free!" />
        <link rel="canonical" href="https://stucarbon.com/" />
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

  return (
    <>
      <Helmet>
        <title>Kids Carbon Footprint Calculator | StuCarbon - Free Planet Hero Quiz</title>
        <meta name="description" content="Fun, free carbon footprint quiz for kids ages 8-12! Answer 6 simple questions and earn your Planet Hero Animal Badge. 100% free, kid-friendly, and educational!" />
        <link rel="canonical" href="https://stucarbon.com/kids" />
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

  // Hide navbar on landing page and kids pages to keep them clean
  const isHomePage = location.pathname === '/';
  const isKidsPage = location.pathname.startsWith('/kids');
  const hideNavbar = isHomePage || isKidsPage;

  return (
    <>
      <ScrollToTop />
      {!hideNavbar && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kids" element={<KidsCalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>

      {!isKidsPage && <Footer />}
    </>
  );
}

export default App;
