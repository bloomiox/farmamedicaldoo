import React from 'react';
import { ArrowRight, Check, Award, Shield, Microscope, Factory, Database, BarChart4, FileCheck, Sparkles, Scale, Clock, Beaker } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const KeroxDental: React.FC = () => {
  const { t } = useTranslation();
  
  const multilayerProducts = [
    {
      id: 1,
      name: "3D Multilayer (3DML)",
      description: "Premium multilayer zirconia with natural color gradient for highly esthetic anterior and posterior restorations.",
      image: "https://keroxdental.com/img/products/zirconia/3dml/3dml-milling-system-pic.png",
      features: [
        "Natural color transition from dentin to enamel",
        "Superior translucency for lifelike restorations",
        "Excellent mechanical properties",
        "Compatible with major CAD/CAM systems"
      ]
    },
    {
      id: 2,
      name: "Ultra Translucent Multilayer (UTML)",
      description: "Highly translucent multilayer zirconia for premium anterior esthetics with natural vitality.",
      image: "https://keroxdental.com/img/products/zirconia/utml-html/utml-milling-system-pic.png",
      features: [
        "Exceptionally high translucency",
        "Smooth color transition",
        "Ideal for anterior region",
        "Lifelike optical properties"
      ]
    },
    {
      id: 3,
      name: "High Translucent Multilayer (HTML)",
      description: "Versatile multilayer zirconia balancing esthetics and strength for a wide range of applications.",
      image: "https://keroxdental.com/img/products/zirconia/utml-html/html-milling-system-pic.png",
      features: [
        "Balanced translucency and strength",
        "Natural color progression",
        "Suitable for anterior and posterior restorations",
        "Excellent edge stability"
      ]
    }
  ];

  const monolithicProducts = [
    {
      id: 4,
      name: "High Strength (HS)",
      description: "Maximum strength zirconia discs for demanding posterior restorations and bridges.",
      image: "https://keroxdental.com/img/products/zirconia/zircostar-hs-bg.png",
      features: [
        "Superior flexural strength (1200+ MPa)",
        "Ideal for long-span bridges",
        "Excellent for implant-supported restorations",
        "Maximum durability"
      ]
    },
    {
      id: 5,
      name: "High Translucent (HT)",
      description: "Balanced zirconia combining good esthetics with reliable strength for versatile applications.",
      image: "https://keroxdental.com/img/products/zirconia/zircostar-ht-bg.png",
      features: [
        "Enhanced translucency",
        "Strong mechanical properties",
        "Versatile for most clinical situations",
        "Excellent milling characteristics"
      ]
    },
    {
      id: 6,
      name: "Ultra High Translucent (UHT)",
      description: "Premium high-translucency zirconia for anterior esthetics with reliable mechanical properties.",
      image: "https://keroxdental.com/img/products/zirconia/zircostar-uht-bg.png",
      features: [
        "High translucency for anterior region",
        "Natural light transmission",
        "Excellent color stability",
        "Good strength for single crowns"
      ]
    }
  ];

  const scientificConcepts = [
    {
      icon: <Beaker className="h-8 w-8 text-blue-600" />,
      title: "Crystal Structure",
      description: "Zirconia exists in three crystal structures that change with temperature and pressure. The transformation is reversible but creates stress."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-blue-600" />,
      title: "Stabilization",
      description: "Adding yttria (Y₂O₃) or other rare-earth oxides prevents phase changes, resulting in partially or fully stabilized zirconia with superior properties."
    },
    {
      icon: <Scale className="h-8 w-8 text-blue-600" />,
      title: "Mechanical Properties",
      description: "Stabilized zirconia offers remarkable strength, fracture toughness, and wear resistance ideal for dental applications."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Aging Resistance",
      description: "Properly formulated dental zirconia resists low-temperature degradation, ensuring long-term stability in the oral environment."
    }
  ];

  const qualityFeatures = [
    {
      icon: <BarChart4 className="h-10 w-10 text-blue-600" />,
      title: "Statistical Process Control",
      description: "Rigorous monitoring of manufacturing parameters ensures consistent material properties across production batches."
    },
    {
      icon: <Database className="h-10 w-10 text-blue-600" />,
      title: "Complete Traceability",
      description: "KEROX stores lot numbers and individual serial numbers in a database for future traceability and claim handling."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-blue-600" />,
      title: "Certified Quality Management",
      description: "Operations certified under ISO 9001:2015, ISO 13485:2016, ISO 14001:2015, and ISO 50001:2018 standards."
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Quality Control Procedures",
      description: "Multi-stage testing protocols verify mechanical properties, dimensional accuracy, and material purity."
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-b from-blue-600 to-blue-800">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://keroxdental.com/img/products/zirconia/3dml/3dml-separator-bg2.jpg" 
            alt="Kerox Dental background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {t('kerox.title')}
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            {t('kerox.subtitle')}
          </p>
          <blockquote className="mt-10 max-w-3xl mx-auto text-xl italic text-white bg-blue-700/30 p-6 rounded-lg border-l-4 border-white">
            {t('kerox.quote')}
          </blockquote>
        </div>
      </div>

      {/* Company Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('kerox.about')}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              {t('kerox.aboutDesc')}
            </p>
          </div>

          <div className="mt-16 md:flex md:items-center md:gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://keroxdental.com/img/products/zirconia/utml-html/utml-html-separator-pic.jpg" 
                alt="Kerox Dental zirconia discs" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('kerox.excellence')}</h3>
              <p className="text-gray-600 mb-6">
                {t('kerox.excellenceDesc')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">ISO 13485 certified</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">CE marked products</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Global distribution</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Advanced R&D laboratory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zircostar Product Line */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('kerox.productLine')}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              {t('kerox.productLineDesc')}
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 bg-blue-50 py-3 px-6 rounded-lg inline-block">
              {t('kerox.multilayer')}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {multilayerProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105">
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <h5 className="font-medium text-gray-900 mb-2">Key Features:</h5>
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800">
                      View technical data
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 bg-blue-50 py-3 px-6 rounded-lg inline-block">
              {t('kerox.monolithic')}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {monolithicProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <h5 className="font-medium text-gray-900 mb-2">Key Features:</h5>
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800">
                      View technical data
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Science and Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('kerox.science')}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              {t('kerox.scienceDesc')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t('kerox.basics')}
            </h3>
            
            <p className="text-gray-700 mb-8 max-w-4xl mx-auto">
              Zirconia as a dental ceramic is a synthetic material which exists in three different crystal structures. The polymorph materials' phases change depending on the temperature and pressure. This transformation phenomenon is reversible. The most stable crystal structures exist in higher temperatures only. Cooling leads to further stress in the crystal structure of the sintered ceramics which results and promote fracture and cracks. To avoid the rigidity, it needs stabilizing components like yttria (Y₂O₃) or other rare-earth oxides. By adding these substitutes to the zirconia, the result is partially or fully stabilized crystal structure. Due to this "little chemical spell" ceramics with remarkable mechanical and chemical properties could be created.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scientificConcepts.map((concept, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4 shadow-sm">
                    {concept.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{concept.title}</h4>
                  <p className="text-gray-600 text-sm">{concept.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('kerox.quality')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('kerox.certifications')}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              {t('kerox.certificationsDesc')}
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mx-auto w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">ISO 9001</span>
                </div>
                <h3 className="font-bold text-gray-900">Quality Management</h3>
                <p className="text-sm text-gray-600 mt-2">2015 Certified</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mx-auto w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">ISO 13485</span>
                </div>
                <h3 className="font-bold text-gray-900">Medical Devices</h3>
                <p className="text-sm text-gray-600 mt-2">2016 Certified</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mx-auto w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">ISO 14001</span>
                </div>
                <h3 className="font-bold text-gray-900">Environmental</h3>
                <p className="text-sm text-gray-600 mt-2">2015 Certified</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mx-auto w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">ISO 50001</span>
                </div>
                <h3 className="font-bold text-gray-900">Energy Management</h3>
                <p className="text-sm text-gray-600 mt-2">2018 Certified</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full text-blue-800">
                <Award className="h-5 w-5 mr-2" />
                <span className="font-medium">CE Marked Medical Device</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <Factory className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('kerox.advanced')}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {t('kerox.advancedDesc')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Controlled Production Environment</h4>
                    <p className="text-gray-600">Advanced clean room facilities with controlled temperature and humidity.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Precision Formulation</h4>
                    <p className="text-gray-600">Carefully controlled powder composition for optimal performance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">100% Quality Inspection</h4>
                    <p className="text-gray-600">Every batch undergoes comprehensive testing for mechanical properties and consistency.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://keroxdental.com/img/products/zirconia/back-to-scientific-bg.jpg"
                alt="Advanced manufacturing facility"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('kerox.support')}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              {t('kerox.supportDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Microscope className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Material Selection</h3>
              <p className="text-gray-600">
                Expert guidance on selecting the optimal Kerox zirconia material for specific clinical cases and indications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Milling Parameters</h3>
              <p className="text-gray-600">
                Optimized milling parameters for all major CAD/CAM systems to achieve the best results with Kerox materials.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Training</h3>
              <p className="text-gray-600">
                Regular workshops and training sessions on advanced techniques for processing and finishing Kerox zirconia restorations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {t('kerox.request')}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100">
              {t('kerox.requestDesc')}
            </p>
            <div className="mt-8 flex justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                Contact Our Technical Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeroxDental;