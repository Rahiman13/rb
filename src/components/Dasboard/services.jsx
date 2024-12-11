import { 
  FaBookOpen, 
  FaCalendarCheck, 
  FaUsers, 
  FaCoffee,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaBook,
  FaBookReader,
  FaChalkboardTeacher,
  FaMugHot,
  FaBookmark,
  FaStar,
  FaGlobe,
  FaLaptop,
  FaUserFriends,
  FaComments,
  FaTrophy,
  FaWifi,
  FaExchangeAlt,
  FaHeadphones,
  FaPencilAlt,
  FaShippingFast,
  FaHandsHelping,
  FaGift
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const services = [
  { 
    title: "Book Collection", 
    description: "Explore our vast collection of over 10,000 books across fiction, non-fiction, academic, and rare editions.", 
    icon: <div className="flex flex-col items-center space-y-2">
            <FaBookOpen className="text-6xl text-transparent bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text" />
            <div className="flex space-x-2 text-2xl">
              <FaBookmark className="text-emerald-500" />
              <FaGlobe className="text-blue-500" />
            </div>
          </div>,
    features: [
      { text: "New arrivals weekly", icon: <FaBook /> },
      { text: "Rare book collection", icon: <FaBookReader /> },
      { text: "International editions", icon: <FaGlobe /> },
      { text: "Digital library access", icon: <FaLaptop /> }
    ],
    link: "/books"
  },
  { 
    title: "Reading Events", 
    description: "Join our weekly reading events, author meet-ups, and literary discussions.", 
    icon: <div className="flex flex-col items-center space-y-2">
            <FaCalendarCheck className="text-6xl text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text" />
            <div className="flex space-x-2 text-2xl">
              <FaUsers className="text-purple-500" />
              <FaStar className="text-pink-500" />
            </div>
          </div>,
    features: [
      { text: "Author meet & greets", icon: <FaUserFriends /> },
      { text: "Book launches", icon: <FaBookOpen /> },
      { text: "Reading workshops", icon: <FaChalkboardTeacher /> },
      { text: "Literary festivals", icon: <FaStar /> }
    ],
    link: "/events"
  },
  { 
    title: "Book Clubs", 
    description: "Be part of our thriving community of book lovers with monthly themed discussions.", 
    icon: <div className="flex flex-col items-center space-y-2">
            <FaUsers className="text-6xl text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text" />
            <div className="flex space-x-2 text-2xl">
              <FaComments className="text-blue-500" />
              <FaTrophy className="text-indigo-500" />
            </div>
          </div>,
    features: [
      { text: "Monthly meetings", icon: <FaCalendarCheck /> },
      { text: "Online discussions", icon: <FaComments /> },
      { text: "Genre-specific groups", icon: <FaUserFriends /> },
      { text: "Reading challenges", icon: <FaTrophy /> }
    ],
    link: "/clubs"
  },
  { 
    title: "Literary Café", 
    description: "Enjoy premium coffee and snacks while immersing yourself in your favorite books.", 
    icon: <div className="flex flex-col items-center space-y-2">
            <FaCoffee className="text-6xl text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text" />
            <div className="flex space-x-2 text-2xl">
              <FaMugHot className="text-amber-500" />
              <FaWifi className="text-orange-500" />
            </div>
          </div>,
    features: [
      { text: "Artisanal coffee", icon: <FaMugHot /> },
      { text: "Book-themed menu", icon: <FaBook /> },
      { text: "Quiet reading zones", icon: <FaBookReader /> },
      { text: "Wi-Fi enabled", icon: <FaWifi /> }
    ],
    link: "/cafe"
  },
  {
    title: "Book Exchange",
    description: "Trade your books with other readers and discover new titles through our exchange program.",
    icon: <div className="flex flex-col items-center space-y-2">
            <FaExchangeAlt className="text-6xl text-transparent bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text" />
            <div className="flex space-x-2 text-2xl">
              <FaBook className="text-green-500" />
              <FaHandsHelping className="text-teal-500" />
            </div>
          </div>,
    features: [
      { text: "Book swapping", icon: <FaExchangeAlt /> },
      { text: "Community sharing", icon: <FaHandsHelping /> },
      { text: "Monthly exchanges", icon: <FaCalendarCheck /> },
      { text: "Quality checks", icon: <FaBookmark /> }
    ],
    link: "/exchange"
  },
  {
    title: "Audiobook Service",
    description: "Listen to your favorite books narrated by professional voice actors.",
    icon: <div className="flex flex-col items-center space-y-2">
            <FaHeadphones className="text-6xl text-transparent bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text" />
            <div className="flex space-x-2 text-2xl">
              <FaBook className="text-red-500" />
              <FaLaptop className="text-rose-500" />
            </div>
          </div>,
    features: [
      { text: "Professional narration", icon: <FaHeadphones /> },
      { text: "Offline listening", icon: <FaLaptop /> },
      { text: "Multiple languages", icon: <FaGlobe /> },
      { text: "HD audio quality", icon: <FaStar /> }
    ],
    link: "/audiobooks"
  },
  {
    title: "Gift Services",
    description: "Perfect gifting solutions for book lovers with custom wrapping and personalized messages.",
    icon: <div className="flex flex-col items-center space-y-2">
            <FaGift className="text-6xl text-transparent bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text" />
            <div className="flex space-x-2 text-2xl">
              <FaPencilAlt className="text-pink-500" />
              <FaShippingFast className="text-rose-500" />
            </div>
          </div>,
    features: [
      { text: "Custom wrapping", icon: <FaGift /> },
      { text: "Personal messages", icon: <FaPencilAlt /> },
      { text: "Express delivery", icon: <FaShippingFast /> },
      { text: "Gift cards", icon: <FaBookmark /> }
    ],
    link: "/gifts"
  },
  {
    title: "Writing Workshop",
    description: "Join our creative writing workshops led by experienced authors and editors.",
    icon: <div className="flex flex-col items-center space-y-2">
            <FaPencilAlt className="text-6xl text-transparent bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text" />
            <div className="flex space-x-2 text-2xl">
              <FaChalkboardTeacher className="text-violet-500" />
              <FaBook className="text-purple-500" />
            </div>
          </div>,
    features: [
      { text: "Expert guidance", icon: <FaChalkboardTeacher /> },
      { text: "Writing exercises", icon: <FaPencilAlt /> },
      { text: "Peer reviews", icon: <FaComments /> },
      { text: "Publishing insights", icon: <FaBook /> }
    ],
    link: "/workshops"
  }
];

function Services() {
  const handleLearnMore = (service) => {
    Swal.fire({
      title: service.title,
      html: `
        <div class="text-left">
          <h3 class="text-lg font-bold mb-4">Key Features:</h3>
          <ul class="space-y-2 mb-4">
            ${service.features.map(feature => `
              <li class="flex items-center gap-2">
                <span class="text-blue-600">${feature.icon ? feature.icon.type.render() : ''}</span>
                <span>${feature.text}</span>
              </li>
            `).join('')}
          </ul>
          
          ${service.contactInfo ? `
            <div class="mb-4">
              <p class="flex items-center gap-2">
                <span class="text-blue-600"><i class="fas fa-envelope"></i></span>
                ${service.contactInfo.email}
              </p>
              <p class="flex items-center gap-2">
                <span class="text-blue-600"><i class="fas fa-phone"></i></span>
                ${service.contactInfo.phone}
              </p>
            </div>
          ` : ''}
          
          ${service.schedule ? `
            <div class="mb-4">
              <h4 class="font-bold mb-2 flex items-center gap-2">
                <span class="text-blue-600">${FaClock.render()}</span>
                Opening Hours:
              </h4>
              <p>Weekdays: ${service.schedule.weekdays}</p>
              <p>Weekends: ${service.schedule.weekends}</p>
            </div>
          ` : ''}
          
          ${service.location ? `
            <div class="mb-4">
              <h4 class="font-bold mb-2 flex items-center gap-2">
                <span class="text-blue-600">${FaMapMarkerAlt.render()}</span>
                Location:
              </h4>
              <p>${service.location.address}</p>
              <p>Hours: ${service.location.hours}</p>
            </div>
          ` : ''}
          
          ${service.membershipInfo ? `
            <div class="mb-4">
              <h4 class="font-bold mb-2">Membership Plans:</h4>
              <p>Monthly: ${service.membershipInfo.monthly}</p>
              <p>Annual: ${service.membershipInfo.annual}</p>
            </div>
          ` : ''}
        </div>
      `,
      showCloseButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Join Now',
      confirmButtonColor: '#4F46E5',
      showCancelButton: true,
      cancelButtonText: 'Close',
      width: '32rem',
      customClass: {
        container: 'custom-swal-container',
        popup: 'custom-swal-popup rounded-xl',
        content: 'custom-swal-content'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle join/subscription logic
        window.location.href = service.link;
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-gray-600 text-base">Elevating your reading experience with premium services</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="h-full rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm
                          border border-gray-100 hover:border-gray-200
                          shadow-md hover:shadow-xl
                          transition-all duration-300 hover:scale-105"
            >
              <div className="p-5">
                <div className="flex flex-col items-center mb-3">
                  <div className="text-5xl mb-2">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2 text-center text-gray-800 group-hover:text-transparent 
                             group-hover:bg-gradient-to-r from-blue-600 to-purple-600 group-hover:bg-clip-text
                             transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <button 
                    onClick={() => handleLearnMore(service)}
                    className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 
                             text-white text-sm font-medium transition-all duration-300 
                             hover:shadow-lg hover:opacity-90 
                             transform hover:-translate-y-0.5"
                  >
                    Learn More
                  </button>
                  {/* <Link 
                    to={service.link}
                    className="block w-full px-4 py-2 rounded-lg border border-gray-200
                             text-gray-700 text-sm font-medium text-center transition-all duration-300 
                             hover:border-blue-500 hover:text-blue-600
                             transform hover:-translate-y-0.5"
                  >
                    Visit {service.title}
                  </Link> */}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
