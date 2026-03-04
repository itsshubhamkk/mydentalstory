import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
    onBooking: () => void;
}

const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
];

export default function Navbar({ onBooking }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2.5' : 'py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <NavLink to="/" className="glass-logo-pill">
                            <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 4.5 5.5 4 4.5 4C3 4 2 5 2 6.5C2 9 4.5 11 7 11C7.5 11 8 10.8 8.5 10.5C8.2 11.2 8 12 8 13C8 16.5 10 20 12 22C14 20 16 16.5 16 13C16 12 15.8 11.2 15.5 10.5C16 10.8 16.5 11 17 11C19.5 11 22 9 22 6.5C22 5 21 4 19.5 4C18.5 4 17.5 4.5 17 5.5C16.5 3.5 14.5 2 12 2Z" />
                            </svg>
                            <span className="text-sm font-bold uppercase tracking-widest text-white/90">MyDentalStory</span>
                        </NavLink>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center glass-nav-container px-2 py-1.5 gap-0.5">
                            {NAV_LINKS.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.to === '/'}
                                    className={({ isActive }) =>
                                        `glass-nav-pill${isActive ? ' active' : ''}`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center gap-3">
                            <a href="tel:+919876543210" className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white/95 transition-colors">
                                <Phone className="w-4 h-4" />
                                +91 98765 43210
                            </a>
                            <button onClick={onBooking} className="glass-cta-pill">
                                Book Appointment
                            </button>
                        </div>

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden glass-logo-pill p-2.5"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X className="w-5 h-5 text-white/80" /> : <Menu className="w-5 h-5 text-white/80" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
                    <div className="absolute top-0 right-0 h-full w-72 bg-slate-900/95 backdrop-blur-xl border-l border-white/8 p-6 pt-24 flex flex-col gap-2 shadow-2xl">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === '/'}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `px-5 py-3 rounded-2xl text-base font-medium transition-colors ${isActive
                                        ? 'text-teal-400 bg-teal-900/30'
                                        : 'text-white/75 hover:text-white hover:bg-white/8'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                            <a href="tel:+919876543210" className="flex items-center gap-2 text-white/70 px-5 py-2">
                                <Phone className="w-4 h-4" /> +91 98765 43210
                            </a>
                            <button
                                onClick={() => { setMenuOpen(false); onBooking(); }}
                                className="glass-cta-pill text-center"
                            >
                                Book Appointment
                            </button>
                            <button
                                onClick={() => { setMenuOpen(false); navigate('/contact'); }}
                                className="btn-outline text-sm py-2.5 px-5"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
