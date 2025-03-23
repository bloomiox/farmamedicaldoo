import React from 'react';
import { Check, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProductShowcase: React.FC = () => {
  const { t } = useTranslation();
  
  const products = [
    {
      id: 1,
      name: t('products.roottImplant.title'),
      description: t('products.roottImplant.description'),
      image: 'https://roottimplants.co.uk/wp-content/uploads/2022/09/ROOTT_logo_2022.png',
      features: t('products.roottImplant.features', { returnObjects: true }),
      category: 'implants',
      link: '/roott-implants'
    },
    {
      id: 2,
      name: "Kerox Dental Zirconia",
      description: t('products.graftMaterial.description'),
      image: 'https://keroxdental.com/img/products/our-products-zirconia.png',
      features: t('products.graftMaterial.features', { returnObjects: true }),
      category: 'materials',
      link: '/kerox-dental'
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('products.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <div 
              key={product.id} 
              id={product.category}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform hover:transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">5.0 (42)</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                  <ul className="mt-4 space-y-2">
                    {Array.isArray(product.features) && product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-[#add15a] flex-shrink-0 mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Link to={product.link} className="w-full inline-block text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#add15a] hover:bg-[#9bc046] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#add15a]">
                    {t('products.productDetails')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;