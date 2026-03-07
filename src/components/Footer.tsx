import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react';

const YEAR = new Date().getFullYear();
const WA = '917972752597';

const LINKS = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
];

export default function Footer() {
    return (
        <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', color: 'var(--text)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/images/logo.png" alt="MyDentalStory" className="w-7 h-7 flex-shrink-0 object-contain drop-shadow-sm" />
                            <span className="font-bold text-base uppercase tracking-[0.14em]" style={{ fontFamily: "'Inter', sans-serif" }}>MyDentalStory</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-2)' }}>
                            Modern dental care with a genuinely personal touch. Creating healthy, beautiful smiles for families across Pimple Saudagar, Pune.
                        </p>
                        <p className="text-xs mt-2 font-medium" style={{ color: 'var(--accent)' }}>⭐ 4.9 · 99 Google Reviews · LGBTQ+ Friendly</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a href={`https://api.whatsapp.com/send/?phone=${WA}&text=Hello, I am interested in your services.`} target="_blank" rel="noopener noreferrer"
                                className="btn btn-wa px-5 py-2.5 text-sm">
                                <MessageCircle className="w-4 h-4" /> WhatsApp Us
                            </a>
                            <a href="tel:+917972752597" className="btn btn-ghost px-5 py-2.5 text-sm">
                                <Phone className="w-4 h-4" /> Call Us
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-widest mb-5" style={{ color: 'var(--text)' }}>Quick Links</h4>
                        <ul className="space-y-3">
                            {LINKS.map(l => (
                                <li key={l.to}>
                                    <Link to={l.to} className="text-sm transition-colors hover:opacity-100" style={{ color: 'var(--text-2)' }}
                                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-widest mb-5" style={{ color: 'var(--text)' }}>Contact</h4>
                        <ul className="space-y-3.5">
                            {[
                                { icon: Phone, text: '+91 79727 52597', href: 'tel:+917972752597' },
                                { icon: Mail, text: 'hello@mydentalstory.in', href: 'mailto:hello@mydentalstory.in' },
                                { icon: MapPin, text: 'P K Chowk, Pimple Saudagar, Pune 411027', href: undefined },
                                { icon: Clock, text: 'Open daily: 9AM – 9:30PM', href: undefined },
                            ].map((item, i) => (
                                <li key={i}>
                                    {item.href
                                        ? <a href={item.href} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-2)' }}
                                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}>
                                            <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                                            {item.text}
                                        </a>
                                        : <div className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                                            <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                                            {item.text}
                                        </div>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="py-5 px-4" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs" style={{ color: 'var(--text-3)' }}>© {YEAR} MyDentalStory. All rights reserved.</p>
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
                        <p className="text-xs" style={{ color: 'var(--text-3)' }}>Gentle care · Beautiful smiles · Pimple Saudagar, Pune</p>
                        <p className="text-xs flex items-center gap-1" style={{ color: 'var(--text-2)' }}>
                            Made with <span style={{ color: '#E91E63' }}>❤️</span> by Shubh
                        </p>
                    </div>
                </div>
            </div>

            {/* Schema.org JSON-LD — updated with real clinic data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Dentist",
                    "name": "My Dental Story",
                    "alternateName": "माई डेंटल स्टोरी",
                    "telephone": "+917972752597",
                    "email": "hello@mydentalstory.in",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "P K Chowk, Shiv Sai Ln, beside Hotel Champaran Handi",
                        "addressLocality": "Pimple Saudagar",
                        "addressRegion": "Pimpri-Chinchwad, Maharashtra",
                        "postalCode": "411027",
                        "addressCountry": "IN"
                    },
                    "openingHours": "Mo-Su 09:00-21:30",
                    "url": "https://mydentalstory.com",
                    "priceRange": "₹₹",
                    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "99" }
                })
            }} />
        </footer>
    );
}
