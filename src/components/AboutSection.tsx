import React from 'react';
import { Shield, Award, FileCheck, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('about.description1')}
            </p>
            <p className="mt-4 text-lg text-gray-600">
              {t('about.description2')}
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <Shield className="h-8 w-8 text-[#add15a]" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">{t('about.qualityAssured.title')}</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {t('about.qualityAssured.description')}
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <Award className="h-8 w-8 text-[#add15a]" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">{t('about.industryRecognized.title')}</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {t('about.industryRecognized.description')}
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <FileCheck className="h-8 w-8 text-[#add15a]" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">{t('about.scientificallyBacked.title')}</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {t('about.scientificallyBacked.description')}
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <Globe className="h-8 w-8 text-[#add15a]" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">{t('about.globalPresence.title')}</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {t('about.globalPresence.description')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
            <img 
              src="https://roottimplants.co.uk/wp-content/uploads/2024/05/ROOTT-R-Cold-Weld-v2.png" 
              alt="ROOTT R Cold Weld" 
              className="rounded-lg h-full w-full object-contain bg-white"
            />
            <div className="space-y-4">
              <img 
                src="https://roottimplants.co.uk/wp-content/uploads/2023/12/ROOTT-SKULL-FMC.jpg" 
                alt="ROOTT SKULL FMC" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Co-founders Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-16">
            {t('about.founders')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6">
                <img 
                  src="https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-25a2d787bb56164c5773e3e3cfc8926c-V.jpg" 
                  alt="Prof. Dr. Almir Dervišević" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t('about.founder1.name')}</h3>
              <p className="text-[#add15a] font-medium">{t('about.founder1.title')}</p>
              <p className="mt-3 text-gray-600">
                {t('about.founder1.bio')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6">
                <img 
                  src="https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-d46d303f8095f7207cb829dbc0907217-V.jpg" 
                  alt="Dr. Edmin Liđan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t('about.founder2.name')}</h3>
              <p className="text-[#add15a] font-medium">{t('about.founder2.title')}</p>
              <p className="mt-3 text-gray-600">
                {t('about.founder2.bio')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full overflow-hidden mb-6">
                <img 
                  src="https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-597d191c5ab3c0ca2de6220bad68550b-V.jpg" 
                  alt="Dr. Amer Bukvić" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t('about.founder3.name')}</h3>
              <p className="text-[#add15a] font-medium">{t('about.founder3.title')}</p>
              <p className="mt-3 text-gray-600">
                {t('about.founder3.bio')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;