import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Phone, Mail, User, Check, ArrowLeft, Users, Clock, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface EventDetailData {
  id: number;
  featured: boolean;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  language: string;
  image: string;
  description: string;
  speakers: string[];
  topics: string[];
  agenda?: { time: string; title: string; description?: string }[];
  pricing?: { title: string; price: string; regularPrice?: string; features: string[] }[];
}

const EventDetails: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const eventId = parseInt(id || '1');
  
  const events: EventDetailData[] = [
    {
  "id": 1,
  "featured": true,
  "title": "Osnovni hirurško-protetski kurs",
  "subtitle": "Šta treba znati o implantatima u kliničkom radu",
  "date": "14.06.2025",
  "location": "Hotel Hills Sarajevo, Bosnia and Herzegovina",
  "language": "Bosnian",
  "image": "/mnt/data/20250605_111429.jpg",
  "description": "Jednodnevni kurs posvećen osnovama implantološke terapije i protetike kroz teorijski i praktični rad. Kurs vode Prof. Dr. Almir Dervišević i Mr. sci. dr. Slobodan Trninić.",
  "speakers": ["Prof. Dr. Almir Dervišević", "Mr. sci. dr. Slobodan Trninić"],
  "topics": [
    "Faze rade u implanto-protetskoj terapiji",
    "Implantacijske tehnike - kada i zašto",
    "Implantološki hirurški protokol",
    "Osnove planiranja implanto-protetske terapije",
    "Implanto-protetika, laboratorij",
    "Radionica - praktični dio"
  ],
  "agenda": [
    { "time": "09:30", "title": "Registracija" },
    {
      "time": "10:00",
      "title": "Faze rade u implanto-protetskoj terapiji",
      "description": "- pozicija implantata\n- Anatomija gornje i donje vilice\n- CBCT analiza više govori od svakog anatomskog atlasa"
    },
    { "time": "11:30", "title": "Kafe pauza" },
    {
      "time": "12:00",
      "title": "Implantacijske tehnike - kada i zašto / Implantološki hirurški protokol",
      "description": "- jednofazna i dvofazna implantacija\n- imedijatna i odgođena implantacija\n- preoperativno planiranje i priprema\n- priprema ordinacije i pacijenta\n- operativni zahvat\n- ugradnja implantata"
    },
    { "time": "14:00", "title": "Ručak" },
    {
      "time": "15:00",
      "title": "Osnove planiranja implanto-protetske terapije / Implanto-protetika, laboratorij",
      "description": "- Klinički pregled\n- RTG i CT dijagnostika\n- otisak u implantologiji\n- vrste nadogradnji\n- protetski rad na cementiranje i na vijke"
    },
    {
      "time": "Radionica-praktični dio",
      "title": "Hands-on with 3D jaw models",
      "description": "- ugradnja implantata na modelu vilice"
    },
    { "time": "17:00", "title": "Kafe pauza" },
    { "time": "17:30", "title": "Certifikati" }
  ],
  "pricing": [
    {
      "title": "Kurs kotizacija",
      "price": "KM 390",
      "features": [
        "Jednodnevni kurs",
        "Predavanja i radionica",
        "Certifikat",
        "Ručak i osvježenje tokom pauza"
      ]
    }
  ],
  "contact": {
    "name": "Adrijana Jukić Sunarić",
    "phones": ["+387 061 977 977", "+387 061 795 540"],
    "payment": "Uplata kotizacije na žiro račun Farmamedica: 1862410310817537, ZiraatBank."
  }
},
 {
      id: 2,
      featured: false,
      title: "International Symposium",
      subtitle: "Minimal Invasive Treatment options In The Compromised Bone",
      date: "04-05.04.2025",
      location: "Hotel Hills Sarajevo",
      language: "English",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "Join us for a comprehensive two-day symposium focused on innovative approaches to implant placement in compromised bone situations. Leading experts will share their knowledge and techniques.",
      speakers: ["Dr. Henri Diederich", "Dr. Sci. dr. Prohić Samir", "Prof. Dr. Almir Dervišević", "Assistent prof. dr. Dino Dizdarevic"],
      topics: ["The One Piece Implants", "Tissue level implants with Multiunits", "Two piece implants - Theory & Prosthetical options", "Indications & Contraindication", "Treatment options in the atrophied bone", "CBCT Guided Implantology"],
      agenda: [
        { time: "09:00 - 09:30", title: "Registration and Welcome Coffee" },
        { time: "09:30 - 10:30", title: "The One Piece Implants", description: "Dr. Henri Diederich" },
        { time: "10:30 - 11:30", title: "Tissue level implants with Multiunits", description: "Dr. Sci. dr. Prohić Samir" },
        { time: "11:30 - 12:00", title: "Coffee Break" },
        { time: "12:00 - 13:00", title: "Two piece implants - Theory & Prosthetical options", description: "Assistent prof. dr. Dino Dizdarevic" },
        { time: "13:00 - 14:00", title: "Lunch" },
        { time: "14:00 - 15:00", title: "Indications & Contraindication", description: "Prof. Dr. Almir Dervišević" },
        { time: "15:00 - 16:00", title: "Treatment options in the atrophied bone" },
        { time: "16:00 - 16:30", title: "Coffee Break" },
        { time: "16:30 - 17:30", title: "CBCT Guided Implantology" },
      ],
      pricing: [
        {
          title: "Conference Only",
          price: "KM 150",
          regularPrice: "KM 200",
          features: [
            "Full day conference",
            "8 professional credits",
            "Networking opportunities"
          ]
        },
        {
          title: "Training Only",
          price: "KM 1850",
          regularPrice: "KM 2950",
          features: [
            "Full day training",
            "Hands-on experience",
            "Training materials"
          ]
        },
        {
          title: "Conference + Training",
          price: "KM 1950",
          regularPrice: "KM 2950",
          features: [
            "Two full days",
            "Conference credits",
            "Hands-on training"
          ]
        },
        {
          title: "Special Offer",
          price: "KM 3900",
          features: [
            "Conference 04.04.2025",
            "Training 05.04.2025",
            "ROOTT implants x20",
            "Surgical set TRR mini or TRS mini x1"
          ]
        }
      ]
    },
    {
      id: 2,
      featured: false,
      title: "Digital Dentistry Workshop",
      subtitle: "Advanced CAD/CAM Techniques for Implant Prosthetics",
      date: "15.05.2025",
      location: "Farmamedical Education Center, Novi Travnik",
      language: "Bosnian/English",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "A hands-on workshop exploring the latest in digital dentistry techniques. Learn how to integrate CAD/CAM technology into your implant workflow for improved efficiency and outcomes. This comprehensive full-day workshop will combine lectures and practical exercises to enhance your digital dentistry skills.",
      speakers: ["Dr. Maja Petrović", "Dr. Thomas Schmidt"],
      topics: ["Digital Impression Techniques", "CAD Design for Implant Crowns", "Material Selection for Milling", "Full-Arch Digital Solutions"],
      agenda: [
        { time: "08:30 - 09:00", title: "Registration" },
        { time: "09:00 - 10:30", title: "Digital Impression Techniques", description: "Dr. Maja Petrović" },
        { time: "10:30 - 11:00", title: "Coffee Break" },
        { time: "11:00 - 12:30", title: "CAD Design for Implant Crowns", description: "Dr. Thomas Schmidt" },
        { time: "12:30 - 13:30", title: "Lunch" },
        { time: "13:30 - 15:00", title: "Material Selection for Milling", description: "Dr. Maja Petrović" },
        { time: "15:00 - 15:30", title: "Coffee Break" },
        { time: "15:30 - 17:00", title: "Full-Arch Digital Solutions", description: "Dr. Thomas Schmidt" },
        { time: "17:00 - 17:30", title: "Q&A and Closing Remarks" },
      ],
      pricing: [
        {
          title: "Standard Registration",
          price: "KM 350",
          regularPrice: "KM 450",
          features: [
            "Full day workshop",
            "Hands-on practice",
            "Certificate of completion",
            "Lunch and refreshments"
          ]
        },
        {
          title: "Student Registration",
          price: "KM 200",
          features: [
            "Full day workshop",
            "Hands-on practice",
            "Certificate of completion",
            "Lunch and refreshments",
            "Valid student ID required"
          ]
        }
      ]
    },
    {
      id: 3,
      featured: false,
      title: "Clinical Masterclass",
      subtitle: "Soft Tissue Management Around Implants",
      date: "22-23.06.2025",
      location: "Dental Academy Sarajevo",
      language: "English",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "This masterclass focuses on techniques for optimal soft tissue management around dental implants for superior aesthetic outcomes. The two-day program combines theoretical lectures with live demonstrations and hands-on exercises on animal models, providing a comprehensive approach to mastering soft tissue procedures around implants.",
      speakers: ["Prof. Dr. Anna Müller", "Dr. Ibrahim Hasić"],
      topics: ["Gingival Biotypes", "Surgical Techniques", "Impression Methods", "Provisional Restorations", "Emergence Profile Design"],
      agenda: [
        { time: "Day 1", title: "Theory and Principles" },
        { time: "09:00 - 10:30", title: "Gingival Biotypes and Their Impact on Treatment Planning", description: "Prof. Dr. Anna Müller" },
        { time: "10:45 - 12:15", title: "Surgical Techniques for Soft Tissue Management", description: "Dr. Ibrahim Hasić" },
        { time: "13:30 - 15:00", title: "Impression Methods for Capturing Soft Tissue Contours", description: "Prof. Dr. Anna Müller" },
        { time: "15:15 - 16:45", title: "Case Presentations and Discussion", description: "All Faculty" },
        { time: "Day 2", title: "Practical Applications" },
        { time: "09:00 - 10:30", title: "Provisional Restorations and Soft Tissue Sculpting", description: "Dr. Ibrahim Hasić" },
        { time: "10:45 - 12:15", title: "Emergence Profile Design", description: "Prof. Dr. Anna Müller" },
        { time: "13:30 - 16:30", title: "Hands-on Workshop: Soft Tissue Management Techniques", description: "All Faculty" },
      ],
      pricing: [
        {
          title: "Full Masterclass",
          price: "KM 1200",
          regularPrice: "KM 1500",
          features: [
            "Two full days",
            "Hands-on practice on models",
            "Course materials",
            "Lunches and refreshments",
            "Certificate of completion"
          ]
        }
      ]
    }
  ];
  
  const event = events.find(e => e.id === eventId);
  
  if (!event) {
    return (
      <div className="pt-24 text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Event not found</h2>
        <p className="mt-4 text-gray-600">The event you're looking for doesn't exist or has been removed.</p>
        <Link to="/education" className="mt-8 inline-flex items-center text-[#add15a] hover:text-[#9bc046]">
          <ArrowLeft className="mr-2 h-5 w-5" />
          {t('eventDetails.back')}
        </Link>
      </div>
    );
  }

  // Helper function to get the speaker image based on name
  const getSpeakerImage = (speakerName: string) => {
    if (speakerName.includes("Almir")) {
      return "https://pub-205887fed4e24a5a8a1951ccaffd9d81.r2.dev/IMG-25a2d787bb56164c5773e3e3cfc8926c-V.jpg";
    } else if (speakerName.includes("Henri")) {
      return "https://congressaio.it/wp-content/uploads/2024/12/Henri-Diederich.jpg";
    } else if (speakerName.includes("Prohić") || speakerName.includes("Prohic")) {
      return "https://www.drprohic.ba/images/person1.jpg";
    } else if (speakerName.includes("Dino")) {
      return "https://ssst.edu.ba/assets/photos/person/big/1731943033-doc-dr-dino-dizdarevic.jpg?v1731943033";
    }
    // Default image if no match
    return "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80";
  };
  
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-96 w-full object-cover">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <Link to="/education" className="inline-flex items-center text-white hover:text-[#add15a] mb-4">
              <ArrowLeft className="mr-2 h-5 w-5" />
              {t('eventDetails.back')}
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2">{event.title}</h1>
            <h2 className="text-xl md:text-2xl font-bold text-white/80 mb-6">{event.subtitle}</h2>
            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{event.language} language</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:gap-12">
            <div className="md:w-2/3">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('eventDetails.about')}</h2>
                <p className="text-gray-600">{event.description}</p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t('eventDetails.topics')}</h3>
                <ul className="space-y-2">
                  {event.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-[#add15a] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{topic}</span>
                    </li>
                  ))}
                </ul>
                
                {event.agenda && (
                  <>
                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t('eventDetails.schedule')}</h3>
                    <div className="border rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Speaker</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {event.agenda.map((item, index) => (
                            <tr key={index} className={item.time.startsWith('Day') ? 'bg-gray-50' : ''}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.time}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.title}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description || ''}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t('eventDetails.speakers')}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="text-center">
                      <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full overflow-hidden mb-4">
                        <img 
                          src={getSpeakerImage(speaker)} 
                          alt={speaker} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80";
                          }}
                        />
                      </div>
                      <h4 className="font-medium text-gray-900">{speaker}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{t('eventDetails.options')}</h3>
                
                {event.pricing ? (
                  <div className="space-y-6">
                    {event.pricing.map((option, index) => (
                      <div key={index} className={`bg-white p-5 rounded-lg shadow-sm border-l-4 ${index === 3 ? 'border-yellow-500' : 'border-[#add15a]'}`}>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-gray-900">{option.title}</h4>
                          {index === 3 && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Popular</span>
                          )}
                        </div>
                        <div className="flex items-end mb-4">
                          <span className="text-2xl font-bold text-gray-900">{option.price}</span>
                          {option.regularPrice && (
                            <span className="text-sm line-through text-gray-500 ml-2">{option.regularPrice}</span>
                          )}
                        </div>
                        <ul className="space-y-2 mb-4">
                          {option.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="h-4 w-4 text-[#add15a] mt-1 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#add15a] hover:bg-[#9bc046]">
                          {t('eventDetails.registerNow')}
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#add15a]">
                    <h4 className="font-semibold text-gray-900 mb-2">Contact for Registration</h4>
                    <p className="text-gray-600 text-sm mb-4">Please contact our education coordinator for registration details and pricing information.</p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-[#add15a] mr-2" />
                        <a href="tel:+38761977977" className="text-sm text-gray-600 hover:text-[#add15a]">+387 61 977 977</a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-[#add15a] mr-2" />
                        <a href="mailto:education@farma-medical.com" className="text-sm text-gray-600 hover:text-[#add15a]">education@farma-medical.com</a>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">{t('eventDetails.share')}</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-[#add15a]">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#add15a]">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#add15a]">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#add15a]">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">{t('eventDetails.location')}</h4>
                  <div className="bg-gray-200 h-48 rounded-lg overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Event Venue" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-900 font-medium mb-1">{event.location}</p>
                  <a 
                    href={`https://www.google.com/maps/search/${encodeURIComponent(event.location)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-[#add15a] hover:text-[#9bc046]"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Download Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{t('eventDetails.moreInfo')}</h2>
              <p className="text-gray-300 mb-6">
                {t('eventDetails.moreInfoDesc')}
              </p>
              <button className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-white hover:bg-gray-50">
                <Download className="mr-2 h-5 w-5" />
                {t('eventDetails.download')}
              </button>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2 md:text-right">
              <h3 className="text-xl font-bold mb-2">{t('eventDetails.questions')}</h3>
              <p className="text-gray-300 mb-4">{t('eventDetails.contact')}</p>
              <p className="text-white">education@farma-medical.com</p>
              <p className="text-white">+387 61 977 977</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;