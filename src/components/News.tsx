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
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-06d08ed6e1b845e02308b0fe5e14a42d-V.jpg",
      },
      {
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-0ad4bc5465caf39b71b588102164e7cc-V.jpg",
      },
      {
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-2ff0403828bbd2fe17cf3cfca3109032-V.jpg",
      },
      {
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-3d2f9e1b6a119b971e66cb6a20db146c-V.jpg",
      },
            {
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-46814b41c2d795e606af80e66fcfa0b3-V.jpg",
      },
            {
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-4a9a0cc91e0b4c5448b6778d53a6a921-V.jpg",
      },
            {
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-4b92d8503dcf88d9f2206b927b715431-V.jpg",
      },
            {
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-4cec83bb1f7f164ea4a3f66788d6aea5-V.jpg",
      },
            {
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-6ad7db77a438f6b21997acfcb08d00c8-V.jpg",
      },
            {
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-796469e4659ba618c49184c2fafe060f-V.jpg",
      },
            {
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-b777241e4e16de2b0c6a065fcc6afccf-V.jpg",
      },
            {
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-bc2ed03800d2cad2151f1a43142beb4d-V.jpg",
      },
              {
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-d476574e8f63a6f333ac0d65c02eb17d-V.jpg",
      },
              {
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-e056e231779bef8b250edd4537cfa82b-V.jpg",
      },
                  {
        url: "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-fced353fea159401d7ee0eac7c703b9d-V.jpg",
      },
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Predavači</h2>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Slike sa simpozija</h2>
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
