import React from 'react';
import { ArrowRight, Check, Award, Shield, Microscope, Factory, Download, FileCheck, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const RoottImplants: React.FC = () => {
  const { t } = useTranslation();
  
  const implantTypes = [
    {
      id: 'roott-r',
      code: 'R',
      name: 'ROOTT R',
      color: 'bg-green-500',
      image: 'https://roottimplants.co.uk/wp-content/uploads/2024/07/ROOTT-R-web.png',
      description: "Two piece implant with an active thread to ensure perfect stability. A single deep internal conical connection throughout the range. ROOTT R offers screw-retained cement-retained, digital, healing abutments, transfers, locator. Wide range of Prosthetic options.",
      features: t('roottImplants.features.R', { returnObjects: true })
    },
    {
      id: 'roott-s',
      code: 'S',
      name: 'ROOTT S',
      color: 'bg-yellow-400',
      image: 'https://roottimplants.co.uk/wp-content/uploads/2024/07/ROOTT-S-web.png',
      description: "ROOTT S is a one-piece tissue-level implant with compressive threads with a narrow head of abutment (Ø 4.0 mm). It is used for multiple restorations with immediate or delayed loading. Excellent in narrow ridge.",
      features: t('roottImplants.features.S', { returnObjects: true })
    },
    {
      id: 'roott-m',
      code: 'M',
      name: 'ROOTT M',
      color: 'bg-pink-500',
      image: 'https://roottimplants.co.uk/wp-content/uploads/2024/07/ROOTT-M-web.png',
      description: "ROOTT M is a one-piece tissue-level implant with compressive threads with a wide head of abutment (Ø 4.5 mm). It is used for multiple restorations with immediate or delayed loading in the upper and lower jaws with adequate bone tissue.",
      features: t('roottImplants.features.M', { returnObjects: true })
    },
    {
      id: 'roott-p',
      code: 'P',
      name: 'ROOTT P',
      color: 'bg-pink-600',
      image: 'https://roottimplants.co.uk/wp-content/uploads/2024/07/ROOTT-P-web.png',
      description: "ROOTT P is a class leading Pterygoid implant. One-piece tissue-level implant with compressive threads with a narrow head of abutment (Ø 4.5 mm). It can be used in combination with ROOTT M / S. Abutment of implants is designed just for screw-retained prostheses only.",
      features: [
        "Restore posterior maxilla without sinus lift",
        "Immediate or delayed loading possible",
        "Avoid cantilever bridges",
        "Reduce surgery and healing time"
      ]
    },
    {
      id: 'roott-c',
      code: 'C',
      name: 'ROOTT C',
      color: 'bg-yellow-500',
      image: 'https://roottimplants.co.uk/wp-content/uploads/2022/10/ROOTT-C-small-v2-e1666785957760-68x300.jpg',
      description: t('roottImplants.descriptions.C'),
      features: t('roottImplants.features.C', { returnObjects: true })
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-b from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {t('roott.title')}
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            {t('roott.subtitle')}
          </p>
         </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('roott.completeSystem')}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              {t('roott.completeSystemDesc')}
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img 
                src="https://roottimplants.co.uk/wp-content/uploads/2024/11/No-Gap-No-Movement.png" 
                alt="No Gap No Movement" 
                className="mx-auto h-64 object-contain mb-8"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('roott.perfectFit')}</h3>
              <p className="text-gray-600">
                {t('roott.perfectFitDesc')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img 
                src="https://roottimplants.co.uk/wp-content/uploads/2024/05/ROOTT-R-Cold-Weld-v2.png" 
                alt="ROOTT R Cold Weld" 
                className="mx-auto h-64 object-contain mb-8"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('roott.coldWeld')}</h3>
              <p className="text-gray-600">
                {t('roott.coldWeldDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Unit Platform Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('roott.multiUnit')}
            </h2>
          </div>

          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-lg text-gray-600 mb-6">
                {t('roott.completeSystemDesc')}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://roottimplants.co.uk/wp-content/uploads/2020/11/Multi-level-unit.png" 
                alt="ROOTT Multi-level Unit" 
                className="max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practitioner Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                {t('roott.practitioners')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('roott.practitionersDesc')}
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{t('roott.toolbox')}</h3>
                    <p className="text-gray-600">
                      {t('roott.toolboxDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{t('roott.compatibility')}</h3>
                    <p className="text-gray-600">
                      {t('roott.compatibilityDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{t('roott.colorCoding')}</h3>
                    <p className="text-gray-600">
                      {t('roott.colorCodingDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://roottimplants.co.uk/wp-content/uploads/2023/12/ROOTT-SKULL-FMC.jpg" 
                alt="ROOTT Implant Implementation" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Animation Showcase Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('roott.technology')}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              {t('roott.technologyDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <video className="w-full h-auto" controls autoPlay loop muted>
                <source src="https://roottimplants.co.uk/wp-content/uploads/2020/11/rootform-excellent_primary_stability-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{t('roott.primaryStability')}</h3>
              <p className="text-gray-600">{t('roott.primaryStabilityDesc')}</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <video className="w-full h-auto" controls autoPlay loop muted>
                <source src="https://roottimplants.co.uk/wp-content/uploads/2020/11/rootform-conical_connection.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{t('roott.conicalConnection')}</h3>
              <p className="text-gray-600">{t('roott.conicalConnectionDesc')}</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <video className="w-full h-auto" controls autoPlay loop muted>
                <source src="https://roottimplants.co.uk/wp-content/uploads/2020/11/rootform-extra_thin_and_strong.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{t('roott.extraThin')}</h3>
              <p className="text-gray-600">{t('roott.extraThinDesc')}</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <video className="w-full h-auto" controls autoPlay loop muted>
                <source src="https://roottimplants.co.uk/wp-content/uploads/2020/11/Compressive-MS-Overview-Ideal-for-narrow-ridge-area-V1-320x320-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{t('roott.narrowRidge')}</h3>
              <p className="text-gray-600">{t('roott.narrowRidgeDesc')}</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <video className="w-full h-auto" controls autoPlay loop muted>
                <source src="https://roottimplants.co.uk/wp-content/uploads/2020/11/Compressive-MS-Overview-Fully-screw-retained-prosthetic-options-V1-320x320-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{t('roott.screwRetained')}</h3>
              <p className="text-gray-600">{t('roott.screwRetainedDesc')}</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <video className="w-full h-auto" controls autoPlay loop muted>
                <source src="https://roottimplants.co.uk/wp-content/uploads/2020/11/Compressive-MS-Overview-Free-multifunctional-part-V1-320x320-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{t('roott.multifunctional')}</h3>
              <p className="text-gray-600">{t('roott.multifunctionalDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Implant Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('roott.solutions')}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              {t('roott.solutionsDesc')}
            </p>
          </div>

          <div className="space-y-24">
            {implantTypes.map((implant, index) => (
              <div key={implant.id} id={implant.id} className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-12`}>
                <div className="w-full md:w-1/2">
                  <div className="bg-gray-100 p-8 rounded-lg flex justify-center">
                    <img 
                      src={implant.image} 
                      alt={implant.name} 
                      className="w-64 h-auto object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className={`${implant.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4`}>
                    {implant.code}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{implant.name}</h3>
                  <p className="text-gray-600 mb-6">{implant.description}</p>
                  <ul className="space-y-3">
                    {implant.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Cross-Platform Image */}
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">ROOTT Cross-Platform Compatibility</h3>
            <img 
              src="https://roottimplants.co.uk/wp-content/uploads/2020/11/Roott-Cross-Platform-1.jpg" 
              alt="ROOTT Cross-Platform Compatibility" 
              className="mx-auto max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Surgical Tools Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('roott.tools')}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              {t('roott.toolsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://roottimplants.co.uk/wp-content/uploads/2021/01/TRS-S-Toolkit-scaled-e1666816575915.jpg" 
                alt="TRS-S Toolkit" 
                className="rounded-lg shadow-lg w-full mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('roott.kit')}</h3>
              <p className="text-gray-600">
                {t('roott.kitDesc')}
              </p>
            </div>
            
            <div>
              <img 
                src="https://roottimplants.co.uk/wp-content/uploads/2022/09/Healing-Abutments.jpg" 
                alt="Healing Abutments" 
                className="rounded-lg shadow-lg w-full mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('roott.healingAbutments')}</h3>
              <p className="text-gray-600">
                {t('roott.healingAbutmentsDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                {t('roott.manufacturing')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('roott.manufacturingDesc')}
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{t('roott.qms')}</h3>
                    <p className="text-gray-600">
                      {t('roott.qmsDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                      <Microscope className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{t('roott.rnd')}</h3>
                    <p className="text-gray-600">
                      {t('roott.rndDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://roottimplants.co.uk/wp-content/uploads/2021/03/TRATE-Machinery-202102.jpg" 
                alt="TRATE Manufacturing Facility" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Brochure Download Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              {t('roott.brochure')}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100">
              {t('roott.brochureDesc')}
            </p>
            <div className="mt-8 flex justify-center">
              <a 
                href="#download" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                <Download className="mr-2 h-5 w-5" />
                ROOTT Brochure (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('roott.certification')}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              {t('roott.certificationDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3123/3123292.png"
                  alt="CE Mark"
                  className="h-16"
                />
              </div>
              <h3 className="text-lg font-semibold">CE Marked</h3>
              <p className="mt-2 text-sm text-gray-600">
                Complies with health, safety, and environmental protection standards for products sold within the EEA
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2034/2034985.png"
                  alt="ISO 13485"
                  className="h-16"
                />
              </div>
              <h3 className="text-lg font-semibold">ISO 13485</h3>
              <p className="mt-2 text-sm text-gray-600">
                Medical devices quality management systems certification
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5341/5341611.png"
                  alt="EU MDR"
                  className="h-16"
                />
              </div>
              <h3 className="text-lg font-semibold">EU MDR 2017/745</h3>
              <p className="mt-2 text-sm text-gray-600">
                Compliant with European Medical Device Regulation requirements
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6989/6989007.png"
                  alt="Quality Control"
                  className="h-16"
                />
              </div>
              <h3 className="text-lg font-semibold">100% Quality Control</h3>
              <p className="mt-2 text-sm text-gray-600">
                Every implant undergoes rigorous quality inspection before delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2 p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">{t('roott.contact')}</h3>
                <p className="mb-6">
                  {t('roott.contactDesc')}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Product information and pricing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Clinical training opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Technical support and guidance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Case planning assistance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 md:w-1/2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Request Information</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="practice" className="block text-sm font-medium text-gray-700">Dental Practice</label>
                    <input type="text" id="practice" name="practice" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                  </div>
                  <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoottImplants;