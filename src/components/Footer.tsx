import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react';

const CLINIC = {
    name: 'MyDentalStory',
    phone: '+91 98765 43210',
    whatsapp: '919876543210',
    address: '12 Maple Avenue, Suite 200, Pune, Maharashtra 411001',
    email: 'hello@mydentalstory.in',
    hours: 'Mon–Fri 8am–6pm · Sat 9am–2pm',
};

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 4.5 5.5 4 4.5 4C3 4 2 5 2 6.5C2 9 4.5 11 7 11C7.5 11 8 10.8 8.5 10.5C8.2 11.2 8 12 8 13C8 16.5 10 20 12 22C14 20 16 16.5 16 13C16 12 15.8 11.2 15.5 10.5C16 10.8 16.5 11 17 11C19.5 11 22 9 22 6.5C22 5 21 4 19.5 4C18.5 4 17.5 4.5 17 5.5C16.5 3.5 14.5 2 12 2Z" />
                            </svg>
                            <span className="text-lg font-bold uppercase tracking-widest text-white">{CLINIC.name}</span>
                        </div>
                        <p className="text-slate-400 max-w-xs leading-relaxed text-sm">
                            Modern dental care with a gentle touch. Creating healthy, confident smiles in Pune since 2012.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href={`https://wa.me/${CLINIC.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25d366] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                            >
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp Us
                            </a>
                            <a
                                href={`tel:${CLINIC.phone}`}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-white/80 text-sm font-medium hover:bg-white/12 transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                {CLINIC.phone}
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-5">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Home', to: '/' },
                                { label: 'Services', to: '/services' },
                                { label: 'About Us', to: '/about' },
                                { label: 'Contact', to: '/contact' },
                            ].map(l => (
                                <li key={l.to}>
                                    <Link to={l.to} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-white mb-5">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm text-slate-400">
                                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                                {CLINIC.address}
                            </li>
                            <li>
                                <a href={`tel:${CLINIC.phone}`} className="flex gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                                    <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                                    {CLINIC.phone}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${CLINIC.email}`} className="flex gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                                    <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                                    {CLINIC.email}
                                </a>
                            </li>
                            <li className="flex gap-3 text-sm text-slate-400">
                                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                                {CLINIC.hours}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/8 py-5 px-4">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
                    <p>© {year} {CLINIC.name}. All rights reserved.</p>
                    <p>Designed with ♥ for your smile</p>
                </div>
            </div>

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Dentist",
                    "name": CLINIC.name,
                    "image": "/images/hero-clinic.jpg",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "12 Maple Avenue, Suite 200",
                        "addressLocality": "Pune",
                        "addressRegion": "Maharashtra",
                        "postalCode": "411001",
                        "addressCountry": "IN"
                    },
                    "telephone": CLINIC.phone,
                    "email": CLINIC.email,
                    "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
                    "priceRange": "$$",
                    "url": "https://mydentalstory.in"
                })
            }} />
        </footer>
    );
}
