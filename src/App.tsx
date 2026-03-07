import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0 }); }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4" style={{ background: 'var(--bg)' }}>
      <div className="text-8xl font-black opacity-15" style={{ fontFamily: "'Inter', sans-serif", color: 'var(--accent)' }}>404</div>
      <h1 className="text-2xl font-bold mt-4" style={{ color: 'var(--text)', fontFamily: "'Inter', sans-serif" }}>Page not found</h1>
      <p className="mt-2 text-sm" style={{ color: 'var(--text-2)' }}>The page you're looking for doesn't exist.</p>
      <a href="#/" className="btn btn-primary mt-8">Go Home</a>
    </div>
  );
}

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Navbar onBooking={() => setBookingOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage onBooking={() => setBookingOpen(true)} />} />
          <Route path="/services" element={<ServicesPage onBooking={() => setBookingOpen(true)} />} />
          <Route path="/about" element={<AboutPage onBooking={() => setBookingOpen(true)} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}

export default App;
