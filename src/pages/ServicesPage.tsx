import { useState } from 'react';
import {
    Shield, Sparkles, Stethoscope, AlignCenter,
    Zap, Baby, ChevronDown, Calendar, MessageCircle, CheckCircle
} from 'lucide-react';

const WHATSAPP = '919876543210';

const ALL_SERVICES = [
    {
        icon: Shield,
        title: 'Preventive Care',
        tagline: 'Prevention is always better (and cheaper) than cure.',
        desc: 'Routine oral cleanings, comprehensive exams, X-rays, fluoride treatments, and personalized hygiene coaching. Catching problems early saves you time, money, and discomfort.',
        includes: ['Teeth Cleaning & Polish', 'Full Mouth X-rays', 'Oral Cancer Screening', 'Gum Health Assessment', 'Cavity Detection', 'Bite Analysis'],
        image: '/images/services-dentist.jpg',
        badge: 'Most Popular',
    },
    {
        icon: Sparkles,
        title: 'Cosmetic Dentistry',
        tagline: 'Craft the smile you\'ve always dreamed of.',
        desc: 'From subtle brightening to complete smile makeovers — we combine artistry with precision to create the most natural-looking cosmetic results.',
        includes: ['Teeth Whitening', 'Porcelain Veneers', 'Dental Bonding', 'Smile Makeover Design', 'Gum Contouring', 'Tooth Shaping'],
        image: '/images/why-closeup.jpg',
        badge: 'Premium',
    },
    {
        icon: Stethoscope,
        title: 'Restorative Work',
        tagline: 'Restore full function and beauty to damaged teeth.',
        desc: 'From simple fillings to complex implant-supported bridges, our restorative treatments rebuild your smile with durable, tooth-colored materials.',
        includes: ['Composite Fillings', 'Dental Crowns', 'Bridges', 'Root Canal Therapy', 'Dental Implants', 'Full Mouth Reconstruction'],
        image: '/images/care-patient.jpg',
        badge: null,
    },
    {
        icon: AlignCenter,
        title: 'Orthodontics',
        tagline: 'Straighter teeth, healthier bite, greater confidence.',
        desc: 'We offer both traditional braces and clear aligner therapy (Invisalign-compatible) for patients of all ages — discreet, effective, and customized.',
        includes: ['Metal Braces', 'Ceramic Braces', 'Clear Aligners', 'Retainers', 'Interceptive Treatment', 'Adult Orthodontics'],
        image: '/images/team-doctor.jpg',
        badge: null,
    },
    {
        icon: Zap,
        title: 'Emergency Dental',
        tagline: '24-hour support for urgent dental needs.',
        desc: 'Toothache that won\'t quit? Broken tooth? Lost filling? We offer priority same-day emergency appointments and 24/7 WhatsApp support.',
        includes: ['Same-Day Emergency Slots', 'Severe Toothache Relief', 'Broken/Chipped Tooth Repair', 'Lost Filling/Crown', 'Dental Abscess Treatment', '24/7 WhatsApp Triage'],
        image: '/images/hero-clinic.jpg',
        badge: '24/7',
    },
    {
        icon: Baby,
        title: 'Children\'s Dentistry',
        tagline: 'Building lifelong oral health habits in kids.',
        desc: 'Our child-friendly clinic is designed to make young patients feel safe, happy, and excited about their dental health. We make dentistry fun!',
        includes: ['First Dental Visit', 'Fluoride Treatment', 'Sealants', 'Early Orthodontic Monitoring', 'Cavity Prevention', 'Habit Counselling'],
        image: '/images/closing-team.jpg',
        badge: 'Kid Friendly',
    },
];

const FAQS = [
    { q: 'How often should I visit the dentist?', a: 'We recommend a check-up every 6 months for most patients. However, some patients with gum disease or high cavity risk may need more frequent visits — we\'ll advise you personally.' },
    { q: 'Are dental X-rays safe?', a: 'Yes! Modern digital X-rays use up to 90% less radiation than traditional film X-rays. They\'re safe for the vast majority of patients, including children, and are an essential diagnostic tool.' },
    { q: 'How long does a teeth whitening treatment take?', a: 'In-office whitening typically takes 60–90 minutes. Take-home kits (custom trays with professional-grade gel) yield results over 1–2 weeks. Both options can lighten teeth by several shades.' },
    { q: 'Is root canal treatment painful?', a: 'Modern root canal treatment is no more uncomfortable than a routine filling! We use effective local anesthesia and sedation options. Most patients are surprised by how comfortable it feels.' },
    { q: 'Do you offer payment plans?', a: 'Yes. We offer flexible EMI options through our financing partners for treatments above ₹10,000. We\'ll discuss all payment options with you before starting any treatment.' },
    { q: 'Can I bring my child for their first dental visit?', a: 'Absolutely! We recommend the first visit around age 1, or when the first tooth erupts. Early visits help children become comfortable with the dental environment and allow us to monitor development.' },
    { q: 'What should I do in a dental emergency?', a: 'Call our clinic immediately at +91 98765 43210 or message us on WhatsApp. We offer same-day emergency appointments and can guide you on immediate care steps over the phone.' },
];

function FAQItem({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) {
    return (
        <div className="accordion-item">
            <button className="accordion-trigger" onClick={toggle} aria-expanded={open}>
                <span>{q}</span>
                <ChevronDown className={`w-5 h-5 text-teal-600 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            <div className={`accordion-content ${open ? 'open' : ''}`}>
                {a}
            </div>
        </div>
    );
}

interface ServicesPageProps {
    onBooking: () => void;
}

export default function ServicesPage({ onBooking }: ServicesPageProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I'd like to learn more about your dental services")}`;

    return (
        <div className="min-h-screen bg-[#f6f8fa]">
            <div className="grain-overlay" />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('/images/services-dentist.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 to-slate-900/90" />
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-teal-400/15 border border-teal-400/25 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-5">
                        Our Services
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        Comprehensive Dental Care,<br />All Under One Roof
                    </h1>
                    <p className="mt-5 text-white/70 text-lg leading-relaxed">
                        From routine cleanings to complete smile transformations — every service delivered with precision, warmth, and transparency.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <button onClick={onBooking} className="btn-primary px-7 py-3.5">
                            <Calendar className="w-5 h-5" /> Book a Consultation
                        </button>
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-7 py-3.5">
                            <MessageCircle className="w-5 h-5" /> Ask About a Service
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {ALL_SERVICES.map((service, i) => (
                            <div key={i} className="card overflow-hidden group">
                                <div className="flex flex-col sm:flex-row">
                                    {/* Image */}
                                    <div className="sm:w-44 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-start justify-between gap-3 mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                                                    <service.icon className="w-5 h-5 text-teal-600" />
                                                </div>
                                                <h3 className="font-bold text-lg text-slate-800">{service.title}</h3>
                                            </div>
                                            {service.badge && (
                                                <span className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200">
                                                    {service.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-teal-600 font-medium italic mb-2">{service.tagline}</p>
                                        <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.desc}</p>
                                        <div className="grid grid-cols-2 gap-1.5 mt-auto">
                                            {service.includes.map((item, j) => (
                                                <div key={j} className="flex items-center gap-1.5 text-xs text-slate-600">
                                                    <CheckCircle className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                        <button onClick={onBooking} className="mt-5 text-teal-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                                            Book this service →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Overview */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="section-label">Transparent Pricing</span>
                        <h2 className="section-title mt-3">What to expect</h2>
                        <p className="mt-3 text-slate-500">All prices include consultation. No hidden charges ever. We'll provide a detailed estimate before starting any treatment.</p>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-teal-600 text-white">
                                    <th className="text-left px-6 py-4 font-semibold">Treatment</th>
                                    <th className="text-left px-6 py-4 font-semibold">Starting From</th>
                                    <th className="text-left px-6 py-4 font-semibold">Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['General Check-up & Cleaning', '₹800', '45–60 min'],
                                    ['Teeth Whitening (In-office)', '₹6,000', '90 min'],
                                    ['Composite Filling', '₹1,500', '30–60 min'],
                                    ['Root Canal Treatment', '₹5,000', '2–3 visits'],
                                    ['Dental Implant (single tooth)', '₹25,000', '3–6 months'],
                                    ['Dental Veneers (per tooth)', '₹8,000', '2 visits'],
                                    ['Clear Aligners (full course)', '₹60,000', '12–18 months'],
                                    ['Dental Crown (ceramic)', '₹6,000', '2 visits'],
                                ].map(([treatment, price, duration], i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                        <td className="px-6 py-4 text-slate-700 font-medium">{treatment}</td>
                                        <td className="px-6 py-4 text-teal-600 font-bold">{price}</td>
                                        <td className="px-6 py-4 text-slate-500">{duration}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-4">* Prices are indicative. Exact cost determined after clinical examination.</p>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="section-label">FAQ</span>
                        <h2 className="section-title mt-3">Frequently Asked Questions</h2>
                    </div>
                    <div>
                        {FAQS.map((faq, i) => (
                            <FAQItem
                                key={i}
                                q={faq.q}
                                a={faq.a}
                                open={openFaq === i}
                                toggle={() => setOpenFaq(openFaq === i ? null : i)}
                            />
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <p className="text-slate-500 text-sm mb-4">Still have questions?</p>
                        <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I have a question about your dental services")}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-6 py-3">
                            <MessageCircle className="w-5 h-5" /> Ask on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-r from-teal-700 to-teal-600 text-white text-center">
                <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: 'var(--font-display)' }}>Ready to get started?</h2>
                <p className="mt-4 text-white/80 max-w-md mx-auto">Book a consultation today and let us create a personalized treatment plan for your smile.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <button onClick={onBooking} className="bg-white text-teal-700 font-bold px-8 py-3.5 rounded-full hover:bg-teal-50 transition-colors flex items-center gap-2">
                        <Calendar className="w-5 h-5" /> Book Now
                    </button>
                    <a href="tel:+919876543210" className="border-2 border-white/50 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                        Call Us
                    </a>
                </div>
            </section>
        </div>
    );
}
