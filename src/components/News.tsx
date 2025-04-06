import React from 'react';
import { Calendar, MapPin, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const News: React.FC = () => {
  const { t } = useTranslation();
  
  const newsArticle = {
    id: 1,
    title: "Međunarodni simpozij",
    subtitle: "Minimalno invazivne opcije liječenja u kompromitiranoj kosti",
    date: "04-05.04.2025",
    location: "Hotel Hills Sarajevo",
    language: "English",
    description: "Pridružite nam se na sveobuhvatnom dvodnevnom simpoziju fokusiranom na inovativne pristupe postavljanju implantata u situacijama s kompromitiranom kosti. Vodeći stručnjaci će podijeliti svoje znanje i tehnike.",
    speakers: [
      {
        name: "Dr. Henri Diederich",
        image: "https://congressaio.it/wp-content/uploads/2024/12/Henri-Diederich.jpg",
      },
      {
        name: "Dr. Sci. dr. Prohić Samir",
        image: "https://www.drprohic.ba/images/person1.jpg",
      },
      {
        name: "Prof. Dr. Almir Dervišević",
        image: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-25a2d787bb56164c5773e3e3cfc8926c-V.jpg",
      },
      {
        name: "Assistent prof. dr. Dino Dizdarevic",
        image: "https://ssst.edu.ba/assets/photos/person/big/1731943033-doc-dr-dino-dizdarevic.jpg?v1731943033",
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        caption: "Advanced implant techniques demonstration"
      },
      {
        url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        caption: "Hands-on workshop sessions"
      },
      {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        caption: "Interactive learning environment"
      },
      {
        url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        caption: "State-of-the-art facilities"
      },
      {
        url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        caption: "Professional networking opportunities"
      },
      {
        url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        caption: "Expert-led presentations"
      }
    ],
  };

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <div className="relative h-96">
        <img 
          src={newsArticle.gallery[0].url}
          alt={newsArticle.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{newsArticle.title}</h1>
            <p className="text-xl md:text-2xl">{newsArticle.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-[#add15a]" />
            <span>{newsArticle.date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-[#add15a]" />
            <span>{newsArticle.location}</span>
          </div>
          <div className="flex items-center">
            <User className="h-5 w-5 mr-2 text-[#add15a]" />
            <span>{newsArticle.language}</span>
          </div>
        </div>

        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-600">{newsArticle.description}</p>
        </div>

        {/* Speakers Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Speakers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsArticle.speakers.map((speaker, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={speaker.image} 
                alt={speaker.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-900">{speaker.name}</h3>
                <p className="text-sm text-[#add15a]">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Gallery</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {newsArticle.gallery.map((image, index) => (
            <div key={index} className="relative group">
              <img 
                src={image.url} 
                alt={image.caption}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-end">
                <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Us at This Event</h3>
          <p className="text-gray-600 mb-6">Ne propustite buduće edukativne događaje.</p>
          <Link 
            to="/event-details/1" 
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#add15a] hover:bg-[#9bc046]"
          >
            Prijavite se
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
