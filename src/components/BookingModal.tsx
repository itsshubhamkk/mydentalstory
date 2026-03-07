import { useState } from 'react';
import { X, CheckCircle2, Calendar } from 'lucide-react';

const WA = '917972752597';
const SERVICES = ['General Check-up', 'Teeth Cleaning', 'Teeth Whitening', 'Dental Fillings', 'Root Canal Treatment', 'Dental Implants', 'Orthodontics / Braces', 'Clear Aligners', "Children's Dentistry", 'Dental Emergency', 'Other'];

interface Props { open: boolean; onClose: () => void; }

export default function BookingModal({ open, onClose }: Props) {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', message: '', consent: false });

    if (!open) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);

        const messageText = `Hello, I would like to book an appointment for
Name: ${form.name}
Mobile: ${form.phone}
Service: ${form.service || 'Not specified'}
Preferred Date: ${form.date || 'Not specified'}
Message: ${form.message || 'None'}`;

        const dynamicWaLink = `https://api.whatsapp.com/send/?phone=${WA}&text=${encodeURIComponent(messageText)}&type=phone_number&app_absent=0`;

        window.open(dynamicWaLink, '_blank');

        setTimeout(() => {
            setSubmitted(false);
            setForm({ name: '', phone: '', service: '', date: '', message: '', consent: false });
            onClose();
        }, 3500);
    };

    const waLink = `https://api.whatsapp.com/send/?phone=${WA}&text=${encodeURIComponent('Hello, I would like to book an appointment')}&type=phone_number&app_absent=0`;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 backdrop-blur-sm" style={{ background: 'rgba(0,0,0,0.65)' }} onClick={onClose} />
            <div className="relative w-full max-w-lg shadow-2xl overflow-hidden anim-scale-up rounded-[1.75rem]" style={{ background: 'var(--surface)', maxHeight: '90vh', overflowY: 'auto' }}>

                {/* Header */}
                <div className="relative p-6 pb-8" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-h) 100%)' }}>
                    <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                        <X className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
                            <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Book an Appointment</h2>
                            <p className="text-white/75 text-xs">We'll confirm within a few hours</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 -mt-5 rounded-t-[1.5rem]" style={{ background: 'var(--surface)' }}>
                    {submitted ? (
                        <div className="py-10 text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--accent-lite)' }}>
                                <CheckCircle2 className="w-8 h-8" style={{ color: 'var(--accent)' }} />
                            </div>
                            <h3 className="text-xl font-bold" style={{ fontFamily: "'Inter', sans-serif", color: 'var(--text)' }}>Request Received!</h3>
                            <p className="mt-2 text-sm" style={{ color: 'var(--text-2)' }}>We'll confirm your appointment via call or WhatsApp soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-2)' }}>Name *</label>
                                    <input type="text" required className="form-field" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-2)' }}>Phone *</label>
                                    <input type="tel" required className="form-field" placeholder="98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-2)' }}>Service</label>
                                <select className="form-field" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                                    <option value="">Select a service</option>
                                    {SERVICES.map(s => <option key={s}>{s}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-2)' }}>Preferred Date</label>
                                <input type="date" className="form-field" min={new Date().toISOString().split('T')[0]} value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-2)' }}>Additional Notes</label>
                                <textarea rows={3} className="form-field resize-none" placeholder="Any concerns or special requests..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                            </div>
                            <div className="flex items-start gap-3">
                                <input type="checkbox" required id="consent" checked={form.consent} onChange={e => setForm({ ...form, consent: e.target.checked })}
                                    className="w-4 h-4 mt-0.5 rounded flex-shrink-0 cursor-pointer" style={{ accentColor: 'var(--accent)' }} />
                                <label htmlFor="consent" className="text-xs cursor-pointer select-none" style={{ color: 'var(--text-2)' }}>
                                    I agree to be contacted via phone or WhatsApp regarding my appointment.
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary w-full justify-center py-3.5">
                                Request Appointment
                            </button>
                            <div className="relative text-center text-xs" style={{ color: 'var(--text-3)' }}>
                                <span className="px-2" style={{ background: 'var(--surface)' }}>or book instantly via</span>
                            </div>
                            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-wa w-full justify-center py-3">
                                Book on WhatsApp
                            </a>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
