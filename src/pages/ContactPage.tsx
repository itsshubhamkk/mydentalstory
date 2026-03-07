import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle, CheckCircle2, Navigation } from 'lucide-react';

const WA = '917972752597';
const CLINIC = {
    phone: '+91 79727 52597',
    email: 'hello@mydentalstory.in',
    address: 'P K Chowk, Shiv Sai Ln, beside Hotel Champaran Handi, Pimple Saudagar, Pune, Pimpri-Chinchwad, Maharashtra 411027',
    hours: {
        weekday: 'Monday – Sunday: 9:00 AM – 9:30 PM',
        note: 'Open all days including Sunday',
    },
};

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }, 4000);
    };

    const waLink = `https://api.whatsapp.com/send/?phone=${WA}&text=Hello, I am interested in your services.`;
    const mapsLink = `https://maps.google.com/?q=My+Dental+Story,+Pimple+Saudagar,+Pune`;

    return (
        <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
            <div className="grain-overlay" />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 min-h-[50vh] flex flex-col justify-center" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, rgba(10,50,30,0.95) 100%)' }}>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <span className="badge badge-gold bg-white/10 border-white/20 text-white mb-6">Our Story</span>
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-white leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Care Beyond <span className="text-emerald-300">Dentistry</span>
                    </h1>
                    <p className="mt-6 text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
                        We believe every smile has a unique story. For over a decade, we've been crafting beautiful, healthy smiles for families in Pune with a gentle touch and advanced care.
                    </p>
                </div>
            </section>

            {/* Quick Contact Cards */}
            <section className="py-8 sm:py-14 px-4 sm:px-6 -mt-8 relative z-10">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: Phone, label: 'Call Us', value: CLINIC.phone, href: `tel:+917972752597` },
                        { icon: MessageCircle, label: 'WhatsApp', value: 'Chat Instantly', href: waLink },
                        { icon: Mail, label: 'Email', value: CLINIC.email, href: `mailto:${CLINIC.email}` },
                        { icon: Navigation, label: 'Directions', value: 'Get Directions', href: mapsLink },
                    ].map((item, i) => (
                        <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="card p-4 sm:p-5 flex flex-col items-center text-center gap-3 hover:shadow-xl transition-shadow">
                            <div className="icon-ring w-12 h-12"><item.icon className="w-6 h-6" style={{ color: 'var(--accent)' }} /></div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-2)' }}>{item.label}</p>
                                <p className="text-xs sm:text-sm font-semibold mt-0.5 break-all" style={{ color: 'var(--text)' }}>{item.value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="py-10 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Form */}
                    <div className="card p-7 sm:p-10">
                        <h2 className="text-2xl font-bold mb-1.5" style={{ fontFamily: "'Inter', sans-serif", color: 'var(--text)' }}>Send Us a Message</h2>
                        <p className="text-sm mb-7" style={{ color: 'var(--text-2)' }}>We typically respond within a few hours during clinic hours.</p>
                        {submitted ? (
                            <div className="py-12 text-center">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--accent-lite)' }}>
                                    <CheckCircle2 className="w-8 h-8" style={{ color: 'var(--accent)' }} />
                                </div>
                                <h3 className="text-xl font-bold" style={{ color: 'var(--text)', fontFamily: "'Inter', sans-serif" }}>Message Received!</h3>
                                <p className="mt-2 text-sm" style={{ color: 'var(--text-2)' }}>We'll get back to you very soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-2)' }}>Name *</label>
                                        <input type="text" required className="form-field" placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-2)' }}>Phone *</label>
                                        <input type="tel" required className="form-field" placeholder="9876543210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-2)' }}>Email</label>
                                    <input type="email" className="form-field" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-2)' }}>Subject *</label>
                                    <select required className="form-field" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                                        <option value="">Select a subject</option>
                                        <option>Request Appointment</option>
                                        <option>Service Enquiry</option>
                                        <option>Pricing Question</option>
                                        <option>Dental Emergency</option>
                                        <option>Feedback or Complaint</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-2)' }}>Message *</label>
                                    <textarea required rows={4} className="form-field resize-none" placeholder="Tell us how we can help..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                                </div>
                                <button type="submit" className="btn btn-primary w-full justify-center py-3.5">Send Message</button>
                                <p className="text-center text-xs" style={{ color: 'var(--text-3)' }}>
                                    For urgent matters,{' '}
                                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: 'var(--wa)' }}>WhatsApp us directly</a>.
                                </p>
                            </form>
                        )}
                    </div>

                    {/* Info + Map */}
                    <div className="flex flex-col gap-6">
                        <div className="card p-7">
                            <h3 className="font-bold text-lg mb-5" style={{ fontFamily: "'Inter', sans-serif", color: 'var(--text)' }}>Clinic Information</h3>
                            <div className="space-y-5">
                                {[
                                    {
                                        icon: MapPin,
                                        label: 'Address',
                                        content: (
                                            <>
                                                <p style={{ color: 'var(--text-2)' }} className="text-sm">{CLINIC.address}</p>
                                                <p className="text-xs mt-1" style={{ color: 'var(--text-3)' }}>Easily accessible · Near Hotel Champaran Handi</p>
                                            </>
                                        )
                                    },
                                    {
                                        icon: Clock,
                                        label: 'Opening Hours',
                                        content: (
                                            <div className="space-y-1 text-sm" style={{ color: 'var(--text-2)' }}>
                                                <p>{CLINIC.hours.weekday}</p>
                                                <p className="text-xs" style={{ color: 'var(--accent)', fontWeight: 600 }}>{CLINIC.hours.note}</p>
                                            </div>
                                        )
                                    },
                                    {
                                        icon: Phone,
                                        label: 'Phone & Email',
                                        content: (
                                            <>
                                                <a href={`tel:+917972752597`} className="block text-sm hover:underline" style={{ color: 'var(--accent)' }}>{CLINIC.phone}</a>
                                                <a href={`mailto:${CLINIC.email}`} className="block text-sm" style={{ color: 'var(--text-2)' }}>{CLINIC.email}</a>
                                            </>
                                        )
                                    },
                                ].map((r, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="icon-ring w-10 h-10 flex-shrink-0"><r.icon className="w-5 h-5" style={{ color: 'var(--accent)' }} /></div>
                                        <div><p className="font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>{r.label}</p>{r.content}</div>
                                    </div>
                                ))}
                            </div>
                            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6 px-5 py-3 text-sm">
                                <Navigation className="w-4 h-4" /> Get Directions
                            </a>
                        </div>

                        {/* Real Google Maps Embed */}
                        <div className="map-card flex-1" style={{ minHeight: '260px' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.9671477129623!2d73.7952380104741!3d18.5987563667089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9de6d95c4f1%3A0xd7d2c0ef792a9d14!2sMy%20Dental%20Story!5e1!3m2!1sen!2sin!4v1772884568446!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: 0, minHeight: '300px' }}
                                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                title="My Dental Story location"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency CTA */}
            <section className="py-12 sm:py-20 px-4 text-center" style={{ background: 'var(--accent)' }}>
                <h2 className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Dental Emergency?</h2>
                <p className="mt-4 text-white/90 text-lg">Don't wait — call us immediately or WhatsApp. We prioritize emergency cases.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <a href={`tel:+917972752597`} className="flex items-center gap-2 bg-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl" style={{ color: 'var(--accent)' }}>
                        <Phone className="w-5 h-5" /> Call Now
                    </a>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity" style={{ background: 'var(--wa)' }}>
                        <MessageCircle className="w-5 h-5" /> Emergency WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
}
