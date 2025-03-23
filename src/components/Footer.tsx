import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-4">
            <div>
              {/* White logo for footer - now using the same logo as header but 3x larger */}
              <img src="https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/2.png" alt="Farmamedical Logo" className="h-36" />
            </div>
            <p className="mt-4 text-gray-300">
              {t('footer.tagline')}
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#add15a]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#add15a]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#add15a]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#add15a]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#add15a]">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              {t('footer.products')}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/roott-implants" className="text-gray-400 hover:text-white">
                  {t('nav.roottImplants')}
                </Link>
              </li>
              <li>
                <Link to="/kerox-dental" className="text-gray-400 hover:text-white">
                  Kerox Dental
                </Link>
              </li>
             </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              {t('footer.company')}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <Link to="/partners" className="text-gray-400 hover:text-white">
                  {t('nav.partners')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              {t('footer.resources')}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/education" className="text-gray-400 hover:text-white">
                  {t('footer.resourcesItems.education')}
                </Link>
              </li>
              <li>
                <a href="#guides" className="text-gray-400 hover:text-white">
                  {t('footer.resourcesItems.guides')}
                </a>
              </li>
              <li>
                <a href="#webinars" className="text-gray-400 hover:text-white">
                  {t('footer.resourcesItems.webinars')}
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-400 hover:text-white">
                  {t('footer.resourcesItems.support')}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              {t('footer.legal')}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
                  {t('footer.legalItems.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white">
                  {t('footer.legalItems.terms')}
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-white">
                  {t('footer.legalItems.cookies')}
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-gray-400 hover:text-white">
                  {t('footer.legalItems.compliance')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 grid grid-cols-1 md:grid-cols-2">
          <div>
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:text-right">
            <p className="text-gray-400 text-sm">
              FARMAMEDICAL d.o.o. Novi Travnik | Ivana Meštrovića bb, 72290, Bosna i Hercegovina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;