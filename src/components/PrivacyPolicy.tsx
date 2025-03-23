import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-5 w-5 mr-2" />
            {t('nav.home')}
          </Link>
        </div>
        
        <div className="prose max-w-none">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-6">Last updated: April 1, 2025</p>
          
          <p className="mb-4">
            FARMAMEDICAL d.o.o. Novi Travnik ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          
          <p className="mb-4">We may collect information about you in a variety of ways:</p>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Personal Data</h3>
          <p className="mb-4">
            When you use our website, we may collect personally identifiable information, such as your name, email address, telephone number, and company information when you submit inquiries, request quotes, or complete contact forms. This information is collected on a voluntary basis when you provide it to us.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Derivative Data</h3>
          <p className="mb-4">
            Our servers automatically collect information when you access our website, such as your IP address, browser type, operating system, access times, and the pages you have viewed on our site. This information helps us analyze user behavior and improve our website and services.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Cookies and Web Beacons</h3>
          <p className="mb-4">
            We may use cookies, web beacons, tracking pixels, and other tracking technologies to improve your experience on our website. For more detailed information about how we use cookies, please refer to our Cookie Policy.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          
          <p className="mb-4">We may use the information we collect from you for the following purposes:</p>
          
          <ul className="list-disc pl-6 mb-4">
            <li>To provide and maintain our services</li>
            <li>To process and respond to your inquiries and requests</li>
            <li>To personalize your experience and deliver content relevant to your interests</li>
            <li>To improve our website, products, and services</li>
            <li>To send promotional materials and newsletters (with your consent)</li>
            <li>To protect against fraud or unauthorized transactions</li>
            <li>To comply with legal obligations</li>
          </ul>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Disclosure of Your Information</h2>
          
          <p className="mb-4">We may share information we have collected about you in certain situations, including:</p>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Business Transfers</h3>
          <p className="mb-4">
            If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Compliance with Laws</h3>
          <p className="mb-4">
            We may disclose your information where required to comply with applicable laws, governmental requests, judicial proceedings, court orders, or legal processes.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Third-Party Service Providers</h3>
          <p className="mb-4">
            We may share your information with third-party vendors, service providers, and other third parties who perform services on our behalf, such as email delivery, hosting services, and customer service.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Security of Your Information</h2>
          
          <p className="mb-4">
            We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee the security of your information.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
          
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          
          <ul className="list-disc pl-6 mb-4">
            <li>The right to access the personal information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to withdraw consent for processing your information</li>
            <li>The right to object to processing of your personal information</li>
          </ul>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
          
          <p className="mb-4">
            If you have questions or concerns about this Privacy Policy, please contact us at:
          </p>
          
          <address className="not-italic mb-8">
            <p>FARMAMEDICAL d.o.o. Novi Travnik</p>
            <p>Ivana Meštrovića bb</p>
            <p>72290, Novi Travnik</p>
            <p>Bosna i Hercegovina</p>
            <p>Email: privacy@farma-medical.com</p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;