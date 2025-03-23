import React from 'react';
import { ArrowRight, Check, Building, Globe, Award, Users, Handshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Partners: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white sm:tracking-tight lg:text-5xl">
            {t('partners.title')}
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            {t('partners.subtitle')}
          </p>
        </div>
      </div>

      {/* Partnerships Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">{t('partners.exclusive')}</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              {t('partners.exclusiveDesc')}
            </p>
          </div>

          <div className="grid gap-16">
            {/* Trate AG - ROOTT Implants */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-2/5 bg-gray-50 flex items-center justify-center p-8">
                  <img 
                    src="https://www.trate.com/wp-content/uploads/ROOTT-logo.png" 
                    alt="ROOTT Implants by Trate AG" 
                    className="max-w-full h-32 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://i.ibb.co/Fbxx1X1/roott-implants-lineup.jpg";
                    }}
                  />
                </div>
                <div className="p-8 md:w-3/5">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Premium Implant Systems</div>
                  <h3 className="mt-1 text-2xl font-bold text-gray-900 leading-tight">{t('partners.trate')}</h3>
                  
                  <p className="mt-4 text-gray-600">
                    {t('partners.trateDesc')}
                  </p>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{t('partnersFeatures.roottFeatures.0')}</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{t('partnersFeatures.roottFeatures.1')}</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{t('partnersFeatures.roottFeatures.2')}</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{t('partnersFeatures.roottFeatures.3')}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a 
                      href="/roott-implants" 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      {t('partnersFeatures.learnMore')}
                      <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Kerox Dental */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-2/5 bg-gray-50 flex items-center justify-center p-8">
                  <img 
                    src="https://www.keroxdental.com/images/logo.png" 
                    alt="Kerox Dental" 
                    className="max-w-full h-32 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
                <div className="p-8 md:w-3/5">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Premium Ceramic Solutions</div>
                  <h3 className="mt-1 text-2xl font-bold text-gray-900 leading-tight">{t('partners.kerox')}</h3>
                  
                  <p className="mt-4 text-gray-600">
                    {t('partners.keroxDesc')}
                  </p>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{t('partnersFeatures.keroxFeatures.0')}</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{t('partnersFeatures.keroxFeatures.1')}</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{t('partnersFeatures.keroxFeatures.2')}</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{t('partnersFeatures.keroxFeatures.3')}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a 
                      href="#kerox-products" 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      {t('partnersFeatures.explore')}
                      <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">{t('partners.advantage')}</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              {t('partners.advantageDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('partnersFeatures.regionalExpertise')}</h3>
              <p className="text-gray-600">
                {t('partnersFeatures.regionalDesc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('partnersFeatures.technicalSupport')}</h3>
              <p className="text-gray-600">
                {t('partnersFeatures.technicalDesc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('partnersFeatures.qualityAssurance')}</h3>
              <p className="text-gray-600">
                {t('partnersFeatures.qualityDesc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('partnersFeatures.logisticsExcellence')}</h3>
              <p className="text-gray-600">
                {t('partnersFeatures.logisticsDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2 p-12 text-white">
                <div className="flex items-center mb-4">
                  <Handshake className="h-8 w-8 text-blue-300 mr-3" />
                  <h3 className="text-2xl font-bold">{t('partners.become')}</h3>
                </div>
                <p className="mb-6">
                  {t('partners.becomeDesc')} {t('partnersFeatures.farmamedicalOffers')}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                    <span>{t('partnersFeatures.networkEstablished')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                    <span>{t('partnersFeatures.marketingExpertise')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                    <span>{t('partnersFeatures.educationalPlatform')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                    <span>{t('partnersFeatures.dedicatedCustomer')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 md:w-1/2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('partnersFeatures.contactPartnership')}</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">{t('partnersFeatures.companyName')}</label>
                    <input type="text" id="company" name="company" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('partnersFeatures.contactPerson')}</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('partnersFeatures.email')}</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('partnersFeatures.message')}</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                  </div>
                  <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    {t('partnersFeatures.submitInquiry')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">{t('partners.certifications')}</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              {t('partners.certificationsDesc')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-40">
              <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-gray-800">CE</span>
              </div>
              <p className="text-gray-900 font-medium">CE Marking</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-40">
              <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-gray-800">ISO</span>
              </div>
              <p className="text-gray-900 font-medium">ISO 13485</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-40">
              <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-gray-800">FDA</span>
              </div>
              <p className="text-gray-900 font-medium">FDA Approved</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-40">
              <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-gray-800">MDR</span>
              </div>
              <p className="text-gray-900 font-medium">EU MDR Compliant</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;