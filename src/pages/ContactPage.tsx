import { useState } from 'react';
import {
    MapPin, Phone, Clock, Mail, MessageCircle,
    CheckCircle2, Navigation
} from 'lucide-react';

const WHATSAPP = '919876543210';

const CLINIC = {
    phone: '+91 98765 43210',
    email: 'hello@mydentalstory.in',
    address: '12 Maple Avenue, Suite 200, Pune, Maharashtra 411001',
    hours: { weekday: 'Monday – Friday: 8:00 AM – 6:00 PM', saturday: 'Saturday: 9:00 AM – 2:00 PM', sunday: 'Sunday: Closed (Emergency WhatsApp available)' },
    coords: { lat: 18.5204, lng: 73.8567 },
};

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setForm({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 4000);
    };

    const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I'd like to get in touch with MyDentalStory")}`;
    const mapsLink = `https://maps.google.com/?q=${CLINIC.coords.lat},${CLINIC.coords.lng}`;

    return (
        <div className="min-h-screen bg-[#f6f8fa]">
            <div className="grain-overlay" />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800">
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url('/images/hero-clinic.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="absolute inset-0 bg-slate-900/75" />
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-teal-400/15 border border-teal-400/25 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-5">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        We're Here For You
                    </h1>
                    <p className="mt-5 text-white/70 text-lg leading-relaxed">
                        Questions, bookings, or just want to say hello — reach out any way you prefer.
                    </p>
                </div>
            </section>

            {/* Quick Contact Cards */}
            <section className="py-14 px-4 sm:px-6 -mt-8 relative z-10">
                <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: Phone, label: 'Call Us', value: CLINIC.phone, href: `tel:${CLINIC.phone}`, color: 'text-teal-600' },
                        { icon: MessageCircle, label: 'WhatsApp', value: 'Chat Instantly', href: waLink, color: 'text-[#25d366]' },
                        { icon: Mail, label: 'Email', value: CLINIC.email, href: `mailto:${CLINIC.email}`, color: 'text-teal-600' },
                        { icon: Navigation, label: 'Directions', value: 'Get Directions', href: mapsLink, color: 'text-teal-600' },
                    ].map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="card p-5 flex flex-col items-center text-center gap-3 hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center">
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{item.label}</p>
                                <p className="text-sm font-semibold text-slate-700 mt-0.5 break-all">{item.value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="py-10 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Contact Form */}
                    <div className="card p-7 sm:p-10">
                        <h2 className="text-2xl font-bold text-slate-800 mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>Send Us a Message</h2>
                        <p className="text-slate-500 text-sm mb-7">We typically respond within a few hours during clinic hours.</p>

                        {submitted ? (
                            <div className="py-12 text-center">
                                <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800">Message Received!</h3>
                                <p className="text-slate-500 mt-2 text-sm">We'll get back to you very soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Name *</label>
                                        <input type="text" required className="form-field" placeholder="Your full name"
                                            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Phone *</label>
                                        <input type="tel" required className="form-field" placeholder="9876543210"
                                            value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Email</label>
                                    <input type="email" className="form-field" placeholder="your@email.com"
                                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Subject *</label>
                                    <select required className="form-field" value={form.subject}
                                        onChange={e => setForm({ ...form, subject: e.target.value })}>
                                        <option value="">Select a subject</option>
                                        <option value="appointment">Request Appointment</option>
                                        <option value="service">Service Enquiry</option>
                                        <option value="pricing">Pricing Question</option>
                                        <option value="emergency">Dental Emergency</option>
                                        <option value="feedback">Feedback or Complaint</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Message *</label>
                                    <textarea required rows={4} className="form-field resize-none" placeholder="Tell us how we can help..."
                                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                                </div>
                                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                                    Send Message
                                </button>
                                <p className="text-center text-xs text-slate-400">
                                    For urgent matters, please{' '}
                                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-[#25d366] font-semibold">WhatsApp us directly</a>.
                                </p>
                            </form>
                        )}
                    </div>

                    {/* Info + Map */}
                    <div className="flex flex-col gap-6">
                        {/* Address & Hours */}
                        <div className="card p-7">
                            <h3 className="font-bold text-lg text-slate-800 mb-5" style={{ fontFamily: 'var(--font-display)' }}>Clinic Information</h3>
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-700 text-sm">Address</p>
                                        <p className="text-slate-500 text-sm mt-0.5">{CLINIC.address}</p>
                                        <p className="text-xs text-slate-400 mt-1">Free parking behind the building · Accessible via metro</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-700 text-sm">Opening Hours</p>
                                        <div className="mt-1.5 space-y-1 text-sm text-slate-500">
                                            <p>{CLINIC.hours.weekday}</p>
                                            <p>{CLINIC.hours.saturday}</p>
                                            <p className="text-slate-400">{CLINIC.hours.sunday}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-700 text-sm">Phone & Email</p>
                                        <a href={`tel:${CLINIC.phone}`} className="block text-sm text-teal-600 mt-0.5 hover:underline">{CLINIC.phone}</a>
                                        <a href={`mailto:${CLINIC.email}`} className="block text-sm text-slate-500 hover:text-teal-600 transition-colors">{CLINIC.email}</a>
                                    </div>
                                </div>
                            </div>
                            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 px-5 py-3 text-sm">
                                <Navigation className="w-4 h-4" /> Get Directions
                            </a>
                        </div>

                        {/* Map */}
                        <div className="map-card flex-1 min-h-[260px]">
                            <iframe
                                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d${CLINIC.coords.lng}!3d${CLINIC.coords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1`}
                                width="100%" height="100%" style={{ border: 0, minHeight: '260px' }}
                                allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="MyDentalStory Clinic Location"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency CTA */}
            <section className="py-16 px-4 bg-red-600 text-white">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
                        Dental Emergency?
                    </h2>
                    <p className="mt-3 text-white/85">Don't wait — call us immediately or reach out on WhatsApp. We prioritize emergency cases.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-7">
                        <a href={`tel:${CLINIC.phone}`} className="flex items-center gap-2 bg-white text-red-600 font-bold px-7 py-3.5 rounded-full hover:bg-red-50 transition-colors">
                            <Phone className="w-5 h-5" /> Call Now
                        </a>
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25d366] text-white font-bold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity">
                            <MessageCircle className="w-5 h-5" /> Emergency WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
