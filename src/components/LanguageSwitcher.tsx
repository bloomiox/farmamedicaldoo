import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  const languages = [
    { code: 'en', name: t('language.en') },
    { code: 'de', name: t('language.de') },
    { code: 'bs', name: t('language.bs') }
  ];

  return (
    <div className="relative">
      <div className="flex items-center cursor-pointer">
        <Globe className="h-5 w-5 text-gray-600" />
        <select
          className="appearance-none bg-transparent border-none py-1 pl-2 pr-8 focus:outline-none text-sm"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;