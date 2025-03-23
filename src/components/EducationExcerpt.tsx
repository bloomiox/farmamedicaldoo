import React from 'react';
import { Calendar, MapPin, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EducationExcerpt: React.FC = () => {
  const { t } = useTranslation();
  
  const featuredEvent = {
    id: 1,
    title: t('educationEvents.symposium.title'),
    subtitle: t('educationEvents.symposium.subtitle'),
    date: t('educationEvents.symposium.date'),
    location: t('educationEvents.symposium.location'),
    language: t('educationEvents.symposium.language'),
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: t('educationEvents.symposium.description'),
    speakers: ["Dr. Henri Diederich", "Dr. Sci. dr. Prohić Samir", "Prof. Dr. Almir Dervišević", "Assistent prof. dr. Dino Dizdarevic"],
  };
  
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('events.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('events.subtitle')}
          </p>
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
              
              <div className="flex space-x-4">
                <Link to={`/event-details/${featuredEvent.id}`} className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#add15a] hover:bg-[#9bc046]">
                  {t('educationEvents.viewDetails')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/education" className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50">
                  {t('events.upcoming')}
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/education" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#add15a] hover:bg-[#9bc046]">
            {t('education.programs')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EducationExcerpt;