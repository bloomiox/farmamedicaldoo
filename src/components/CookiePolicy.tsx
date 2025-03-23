import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CookiePolicy: React.FC = () => {
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
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Cookie Policy</h1>
          
          <p className="text-gray-600 mb-6">Last updated: April 1, 2025</p>
          
          <p className="mb-4">
            This Cookie Policy explains how FARMAMEDICAL d.o.o. Novi Travnik ("we", "our", or "us") uses cookies and similar technologies on our website. This Policy should be read alongside our Privacy Policy and Terms of Service.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">What Are Cookies?</h2>
          
          <p className="mb-4">
            Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>
          
          <p className="mb-4">
            Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">How We Use Cookies</h2>
          
          <p className="mb-4">We use cookies for the following purposes:</p>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Essential Cookies</h3>
          <p className="mb-4">
            These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Analytical/Performance Cookies</h3>
          <p className="mb-4">
            These cookies allow us to recognize and count the number of visitors and see how visitors move around our website when they are using it. This helps us improve how our website works, for example, by ensuring that users can find what they are looking for easily.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Functionality Cookies</h3>
          <p className="mb-4">
            These cookies allow our website to remember choices you make (such as your language preference) and provide enhanced, more personal features. They may be set by us or by third-party providers whose services we have added to our pages.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Targeting/Advertising Cookies</h3>
          <p className="mb-4">
            These cookies record your visit to our website, the pages you have visited, and the links you have followed. We may use this information to make our website and the advertising displayed on it more relevant to your interests.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Third-Party Cookies</h2>
          
          <p className="mb-4">
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website.
          </p>
          
          <table className="border-collapse border border-gray-300 w-full mt-6 mb-8">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Service</th>
                <th className="border border-gray-300 p-3 text-left">Purpose</th>
                <th className="border border-gray-300 p-3 text-left">Provider</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">Google Analytics</td>
                <td className="border border-gray-300 p-3">Analytics and site usage statistics</td>
                <td className="border border-gray-300 p-3">Google LLC</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Facebook Pixel</td>
                <td className="border border-gray-300 p-3">Marketing and advertising</td>
                <td className="border border-gray-300 p-3">Meta Platforms, Inc.</td>
              </tr>
            </tbody>
          </table>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Managing Cookies</h2>
          
          <p className="mb-4">
            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience. Some browsers offer a "Do Not Track" signal where you can indicate your preference regarding tracking and cross-site tracking. Although we currently do not employ technology that recognizes "Do Not Track" signals, we will only process your personal data in accordance with this Policy.
          </p>
          
          <p className="mb-4">
            To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:text-blue-800">www.allaboutcookies.org</a>.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Cookie Consent</h2>
          
          <p className="mb-4">
            When you first visit our website, we will present you with a cookie banner requesting your consent to set non-essential cookies. By clicking "Accept All Cookies," you consent to our use of all cookies as described in this Cookie Policy. If you prefer to manage your cookie preferences, you can click "Cookie Settings" to specify which categories of cookies you accept.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Changes to This Cookie Policy</h2>
          
          <p className="mb-4">
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
          </p>
          
          <p className="mb-4">
            You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
          
          <p className="mb-4">
            If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy;