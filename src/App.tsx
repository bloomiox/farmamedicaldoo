import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import Compliance from './components/Compliance';
import RoottImplants from './components/RoottImplants';
import Education from './components/Education';
import EventDetails from './components/EventDetails';
import Partners from './components/Partners';
import EducationExcerpt from './components/EducationExcerpt';
import KeroxDental from './components/KeroxDental';

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <AboutSection />
      <EducationExcerpt />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/roott-implants" element={<RoottImplants />} />
          <Route path="/kerox-dental" element={<KeroxDental />} />
          <Route path="/education" element={<Education />} />
          <Route path="/event-details/:id" element={<EventDetails />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;