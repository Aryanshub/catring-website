import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const ServicesPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "शादी डेकोरेशन",
      description: "आपकी शादी को बनाएं स्वर्गीय अनुभव",
      features: ["मंडप डेकोरेशन", "स्टेज सेटअप", "फूलों की सजावट", "लाइटिंग अरेंजमेंट"],
      icon: "💒",
      price: "₹50,000 से शुरू",
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-900/20 to-pink-900/20"
    },
    {
      title: "कैटरिंग सेवाएं",
      description: "स्वादिष्ट खाना और बेहतरीन सेवा",
      features: ["शुद्ध शाकाहारी भोजन", "लाइव काउंटर", "वेटर सेवा", "क्रॉकरी व्यवस्था"],
      icon: "🍽️",
      price: "₹200 प्रति प्लेट से",
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-900/20 to-yellow-900/20"
    },
    {
      title: "फैब्रिक डेकोरेशन",
      description: "अनोखे फैब्रिक डिजाइन और सजावट",
      features: ["कस्टम डिजाइन", "हैंडमेड आर्ट", "कलर कोऑर्डिनेशन", "प्रीमियम फैब्रिक"],
      icon: "🎨",
      price: "₹25,000 से शुरू",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-900/20 to-indigo-900/20"
    },
    {
      title: "स्टेज डेकोरेशन",
      description: "आकर्षक और प्रोफेशनल स्टेज सेटअप",
      features: ["LED स्क्रीन सेटअप", "साउंड सिस्टम", "लाइटिंग डिजाइन", "बैकड्रॉप डेकोरेशन"],
      icon: "🎭",
      price: "₹30,000 से शुरू",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/20 to-cyan-900/20"
    },
    {
      title: "फूड स्टॉल डेकोरेशन",
      description: "खाने के काउंटर की शानदार सजावट",
      features: ["फैब्रिक ड्रेपिंग", "फ्लावर डेकोरेशन", "लाइटिंग इफेक्ट", "थीम बेस्ड डिजाइन"],
      icon: "🥘",
      price: "₹15,000 से शुरू",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-900/20 to-emerald-900/20"
    },
    {
      title: "कॉम्प्लीट वेडिंग पैकेज",
      description: "शादी की सारी जरूरतों का एक समाधान",
      features: ["कैटरिंग + डेकोरेशन", "स्टेज + फूड स्टॉल", "साउंड सिस्टम", "कॉम्प्लीट मैनेजमेंट"],
      icon: "💫",
      price: "₹2,00,000 से शुरू",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-900/20 to-purple-900/20"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white overflow-hidden relative">
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

      <div className="relative z-10 container mx-auto px-4 py-20 pt-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-7xl mb-6"
          >
            🍽️✨
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            हमारी सेवाएं
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            आपके हर खुशी के मौके के लिए बेहतरीन डेकोरेशन सेवाएं
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group perspective-1000"
            >
              <Card className={`h-full bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-800/80 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden backdrop-blur-sm relative`}>
                {/* Dynamic gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="text-center relative z-10 p-6 lg:p-8">
                  <motion.div
                    animate={hoveredCard === index ? { 
                      scale: 1.2, 
                      rotate: [0, -5, 5, 0],
                      y: -5
                    } : { scale: 1, rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl lg:text-6xl mb-4"
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl lg:text-2xl text-white group-hover:text-purple-300 transition-colors duration-300 mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm lg:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10 p-6 lg:p-8 pt-0">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                        className="flex items-center text-sm lg:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <motion.span 
                          className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}
                          animate={hoveredCard === index ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-gray-600 group-hover:border-purple-400/50 transition-colors duration-300">
                    <div className={`text-lg lg:text-xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button asChild className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold rounded-full border-0 transition-all duration-300`}>
                        <Link to="/contact" className="flex items-center justify-center space-x-2">
                          <span>बुक करें</span>
                          <motion.span
                            animate={hoveredCard === index ? { x: 5 } : { x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            →
                          </motion.span>
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-800/80 backdrop-blur-md p-8 lg:p-12 rounded-2xl border border-purple-500/30 shadow-2xl mb-16 lg:mb-20 relative overflow-hidden"
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-pink-900/10 to-purple-900/10"></div>
          
          <div className="relative z-10">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-black text-center mb-12 lg:mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
            >
              हमारी कार्य प्रक्रिया
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                {
                  step: "1",
                  title: "संपर्क करें",
                  description: "हमसे मिलें और अपनी जरूरतें बताएं",
                  gradient: "from-rose-500 to-pink-500",
                  icon: "📞"
                },
                {
                  step: "2", 
                  title: "प्लानिंग",
                  description: "डिटेल में प्लानिंग और डिजाइन तैयार करते हैं",
                  gradient: "from-orange-500 to-yellow-500",
                  icon: "📝"
                },
                {
                  step: "3",
                  title: "एक्जीक्यूशन",
                  description: "प्रोफेशनल टीम द्वारा परफेक्ट सेटअप",
                  gradient: "from-blue-500 to-cyan-500",
                  icon: "⚡"
                },
                {
                  step: "4",
                  title: "डिलीवरी",
                  description: "समय पर बेहतरीन परिणाम की गारंटी",
                  gradient: "from-green-500 to-emerald-500",
                  icon: "✅"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="text-center group"
                >
                  <motion.div 
                    className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${process.gradient} rounded-full flex items-center justify-center text-white font-black text-xl lg:text-2xl mx-auto mb-4 shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                    }}
                  >
                    <span className="relative z-10">{process.step}</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  
                  <motion.div
                    className="text-3xl lg:text-4xl mb-3"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.5 
                    }}
                  >
                    {process.icon}
                  </motion.div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm lg:text-base leading-relaxed">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-8 lg:p-12 rounded-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"
            />
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-5xl lg:text-6xl mb-6"
            >
              🎉
            </motion.div>
            
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-white leading-tight">
              तैयार हैं अपना इवेंट बुक करने के लिए?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              आज ही संपर्क करें और पाएं बेस्ट रेट्स!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg lg:text-xl px-8 lg:px-10 py-4 lg:py-5 rounded-full shadow-xl">
                  <Link to="/contact" className="flex items-center space-x-2">
                    <span>📞</span>
                    <span>अभी संपर्क करें</span>
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold text-lg lg:text-xl px-8 lg:px-10 py-4 lg:py-5 rounded-full">
                  <Link to="/gallery" className="flex items-center space-x-2">
                    <span>📸</span>
                    <span>गैलरी देखें</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;