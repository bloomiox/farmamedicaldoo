import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-[#add15a]" />
                </div>
                <div className="ml-3 text-base text-gray-600">
                  <h3 className="text-lg font-medium text-gray-900">{t('contact.headquarters')}</h3>
                  <p>FARMAMEDICAL d.o.o. Novi Travnik</p>
                  <p>Ivana Meštrovića bb</p>
                  <p>72290, Novi Travnik</p>
                  <p>Bosna i Hercegovina</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#add15a]" />
                </div>
                <div className="ml-3 text-base text-gray-600">
                  <h3 className="text-lg font-medium text-gray-900">{t('contact.phone')}</h3>
                  <p>{t('contact.customerService')}: +387 61 977 977</p>
                  <p>{t('contact.customerService')}: +387 61 795 540</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#add15a]" />
                </div>
                <div className="ml-3 text-base text-gray-600">
                  <h3 className="text-lg font-medium text-gray-900">{t('contact.email')}</h3>
                  <p>info@farma-medical.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-[#add15a]" />
                </div>
                <div className="ml-3 text-base text-gray-600">
                  <h3 className="text-lg font-medium text-gray-900">{t('contact.hours')}</h3>
                  <p>{t('contact.weekdays')}: 8:00 AM - 6:00 PM</p>
                  <p>{t('contact.saturday')}: 9:00 AM - 1:00 PM</p>
                  <p>{t('contact.sunday')}: {t('contact.closed')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  {t('contact.firstName')}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#add15a] focus:border-[#add15a] border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  {t('contact.lastName')}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#add15a] focus:border-[#add15a] border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  {t('contact.company')}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#add15a] focus:border-[#add15a] border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('contact.email')}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#add15a] focus:border-[#add15a] border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  {t('contact.phone')}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#add15a] focus:border-[#add15a] border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t('contact.message')}
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#add15a] focus:border-[#add15a] border-gray-300 rounded-md"
                  ></textarea>
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#add15a] hover:bg-[#9bc046] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#add15a]"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {t('contact.sendMessage')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;