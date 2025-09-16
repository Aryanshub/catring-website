import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const isInView = useInView(heroRef);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { number: "500+", label: "खुश ग्राहक", icon: "😊", color: "from-purple-400 to-pink-400" },
    { number: "5+", label: "साल का अनुभव", icon: "🎯", color: "from-blue-400 to-cyan-400" },
    { number: "500+", label: "सफल इवेंट्स", icon: "🎉", color: "from-green-400 to-emerald-400" },
    { number: "24/7", label: "सेवा उपलब्ध", icon: "📞", color: "from-orange-400 to-red-400" }
  ];

  const services = [
    {
      title: "प्रीमियम शादी कैटरिंग",
      description: "रॉयल क़्वालिटी  खाना और वर्ल्ड-क्लास सर्विस",
      icon: "👑",
      features: ["शुद्ध शाकाहारी", "लाइव काउंटर", "5-स्टार शेफ"],
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-900/50 to-pink-900/50"
    },
    {
      title: "लक्जरी डेकोरेशन", 
      description: "आपके सपनों की शादी को बनाएं फिल्मी",
      icon: "✨",
      features: ["3D डिजाइन", "LED सेटअप", "फ्लावर आर्ट"],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/50 to-cyan-900/50"
    },
    {
      title: "कॉम्प्लीट वेडिंग सोल्यूशन",
      description: "A से Z तक सब कुछ - वन स्टॉप शॉप",
      icon: "💎",
      features: ["फुल मैनेजमेंट", "इवेंट प्लानिंग", "VIP ट्रीटमेंट"],
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-900/50 to-emerald-900/50"
    }
  ];

  const testimonials = [
    {
      name: "राजेश शर्मा जी",
      event: "ग्रैंड वेडिंग",
      rating: 5,
      comment: "वाह! क्या शानदार अरेंजमेंट था। सभी गेस्ट्स अभी भी तारीफ कर रहे हैं। मनोज जी का काम बेमिसाल है!",
      location: "दिल्ली",
      image: "👨‍💼"
    },
    {
      name: "प्रिया गुप्ता जी",
      event: "ड्रीम वेडिंग",
      rating: 5,
      comment: "परफेक्ट से भी ज्यादा परफेक्ट! हमारी शादी बिल्कुल फिल्म जैसी लगी। टीम की डेडिकेशन लाजवाब है।",
      location: "गुड़गांव",
      image: "👩‍💼"
    },
    {
      name: "अनिल वर्मा जी",
      event: "कॉर्पोरेट गाला",
      rating: 5,
      comment: "प्रोफेशनलिज्म की हद! हर डिटेल परफेक्ट था। क्लाइंट्स बहुत इंप्रेस्ड हुए। रिकमेंड जरूर करूंगा।",
      location: "नोएडा",
      image: "👔"
    }
  ];

  // Optimized mouse movement effect with throttling
  useEffect(() => {
    let animationFrame: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrame) return;
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        animationFrame = 0;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden w-full relative mt-12">
      {/* Dynamic Mouse Cursor Effect */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* STYLISH Hero Section with Better Sizing */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black to-pink-900/80"></div>
        
        {/* More Visible Particles */}
        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full will-change-transform"
              animate={{
                x: [Math.random() * 100 + '%', (Math.random() * 100) + '%'],
                y: [Math.random() * 100 + '%', (Math.random() * 100) + '%'],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%'
              }}
            />
          ))}
        </div>

        {/* More Visible Floating Elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl will-change-transform"
        />
        <motion.div
          animate={{ 
            scale: [1.5, 1, 1.5],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl will-change-transform"
        />

        {/* Animated Food Background */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-30 z-5 will-change-transform"
        >
          {['🍛', '🎂', '🥗', '🍝', '🧁'].map((emoji, index) => (
            <motion.div
              key={index}
              className="absolute text-3xl md:text-5xl will-change-transform"
              animate={{
                x: [0, Math.sin(index) * 80, 0],
                y: [0, Math.cos(index) * 80, 0],
                rotate: [0, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 8 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.6
              }}
              style={{
                left: `${10 + (index * 18)}%`,
                top: `${20 + (index % 3) * 25}%`
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Branding Section with Horizontal Layout */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-28 items-center min-h-screen">
            
            {/* Left Side - Brand Identity */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              {/* Chef Icon */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 100 }}
                className="mb-2 lg:mb-8 "
              >
                <div className="text-3xl md:text-4xl drop-shadow-2xl">👨‍🍳</div>
              </motion.div>

              {/* MD Typography Animation */}
              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.6, type: "spring" }}
                className="mb-8"
              >
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <motion.span 
                    className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(168, 85, 247, 0.5)",
                        "0 0 40px rgba(236, 72, 153, 0.7)",
                        "0 0 20px rgba(168, 85, 247, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    MD
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-xl md:text-2xl font-bold text-yellow-400"
                  >
                    <motion.span
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 2, 0, -2, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ✨
                    </motion.span>
                  </motion.div>
                </div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 1 }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                >
                  CELEBRATIONS
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="text-sm md:text-base lg:text-lg text-cyan-400 font-medium italic mb-3"
                >
                  Where Every Plate Tells a Story
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 1 }}
                  className="text-xs md:text-sm text-gray-400"
                >
                  - Manoj Dagriya
                </motion.div>
              </motion.div>

              {/* Special Typography Description */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="space-y-4 mb-10"
              >
                {/* First Line with Typography Style */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.p 
                    className="text-lg md:text-xl lg:text-2xl font-black text-center lg:text-left leading-tight"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      background: "linear-gradient(90deg, #f3f4f6, #fbbf24, #ec4899, #8b5cf6, #06b6d4, #f3f4f6)",
                      backgroundSize: "400% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                  >
                    शादी-विवाह का{" "}
                    <motion.span 
                      className="relative inline-block"
                      animate={{
                        textShadow: [
                          "0 0 20px rgba(251, 191, 36, 0.8)",
                          "0 0 40px rgba(251, 191, 36, 1)",
                          "0 0 60px rgba(251, 191, 36, 0.8)",
                          "0 0 20px rgba(251, 191, 36, 0.8)"
                        ],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{
                        background: "linear-gradient(45deg, #fbbf24, #f59e0b, #d97706)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}
                    >
                      ULTIMATE
                    </motion.span>{" "}
                    सोल्यूशन
                  </motion.p>
                </motion.div>

                {/* Second Line with Typography Style */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.p 
                    className="text-base md:text-lg lg:text-xl font-bold text-center lg:text-left leading-relaxed max-w-2xl"
                    style={{
                      background: "linear-gradient(90deg, #d1d5db, #d1d5db)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                  >
                    जहाँ मिलता है{" "}
                    <motion.span 
                      className="relative inline-block font-black"
                      animate={{
                        textShadow: [
                          "0 0 15px rgba(236, 72, 153, 0.6)",
                          "0 0 30px rgba(236, 72, 153, 0.9)",
                          "0 0 15px rgba(236, 72, 153, 0.6)"
                        ],
                        scale: [1, 1.03, 1]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                      style={{
                        background: "linear-gradient(135deg, #ec4899, #be185d, #9d174d)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}
                    >
                      ROYAL खाना
                    </motion.span>{" "}
                    और{" "}
                    <motion.span 
                      className="relative inline-block font-black"
                      animate={{
                        textShadow: [
                          "0 0 15px rgba(139, 92, 246, 0.6)",
                          "0 0 30px rgba(139, 92, 246, 0.9)",
                          "0 0 15px rgba(139, 92, 246, 0.6)"
                        ],
                        scale: [1, 1.03, 1]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                      style={{
                        background: "linear-gradient(135deg, #8b5cf6, #7c3aed, #6d28d9)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}
                    >
                      FILMY डेकोरेशन
                    </motion.span>
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm md:text-base px-6 md:px-8 py-2 md:py-3 rounded-full shadow-xl border border-yellow-400/40 relative overflow-hidden group transition-all duration-300">
                    <Link to="/services" className="relative z-10 flex items-center gap-2">
                      <span>🔥 BOOK करें अभी</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black text-sm md:text-base px-6 md:px-8 py-2 md:py-3 rounded-full backdrop-blur-sm bg-white/5 shadow-xl transition-all duration-300">
                    <Link to="/contact" className="flex items-center gap-2">📞 CALL करें</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Stats Grid */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 2.0 }}
              className="flex items-center justify-center"
            >
              <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-lg w-full">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 2.2 + (index * 0.1), duration: 0.8 }}
                    whileHover={{ scale: 1.1, y: -10, rotateY: 10 }}
                    className="relative group cursor-pointer perspective-1000"
                  >
                    <div className={`bg-gradient-to-br ${stat.color} p-6 md:p-8 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden h-full transition-all duration-500 transform-style-preserve-3d`}>
                      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                      <div className="relative z-10 text-center">
                        <motion.div 
                          className="text-4xl md:text-5xl mb-3"
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0, -5, 0]
                          }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {stat.icon}
                        </motion.div>
                        <div className="text-2xl md:text-3xl font-black text-white mb-2">{stat.number}</div>
                        <div className="text-sm md:text-base text-white/90 font-medium leading-tight">{stat.label}</div>
                      </div>
                      
                      {/* Sparkle effects */}
                      <motion.div
                        animate={{
                          scale: [0, 1, 0],
                          rotate: [0, 180, 360],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.4 + 1
                        }}
                        className="absolute top-2 right-2 text-yellow-300 text-lg"
                      >
                        ✨
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Professional scroll indicator */}
        <motion.div
          animate={{ 
            y: [0, 8, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-30"
        >
          <div className="w-6 md:w-8 h-10 md:h-12 border-2 border-yellow-400 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm bg-white/5 shadow-xl">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 md:w-2 h-3 md:h-4 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mt-1.5 md:mt-2"
            />
          </div>
          <p className="text-xs text-yellow-400 mt-2 text-center font-medium">SCROLL</p>
        </motion.div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, purple 2px, transparent 2px), radial-gradient(circle at 75% 75%, pink 2px, transparent 2px)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl mb-6"
            >
              🍽️
            </motion.div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              हमारी विशेषताएं
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              आपके हर खुशी के मौके को बनाएं यादगार - स्वादिष्ट खाना और खूबसूरत सजावट
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "var(--shadow-elegant)"
                }}
                className="group perspective-1000"
              >
                <Card className="relative bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-800/80 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-5xl mb-6 text-center"
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-center text-white group-hover:text-purple-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-center mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * featureIndex }}
                          className="flex items-center text-sm text-gray-400"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="mt-6"
                    >
                      <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full border-0">
                        <Link to="/services">विस्तार से देखें</Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-800 via-purple-900/30 to-slate-800 relative">
        {/* Animated background elements */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-xl"
        />
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              हमारे खुश ग्राहक
            </h2>
            <p className="text-gray-300 text-lg">
              सुनिए क्या कहते हैं हमारे संतुष्ट ग्राहक
            </p>
          </motion.div>

          <div className="w-full">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 border border-purple-500/30 shadow-2xl p-8 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="text-6xl mb-6">💬</div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-2xl text-yellow-500"
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonials[activeTestimonial].comment}"
                  </blockquote>
                  <div className="text-lg font-semibold text-purple-400">
                    - {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonials[activeTestimonial].event} • {testimonials[activeTestimonial].location}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-purple-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simple Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            आज ही संपर्क करें
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            आपके सपनों की शादी के लिए हमसे बात करें
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full">
                <Link to="/contact">
                  📞 संपर्क करें
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-3 rounded-full">
                <Link to="/gallery">
                  📸 गैलरी देखें
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;