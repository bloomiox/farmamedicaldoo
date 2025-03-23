import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="home" className="relative pt-20">
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          src="https://roottimplants.co.uk/wp-content/uploads/2020/11/rootform-extra_thin_and_strong.mp4" 
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-700/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            {t('hero.subtitle')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#add15a] hover:bg-[#9bc046]"
            >
              {t('hero.exploreProducts')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10"
            >
              {t('hero.contactSales')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;