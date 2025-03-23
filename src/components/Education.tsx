import React from 'react';
import { Calendar, MapPin, Phone, Mail, User, Users, Clock, Award, CreditCard, Download, ArrowRight, ChevronRight, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Education: React.FC = () => {
  const { t } = useTranslation();
  
  const events = [
    {
      id: 1,
      featured: true,
      title: t('educationEvents.symposium.title'),
      subtitle: t('educationEvents.symposium.subtitle'),
      date: t('educationEvents.symposium.date'),
      location: t('educationEvents.symposium.location'),
      language: t('educationEvents.symposium.language'),
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: t('educationEvents.symposium.description'),
      speakers: ["Dr. Henri Diederich", "Dr. Sci. dr. Prohić Samir", "Prof. Dr. Almir Dervišević", "Assistent prof. dr. Dino Dizdarevic"],
      topics: ["The One Piece Implants", "Tissue level implants with Multiunits", "Two piece implants - Theory & Prosthetical options", "Indications & Contraindication", "Treatment options in the atrophied bone", "CBCT Guided Implantology"]
    },
    {
      id: 2,
      featured: false,
      title: t('educationEvents.workshop.title'),
      subtitle: t('educationEvents.workshop.subtitle'),
      date: t('educationEvents.workshop.date'),
      location: t('educationEvents.workshop.location'),
      language: t('educationEvents.workshop.language'),
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: t('educationEvents.workshop.description'),
      speakers: ["Dr. Maja Petrović", "Dr. Thomas Schmidt"],
      topics: ["Digital Impression Techniques", "CAD Design for Implant Crowns", "Material Selection for Milling", "Full-Arch Digital Solutions"]
    },
    {
      id: 3,
      featured: false,
      title: t('educationEvents.masterclass.title'),
      subtitle: t('educationEvents.masterclass.subtitle'),
      date: t('educationEvents.masterclass.date'),
      location: t('educationEvents.masterclass.location'),
      language: t('educationEvents.masterclass.language'),
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: t('educationEvents.masterclass.description'),
      speakers: ["Prof. Dr. Anna Müller", "Dr. Ibrahim Hasić"],
      topics: ["Gingival Biotypes", "Surgical Techniques", "Impression Methods", "Provisional Restorations", "Emergence Profile Design"]
    }
  ];

  const featuredEvent = events.find(event => event.featured);
  const regularEvents = events.filter(event => !event.featured);

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-r from-[#add15a] to-[#9bc046]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white sm:tracking-tight lg:text-5xl">
            {t('events.title')}
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white">
            {t('events.subtitle')}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#upcoming-events" className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-[#add15a] bg-white hover:bg-gray-50">
              {t('education.upcomingEvents')}
            </a>
            <a href="#contact" className="inline-flex items-center px-6 py-3 border border-white rounded-md text-base font-medium text-white hover:bg-white/10">
              {t('education.customTraining')}
            </a>
          </div>
        </div>
      </div>

      {/* Featured Event Section */}
      {featuredEvent && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">{t('events.featured')}</h2>
              <p className="mt-4 text-lg text-gray-600">{t('events.featuredDesc')}</p>
            </div>
            
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-2/5">
                  <img 
                    src={featuredEvent.image} 
                    alt={featuredEvent.title} 
                    className="h-64 md:h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-3/5">
                  <div className="uppercase tracking-wide text-sm text-[#add15a] font-semibold mb-1">{t('events.featured')}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{featuredEvent.title}</h3>
                  <h4 className="text-lg text-gray-700 mb-4">{featuredEvent.subtitle}</h4>
                  
                  <div className="flex flex-wrap gap-3 text-gray-600 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-1 text-[#add15a]" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-1 text-[#add15a]" />
                      <span>{featuredEvent.location}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-5 w-5 mr-1 text-[#add15a]" />
                      <span>{featuredEvent.language}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{featuredEvent.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-2">{t('educationEvents.keyNotes')}</h5>
                    <div className="flex flex-wrap gap-2">
                      {featuredEvent.speakers.map((speaker, index) => (
                        <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                          {speaker}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link to={`/event-details/${featuredEvent.id}`} className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#add15a] hover:bg-[#9bc046]">
                    {t('educationEvents.viewDetails')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Upcoming Events Section */}
      <section id="upcoming-events" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">{t('educationEvents.upcomingEvents')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('educationEvents.enhanceSkills')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform hover:transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-700 mb-4">{event.subtitle}</p>
                    
                    <div className="space-y-2 text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-[#add15a]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-[#add15a]" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-5 w-5 mr-2 text-[#add15a]" />
                        <span>{event.language}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 line-clamp-3">{event.description}</p>
                  </div>
                  
                  <div className="mt-6">
                    <Link to={`/event-details/${event.id}`} className="inline-flex items-center text-[#add15a] hover:text-[#9bc046]">
                      {t('educationEvents.viewDetails')}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">{t('events.programs')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('events.programsDesc')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-[#add15a]/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#add15a]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('events.workshops')}</h3>
              <p className="text-gray-600">
                {t('events.workshopsDesc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-[#add15a]/20 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-[#add15a]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('events.symposiums')}</h3>
              <p className="text-gray-600">
                {t('events.symposiumsDesc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-[#add15a]/20 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-[#add15a]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('events.clinical')}</h3>
              <p className="text-gray-600">
                {t('events.clinicalDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2 bg-gradient-to-br from-[#add15a] to-[#9bc046] p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">{t('events.custom')}</h3>
                <p className="mb-6">
                  {t('events.customDesc')}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    <span>Personalized curriculum</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    <span>Flexible scheduling options</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    <span>On-site or virtual formats</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    <span>Experienced clinical educators</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-8 md:w-1/2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('events.contact')}</h3>
                <p className="text-gray-600 mb-6">
                  {t('events.contactDesc')}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-[#add15a] mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">Adrijana Jukić Sunarić</h4>
                      <p className="text-gray-600">Education Coordinator</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#add15a] mr-3" />
                    <a href="tel:+38761977977" className="text-gray-600 hover:text-[#add15a]">+387 61 977 977</a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#add15a] mr-3" />
                    <a href="mailto:education@farma-medical.com" className="text-gray-600 hover:text-[#add15a]">education@farma-medical.com</a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#add15a] hover:bg-[#9bc046]">
                    Request Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;