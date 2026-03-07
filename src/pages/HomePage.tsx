import { useEffect, useRef } from 'react';
import {
    Calendar, MessageCircle, ChevronRight, Star,
    Shield, Sparkles, Stethoscope, AlignCenter, Heart, Monitor, Wallet
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { img } from '../utils/images';

const WA = '917972752597';
const wa = () => `https://api.whatsapp.com/send/?phone=${WA}&text=Hello, I am interested in your services.`;

const SERVICES = [
    { icon: Shield, title: 'Preventive Care', desc: 'Cleanings, exams, and hygiene plans to keep your smile healthy long-term.' },
    { icon: Sparkles, title: 'Cosmetic Dentistry', desc: 'Whitening, veneers, and smile design for a radiant, confident smile.' },
    { icon: Stethoscope, title: 'Restorative Work', desc: 'Fillings, crowns, bridges, and implants to restore your dental health.' },
    { icon: AlignCenter, title: 'Orthodontics', desc: 'Clear aligners and braces for all ages to achieve perfect alignment.' },
];
const WHY = [
    { icon: Heart, title: 'Gentle & Painless', desc: 'Procedures are surprisingly comfortable — even kids feel at ease.' },
    { icon: Monitor, title: 'Modern Technology', desc: 'Digital X-rays, 3D imaging, same-day results.' },
    { icon: Wallet, title: 'Transparent Pricing', desc: 'Clear estimates upfront — no hidden fees ever.' },
    { icon: Calendar, title: 'Flexible Hours', desc: 'Open 9AM–9:30PM every day including Sunday.' },
];
const TESTIMONIALS = [
    {
        quote: 'I wanted to express my gratitude for the wonderful care my 6-year-old daughter received during her root canal. The doctor made it remarkably smooth — she did not feel any pain at all.',
        name: 'Deepali Naidu',
        role: 'Parent, Patient',
        rating: 5
    },
    {
        quote: 'Very good service and very co-operative. Good staff and doctor. Highly recommend to everyone!',
        name: 'Rahul M.',
        role: 'Patient',
        rating: 5
    },
    {
        quote: 'Clinic location is easily accessible. Good place to get your regular dental checks. The team is very professional.',
        name: 'Priya S.',
        role: 'Regular Patient',
        rating: 5
    },
    {
        quote: 'The team made me feel safe even during a root canal. Truly the best dental experience I\'ve ever had.',
        name: 'Ananya R.',
        role: 'Patient since 2021',
        rating: 5
    },
    {
        quote: 'Dr. Nikhil is very kind with kids. My children actually look forward to their check-ups here!',
        name: 'Vikram S.',
        role: 'Family Patient',
        rating: 5
    },
    {
        quote: 'Professional, caring, and efficient. Transparent pricing and no hidden fees whatsoever.',
        name: 'Sneha P.',
        role: 'Patient since 2022',
        rating: 5
    },
];
const STATS = [
    { value: '5,000+', label: 'Happy Patients' },
    { value: '12+', label: 'Years of Care' },
    { value: '15+', label: 'Treatments Offered' },
    { value: '4.9★', label: 'Google Rating (99 reviews)' },
];

function useReveal() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const ref = useReveal();
    return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export default function HomePage({ onBooking }: { onBooking: () => void }) {
    return (
        <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
            <div className="grain-overlay" />

            {/* ═══════════════════════════════════════════
          HERO — Split Layout with Real Image
          ═══════════════════════════════════════════ */}
            <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-20" style={{ background: 'var(--bg)' }}>
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 flex justify-end">
                    <div className="w-full lg:w-3/4 h-full relative">
                        <img src={img('images/clinic/main-working-area.png')} alt="MyDentalStory Clinic - Main Working Area" className="w-full h-full object-cover object-[center_35%]" />
                        {/* Gradients to fade image into the background color (left and bottom) */}
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--bg) 0%, rgba(253,251,247,0.85) 20%, rgba(253,251,247,0) 60%)' }} />
                        <div className="absolute inset-0 block lg:hidden" style={{ background: 'linear-gradient(to bottom, var(--bg) 0%, rgba(253,251,247,0.85) 45%, rgba(253,251,247,0) 100%)' }} />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 15%)' }} />
                    </div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] py-10 lg:py-0 relative">

                        {/* LEFT: Text Layer */}
                        <div className="w-full lg:w-1/2 xl:w-5/12 flex flex-col justify-center order-1 mt-10 lg:mt-0">
                            {/* Headline */}
                            <h1 className="display-title anim-fade-up d-100 relative z-20">
                                Your<br />
                                <span className="display-accent drop-shadow-sm">Dental</span><br />
                                Story <span style={{ color: 'var(--gold)' }}>Starts</span><br />
                                <span style={{ color: 'var(--text-2)', fontSize: '0.45em', fontWeight: 600 }}>here.</span>
                            </h1>

                            <p className="anim-fade-up d-300 mt-6 text-base sm:text-lg leading-relaxed max-w-md relative z-20" style={{ color: 'var(--text-2)', textShadow: '0 2px 10px rgba(255,255,255,0.8)' }}>
                                Modern dentistry with a genuinely personal touch. We craft <strong style={{ color: 'var(--text)' }}>confident, healthy smiles</strong> for your whole family in Pimple Saudagar, Pune.
                            </p>

                            {/* CTAs */}
                            <div className="anim-fade-up d-400 flex flex-col sm:flex-row gap-3 mt-8 relative z-20">
                                <button onClick={onBooking} className="btn btn-primary text-base px-7 py-4 shadow-xl shadow-green-900/10">
                                    <Calendar className="w-5 h-5" /> Book Appointment
                                </button>
                                <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn btn-wa text-base px-7 py-4 shadow-xl">
                                    <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                                </a>
                            </div>

                            {/* Trust chips */}
                            <div className="anim-fade-up d-500 flex flex-wrap gap-2 mt-6 relative z-20">
                                {['₹ Transparent Pricing', '✓ Painless Procedures', '⏱ Open 9AM–9:30PM Daily'].map(c => (
                                    <span key={c} className="badge badge-accent text-[0.65rem] bg-white/90 backdrop-blur-sm border border-black/5">{c}</span>
                                ))}
                            </div>

                            {/* Reviews Carousel */}

                        </div>

                        {/* RIGHT: Floating UI Accents over the image side */}
                        <div className="hidden lg:flex w-full lg:w-1/2 justify-end relative h-[600px] order-2">
                            {/* Floating badge top-right */}
                            <div className="absolute top-10 right-0 lg:-right-4 z-20 anim-scale-up d-600 backdrop-blur-md"
                                style={{ background: 'rgba(191,148,48,0.95)', borderRadius: '1.5rem', padding: '1rem 1.5rem', boxShadow: '0 16px 40px rgba(191,148,48,0.25)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="text-3xl font-black" style={{ fontFamily: "'Inter', sans-serif" }}>4.9</div>
                                    <Star className="w-6 h-6 fill-white text-white" />
                                </div>
                                <div className="text-sm font-semibold opacity-95">Google Rating</div>
                                <div className="text-xs opacity-80 mt-1">From 90+ Reviews</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom contact bar */}
                <div className="absolute bottom-6 left-0 right-0 px-4 hidden sm:block">
                    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 text-sm" style={{ color: 'var(--text-2)' }}>
                        {[
                            { label: '+91 79727 52597', href: 'tel:+917972752597' },
                            { label: 'P K Chowk, Pimple Saudagar, Pune 411027', href: undefined },
                            { label: 'Open daily 9AM – 9:30PM', href: undefined },
                        ].map((item, i) => (
                            item.href
                                ? <a key={i} href={item.href} className="hover:text-teal-600 transition-colors" style={{ color: 'var(--text-2)' }}>{item.label}</a>
                                : <span key={i}>{item.label}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          STATS BAR
          ═══════════════════════════════════════════ */}
            <section className="py-10 sm:py-14 px-4 sm:px-6" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <Reveal>
                    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                        {STATS.map((s, i) => (
                            <div key={i} className="stat-card">
                                <span className="block text-3xl sm:text-4xl font-black" style={{ fontFamily: "'Inter', sans-serif", color: 'var(--accent)' }}>{s.value}</span>
                                <span className="block mt-1.5 text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-2)' }}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* ═══════════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════════ */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    <Reveal>
                        <span className="section-eyebrow">Our Services</span>
                        <h2 className="section-title mt-3">Complete dental care<br />for your whole family.</h2>
                        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>Every treatment your family needs — under one roof, delivered with warmth and expertise.</p>
                        <div className="mt-10 space-y-1">
                            {SERVICES.map((s, i) => (
                                <div key={i} className="service-item">
                                    <div className="icon-ring"><s.icon className="w-5 h-5" style={{ color: 'var(--accent)' }} /></div>
                                    <div>
                                        <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{s.title}</h3>
                                        <p className="text-sm mt-0.5 leading-relaxed" style={{ color: 'var(--text-2)' }}>{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link to="/services" className="mt-8 inline-flex items-center gap-1.5 font-semibold text-sm hover:gap-3 transition-all" style={{ color: 'var(--accent)' }}>
                            View all services <ChevronRight className="w-4 h-4" />
                        </Link>
                    </Reveal>
                    <Reveal>
                        <div className="image-card h-[480px] lg:h-[600px]">
                            <img src={img('images/services-dentist.jpg')} alt="Dentist consulting with patient" className="w-full h-full object-cover" />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          WHY CHOOSE US
          ═══════════════════════════════════════════ */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--bg-alt)' }}>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    <Reveal className="order-2 lg:order-1">
                        <div className="image-card h-[480px] lg:h-[560px]">
                            <img src={img('images/why-closeup.jpg')} alt="Advanced dental procedure" className="w-full h-full object-cover" />
                        </div>
                    </Reveal>
                    <Reveal className="order-1 lg:order-2">
                        <span className="section-eyebrow">Why Choose Us</span>
                        <h2 className="section-title mt-3">Modern care,<br />gentle hands.</h2>
                        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>We combine state-of-the-art technology with a patient-first philosophy that puts your comfort above everything.</p>
                        <div className="mt-10 space-y-1">
                            {WHY.map((item, i) => (
                                <div key={i} className="service-item">
                                    <div className="icon-ring"><item.icon className="w-5 h-5" style={{ color: 'var(--accent)' }} /></div>
                                    <div>
                                        <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{item.title}</h3>
                                        <p className="text-sm mt-0.5 leading-relaxed" style={{ color: 'var(--text-2)' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          PATIENT CARE
          ═══════════════════════════════════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    <Reveal>
                        <span className="section-eyebrow">Patient Comfort</span>
                        <h2 className="section-title mt-3">We make your visit<br />calm and predictable.</h2>
                        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>From the moment you walk in, our environment is designed around your ease and wellbeing — especially for nervous patients and children.</p>
                        <div className="mt-10 space-y-5">
                            {[
                                { icon: Stethoscope, title: 'Painless Techniques', desc: 'Patients are often surprised by how comfortable procedures feel. Kids included.' },
                                { icon: MessageCircle, title: 'Clear Communication', desc: 'We explain every step before we begin — no surprises, no anxiety.' },
                                { icon: Heart, title: 'Child-Friendly Approach', desc: 'Dr. Nikhil engages children in friendly conversation to ease anxiety and build trust.' },
                            ].map((c, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-lite)' }}>
                                        <c.icon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{c.title}</h3>
                                        <p className="text-sm mt-0.5" style={{ color: 'var(--text-2)' }}>{c.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a href={wa()} target="_blank" rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-1.5 font-semibold text-sm hover:gap-3 transition-all" style={{ color: 'var(--accent)' }}>
                            Ask about comfort options <ChevronRight className="w-4 h-4" />
                        </a>
                    </Reveal>
                    <Reveal>
                        <div className="image-card h-[480px] lg:h-[560px]">
                            <img src={img('images/care-patient.jpg')} alt="Comfortable patient experience" className="w-full h-full object-cover" />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          TESTIMONIALS
          ═══════════════════════════════════════════ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--bg-alt)' }}>
                <Reveal>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="section-eyebrow">Patient Stories</span>
                            <h2 className="section-title mt-3">Real smiles. Real stories.</h2>
                            <p className="mt-3 text-sm max-w-lg mx-auto" style={{ color: 'var(--text-2)' }}>Hear from families who trust us with their smiles — one visit at a time.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                            {TESTIMONIALS.map((t, i) => (
                                <div key={i} className="testimonial-card">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                                    </div>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>"{t.quote}"</p>
                                    <div className="mt-5 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'var(--accent-lite)', color: 'var(--accent)' }}>{t.name[0]}</div>
                                        <div>
                                            <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{t.name}</p>
                                            <p className="text-xs" style={{ color: 'var(--text-2)' }}>{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ═══════════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════════ */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--accent)' }}>
                <Reveal>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="badge badge-gold bg-white/10 border-white/20 text-white mb-6">Start Today</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Begin Your<br /><span className="text-emerald-200">Dental Story</span>
                        </h2>
                        <p className="mt-6 text-white/90 text-lg leading-relaxed max-w-xl mx-auto">
                            Book your first visit and discover why thousands of Pune families trust us with their smiles.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                            <button onClick={onBooking} className="bg-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 flex items-center gap-2" style={{ color: 'var(--accent)' }}>
                                <Calendar className="w-5 h-5" /> Book Appointment
                            </button>
                            <a href={wa()} target="_blank" rel="noopener noreferrer" className="border-2 border-white/50 text-white font-bold px-8 py-4 rounded-full transition-all hover:bg-white/10 flex items-center gap-2">
                                <MessageCircle className="w-5 h-5" /> WhatsApp Us
                            </a>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Floating WhatsApp */}
            <a href={wa()} target="_blank" rel="noopener noreferrer" className="floating-wa" aria-label="Chat on WhatsApp">
                <MessageCircle className="w-7 h-7 text-white" />
            </a>
        </div>
    );
}
