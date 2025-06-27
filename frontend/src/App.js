import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Image URLs provided by user
  const heroImageUrl = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/694268187.jpg?k=5c461c7870663482abaad22a25d739414c6d624163c6762904449f3aa2d65efc&o=";
  
  const galleryImages = [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/694266056.jpg?k=2d7350f246995f6f3918d9ec4770caa37eb16c60333181dbab8ae254e4a7e224&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/648453985.jpg?k=7dcad7b1aca7e96920c1a427c07d883ff6df5e7fba339b7b8f1310fda5678d01&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/481782484.jpg?k=71122b4f9cc1014707e6d58440a913a5c6f34002a11c89f0adc5a5feebe067dd&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/694766466.jpg?k=b9b7c3fd145fc393c51d7e606531e57f3fb61b5257eb8b96f0e6da52547d9625&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/526378837.jpg?k=37e9cd5b09f6357d0cfadd1f07a9131cedf72a0b0cec32eefa3b72714f6c2aeb&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/694266562.jpg?k=2272ccbe4e040d7319e21cf953d71c34429a4d4e48b6d6564e7327c53ff71ac5&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/652918777.jpg?k=62c4e9d090c67fb1addd2a4b8adb18e6e21f56a95019e7fbd78ced15ef637336&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/683951721.jpg?k=806a475b8fcc51c66132c039b9a668723b530ebdba7518cb58cf352f5b38c187&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/694266490.jpg?k=19df807cc71082de891efbaa30f2d0453c35f2903f4cc10c48b63b4144fd22f3&o="
  ];

  // Multi-language content
  const content = {
    en: {
      nav: {
        about: "About",
        amenities: "Amenities", 
        gallery: "Gallery",
        location: "Location"
      },
      hero: {
        title: "Welcome to Casa Blu",
        subtitle: "Luxury holiday home in the heart of Marbella with private pool and sea views"
      },
      about: {
        title: "About Casa Blu",
        description: "Casa Blu Marbella is a recently renovated holiday home in Marbella, where guests can make the most of its outdoor swimming pool, free WiFi, water sports facilities and garden. This holiday home offers air-conditioned accommodation with a balcony. The property provides barbecue facilities and parking on-site.",
        features: "Key Features",
        featureList: [
          "Private entrance & allergy-free environment",
          "4 bedrooms, 4 bathrooms with walk-in showers",
          "Fully equipped kitchen with dishwasher and oven",
          "Terrace with stunning sea views",
          "Complimentary wine, champagne, chocolates & cookies",
          "Air-conditioned accommodation",
          "Flat-screen TV and free WiFi",
          "Barbecue facilities and on-site parking"
        ]
      },
      amenities: {
        title: "Amenities & Facilities",
        outdoor: {
          title: "Outdoor Facilities",
          items: ["Private Swimming Pool", "Beautiful Garden", "Barbecue Area", "Terrace with Sea Views", "Parking On-Site"]
        },
        comfort: {
          title: "Comfort & Convenience", 
          items: ["Air Conditioning", "Fast WiFi (104 Mbps)", "Flat-screen TV", "Fully Equipped Kitchen", "Private Entrance"]
        },
        activities: {
          title: "Activities & Entertainment",
          items: ["Water Sports Facilities", "Windsurfing", "Fishing", "Golf Nearby", "Bar/Lounge Area"]
        }
      },
      gallery: {
        title: "Photo Gallery",
        subtitle: "Explore Casa Blu's beautiful spaces"
      },
      location: {
        title: "Prime Location",
        description: "Casa Blu is perfectly positioned in Marbella, offering easy access to beaches, golf courses, and local attractions.",
        distances: {
          title: "Nearby Attractions",
          items: [
            { name: "Playa de Artola Beach", distance: "1.1 km" },
            { name: "La Cala Golf", distance: "9 km" },
            { name: "Miraflores Resort", distance: "5 km" },
            { name: "Plaza de los Naranjos", distance: "12 km" },
            { name: "Malaga Airport", distance: "42 km" }
          ]
        },
        restaurants: {
          title: "Nearby Restaurants",
          items: [
            { name: "Ra-Ma Restaurant", distance: "850 m" },
            { name: "Döss Restaurant", distance: "800 m" },
            { name: "Jaipur Palace", distance: "900 m" }
          ]
        }
      },
      cta: {
        title: "Ready to experience Casa Blu?",
        subtitle: "Book your luxury getaway today"
      },
      footer: {
        copyright: "© 2025 Casa Blu Marbella. All rights reserved.",
        designed: "Designed with love for unforgettable stays.",
        contact: "Contact: +34 643 49 51 18"
      }
    },
    hu: {
      nav: {
        about: "Rólunk",
        amenities: "Szolgáltatások",
        gallery: "Galéria", 
        location: "Elhelyezkedés"
      },
      hero: {
        title: "Üdvözöljük a Casa Blu-ban",
        subtitle: "Luxus nyaraló Marbella szívében privát medencével és tengerre néző kilátással"
      },
      about: {
        title: "A Casa Blu-ról",
        description: "A Casa Blu Marbella egy nemrég felújított nyaraló Marbellában, ahol a vendégek maximálisan kihasználhatják a kültéri medencét, az ingyenes WiFi-t, a vízi sportlétesítményeket és a kertet. Ez a nyaraló légkondicionált szállást kínál erkéllyel. Az ingatlan grillezési lehetőséget és helyszíni parkolást biztosít.",
        features: "Főbb Jellemzők",
        featureList: [
          "Privát bejárat és allergénmentes környezet",
          "4 hálószoba, 4 fürdőszoba zuhanyzóval",
          "Teljesen felszerelt konyha mosogatógéppel és sütővel",
          "Terasz lenyűgöző tengerre néző kilátással",
          "Ingyenes bor, pezsgő, csokoládé és süti",
          "Légkondicionált szállás",
          "Síkképernyős TV és ingyenes WiFi",
          "Grillezési lehetőség és helyszíni parkolás"
        ]
      },
      amenities: {
        title: "Szolgáltatások és Létesítmények",
        outdoor: {
          title: "Kültéri Létesítmények",
          items: ["Privát Úszómedence", "Gyönyörű Kert", "Grill Terület", "Terasz Tengerre Néző Kilátással", "Helyszíni Parkolás"]
        },
        comfort: {
          title: "Kényelem és Praktikum",
          items: ["Légkondicionálás", "Gyors WiFi (104 Mbps)", "Síkképernyős TV", "Teljesen Felszerelt Konyha", "Privát Bejárat"]
        },
        activities: {
          title: "Tevékenységek és Szórakozás",
          items: ["Vízi Sport Létesítmények", "Vitorlázás", "Horgászat", "Golf a Közelben", "Bár/Társalgó"]
        }
      },
      gallery: {
        title: "Fotógaléria",
        subtitle: "Fedezze fel a Casa Blu gyönyörű tereit"
      },
      location: {
        title: "Kiváló Elhelyezkedés",
        description: "A Casa Blu tökéletesen elhelyezkedik Marbellában, könnyű hozzáférést biztosítva a strandokhoz, golfpályákhoz és helyi látványosságokhoz.",
        distances: {
          title: "Közeli Látványosságok",
          items: [
            { name: "Playa de Artola Strand", distance: "1,1 km" },
            { name: "La Cala Golf", distance: "9 km" },
            { name: "Miraflores Resort", distance: "5 km" },
            { name: "Plaza de los Naranjos", distance: "12 km" },
            { name: "Malagai Repülőtér", distance: "42 km" }
          ]
        },
        restaurants: {
          title: "Közeli Éttermek",
          items: [
            { name: "Ra-Ma Étterem", distance: "850 m" },
            { name: "Döss Étterem", distance: "800 m" },
            { name: "Jaipur Palace", distance: "900 m" }
          ]
        }
      },
      cta: {
        title: "Készen áll a Casa Blu élményére?",
        subtitle: "Foglalja le luxus kirándulását még ma"
      },
      footer: {
        copyright: "© 2025 Casa Blu Marbella. Minden jog fenntartva.",
        designed: "Szeretettel tervezve felejthetetlen tartózkodásért.",
        contact: "Kapcsolat: +34 643 49 51 18"
      }
    }
  };

  // Scroll handling for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentContent = content[currentLang];

  return (
    <div className="App">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-blue-600">Casa Blu Marbella</h1>
            <div className="hidden md:flex space-x-2">
              <button
                onClick={() => setCurrentLang('en')}
                className={`px-2 py-1 rounded text-sm ${currentLang === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                EN
              </button>
              <button
                onClick={() => setCurrentLang('es')}
                className={`px-2 py-1 rounded text-sm ${currentLang === 'es' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                ES
              </button>
              <button
                onClick={() => setCurrentLang('hu')}
                className={`px-2 py-1 rounded text-sm ${currentLang === 'hu' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                HU
              </button>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {currentContent.nav.about}
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {currentContent.nav.amenities}
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {currentContent.nav.gallery}
            </button>
            <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {currentContent.nav.location}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImageUrl})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/90 to-transparent p-8">
          <div className="container mx-auto text-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto shadow-xl">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-fade-in">
                {currentContent.hero.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 animate-fade-in-delay">
                {currentContent.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {currentContent.about.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentContent.about.description}
              </p>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The spacious holiday home with a terrace and sea views features 4 bedrooms, a living room, a flat-screen TV, an equipped kitchen with a dishwasher and an oven, and 4 bathrooms with a walk-in shower. A private entrance leads guests into the holiday home, where they can enjoy some wine or champagne and chocolates or cookies.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">
                {currentContent.about.features}
              </h3>
              <ul className="space-y-3">
                {currentContent.about.featureList.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {currentContent.amenities.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-6 text-blue-800">
                <span className="text-2xl mr-2">🏊‍♂️</span>
                {currentContent.amenities.outdoor.title}
              </h3>
              <ul className="space-y-3">
                {currentContent.amenities.outdoor.items.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-6 text-blue-800">
                <span className="text-2xl mr-2">🏠</span>
                {currentContent.amenities.comfort.title}
              </h3>
              <ul className="space-y-3">
                {currentContent.amenities.comfort.items.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-6 text-blue-800">
                <span className="text-2xl mr-2">🎯</span>
                {currentContent.amenities.activities.title}
              </h3>
              <ul className="space-y-3">
                {currentContent.amenities.activities.items.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            {currentContent.gallery.title}
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {currentContent.gallery.subtitle}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  activeImageIndex === index ? 'ring-4 ring-blue-500' : ''
                }`}
                onClick={() => {
                  setActiveImageIndex(index);
                  setIsModalOpen(true);
                }}
              >
                <img
                  src={image}
                  alt={`Casa Blu ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-2xl opacity-0 hover:opacity-100 transition-opacity">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {currentContent.location.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentContent.location.description}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">
                    <span className="text-2xl mr-2">📍</span>
                    {currentContent.location.distances.title}
                  </h3>
                  <ul className="space-y-2">
                    {currentContent.location.distances.items.map((item, index) => (
                      <li key={index} className="flex justify-between text-gray-700">
                        <span>{item.name}</span>
                        <span className="font-medium text-blue-600">{item.distance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">
                    <span className="text-2xl mr-2">🍽️</span>
                    {currentContent.location.restaurants.title}
                  </h3>
                  <ul className="space-y-2">
                    {currentContent.location.restaurants.items.map((item, index) => (
                      <li key={index} className="flex justify-between text-gray-700">
                        <span>{item.name}</span>
                        <span className="font-medium text-blue-600">{item.distance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=Urb. Pueblo Andaluz, 160, 29604 Marbella, Málaga, Spain&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Casa Blu Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {currentContent.cta.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {currentContent.cta.subtitle}
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.booking.com/hotel/es/casa-blu-marbella.hu.html?label=casa-blu-marbella-e09Ksy2pk*XUpMavCBgYiAS705846823878%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2322683958403%3Alp9106124%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YavywThF4buZMwppv9IhQn0&sid=4912048e618222e4d1f9defd084dc471&gclid=CjwKCAjw3_PCBhA2EiwAkH_j4pNwkfYNSn_pVPu4UyEpFRD-vbPKlMmw3g2qPpFBcAl4aKYHHL5CXRoCcnQQAvD_BwE&aid=319854&ucfs=1&arphpl=1&dest_id=-391076&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=5ac12c7db95904bc&srepoch=1751005188&from=searchresults"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-12 py-6 rounded-lg font-bold text-xl hover:bg-gray-100 hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Casa Blu Marbella</h3>
            <p className="text-gray-300">{currentContent.footer.contact}</p>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">{currentContent.footer.copyright}</p>
            <p className="text-gray-400 mt-2">{currentContent.footer.designed}</p>
          </div>
        </div>
      </footer>

      {/* Gallery Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
            >
              ×
            </button>
            
            {/* Image */}
            <img
              src={galleryImages[activeImageIndex]}
              alt={`Casa Blu ${activeImageIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {/* Navigation arrows */}
            <button
              onClick={() => setActiveImageIndex(prev => prev > 0 ? prev - 1 : galleryImages.length - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
            >
              ‹
            </button>
            <button
              onClick={() => setActiveImageIndex(prev => prev < galleryImages.length - 1 ? prev + 1 : 0)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
            >
              ›
            </button>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded">
              {activeImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;