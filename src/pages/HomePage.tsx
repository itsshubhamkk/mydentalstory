import { useEffect, useRef } from 'react';
import {
    Phone, MapPin, Clock, Calendar, MessageCircle,
    Shield, Sparkles, Stethoscope, AlignCenter,
    Heart, Monitor, Wallet, Star, ChevronRight, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP = '919876543210';

const SERVICES = [
    { icon: Shield, title: 'Preventive Care', desc: 'Cleanings, exams, and personalized hygiene plans to keep your smile healthy.' },
    { icon: Sparkles, title: 'Cosmetic Dentistry', desc: 'Whitening, veneers, and smile design for a confident, radiant smile.' },
    { icon: Stethoscope, title: 'Restorative Work', desc: 'Fillings, crowns, bridges, and implants to restore your dental health.' },
    { icon: AlignCenter, title: 'Orthodontics', desc: 'Clear aligners and braces for all ages to achieve perfect alignment.' },
];

const WHY = [
    { icon: Heart, title: 'Gentle Techniques', desc: 'We prioritize comfort at every step of your treatment journey.' },
    { icon: Monitor, title: 'Modern Technology', desc: 'Digital X-rays, 3D imaging, and same-day crowns.' },
    { icon: Wallet, title: 'Transparent Pricing', desc: 'Clear estimates upfront — no surprise bills, ever.' },
    { icon: Calendar, title: 'Flexible Scheduling', desc: 'Early, late, and weekend appointment slots available.' },
];

const TESTIMONIALS = [
    { quote: 'The team made me feel safe even during a root canal. Truly the best dental experience I\'ve had.', name: 'Ananya R.', role: 'Patient since 2021', rating: 5 },
    { quote: 'My kids actually look forward to checkups here. The staff is amazing with children!', name: 'Marcus T.', role: 'Family Patient', rating: 5 },
    { quote: 'Finally, a dentist who explains everything clearly. No more dental anxiety for me!', name: 'Sofia L.', role: 'Patient since 2022', rating: 5 },
    { quote: 'Incredible experience — from booking to the final result. My smile has never looked better!', name: 'Rahul M.', role: 'Cosmetic Patient', rating: 5 },
    { quote: 'Professional, caring, and efficient. The Invisalign treatment was worth every rupee.', name: 'Preethi K.', role: 'Orthodontic Patient', rating: 5 },
    { quote: 'State-of-the-art clinic with a warm, welcoming team. I recommend them to everyone.', name: 'Vikram S.', role: 'Implant Patient', rating: 5 },
];

const STATS = [
    { value: '5,000+', label: 'Happy Patients' },
    { value: '12+', label: 'Years Experience' },
    { value: '15+', label: 'Services Offered' },
    { value: '4.9★', label: 'Google Rating' },
];

function useReveal() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add('is-visible'); obs.unobserve(el); } },
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const ref = useReveal();
    return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

interface HomePageProps {
    onBooking: () => void;
}

export default function HomePage({ onBooking }: HomePageProps) {
    const waLink = (msg?: string) =>
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg || "Hi, I'd like to book a dental appointment")}`;

    return (
        <div className="min-h-screen bg-[#f6f8fa]">
            <div className="grain-overlay" />

            {/* ─── HERO ─────────────────────────────────────────────── */}
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-clinic.jpg"
                        alt="MyDentalStory Dental Clinic modern interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/55 to-[#f6f8fa]/95" />
                </div>

                <div className="relative z-10 text-center px-4 pt-24 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-600/10 border border-teal-600/20 mb-6 animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        <span className="text-teal-700 text-xs font-semibold uppercase tracking-widest">Now Accepting New Patients</span>
                    </div>

                    <h1 className="hero-title animate-fade-in-up">
                        My<span className="text-teal-600">Dental</span>Story
                    </h1>
                    <p className="hero-subtitle mt-3 animate-fade-in-up animate-delay-200">
                        Gentle Care · Beautiful Smiles
                    </p>
                    <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto animate-fade-in-up animate-delay-300 leading-relaxed">
                        Modern dentistry with a personal touch. We craft confident, healthy smiles for your entire family in the heart of Pune.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up animate-delay-400">
                        <button onClick={onBooking} className="btn-primary text-base px-7 py-4">
                            <Calendar className="w-5 h-5" />
                            Book Appointment
                        </button>
                        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-7 py-4">
                            <MessageCircle className="w-5 h-5" />
                            Chat on WhatsApp
                        </a>
                    </div>

                    {/* Trust chips */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-8 animate-fade-in-up animate-delay-500">
                        {['₹ Transparent Pricing', '✓ No Hidden Fees', '⏱ Same-Day Appointments'].map(item => (
                            <span key={item} className="px-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-xs font-medium text-slate-600">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-8 left-0 right-0 px-4">
                    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-sm text-slate-600">
                        <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                            <Phone className="w-4 h-4 text-teal-500" /> +91 98765 43210
                        </a>
                        <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-teal-500" /> 12 Maple Avenue, Pune
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-teal-500" /> Mon–Fri 8am–6pm
                        </span>
                    </div>
                </div>
            </section>

            {/* ─── STATS ─────────────────────────────────────────────── */}
            <section className="py-16 px-4 sm:px-6 bg-white border-y border-slate-100">
                <RevealSection>
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                        {STATS.map((s, i) => (
                            <div key={i} className="stat-item text-center">
                                <span className="text-3xl sm:text-4xl font-black text-teal-600">{s.value}</span>
                                <span className="block mt-1.5 text-xs font-medium text-slate-500 uppercase tracking-widest">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </RevealSection>
            </section>

            {/* ─── SERVICES ───────────────────────────────────────────── */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    <RevealSection>
                        <span className="section-label">Our Services</span>
                        <h2 className="section-title mt-3">Complete dental care for your whole family.</h2>
                        <p className="mt-4 text-slate-500 leading-relaxed">From routine cleanings to full smile transformations — we offer every treatment your family needs under one roof.</p>
                        <div className="mt-10 space-y-2">
                            {SERVICES.map((s, i) => (
                                <div key={i} className="service-item">
                                    <div className="icon-ring">
                                        <s.icon className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">{s.title}</h3>
                                        <p className="text-sm text-slate-500 mt-0.5">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all">
                            View all services <ChevronRight className="w-4 h-4" />
                        </Link>
                    </RevealSection>

                    <RevealSection>
                        <div className="image-card h-[500px] lg:h-[620px]">
                            <img src="/images/services-dentist.jpg" alt="Dentist consulting with patient" className="w-full h-full object-cover" />
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ─── WHY CHOOSE US ──────────────────────────────────────── */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    <RevealSection className="order-2 lg:order-1">
                        <div className="image-card h-[500px] lg:h-[580px]">
                            <img src="/images/why-closeup.jpg" alt="Advanced dental procedure" className="w-full h-full object-cover" />
                        </div>
                    </RevealSection>

                    <RevealSection className="order-1 lg:order-2">
                        <span className="section-label">Why Choose Us</span>
                        <h2 className="section-title mt-3">Modern care, gentle hands.</h2>
                        <p className="mt-4 text-slate-500 leading-relaxed">We combine cutting-edge technology with genuine care, ensuring your visits are comfortable, transparent, and effective.</p>
                        <div className="mt-10 space-y-2">
                            {WHY.map((item, i) => (
                                <div key={i} className="service-item">
                                    <div className="icon-ring">
                                        <item.icon className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">{item.title}</h3>
                                        <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ─── PATIENT CARE ───────────────────────────────────────── */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    <RevealSection>
                        <span className="section-label">Patient Comfort</span>
                        <h2 className="section-title mt-3">We make your visit calm and predictable.</h2>
                        <p className="mt-4 text-slate-500 leading-relaxed">From the moment you walk in, you'll experience a relaxed, welcoming environment designed around your comfort.</p>
                        <div className="mt-10 space-y-5">
                            {[
                                { icon: Stethoscope, title: 'Sedation Options', desc: 'Nitrous oxide and gentle numbing for anxiety-free care.' },
                                { icon: MessageCircle, title: 'Clear Communication', desc: 'We explain every step before we begin — no surprises.' },
                                { icon: Heart, title: 'Comfort Amenities', desc: 'Noise-canceling headphones, warm towels, calming music.' },
                            ].map((c, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                                        <c.icon className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">{c.title}</h3>
                                        <p className="text-sm text-slate-500 mt-0.5">{c.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a href={waLink('Hi, I want to know about comfort options at your clinic')} target="_blank" rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all">
                            Ask about comfort options <ChevronRight className="w-4 h-4" />
                        </a>
                    </RevealSection>

                    <RevealSection>
                        <div className="image-card h-[500px] lg:h-[580px]">
                            <img src="/images/care-patient.jpg" alt="Comfortable patient experience" className="w-full h-full object-cover" />
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ─── TESTIMONIALS ───────────────────────────────────────── */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <RevealSection>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="section-label">Patient Stories</span>
                            <h2 className="section-title mt-3">Real smiles. Real stories.</h2>
                            <p className="mt-3 text-slate-500 max-w-xl mx-auto">Hear from the patients whose lives we've touched — one smile at a time.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {TESTIMONIALS.map((t, i) => (
                                <div key={i} className="testimonial-card">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(t.rating)].map((_, j) => (
                                            <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-slate-700 leading-relaxed text-sm">"{t.quote}"</p>
                                    <div className="mt-5 flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm">
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                                            <p className="text-xs text-slate-500">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealSection>
            </section>

            {/* ─── CTA SECTION ────────────────────────────────────────── */}
            <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/closing-team.jpg" alt="MyDentalStory clinic team" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-slate-900/85" />
                </div>
                <RevealSection>
                    <div className="relative z-10 text-center px-4 py-20 max-w-2xl mx-auto">
                        <h2 className="font-black text-4xl sm:text-5xl text-white leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                            Start Your Dental<br />Story Today
                        </h2>
                        <p className="mt-5 text-white/75 text-lg leading-relaxed">
                            Book your first visit and discover why thousands of Pune families trust us with their smiles.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                            <button onClick={onBooking} className="btn-primary px-8 py-4 text-base">
                                <Calendar className="w-5 h-5" /> Book Appointment
                            </button>
                            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-8 py-4 text-base">
                                <MessageCircle className="w-5 h-5" /> WhatsApp Us
                            </a>
                        </div>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            {['Free first consultation', 'Flexible payment plans', 'Family discounts'].map(f => (
                                <span key={f} className="flex items-center gap-1.5 text-white/80 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-400" /> {f}
                                </span>
                            ))}
                        </div>
                    </div>
                </RevealSection>
            </section>

            {/* Floating WhatsApp */}
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Chat on WhatsApp">
                <MessageCircle className="w-7 h-7 text-white" />
            </a>
        </div>
    );
}
