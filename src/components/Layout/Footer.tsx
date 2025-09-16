import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "होम", icon: "🏠" },
    { path: "/about", label: "हमारे बारे में", icon: "👨‍💼" },
    { path: "/services", label: "सेवाएं", icon: "🍽️" },
    { path: "/gallery", label: "गैलरी", icon: "📸" },
    { path: "/contact", label: "संपर्क", icon: "📞" }
  ];

  const services = [
    { name: "प्रीमियम शादी कैटरिंग", icon: "👑" },
    { name: "लक्जरी डेकोरेशन", icon: "✨" },
    { name: "इवेंट मैनेजमेंट", icon: "🎉" },
    { name: "स्टेज डिजाइनिंग", icon: "🎭" },
    { name: "फ्लोरल आर्ट", icon: "🌸" },
   
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, purple 2px, transparent 2px), radial-gradient(circle at 75% 75%, pink 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Logo */}
            <div className="flex items-center space-x-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <motion.span 
                    className="text-2xl font-black text-white"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(255,255,255,0.5)",
                        "0 0 20px rgba(147,51,234,0.8)",
                        "0 0 10px rgba(255,255,255,0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    MD
                  </motion.span>
                </div>
                <motion.div
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                  className="absolute -top-2 -right-2 text-yellow-400 text-lg"
                >
                  ✨
                </motion.div>
              </motion.div>

              <div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  MD CELEBRATIONS
                </h3>
                <p className="text-cyan-400 font-medium">Where Every Plate Tells a Story</p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              हम आपके सपनों की शादी को साकार करने में विशेषज्ञ हैं। पांच साल के अनुभव के साथ, 
              हमारी टीम आपके हर विशेष अवसर को अविस्मरणीय बनाने के लिए प्रतिबद्ध है।
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏆</span>
                <span className="text-yellow-400 font-semibold">5+ साल का विश्वसनीय अनुभव</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🌟</span>
                <span className="text-green-400 font-semibold">500+ सफल कार्यक्रम</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">❤️</span>
                <span className="text-pink-400 font-semibold">500+ खुश परिवार</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-bold text-white border-b-2 border-purple-500 pb-2 inline-block">
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10, scale: 1.05 }}
                  className="group"
                >
                  <Link
                    to={link.path}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/10 group"
                  >
                    <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.label}</span>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-purple-400"
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-bold text-white border-b-2 border-pink-500 pb-2 inline-block">
              Our Services
            </h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 10, scale: 1.05 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 cursor-pointer group"
                >
                  <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                    {service.icon}
                  </span>
                  <span className="font-medium">{service.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

       

        {/* Bottom Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="border-t border-purple-500/30 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} <span className="text-purple-400 font-semibold">MD Celebrations</span>. 
              सभी अधिकार सुरक्षित हैं।
            </p>
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex items-center space-x-2 text-yellow-400"
            >
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>by Team MD</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;