import { useState } from 'react';
import { X, CheckCircle2, Calendar } from 'lucide-react';

interface BookingModalProps {
    open: boolean;
    onClose: () => void;
}

const CLINIC_WHATSAPP = '919876543210';

export default function BookingModal({ open, onClose }: BookingModalProps) {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '', phone: '', service: '', date: '', message: '', consent: false,
    });

    if (!open) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            onClose();
            setSubmitted(false);
            setForm({ name: '', phone: '', service: '', date: '', message: '', consent: false });
        }, 3000);
    };

    const waLink = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent("Hi, I'd like to book a dental appointment")}`;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-lg bg-white rounded-[1.75rem] shadow-2xl overflow-hidden animate-scale-in">
                {/* Header */}
                <div className="relative bg-gradient-to-br from-teal-600 to-teal-500 p-6 pb-8">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-4 h-4 text-white" />
                    </button>
                    <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-white/80" />
                        <div>
                            <h2 className="text-xl font-bold text-white">Book an Appointment</h2>
                            <p className="text-white/70 text-sm mt-0.5">We'll confirm within 2 hours</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 -mt-4 bg-white rounded-t-[1.5rem]">
                    {submitted ? (
                        <div className="py-10 text-center">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">Request Received!</h3>
                            <p className="text-slate-500 mt-2 text-sm">We'll confirm your appointment via WhatsApp shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text" required className="form-field"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={e => setForm({ ...form, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Phone</label>
                                    <input
                                        type="tel" required pattern="[0-9]{10}" className="form-field"
                                        placeholder="9876543210"
                                        value={form.phone}
                                        onChange={e => setForm({ ...form, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Service</label>
                                    <select
                                        required className="form-field"
                                        value={form.service}
                                        onChange={e => setForm({ ...form, service: e.target.value })}
                                    >
                                        <option value="">Select service</option>
                                        <option value="checkup">General Checkup</option>
                                        <option value="cleaning">Teeth Cleaning</option>
                                        <option value="whitening">Teeth Whitening</option>
                                        <option value="rootcanal">Root Canal</option>
                                        <option value="implant">Dental Implant</option>
                                        <option value="braces">Braces / Aligners</option>
                                        <option value="emergency">Emergency Care</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Preferred Date</label>
                                    <input
                                        type="date" required className="form-field"
                                        value={form.date}
                                        min={new Date().toISOString().split('T')[0]}
                                        onChange={e => setForm({ ...form, date: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Message (Optional)</label>
                                <textarea
                                    rows={2} className="form-field resize-none"
                                    placeholder="Any specific concerns or questions..."
                                    value={form.message}
                                    onChange={e => setForm({ ...form, message: e.target.value })}
                                />
                            </div>

                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox" id="consent" required
                                    className="mt-1 w-4 h-4 rounded accent-teal-600"
                                    checked={form.consent}
                                    onChange={e => setForm({ ...form, consent: e.target.checked })}
                                />
                                <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                                    I consent to MyDentalStory collecting my information for the purpose of appointment booking.
                                </label>
                            </div>

                            <button type="submit" className="btn-primary w-full justify-center py-3.5">
                                Request Appointment
                            </button>

                            <p className="text-center text-sm text-slate-500">
                                Prefer WhatsApp?{' '}
                                <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-[#25d366] font-semibold hover:underline">
                                    Message us directly
                                </a>
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
