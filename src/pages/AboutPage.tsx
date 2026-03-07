import { useState } from 'react';
import { Calendar, MessageCircle, Award, Users, Heart, X } from 'lucide-react';
import { img } from '../utils/images';

const WA = '917972752597';

const VALUES = [
    { icon: Heart, title: 'Patient-First Care', desc: 'Every decision starts with what\'s best for your oral health and comfort. You\'re a person, not a set of teeth.' },
    { icon: Award, title: 'Clinical Excellence', desc: 'Our dentists continuously update their training with international certifications and the latest evidence-based techniques.' },
    { icon: Users, title: 'Family Approach', desc: 'We build long-term relationships — treating grandparents, parents, and children with equal warmth and care.' },
];

const DOCTORS = [
    {
        name: 'Dr. Nikhil Khandare',
        role: 'General & Cosmetic Dentistry',
        image: img('images/dr-nikhil.jpg'),
        bio: 'Dr. Nikhil Khandare is the lead dentist at My Dental Story and is widely known for his gentle, patient-first approach. He is especially praised for his ability to make children feel at ease — engaging them in friendly conversation and familiarizing them with equipment so they never feel anxious. Patients frequently note that even complex procedures like root canals feel surprisingly comfortable under his care.',
        qualifications: ['BDS — Dental Surgery', 'Specialized Training in Dental Implants', 'Best Dentist in Pimple Saudagar'],
        specializations: ['Dental Implants', 'Root Canal Treatment', 'Cosmetic Dentistry', 'Children\'s Dentistry'],
        experience: '12+ years',
        tagline: '"Every smile has a story — let\'s make yours a happy one."',
    },
    {
        name: 'Dr. Vaidehi Khandare',
        role: 'Orthodontics & Preventive Care',
        image: img('images/dr-vaidehi.jpg'),
        bio: 'Dr. Vaidehi Khandare brings warmth and precision to orthodontics and preventive dental care. She is passionate about guiding patients toward long-term oral health through education, early intervention, and personalized care plans for the entire family.',
        qualifications: ['BDS — Dental Surgery', 'Training in Orthodontics & Aligners', 'Preventive Dentistry Specialist'],
        specializations: ['Clear Aligners', 'Traditional Braces', 'Preventive Care', 'Gum Health'],
        experience: '8+ years',
        tagline: '"Prevention today means a brighter smile tomorrow."',
    },
];

type Doctor = typeof DOCTORS[0];

function DoctorModal({ doctor, onClose, onBooking }: { doctor: Doctor; onClose: () => void; onBooking: () => void }) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 backdrop-blur-sm" style={{ background: 'rgba(0,0,0,0.65)' }} onClick={onClose} />
            <div className="relative w-full max-w-2xl rounded-[1.75rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto anim-scale-up" style={{ background: 'var(--surface)' }}>
                <button onClick={onClose} className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ background: 'rgba(0,0,0,0.35)', color: '#fff' }}>
                    <X className="w-4 h-4" />
                </button>
                <div className="grid sm:grid-cols-2">
                    <div className="h-64 sm:h-full">
                        <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-7">
                        <h3 className="text-2xl font-bold" style={{ fontFamily: "'Inter', sans-serif", color: 'var(--text)' }}>{doctor.name}</h3>
                        <p className="font-semibold mt-1 text-sm" style={{ color: 'var(--accent)' }}>{doctor.role}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>{doctor.experience} experience</p>
                        <p className="mt-5 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{doctor.bio}</p>
                        <div className="mt-5">
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text)' }}>Qualifications</h4>
                            <ul className="space-y-1.5">
                                {doctor.qualifications.map((q, i) => (
                                    <li key={i} className="text-xs flex items-start gap-2" style={{ color: 'var(--text-2)' }}>
                                        <span style={{ color: 'var(--accent)' }} className="mt-0.5">✓</span>{q}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-5">
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text)' }}>Specializations</h4>
                            <div className="flex flex-wrap gap-2">
                                {doctor.specializations.map((s, i) => <span key={i} className="badge badge-accent">{s}</span>)}
                            </div>
                        </div>
                        <blockquote className="mt-5 italic text-xs border-l-2 pl-3" style={{ color: 'var(--text-3)', borderColor: 'var(--gold)' }}>
                            {doctor.tagline}
                        </blockquote>
                        <button onClick={() => { onClose(); onBooking(); }} className="btn btn-primary w-full justify-center mt-6">
                            <Calendar className="w-4 h-4" /> Book with {doctor.name.split(' ')[1]}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AboutPage({ onBooking }: { onBooking: () => void }) {
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
    const waLink = `https://api.whatsapp.com/send/?phone=${WA}&text=New+Clinic+Registration+Enquiry%3A%0A%0AClinic+Name%3A+MyDentalStory%0AMobile%3A+%0AEmail%3A+%0AAddress%3A+&type=phone_number&app_absent=0`;

    return (
        <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
            <div className="grain-overlay" />

            {/* Hero Banner — lighter overlay so image is visible */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">

                    <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(5,30,18,0.55) 0%,rgba(3,20,12,0.72) 100%)' }} />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <span className="badge badge-gold mb-5">About Us</span>
                    <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                        A Clinic Built on<br /><span className="text-emerald-300">Trust &amp; Compassion</span>
                    </h1>
                    <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-xl mx-auto">
                        Serving families across Pimple Saudagar, Pune since 2012 — with honesty, gentle care, and a genuine commitment to your smile.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    <div>
                        <span className="section-eyebrow">Our Story</span>
                        <h2 className="section-title mt-3">More than a<br />dental clinic.</h2>
                        <div className="space-y-4 mt-6 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                            <p>My Dental Story was founded with a simple belief: every person deserves dental care that is gentle, honest, and genuinely effective. We saw a gap between impersonal, rushed care and what patients truly deserve — time, transparency, and a real relationship with their dentist.</p>
                            <p>Based at P K Chowk, Pimple Saudagar, we've grown into a full-service dental care centre. Yet our values remain unchanged: great dental care begins with listening. Before any treatment, we take the time to understand your concerns, your goals, and your fears.</p>
                            <p>Our team of specialists brings expertise in everything from children's dentistry to complex implant surgery, always using the latest evidence-based techniques. We're LGBTQ+ friendly and welcome all patients with openness and respect.</p>
                        </div>
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            {[
                                { val: '2012', label: 'Founded' },
                                { val: '5,000+', label: 'Patients' },
                                { val: '4.9★', label: '99 Reviews' },
                            ].map((s, i) => (
                                <div key={i} className="stat-card">
                                    <span className="block text-xl font-black" style={{ fontFamily: "'Inter', sans-serif", color: 'var(--accent)' }}>{s.val}</span>
                                    <span className="block text-xs font-medium mt-1" style={{ color: 'var(--text-2)' }}>{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="image-card h-[480px] lg:h-[560px]">
                        <img src={img('images/care-patient.jpg')} alt="Caring patient at MyDentalStory" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="section-eyebrow">Our Values</span>
                        <h2 className="section-title mt-3">What we stand for</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {VALUES.map((v, i) => (
                            <div key={i} className="card p-7">
                                <div className="icon-ring mb-5"><v.icon className="w-6 h-6" style={{ color: 'var(--accent)' }} /></div>
                                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Inter', sans-serif", color: 'var(--text)' }}>{v.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--bg-alt)' }}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="section-eyebrow">Our Doctors</span>
                        <h2 className="section-title mt-3">Experienced dentists<br />who listen.</h2>
                        <p className="mt-3 text-sm max-w-lg mx-auto" style={{ color: 'var(--text-2)' }}>Our specialists combine years of training with a genuine passion for patient care — gentle with every patient, especially children.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {DOCTORS.map((doc, i) => (
                            <div key={i} className="card overflow-hidden cursor-pointer group" onClick={() => setSelectedDoctor(doc)}>
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl" style={{ fontFamily: "'Inter', sans-serif", color: 'var(--text)' }}>{doc.name}</h3>
                                    <p className="font-medium text-sm mt-0.5" style={{ color: 'var(--accent)' }}>{doc.role}</p>
                                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>{doc.experience} experience</p>
                                    <blockquote className="mt-4 italic text-sm border-l-2 pl-3" style={{ color: 'var(--text-2)', borderColor: 'var(--gold)' }}>{doc.tagline}</blockquote>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {doc.specializations.slice(0, 3).map((s, j) => <span key={j} className="badge badge-accent">{s}</span>)}
                                    </div>
                                    <button className="mt-5 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" style={{ color: 'var(--accent)' }}>View Profile →</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clinic Gallery */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="section-eyebrow">Our Clinic</span>
                        <h2 className="section-title mt-3">A space designed<br />for your comfort.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            img('images/clinic/entrace-area.png'),
                            img('images/clinic/main-working-area.png'),
                            img('images/clinic/main-room.png'),
                            img('images/clinic/outside-view.png')
                        ].map((src, i) => (
                            <div key={i} className="image-card overflow-hidden h-64 md:h-80 shadow-md">
                                <img src={src} alt={`MyDentalStory Clinic View ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 text-center" style={{ background: 'var(--accent)' }}>
                <h2 className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Ready to meet the team?</h2>
                <p className="mt-4 text-white/80 max-w-md mx-auto">Come see us in person. Your first consultation is always at zero pressure.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <button onClick={onBooking} className="bg-white font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-all flex items-center gap-2" style={{ color: 'var(--accent)' }}>
                        <Calendar className="w-5 h-5" /> Book a Visit
                    </button>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="border-2 border-white/50 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                        <MessageCircle className="w-5 h-5" /> WhatsApp Us
                    </a>
                </div>
            </section>

            {selectedDoctor && (
                <DoctorModal doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} onBooking={onBooking} />
            )}
        </div>
    );
}
