import { useState } from 'react';
import { Calendar, MessageCircle, Award, Users, Heart, X } from 'lucide-react';

const WHATSAPP = '919876543210';

const VALUES = [
    { icon: Heart, title: 'Patient-First Care', desc: 'Every decision we make starts with what\'s best for your oral health and comfort. You\'re a person, not a set of teeth.' },
    { icon: Award, title: 'Clinical Excellence', desc: 'Our dentists continuously update their training with international certifications and the latest evidence-based techniques.' },
    { icon: Users, title: 'Family Approach', desc: 'We build long-term relationships with our patients — treating grandparents, parents, and children with the same warmth.' },
];

const DOCTORS = [
    {
        name: 'Dr. Priya Sharma',
        role: 'General & Cosmetic Dentistry',
        image: '/images/doctor-priya.jpg',
        bio: 'Dr. Priya Sharma brings over 12 years of experience in general and cosmetic dentistry. She completed her BDS from Government Dental College, Mumbai, and her MDS in Conservative Dentistry from AIIMS Delhi. Known for her gentle touch and artistic approach to smile design, she has transformed thousands of smiles across Pune.',
        qualifications: ['BDS, Government Dental College Mumbai', 'MDS (Conservative Dentistry), AIIMS Delhi', 'FICOI — Implantology Fellow'],
        specializations: ['Smile Makeover', 'Root Canal Treatment', 'Dental Implants', 'Porcelain Veneers'],
        experience: '12+ years',
        tagline: '"Every patient deserves a smile they\'re proud to share."',
    },
    {
        name: 'Dr. Leo Chen',
        role: 'Orthodontics & Implants',
        image: '/images/doctor-leo.jpg',
        bio: 'Dr. Leo Chen is a specialist in orthodontics and dental implantology with 10+ years of clinical practice. After graduating from Manipal College of Dental Sciences, he pursued advanced training in implantology from Germany. He is passionate about creating beautiful, functional smiles using the latest techniques.',
        qualifications: ['BDS, Manipal College of Dental Sciences', 'MDS (Orthodontics)', 'Advanced Diploma in Implantology, Germany'],
        specializations: ['Invisalign / Clear Aligners', 'Dental Implants', 'Traditional Braces', 'Interceptive Orthodontics'],
        experience: '10+ years',
        tagline: '"A perfect smile is built one tooth at a time."',
    },
];

type Doctor = typeof DOCTORS[0];

function DoctorModal({ doctor, onClose, onBooking }: { doctor: Doctor; onClose: () => void; onBooking: () => void }) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/65 backdrop-blur-md" onClick={onClose} />
            <div className="relative w-full max-w-2xl bg-white rounded-[1.75rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto animate-scale-in">
                <button onClick={onClose} className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/30 transition-colors">
                    <X className="w-4 h-4 text-white" />
                </button>
                <div className="grid sm:grid-cols-2">
                    <div className="h-64 sm:h-full">
                        <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-7">
                        <h3 className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-display)' }}>{doctor.name}</h3>
                        <p className="text-teal-600 font-semibold mt-1 text-sm">{doctor.role}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{doctor.experience} experience</p>
                        <p className="mt-5 text-sm text-slate-600 leading-relaxed">{doctor.bio}</p>
                        <div className="mt-5">
                            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Qualifications</h4>
                            <ul className="space-y-1.5">
                                {doctor.qualifications.map((q, i) => (
                                    <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                                        <span className="text-teal-500 mt-0.5">✓</span>{q}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-5">
                            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Specializations</h4>
                            <div className="flex flex-wrap gap-2">
                                {doctor.specializations.map((s, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-200">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <blockquote className="mt-5 italic text-xs text-slate-500 border-l-2 border-teal-400 pl-3">
                            {doctor.tagline}
                        </blockquote>
                        <button onClick={() => { onClose(); onBooking(); }} className="btn-primary w-full justify-center mt-6">
                            <Calendar className="w-4 h-4" /> Book with Dr. {doctor.name.split(' ')[1]}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface AboutPageProps {
    onBooking: () => void;
}

export default function AboutPage({ onBooking }: AboutPageProps) {
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
    const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I'd like to know more about MyDentalStory")}`;

    return (
        <div className="min-h-screen bg-[#f6f8fa]">
            <div className="grain-overlay" />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/team-doctor.jpg" alt="MyDentalStory team" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 via-teal-900/75 to-slate-900/90" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest mb-5">
                        About Us
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        A Clinic Built on<br />Trust & Craftsmanship
                    </h1>
                    <p className="mt-5 text-white/75 text-lg leading-relaxed max-w-xl mx-auto">
                        Since 2012, MyDentalStory has been creating healthy, beautiful smiles for families across Pune — with honesty, skill, and genuine care.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    <div>
                        <span className="section-label">Our Story</span>
                        <h2 className="section-title mt-3">More than a dental clinic</h2>
                        <div className="space-y-4 mt-6 text-slate-600 leading-relaxed">
                            <p>MyDentalStory was founded in 2012 with a simple belief: every person deserves dental care that is gentle, honest, and genuinely effective. We saw a gap between the impersonal, rushed care common in busy clinics and what patients truly deserve — time, transparency, and a real relationship with their dentist.</p>
                            <p>Over the years, we've grown into a full-service dental care center, but our values remain unchanged. We still believe great dental care begins with listening. Before any treatment, we take time to understand your concerns, your goals, and your fears — and build a plan around you.</p>
                            <p>Our team of specialists brings expertise in everything from children's dentistry to complex implant surgery, always using the latest evidence-based techniques and technology.</p>
                        </div>
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            {[
                                { val: '2012', label: 'Founded' },
                                { val: '5,000+', label: 'Patients Served' },
                                { val: '4.9★', label: 'Avg. Rating' },
                            ].map((s, i) => (
                                <div key={i} className="bg-teal-50 border border-teal-100 rounded-2xl p-4 text-center">
                                    <span className="block text-xl font-black text-teal-700">{s.val}</span>
                                    <span className="block text-xs text-slate-500 font-medium mt-1">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="image-card h-[480px] lg:h-[560px]">
                        <img src="/images/care-patient.jpg" alt="Caring patient at MyDentalStory" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="section-label">Our Values</span>
                        <h2 className="section-title mt-3">What we stand for</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {VALUES.map((v, i) => (
                            <div key={i} className="card p-7">
                                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-5">
                                    <v.icon className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-800 mb-2">{v.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="section-label">Meet the Team</span>
                        <h2 className="section-title mt-3">Experienced dentists who listen.</h2>
                        <p className="mt-3 text-slate-500 max-w-lg mx-auto">Our specialists combine years of training with genuine passion for patient care.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {DOCTORS.map((doc, i) => (
                            <div key={i} className="card overflow-hidden cursor-pointer group" onClick={() => setSelectedDoctor(doc)}>
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl text-slate-800">{doc.name}</h3>
                                    <p className="text-teal-600 text-sm font-medium mt-0.5">{doc.role}</p>
                                    <p className="text-xs text-slate-400 mt-0.5">{doc.experience} experience</p>
                                    <blockquote className="mt-4 text-sm italic text-slate-500 border-l-2 border-teal-400 pl-3">
                                        {doc.tagline}
                                    </blockquote>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {doc.specializations.slice(0, 3).map((s, j) => (
                                            <span key={j} className="px-2.5 py-1 rounded-full text-xs bg-teal-50 text-teal-700 border border-teal-200">{s}</span>
                                        ))}
                                    </div>
                                    <button className="mt-5 text-teal-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                        View Profile →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clinic Images */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="section-label">Our Clinic</span>
                        <h2 className="section-title mt-3">A space designed for your comfort</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {['/images/hero-clinic.jpg', '/images/services-dentist.jpg', '/images/why-closeup.jpg', '/images/team-doctor.jpg', '/images/closing-team.jpg', '/images/care-patient.jpg'].map((img, i) => (
                            <div key={i} className={`image-card overflow-hidden ${i === 0 ? 'col-span-2 row-span-2 h-80 md:h-auto' : 'h-40 md:h-52'}`}>
                                <img src={img} alt={`MyDentalStory clinic ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-br from-teal-700 to-teal-600 text-white text-center">
                <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
                    Ready to meet the team?
                </h2>
                <p className="mt-4 text-white/80 max-w-md mx-auto">Come see us in person. Your first consultation is always at zero pressure.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <button onClick={onBooking} className="bg-white text-teal-700 font-bold px-8 py-3.5 rounded-full hover:bg-teal-50 transition-colors flex items-center gap-2">
                        <Calendar className="w-5 h-5" /> Book a Visit
                    </button>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="border-2 border-white/50 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                        <MessageCircle className="w-5 h-5" /> WhatsApp Us
                    </a>
                </div>
            </section>

            {/* Doctor Modal */}
            {selectedDoctor && (
                <DoctorModal
                    doctor={selectedDoctor}
                    onClose={() => setSelectedDoctor(null)}
                    onBooking={onBooking}
                />
            )}
        </div>
    );
}
