import { motion, useScroll, useTransform } from "framer-motion";

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

 
  const values = [
    {
      title: "गुणवत्ता की गारंटी",
      description: "हम सिर्फ सबसे बेहतरीन सामग्री और तकनीक का इस्तेमाल करते हैं",
      icon: "⭐",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "समय की पाबंदी", 
      description: "आपका हर मोमेंट हमारे लिए कीमती है, हम कभी देर नहीं करते",
      icon: "⏰",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "ग्राहक संतुष्टि",
      description: "आपकी खुशी ही हमारी सफलता है, 100% सैटिस्फैक्शन गारंटी",
      icon: "💯",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "इनोवेशन",
      description: "नए ट्रेंड्स और आधुनिक तकनीक के साथ परंपरा का मेल",
      icon: "🚀",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen mt-12 bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900"></div>
        
        {/* Floating Elements */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-20"
        >
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"
          />
          <motion.div
            animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Enhanced Animated MANOJ Client Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.2, type: "spring", stiffness: 100 }}
            className=" mt-7 mb-12"
          >
            <div className="relative inline-block group">
              {/* Multi-layered Glowing Background Effects */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 50px rgba(147, 51, 234, 0.4), 0 0 100px rgba(236, 72, 153, 0.3)",
                    "0 0 80px rgba(236, 72, 153, 0.6), 0 0 140px rgba(147, 51, 234, 0.4)",
                    "0 0 50px rgba(147, 51, 234, 0.4), 0 0 100px rgba(236, 72, 153, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full blur-2xl"
              />
              
              {/* Rotating Border Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-1 opacity-70"
              >
                <div className="rounded-full bg-black h-full w-full"></div>
              </motion.div>
              
              {/* Inner Pulsing Ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-yellow-400/50 to-orange-500/50 blur-sm"
              />
              
              {/* Stylish Image Container */}
              <motion.div 
                className="relative w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm group-hover:border-white/40 transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 15,
                  rotateX: 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20 z-10"></div>
                
                {/* Main Client Image */}
                <motion.img 
                  src="manoj.jpg" 
                  alt="Manoj Dagriya - Founder MD Celebrations" 
                  className="w-full h-full object-cover object-center relative z-0 group-hover:scale-110 transition-transform duration-500"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                
                {/* Shine Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"
                  initial={{ x: "-100%" }}
                />
                
                {/* Professional Title Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 z-30"
                >
                  <div className="text-white text-xs md:text-sm font-bold text-center">
                    मनोज डगरिया
                  </div>
                  <div className="text-yellow-400 text-xs text-center font-medium">
                    Founder & CEO
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Floating Particles Around Image */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"
                  animate={{
                    x: [0, Math.cos(i * 45) * 60, 0],
                    y: [0, Math.sin(i * 45) * 60, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              ))}
              
           
            </div>
            
          
          </motion.div>

          {/* Magical MANOJ Typography Expansion */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                The Magic Behind
              </span>
            </h1>

            {/* MANOJ Letter-by-Letter Animation */}
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-purple-500/30 shadow-2xl mb-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl font-bold text-yellow-400 mb-6"
              >
                "MANOJ - Making All Nuptials Outstanding & Joyful"
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
                {[
                  { 
                    letter: "M", 
                    word: "Memories", 
                    meaning: "यादगार पल बनाते हैं", 
                    color: "from-red-400 to-pink-400",
                    icon: "💝"
                  },
                  { 
                    letter: "A", 
                    word: "Ambience", 
                    meaning: "शानदार माहौल", 
                    color: "from-orange-400 to-yellow-400",
                    icon: "🌟"
                  },
                  { 
                    letter: "N", 
                    word: "Nutrition", 
                    meaning: "पौष्टिक स्वादिष्ट खाना", 
                    color: "from-green-400 to-emerald-400",
                    icon: "🍽️"
                  },
                  { 
                    letter: "O", 
                    word: "Occasion", 
                    meaning: "हर मौके को खास", 
                    color: "from-blue-400 to-cyan-400",
                    icon: "🎉"
                  },
                  { 
                    letter: "J", 
                    word: "Joy", 
                    meaning: "खुशियों का जश्न", 
                    color: "from-purple-400 to-pink-400",
                    icon: "😊"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: 1.2 + (index * 0.2),
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      rotateY: 10
                    }}
                    className="relative group cursor-pointer"
                  >
                    <div className={`bg-gradient-to-br ${item.color} p-4 md:p-6 rounded-xl shadow-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden h-full flex flex-col justify-center`}>
                      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                      <div className="relative z-10 text-center">
                        <motion.div 
                          className="text-3xl md:text-4xl font-black text-white mb-2"
                          animate={{
                            textShadow: [
                              "0 0 10px rgba(255,255,255,0.5)",
                              "0 0 20px rgba(255,255,255,0.8)",
                              "0 0 10px rgba(255,255,255,0.5)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {item.letter}
                        </motion.div>
                        <div className="text-lg md:text-xl mb-1 text-white">{item.icon}</div>
                        <div className="text-sm md:text-base font-bold text-white mb-1">{item.word}</div>
                        <div className="text-xs text-white/90 font-medium">{item.meaning}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="mt-6 text-sm md:text-base text-gray-300 italic"
              >
                "यही छोटे words में उसके काम के keywords हैं"
              </motion.div>
            </div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 3.0 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium"
            >
              कई साल का जादुगर सफर, हजारों खुशियां, एक ही मंत्र - 
              <span className="text-yellow-400 font-bold"> आपके सपनों को हकीकत बनाना</span>
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black via-slate-900 to-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              हमारा मिशन
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>
                <span className="text-yellow-400 font-bold">मनोज डगरिया</span> का सफर शुरू हुआ था एक सपने के साथ - 
                हर शादी-विवाह को बनाना <span className="text-pink-400 font-semibold">फिल्मी और यादगार</span>। 
                कई साल पहले जब हमने यह व्यापार शुरू किया था, तो हमारा एक ही मकसद था - 
                <span className="text-purple-400 font-semibold"> गुणवत्ता से कोई समझौता नहीं</span>।
              </p>
              <p>
                आज हम <span className="text-cyan-400 font-bold">2000+ परिवारों</span> के खुशी के मौकों का हिस्सा बन चुके हैं। 
                हमारी टीम में <span className="text-orange-400 font-bold">कई अनुभवी एक्सपर्ट्स</span> हैं जो आपके हर सपने को 
                <span className="text-green-400 font-semibold"> हकीकत में बदलने</span> के लिए तैयार हैं।
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-purple-900/20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              हमारे मूल्य
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative group"
                >
                  <div className={`bg-gradient-to-br ${value.gradient} p-6 md:p-8 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden h-full`}>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <div className="relative z-10 text-center h-full flex flex-col">
                      <div className="text-4xl md:text-5xl mb-4">{value.icon}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{value.title}</h3>
                      <p className="text-sm md:text-base text-white/90 leading-relaxed flex-grow">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-purple-900 via-black to-pink-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              तैयार हैं आपके सपनों को सच करने के लिए?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              आइए मिलकर बनाएं आपके खुशी के मौकों को और भी <span className="text-pink-400 font-bold">यादगार और खूबसूरत</span>
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a 
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg md:text-xl font-bold px-8 md:px-12 py-4 md:py-6 rounded-full shadow-2xl border-2 border-yellow-400/50 transition-all duration-300 inline-flex items-center gap-3"
              >
                <span>📞 अभी संपर्क करें</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;