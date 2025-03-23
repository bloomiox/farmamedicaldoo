import React from 'react';
import { Zap, Microscope, Heart, Maximize2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TechnologySection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="technology" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {t('technology.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            {t('technology.subtitle')}
          </p>
        </div>
        
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1614294745990-3051f9a21ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Advanced dental implant technology" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent mix-blend-multiply rounded-lg"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white">{t('technology.surfaceTechnology')}</h3>
                  <p className="text-gray-300">{t('technology.surfaceDescription')}</p>
                </div>
              </div>
              
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <Zap className="h-6 w-6 text-[#add15a] flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">{t('technology.acceleratedHealing.title')}</h4>
                    <p className="mt-2 text-gray-300">
                      {t('technology.acceleratedHealing.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Microscope className="h-6 w-6 text-[#add15a] flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">{t('technology.researchBacked.title')}</h4>
                    <p className="mt-2 text-gray-300">
                      {t('technology.researchBacked.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1516973612998-631d490a8abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Patient comfort technology" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent mix-blend-multiply rounded-lg"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white">{t('technology.patientCentered')}</h3>
                  <p className="text-gray-300">{t('technology.patientDescription')}</p>
                </div>
              </div>
              
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <Heart className="h-6 w-6 text-[#add15a] flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">{t('technology.biocompatible.title')}</h4>
                    <p className="mt-2 text-gray-300">
                      {t('technology.biocompatible.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Maximize2 className="h-6 w-6 text-[#add15a] flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">{t('technology.versatile.title')}</h4>
                    <p className="mt-2 text-gray-300">
                      {t('technology.versatile.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <a 
            href="#technical-specs"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#add15a]"
          >
            {t('technology.specifications')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;