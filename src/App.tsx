import { useEffect, useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  Sparkles, 
  Stethoscope, 
  AlignCenter,
  Heart,
  Monitor,
  Wallet,
  Calendar,
  MessageCircle,
  Headphones,
  Star,
  Navigation,
  Menu,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// Clinic Data
const CLINIC_DATA = {
  name: 'Sparkle Dental Clinic',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  address: '12 Maple Avenue, Suite 200, Pune',
  hours: 'Mon–Fri: 8am–6pm | Sat: 9am–2pm',
  email: 'hello@sparkledental.in',
  coords: { lat: 18.5204, lng: 73.8567 }
};

// Services Data
const SERVICES = [
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Cleanings, exams, and personalized hygiene plans to keep your smile healthy.',
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description: 'Whitening, veneers, and smile design for a confident, radiant smile.',
  },
  {
    icon: Stethoscope,
    title: 'Restorative Work',
    description: 'Fillings, crowns, bridges, and implants to restore your dental health.',
  },
  {
    icon: AlignCenter,
    title: 'Orthodontics',
    description: 'Clear aligners and braces for all ages to achieve perfect alignment.',
  },
];

// Doctors Data
const DOCTORS = [
  {
    name: 'Dr. Priya Sharma',
    role: 'General & Cosmetic Dentistry',
    image: '/images/doctor-priya.jpg',
    bio: 'Dr. Priya Sharma brings over 12 years of experience in general and cosmetic dentistry. She completed her BDS from Government Dental College, Mumbai, and her MDS in Conservative Dentistry from AIIMS Delhi. Known for her gentle touch and artistic approach to smile design, she has transformed thousands of smiles across Pune.',
    qualifications: ['BDS', 'MDS (Conservative Dentistry)', 'FICOI'],
    specializations: ['Smile Makeover', 'Root Canal', 'Dental Implants'],
  },
  {
    name: 'Dr. Leo Chen',
    role: 'Orthodontics & Implants',
    image: '/images/doctor-leo.jpg',
    bio: 'Dr. Leo Chen is a specialist in orthodontics and dental implantology with 10+ years of clinical practice. After graduating from Manipal College of Dental Sciences, he pursued advanced training in implantology from Germany. He is passionate about creating beautiful, functional smiles using the latest techniques.',
    qualifications: ['BDS', 'MDS (Orthodontics)', 'Diploma in Implantology'],
    specializations: ['Invisalign', 'Dental Implants', 'Braces'],
  },
];

// Why Choose Us Data
const WHY_CHOOSE = [
  {
    icon: Heart,
    title: 'Gentle Techniques',
    description: 'We prioritize comfort at every step of your treatment.',
  },
  {
    icon: Monitor,
    title: 'Modern Technology',
    description: 'Digital X-rays, 3D imaging, same-day crowns.',
  },
  {
    icon: Wallet,
    title: 'Transparent Pricing',
    description: 'Clear estimates, no surprise bills.',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Early, late, and weekend slots available.',
  },
];

// Patient Care Data
const PATIENT_CARE = [
  {
    icon: Stethoscope,
    title: 'Sedation Options',
    description: 'Nitrous oxide and gentle numbing protocols for anxiety-free visits.',
  },
  {
    icon: MessageCircle,
    title: 'Clear Communication',
    description: 'We explain every step before we begin.',
  },
  {
    icon: Headphones,
    title: 'Comfort Amenities',
    description: 'Noise-canceling headphones, warm towels, music.',
  },
];

// Testimonials Data
const TESTIMONIALS = [
  {
    quote: 'The team made me feel safe—even during a root canal. Truly the best dental experience I\'ve had.',
    name: 'Ananya R.',
    rating: 5,
  },
  {
    quote: 'My kids actually look forward to checkups here. The staff is amazing with children!',
    name: 'Marcus T.',
    rating: 5,
  },
  {
    quote: 'Finally, a dentist who explains everything clearly. No more dental anxiety for me!',
    name: 'Sofia L.',
    rating: 5,
  },
];

// Navigation Items
const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [doctorModalOpen, setDoctorModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<typeof DOCTORS[0] | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
    consent: false,
  });

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = NAV_ITEMS.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Open doctor modal
  const openDoctorModal = (doctor: typeof DOCTORS[0]) => {
    setSelectedDoctor(doctor);
    setDoctorModalOpen(true);
  };

  // Handle form submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setBookingOpen(false);
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', service: '', date: '', message: '', consent: false });
    }, 3000);
  };

  // WhatsApp link
  const getWhatsAppLink = (message?: string) => {
    const text = message || `Hi, I'd like to book an appointment with ${CLINIC_DATA.name}`;
    return `https://wa.me/${CLINIC_DATA.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#F6F8FA] relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": CLINIC_DATA.name,
          "image": "/images/hero-clinic.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Maple Avenue, Suite 200",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": CLINIC_DATA.coords.lat,
            "longitude": CLINIC_DATA.coords.lng
          },
          "telephone": CLINIC_DATA.phone,
          "email": CLINIC_DATA.email,
          "openingHours": [
            "Mo-Fr 08:00-18:00",
            "Sa 09:00-14:00"
          ],
          "priceRange": "$$",
          "url": "https://sparkledental.in"
        })}
      </script>

      {/* Navigation - Premium Liquid Glass */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Pill */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="glass-logo-pill"
            >
              <svg className="w-5 h-5 text-[#4AA3BA]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 4.5 5.5 4 4.5 4C3 4 2 5 2 6.5C2 9 4.5 11 7 11C7.5 11 8 10.8 8.5 10.5C8.2 11.2 8 12 8 13C8 16.5 10 20 12 22C14 20 16 16.5 16 13C16 12 15.8 11.2 15.5 10.5C16 10.8 16.5 11 17 11C19.5 11 22 9 22 6.5C22 5 21 4 19.5 4C18.5 4 17.5 4.5 17 5.5C16.5 3.5 14.5 2 12 2ZM12 4C13.5 4 14.5 5 15 6C15.5 6 16 6 16.5 6.5C17 7 17.5 7 18 7C18.5 7 19 6.5 19.5 6C19.8 6 20 6.2 20 6.5C20 7.5 19 8.5 17.5 8.5C17 8.5 16.5 8.3 16 8C15.5 9 14.5 10 13 10.5C13.5 11 14 12 14 13C14 15.5 12.5 18 12 19C11.5 18 10 15.5 10 13C10 12 10.5 11 11 10.5C9.5 10 8.5 9 8 8C7.5 8.3 7 8.5 6.5 8.5C5 8.5 4 7.5 4 6.5C4 6.2 4.2 6 4.5 6C5 6.5 5.5 7 6 7C6.5 7 7 7 7.5 6.5C8 6 8.5 6 9 6C9.5 5 10.5 4 12 4Z"/>
              </svg>
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-white/90">Sparkle</span>
            </a>

            {/* Desktop Nav - Glass Container with Pill Buttons */}
            <div className="hidden md:flex items-center gap-1 glass-nav-container px-2 py-1.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className={`glass-nav-pill ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                >
                  <span className="relative z-10">{item.label}</span>
                </a>
              ))}
            </div>

            {/* CTA Pill */}
            <div className="hidden md:block">
              <button 
                onClick={() => setBookingOpen(true)}
                className="glass-cta-pill"
              >
                Book Online
              </button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button className="glass-logo-pill p-2.5">
                  <Menu className="w-5 h-5 text-white/80" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-[#1a1a1a]/95 backdrop-blur-xl border-l border-white/10">
                <div className="flex flex-col gap-4 mt-8">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                      className="text-lg font-medium text-white/80 hover:text-[#4AA3BA] transition-colors py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                  <button 
                    onClick={() => { setMobileMenuOpen(false); setBookingOpen(true); }}
                    className="glass-cta-pill mt-4"
                  >
                    Book Online
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-clinic.jpg" 
            alt="Modern dental clinic interior at Sparkle Dental Clinic Pune"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F6F8FA]/35 via-[#F6F8FA]/60 to-[#F6F8FA]/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 pt-20">
          <h1 className="hero-title animate-fade-in-up">SPARKLE</h1>
          <h2 className="hero-subtitle mt-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            DENTAL CLINIC
          </h2>
          <p className="mt-6 text-lg text-[#6B7883] max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Modern care, gentle hands. Your smile is our passion.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-button-whatsapp flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <button 
              onClick={() => setBookingOpen(true)}
              className="pill-button-outline flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </button>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-8 left-0 right-0 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-sm text-[#6B7883]">
              <a href={`tel:${CLINIC_DATA.phone}`} className="flex items-center gap-2 hover:text-[#4AA3BA] transition-colors">
                <Phone className="w-4 h-4" />
                {CLINIC_DATA.phone}
              </a>
              <span className="hidden sm:flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {CLINIC_DATA.address}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Mon–Fri 8am–6pm
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="section-label">Our Services</span>
              <h2 className="section-title mt-4">
                Complete dental care for your family.
              </h2>
              
              <div className="mt-10 space-y-2">
                {SERVICES.map((service, index) => (
                  <div key={index} className="service-item">
                    <div className="icon-circle flex-shrink-0">
                      <service.icon className="w-7 h-7 text-[#4AA3BA]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2A2F33]">{service.title}</h3>
                      <p className="text-sm text-[#6B7883] mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => setBookingOpen(true)}
                className="mt-8 text-[#4AA3BA] font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                See all services <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Right Image */}
            <div className="image-card h-[500px] lg:h-[600px]">
              <img 
                src="/images/services-dentist.jpg" 
                alt="Dentist consulting with patient at Sparkle Dental Clinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EAF2F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="image-card h-[500px] lg:h-[600px] order-2 lg:order-1">
              <img 
                src="/images/team-doctor.jpg" 
                alt="Dr. Priya Sharma at Sparkle Dental Clinic Pune"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <span className="section-label">Meet the Team</span>
              <h2 className="section-title mt-4">
                Experienced dentists who listen.
              </h2>
              <p className="mt-4 text-[#6B7883]">
                Our team of skilled professionals is dedicated to providing you with the highest quality dental care in a comfortable, welcoming environment.
              </p>
              
              {/* Doctor Cards */}
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {DOCTORS.map((doctor, index) => (
                  <div 
                    key={index} 
                    className="doctor-card cursor-pointer"
                    onClick={() => openDoctorModal(doctor)}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={doctor.image} 
                        alt={`${doctor.name} - ${doctor.role} at Sparkle Dental Clinic Pune`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-[#2A2F33]">{doctor.name}</h3>
                      <p className="text-sm text-[#6B7883] mt-1">{doctor.role}</p>
                      <button className="mt-4 text-[#4AA3BA] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        View profile <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sparkle Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="section-label">Why Sparkle</span>
              <h2 className="section-title mt-4">
                Modern care, gentle hands.
              </h2>
              
              <div className="mt-10 space-y-2">
                {WHY_CHOOSE.map((item, index) => (
                  <div key={index} className="service-item">
                    <div className="icon-circle flex-shrink-0">
                      <item.icon className="w-7 h-7 text-[#4AA3BA]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2A2F33]">{item.title}</h3>
                      <p className="text-sm text-[#6B7883] mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Image */}
            <div className="image-card h-[500px] lg:h-[600px]">
              <img 
                src="/images/why-closeup.jpg" 
                alt="Advanced dental procedure at Sparkle Dental Clinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patient Care Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EAF2F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="image-card h-[500px] lg:h-[600px] order-2 lg:order-1">
              <img 
                src="/images/care-patient.jpg" 
                alt="Comfortable patient experience at Sparkle Dental Clinic"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <span className="section-label">Patient Care</span>
              <h2 className="section-title mt-4">
                We make visits calm and predictable.
              </h2>
              <p className="mt-4 text-[#6B7883]">
                Your comfort is our priority. From the moment you walk in, we ensure a relaxing experience with modern amenities and compassionate care.
              </p>
              
              <div className="mt-10 space-y-4">
                {PATIENT_CARE.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4AA3BA]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#4AA3BA]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2A2F33]">{item.title}</h3>
                      <p className="text-sm text-[#6B7883] mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a 
                href={getWhatsAppLink('Hi, I would like to know more about comfort options at your clinic')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 text-[#4AA3BA] font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                Ask about comfort options <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title mt-4">Real smiles. Real stories.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#4AA3BA] text-[#4AA3BA]" />
                  ))}
                </div>
                <p className="text-[#2A2F33] leading-relaxed">"{testimonial.quote}"</p>
                <p className="mt-6 font-medium text-[#6B7883]">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EAF2F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Content */}
            <div>
              <span className="section-label">Visit Us</span>
              <h2 className="section-title mt-4">
                We're closer than you think.
              </h2>
              <p className="mt-4 text-[#6B7883]">
                Located in the heart of Pune, our clinic is easily accessible with ample parking available.
              </p>
              
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-[#4AA3BA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2A2F33]">Address</h3>
                    <p className="text-[#6B7883] mt-1">{CLINIC_DATA.address}</p>
                    <p className="text-sm text-[#6B7883]">Free parking behind the building</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-[#4AA3BA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2A2F33]">Phone</h3>
                    <a 
                      href={`tel:${CLINIC_DATA.phone}`}
                      className="text-[#6B7883] mt-1 hover:text-[#4AA3BA] transition-colors"
                    >
                      {CLINIC_DATA.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Clock className="w-5 h-5 text-[#4AA3BA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2A2F33]">Opening Hours</h3>
                    <p className="text-[#6B7883] mt-1">{CLINIC_DATA.hours}</p>
                  </div>
                </div>
              </div>
              
              <a 
                href={`https://maps.google.com/?q=${CLINIC_DATA.coords.lat},${CLINIC_DATA.coords.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 pill-button-primary inline-flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
            
            {/* Right Map */}
            <div className="map-card h-[400px] lg:h-[500px] bg-white">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d${CLINIC_DATA.coords.lng}!3d${CLINIC_DATA.coords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sparkle Dental Clinic Location"
                className="rounded-[28px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/closing-team.jpg" 
            alt="Sparkle Dental Clinic team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F6F8FA]/55 via-[#F6F8FA]/75 to-[#F6F8FA]/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 py-24">
          <h2 className="hero-title">SPARKLE</h2>
          <h3 className="hero-subtitle mt-2">DENTAL CLINIC</h3>
          <p className="mt-6 text-lg text-[#6B7883] max-w-lg mx-auto">
            Book your first visit today. We'll handle the rest with care.
          </p>
          
          <button 
            onClick={() => setBookingOpen(true)}
            className="pill-button-primary mt-10"
          >
            Book Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A2F33] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold uppercase tracking-[0.15em]">Sparkle</h3>
              <p className="mt-4 text-gray-400 max-w-sm">
                Modern dental care with a gentle touch. Your smile is our passion.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a 
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="mt-4 space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a 
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold">Contact</h4>
              <ul className="mt-4 space-y-3 text-gray-400">
                <li>{CLINIC_DATA.address}</li>
                <li>
                  <a href={`tel:${CLINIC_DATA.phone}`} className="hover:text-white transition-colors">
                    {CLINIC_DATA.phone}
                  </a>
                </li>
                <li>{CLINIC_DATA.hours}</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} {CLINIC_DATA.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Booking Dialog */}
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="sm:max-w-lg bg-white rounded-3xl p-0 overflow-hidden">
          <div className="p-6 sm:p-8">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#2A2F33]">
                Book an Appointment
              </DialogTitle>
            </DialogHeader>
            
            {formSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-[#2A2F33]">Thank you!</h3>
                <p className="mt-2 text-[#6B7883]">
                  We've received your request. We'll confirm via WhatsApp within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#2A2F33] mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#2A2F33] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    className="form-input"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#2A2F33] mb-2">Service</label>
                  <select
                    required
                    className="form-input"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Select a service</option>
                    <option value="checkup">General Checkup</option>
                    <option value="cleaning">Teeth Cleaning</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="rootcanal">Root Canal</option>
                    <option value="implant">Dental Implant</option>
                    <option value="braces">Braces/Aligners</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#2A2F33] mb-2">Preferred Date</label>
                  <input
                    type="date"
                    required
                    className="form-input"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#2A2F33] mb-2">Message (Optional)</label>
                  <textarea
                    rows={3}
                    className="form-input resize-none"
                    placeholder="Any specific concerns..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    id="consent"
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-[#4AA3BA] focus:ring-[#4AA3BA]"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  />
                  <label htmlFor="consent" className="text-sm text-[#6B7883]">
                    I consent to Sparkle Dental Clinic collecting my information for appointment booking purposes.
                  </label>
                </div>
                
                <button type="submit" className="w-full pill-button-primary py-4">
                  Request Appointment
                </button>
                
                <p className="text-center text-sm text-[#6B7883]">
                  Or message us on{' '}
                  <a 
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-medium hover:underline"
                  >
                    WhatsApp
                  </a>
                </p>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Doctor Modal */}
      <Dialog open={doctorModalOpen} onOpenChange={setDoctorModalOpen}>
        <DialogContent className="sm:max-w-2xl bg-white rounded-3xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
          {selectedDoctor && (
            <div className="grid md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img 
                  src={selectedDoctor.image} 
                  alt={`${selectedDoctor.name} - ${selectedDoctor.role}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-[#2A2F33]">
                    {selectedDoctor.name}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-[#4AA3BA] font-medium mt-1">{selectedDoctor.role}</p>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-[#2A2F33] mb-2">About</h4>
                  <p className="text-sm text-[#6B7883] leading-relaxed">{selectedDoctor.bio}</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-[#2A2F33] mb-2">Qualifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDoctor.qualifications.map((qual, i) => (
                      <span key={i} className="px-3 py-1 bg-[#EAF2F8] rounded-full text-sm text-[#2A2F33]">
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-[#2A2F33] mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDoctor.specializations.map((spec, i) => (
                      <span key={i} className="px-3 py-1 bg-[#4AA3BA]/10 rounded-full text-sm text-[#4AA3BA]">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => { setDoctorModalOpen(false); setBookingOpen(true); }}
                  className="w-full pill-button-primary mt-8"
                >
                  Book with {selectedDoctor.name.split(' ')[1]}
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
