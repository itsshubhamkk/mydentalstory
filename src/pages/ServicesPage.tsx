import { useState } from 'react';
import {
    Shield, Sparkles, Stethoscope, AlignCenter,
    Zap, Baby, ChevronDown, Calendar, MessageCircle, CheckCircle
} from 'lucide-react';
import { img } from '../utils/images';

const WA = '917972752597';

const ALL_SERVICES = [
    {
        icon: Shield,
        title: 'Preventive Care',
        tagline: 'Prevention is always better than cure.',
        desc: 'Routine oral cleanings, comprehensive exams, X-rays, fluoride treatments and hygiene coaching to catch problems early.',
        includes: ['Teeth Cleaning & Polish', 'Full Mouth X-rays', 'Oral Cancer Screening', 'Gum Health Assessment', 'Cavity Detection', 'Bite Analysis'],
        image: img('images/services-dentist.jpg'),
        badge: 'Most Popular',
    },
    {
        icon: Sparkles,
        title: 'Cosmetic Dentistry',
        tagline: 'Craft the smile you\'ve always dreamed of.',
        desc: 'From subtle brightening to complete smile makeovers — artistry meets precision for the most natural-looking results.',
        includes: ['Teeth Whitening', 'Porcelain Veneers', 'Dental Bonding', 'Smile Makeover Design', 'Gum Contouring', 'Tooth Shaping'],
        image: img('images/why-closeup.jpg'),
        badge: 'Premium',
    },
    {
        icon: Stethoscope,
        title: 'Restorative Work',
        tagline: 'Restore full function and beauty to damaged teeth.',
        desc: 'From simple fillings to complex implant-supported bridges, with durable tooth-colored materials.',
        includes: ['Composite Fillings', 'Dental Crowns', 'Bridges', 'Root Canal Therapy', 'Dental Implants', 'Full Mouth Reconstruction'],
        image: img('images/care-patient.jpg'),
        badge: null,
    },
    {
        icon: AlignCenter,
        title: 'Orthodontics',
        tagline: 'Straighter teeth, healthier bite, greater confidence.',
        desc: 'Traditional braces and clear aligner therapy for patients of all ages — discreet, effective, and customized.',
        includes: ['Metal Braces', 'Ceramic Braces', 'Clear Aligners', 'Retainers', 'Interceptive Treatment', 'Adult Orthodontics'],
        image: img('images/team-doctor.jpg'),
        badge: null,
    },
    {
        icon: Zap,
        title: 'Emergency Dental',
        tagline: 'Priority support for urgent dental needs.',
        desc: 'Toothache, broken tooth, lost filling? We offer priority same-day appointments and WhatsApp support.',
        includes: ['Same-Day Slots', 'Toothache Relief', 'Broken Tooth Repair', 'Lost Filling/Crown', 'Abscess Treatment', 'WhatsApp Triage'],
        image: img('images/hero-clinic.jpg'),
        badge: 'Priority',
    },
    {
        icon: Baby,
        title: "Children's Dentistry",
        tagline: 'Building lifelong oral health habits in kids.',
        desc: "Our child-friendly clinic is designed to make young patients feel safe, relaxed, and even excited about their dental health.",
        includes: ['First Dental Visit', 'Fluoride Treatment', 'Sealants', 'Early Orthodontic Monitoring', 'Cavity Prevention', 'Habit Counselling'],
        image: img('images/closing-team.jpg'),
        badge: 'Kid Friendly',
    },
];

const FAQS = [
    { q: 'How often should I visit the dentist?', a: 'We recommend a check-up every 6 months for most patients. Some with gum disease or high cavity risk may need more frequent visits — we\'ll advise you personally.' },
    { q: 'Are dental X-rays safe?', a: 'Yes! Modern digital X-rays use up to 90% less radiation than traditional film X-rays. They\'re safe for the vast majority of patients, including children.' },
    { q: 'How long does teeth whitening take?', a: 'In-office whitening takes 60–90 minutes. Take-home kits yield results over 1–2 weeks. Both options can lighten teeth by several shades.' },
    { q: 'Is root canal treatment painful?', a: 'Modern root canal treatment is no more uncomfortable than a routine filling! Effective local anesthesia means most patients are surprised by how comfortable it feels.' },
    { q: 'Do you offer payment plans?', a: 'Yes. We offer flexible EMI options for treatments above ₹10,000. We\'ll discuss all payment options before starting any treatment.' },
    { q: 'What age for the first dental visit?', a: 'We recommend the first visit around age 1, or when the first tooth erupts. Early visits let children get comfortable and allow us to monitor development.' },
    { q: 'What to do in a dental emergency?', a: 'Call us immediately at +91 79727 52597 or WhatsApp. We offer same-day emergency appointments and guide you on immediate care steps over the phone.' },
];

function FAQItem({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) {
    return (
        <div className="accordion-item">
            <button className="accordion-trigger" onClick={toggle} aria-expanded={open}>
                <span>{q}</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300" style={{ color: 'var(--accent)', transform: open ? 'rotate(180deg)' : '' }} />
            </button>
            <div className={`accordion-content ${open ? 'open' : ''}`}>{a}</div>
        </div>
    );
}

export default function ServicesPage({ onBooking }: { onBooking: () => void }) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const waLink = `https://api.whatsapp.com/send/?phone=${WA}&text=New+Clinic+Registration+Enquiry%3A%0A%0AClinic+Name%3A+MyDentalStory%0AMobile%3A+%0AEmail%3A+%0AAddress%3A+&type=phone_number&app_absent=0`;

    return (
        <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
            <div className="grain-overlay" />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 min-h-[50vh] flex flex-col justify-center" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, rgba(10,50,30,0.95) 100%)' }}>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <span className="badge badge-gold bg-white/10 border-white/20 text-white mb-6">Our Services</span>
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-white leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Comprehensive Care,<br /><span className="text-emerald-300">All Under One Roof</span>
                    </h1>
                    <p className="mt-6 text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
                        From routine cleanings to complete smile transformations — every service delivered with precision, warmth, and advanced technology.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                        <button onClick={onBooking} className="bg-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 flex items-center gap-2" style={{ color: 'var(--accent)' }}>
                            <Calendar className="w-5 h-5" /> Book a Consultation
                        </button>
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="border-2 border-white/50 text-white font-bold px-8 py-4 rounded-full transition-all hover:bg-white/10 flex items-center gap-2">
                            <MessageCircle className="w-5 h-5" /> Ask About a Service
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-6">
                        {ALL_SERVICES.map((service, i) => (
                            <div key={i} className="card overflow-hidden group">
                                <div className="flex flex-col sm:flex-row">
                                    <div className="sm:w-44 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                                <div className="icon-ring w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"><service.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--accent)' }} /></div>
                                                <h3 className="font-bold text-base sm:text-lg" style={{ color: 'var(--text)', fontFamily: "'Inter', sans-serif" }}>{service.title}</h3>
                                            </div>
                                            {service.badge && (
                                                <span className="badge badge-accent flex-shrink-0 mt-1 sm:mt-0">{service.badge}</span>
                                            )}
                                        </div>
                                        <p className="text-xs font-medium italic mb-2" style={{ color: 'var(--accent)' }}>{service.tagline}</p>
                                        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>{service.desc}</p>
                                        <div className="grid grid-cols-2 gap-1.5 mt-auto">
                                            {service.includes.map((item, j) => (
                                                <div key={j} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-2)' }}>
                                                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                        <button onClick={onBooking} className="mt-5 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" style={{ color: 'var(--accent)' }}>
                                            Book this service →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* FAQs */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--bg-alt)' }}>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="section-eyebrow">FAQ</span>
                        <h2 className="section-title mt-3">Frequently Asked Questions</h2>
                    </div>
                    <div>
                        {FAQS.map((faq, i) => (
                            <FAQItem key={i} q={faq.q} a={faq.a} open={openFaq === i} toggle={() => setOpenFaq(openFaq === i ? null : i)} />
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <p className="text-sm mb-4" style={{ color: 'var(--text-2)' }}>Still have questions?</p>
                        <a href={`https://api.whatsapp.com/send/?phone=${WA}&text=New+Clinic+Registration+Enquiry%3A%0A%0AClinic+Name%3A+MyDentalStory%0AMobile%3A+%0AEmail%3A+%0AAddress%3A+&type=phone_number&app_absent=0`} target="_blank" rel="noopener noreferrer" className="btn btn-wa px-6 py-3">
                            <MessageCircle className="w-5 h-5" /> Ask on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 sm:py-24 px-4 text-center" style={{ background: 'var(--accent)' }}>
                <h2 className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Ready to get started?</h2>
                <p className="mt-4 text-white/90 text-lg max-w-md mx-auto">Book a consultation and let us create a personalized treatment plan for your smile.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <button onClick={onBooking} className="bg-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 flex items-center gap-2" style={{ color: 'var(--accent)' }}>
                        <Calendar className="w-5 h-5" /> Book Now
                    </button>
                    <a href="tel:+917972752597" className="border-2 border-white/50 text-white font-bold px-8 py-4 rounded-full transition-all hover:bg-white/10 flex items-center gap-2">
                        Call Us
                    </a>
                </div>
            </section>
        </div>
    );
}
