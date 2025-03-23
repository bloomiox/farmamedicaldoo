import React from 'react';
import { ArrowLeft, Shield, Check, FileText, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Compliance: React.FC = () => {
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
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Compliance Information</h1>
          
          <p className="text-gray-600 mb-6">Last updated: April 1, 2025</p>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900 m-0">Our Commitment to Quality and Safety</h2>
            </div>
            <p className="mb-0">
              At FARMAMEDICAL d.o.o. Novi Travnik, we are committed to providing high-quality dental implant solutions that comply with international standards and regulations. Our dedication to quality ensures that dental professionals can trust our products to deliver safe and effective results for their patients.
            </p>
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Regulatory Compliance</h2>
          
          <p className="mb-4">
            All our dental implant products, including Roott Implant Systems, are developed and manufactured in compliance with applicable regulations and standards:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Device Regulation (EU) 2017/745</h3>
                  <p className="text-gray-600 m-0">Our products comply with the European Union's Medical Device Regulation (MDR) requirements.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 13485:2016</h3>
                  <p className="text-gray-600 m-0">Our manufacturing facilities operate under ISO 13485:2016 quality management systems specific to medical devices.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 9001:2015</h3>
                  <p className="text-gray-600 m-0">Our operations adhere to ISO 9001:2015 quality management principles.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">CE Marking</h3>
                  <p className="text-gray-600 m-0">Our products bear the CE mark, indicating conformity with health, safety, and environmental protection standards for products sold within the European Economic Area.</p>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Quality Assurance</h2>
          
          <p className="mb-4">
            We implement rigorous quality control measures throughout our distribution process:
          </p>
          
          <div className="flex items-start mb-6">
            <FileText className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation and Traceability</h3>
              <p className="text-gray-600 mb-0">
                We maintain comprehensive documentation for all products, including lot numbers and expiration dates, to ensure full traceability throughout the supply chain.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <Shield className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Verification</h3>
              <p className="text-gray-600 mb-0">
                All products undergo verification checks upon receipt to ensure they meet our quality standards before being distributed to dental professionals.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <Award className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Improvement</h3>
              <p className="text-gray-600 mb-0">
                We regularly review and update our quality management system to reflect best practices and technological advancements in the dental implant industry.
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Material Safety</h2>
          
          <p className="mb-4">
            The Roott Implant Systems distributed by FARMAMEDICAL are manufactured using biocompatible materials that meet international standards for medical-grade materials:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>Medical-grade titanium (Grade 4 and Grade 5 Ti-6Al-4V ELI)</li>
            <li>Biocompatible surface treatments</li>
            <li>Sterilization processes validated according to international standards</li>
            <li>Packaging materials suitable for maintaining product sterility</li>
          </ul>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Training and Education</h2>
          
          <p className="mb-4">
            We provide comprehensive training and educational resources to ensure dental professionals can use our products safely and effectively:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>Detailed product instructions for use (IFUs)</li>
            <li>Clinical training sessions</li>
            <li>Technical support for product-related inquiries</li>
            <li>Educational materials on proper implant placement and care</li>
          </ul>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Vigilance and Post-Market Surveillance</h2>
          
          <p className="mb-4">
            We maintain a vigilance system to monitor the performance of our products after they have been distributed:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>Collection and analysis of user feedback</li>
            <li>Investigation of any reported issues or complaints</li>
            <li>Implementation of corrective and preventive actions when necessary</li>
            <li>Compliance with medical device vigilance reporting requirements</li>
          </ul>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Compliance Certificates</h2>
            <p className="mb-4">
              Copies of our compliance certificates and declarations of conformity are available upon request. Please contact our quality assurance department for more information.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Request Compliance Documentation
            </button>
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
          
          <p className="mb-4">
            For any questions or concerns regarding our compliance procedures or product quality, please contact us at:
          </p>
          
          <address className="not-italic mb-8">
            <p>FARMAMEDICAL d.o.o. Novi Travnik</p>
            <p>Ivana Meštrovića bb</p>
            <p>72290, Novi Travnik</p>
            <p>Bosna i Hercegovina</p>
            <p>Email: compliance@farma-medical.com</p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Compliance;