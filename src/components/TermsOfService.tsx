import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TermsOfService: React.FC = () => {
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
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>
          
          <p className="text-gray-600 mb-6">Last updated: April 1, 2025</p>
          
          <p className="mb-4">
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website operated by FARMAMEDICAL d.o.o. Novi Travnik ("we", "our", or "us").
          </p>
          
          <p className="mb-4">
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
          
          <p className="mb-4">
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Use of Our Service</h2>
          
          <p className="mb-4">
            Our website is designed to provide information about our dental products and services, particularly Roott Implant Systems.
          </p>
          
          <p className="mb-4">
            You agree to use our website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict or inhibit anyone else's use and enjoyment of the website.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
          
          <p className="mb-4">
            The Service and its original content, features, and functionality are and will remain the exclusive property of FARMAMEDICAL d.o.o. Novi Travnik and its licensors. The Service is protected by copyright, trademark, and other laws of both Bosnia and Herzegovina and foreign countries.
          </p>
          
          <p className="mb-4">
            Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of FARMAMEDICAL d.o.o. Novi Travnik.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Links To Other Websites</h2>
          
          <p className="mb-4">
            Our Service may contain links to third-party websites or services that are not owned or controlled by FARMAMEDICAL d.o.o. Novi Travnik.
          </p>
          
          <p className="mb-4">
            FARMAMEDICAL d.o.o. Novi Travnik has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that FARMAMEDICAL d.o.o. Novi Travnik shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
          
          <p className="mb-4">
            In no event shall FARMAMEDICAL d.o.o. Novi Travnik, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Product Information</h2>
          
          <p className="mb-4">
            We strive to provide accurate and up-to-date information about our products. However, we do not warrant that product descriptions or other content on this site are accurate, complete, reliable, current, or error-free. If a product offered by us is not as described, your sole remedy is to contact us and inform us of the issue.
          </p>
          
          <p className="mb-4">
            All products are subject to availability. We reserve the right to discontinue any product at any time.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Governing Law</h2>
          
          <p className="mb-4">
            These Terms shall be governed and construed in accordance with the laws of Bosnia and Herzegovina, without regard to its conflict of law provisions.
          </p>
          
          <p className="mb-4">
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
          
          <p className="mb-4">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          
          <p className="mb-4">
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
          
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          
          <address className="not-italic mb-8">
            <p>FARMAMEDICAL d.o.o. Novi Travnik</p>
            <p>Ivana Meštrovića bb</p>
            <p>72290, Novi Travnik</p>
            <p>Bosna i Hercegovina</p>
            <p>Email: legal@farma-medical.com</p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;