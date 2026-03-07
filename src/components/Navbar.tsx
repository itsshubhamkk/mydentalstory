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
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 shadow-md' : 'py-5'}`} style={{ background: 'var(--surface)', borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <NavLink to="/" className="nav-logo" style={{ background: 'transparent', border: 'none' }}>
                            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="MyDentalStory" className="w-8 h-8 flex-shrink-0 object-contain drop-shadow-sm" />
                            <span className="text-sm font-bold uppercase tracking-[0.14em] hidden sm:block" style={{ color: 'var(--text)' }}>MyDentalStory</span>
                        </NavLink>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-6">
                            {NAV_LINKS.map(link => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.to === '/'}
                                    className={({ isActive }) => `text-sm font-semibold transition-colors ${isActive ? '' : 'hover:opacity-75'}`}
                                    style={({ isActive }) => ({ color: isActive ? 'var(--accent)' : 'var(--text)' })}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>

                        {/* Desktop CTAs */}
                        <div className="hidden md:flex items-center gap-4">
                            <a href="tel:+917972752597" className="flex items-center gap-1.5 text-xs transition-colors font-bold hover:opacity-80" style={{ color: 'var(--text)' }}>
                                <Phone className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                                +91 79727 52597
                            </a>
                            <button onClick={onBooking} className="nav-cta">
                                Book Appointment
                            </button>
                        </div>

                        {/* Mobile */}
                        <div className="md:hidden flex items-center gap-2">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="p-2.5 transition-colors"
                                aria-label="Toggle menu"
                                style={{ color: 'var(--text)' }}
                            >
                                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="absolute inset-0 backdrop-blur-sm" style={{ background: 'rgba(0,0,0,0.6)' }} onClick={() => setMenuOpen(false)} />
                    <div className="absolute top-0 right-0 h-full w-72 flex flex-col gap-2 p-6 pt-24 shadow-2xl" style={{ background: 'var(--bg)', borderLeft: '1px solid var(--border)' }}>
                        {NAV_LINKS.map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === '/'}
                                onClick={() => setMenuOpen(false)}
                                style={({ isActive }) => ({
                                    padding: '0.875rem 1.25rem',
                                    borderRadius: '0.875rem',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    color: isActive ? 'var(--accent)' : 'var(--text)',
                                    background: isActive ? 'var(--accent-lite)' : 'transparent',
                                    transition: 'all 0.2s',
                                })}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <div className="mt-4 pt-4 flex flex-col gap-3" style={{ borderTop: '1px solid var(--border)' }}>
                            <a href="tel:+917972752597" className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                                <Phone className="w-4 h-4" /> +91 79727 52597
                            </a>
                            <button onClick={() => { setMenuOpen(false); onBooking(); }} className="btn btn-primary text-sm py-3">
                                Book Appointment
                            </button>
                            <button onClick={() => { setMenuOpen(false); navigate('/contact'); }} className="btn btn-outline text-sm py-3">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
