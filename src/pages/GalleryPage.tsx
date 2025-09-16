import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageLoadingStates, setImageLoadingStates] = useState<{[key: number]: boolean}>({});

  const categories = [
    { id: "all", label: "सभी", icon: "🎨", gradient: "from-purple-500 to-pink-500" },
    { id: "wedding", label: "शादी", icon: "💒", gradient: "from-rose-500 to-pink-500" },
    { id: "party", label: "पार्टी", icon: "🎉", gradient: "from-orange-500 to-yellow-500" },
    { id: "fabric", label: "फैब्रिक आर्ट", icon: "🎭", gradient: "from-blue-500 to-cyan-500" },
    { id: "stage", label: "स्टेज", icon: "🎪", gradient: "from-green-500 to-emerald-500" },
    { id: "videos", label: "वीडियो", icon: "🎬", gradient: "from-red-500 to-purple-500" }
  ];

  // Enhanced gallery data with real images from public folder
  const galleryItems = [
     { 
      id: 1, 
      category: "wedding", 
      type: "image", 
      title: "मनोज जी का पोर्ट्रेट", 
      description: "MD Celebrations के फाउंडर मनोज जी",
      src: "/manoj.jpg",
      alt: "मनोज जी का पोर्ट्रेट",
      placeholder: "👨‍💼"
    },
   
    { 
      id: 2, 
      category: "party", 
      type: "image", 
      title: "एलिगेंट पार्टी सेटअप", 
      description: "रंगबिरंगी थीम के साथ खुशियों भरा माहौल",
      src: "/m2.jpg",
      alt: "एलिगेंट पार्टी सेटअप",
      placeholder: "🎉"
    },
    { 
      id: 3, 
      category: "fabric", 
      type: "image", 
      title: "कस्टम फैब्रिक आर्ट", 
      description: "हैंडमेड फैब्रिक डिजाइन की कलाकारी",
      src: "/m3.jpg",
      alt: "कस्टम फैब्रिक आर्ट",
      placeholder: "🎭"
    },
    { 
      id: 4, 
      category: "stage", 
      type: "image", 
      title: "कॉन्सर्ट स्टेज", 
      description: "प्रोफेशनल स्टेज और लाइटिंग सेटअप",
      src: "/m4.jpg",
      alt: "कॉन्सर्ट स्टेज",
      placeholder: "🎪"
    },
    { 
      id: 5, 
      category: "wedding", 
      type: "image", 
      title: "ट्रेडिशनल मंडप", 
      description: "पारंपरिक भारतीय स्टाइल में सजावट",
      src: "/m5.jpg",
      alt: "ट्रेडिशनल मंडप",
      placeholder: "💒"
    },
    { 
      id: 6, 
      category: "party", 
      type: "image", 
      title: "कॉर्पोरेट इवेंट", 
      description: "एलिगेंट और प्रोफेशनल व्यवस्था",
      src: "/m6.jpg",
      alt: "कॉर्पोरेट इवेंट",
      placeholder: "🎉"
    },
    { 
      id: 7, 
      category: "wedding", 
      type: "image", 
      title: "लग्जरी रिसेप्शन", 
      description: "शाही अंदाज में रिसेप्शन की व्यवस्था",
      src: "/m8.jpg",
      alt: "लग्जरी रिसेप्शन",
      placeholder: "💒"
    },
    { 
      id: 8, 
      category: "fabric", 
      type: "image", 
      title: "फ्लोरल आर्ट", 
      description: "फूलों से बनी खूबसूरत कलाकृति",
      src: "/m9.jpg",
      alt: "फ्लोरल आर्ट",
      placeholder: "🎭"
    },
    { 
      id: 9, 
      category: "stage", 
      type: "image", 
      title: "ग्रैंड डेकोरेशन", 
      description: "बड़े इवेंट के लिए ग्रैंड डेकोरेशन",
      src: "/m11.jpg",
      alt: "ग्रैंड डेकोरेशन",
      placeholder: "🎪"
    },
   
     { 
      id: 10, 
      category: "wedding", 
      type: "image", 
      title: "रॉयल वेडिंग डेकोरेशन", 
      description: "शानदार फैब्रिक के साथ मंडप डिजाइन",
      src: "/m1.jpg",
      alt: "रॉयल वेडिंग डेकोरेशन",
      placeholder: "💒"
    },
    { 
      id: 11, 
      category: "videos", 
      type: "video", 
      title: "वेडिंग हाइलाइट्स", 
      description: "खूबसूरत शादी के पलों का वीडियो",
      src: "/mv3.mp4",
      thumbnail: "/m1.jpg",
      alt: "वेडिंग हाइलाइट्स वीडियो",
      placeholder: "🎬"
    },
    { 
      id: 12, 
      category: "videos", 
      type: "video", 
      title: "सेटअप टाइमलैप्स", 
      description: "डेकोरेशन सेटअप की पूरी प्रक्रिया",
      src: "/mv4.mp4",
      thumbnail: "/m2.jpg",
      alt: "सेटअप टाइमलैप्स वीडियो",
      placeholder: "�"
    }
  ];

  const reviews = [
    {
      name: "राजेश शर्मा",
      rating: 5,
      comment: "बहुत ही शानदार काम किया है मनोज जी ने। हमारी शादी की डेकोरेशन देखकर सभी मेहमान खुश थे।",
      event: "शादी डेकोरेशन",
      avatar: "👨",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "प्रिया गुप्ता", 
      rating: 5,
      comment: "टाइम पर काम पूरा हुआ और क्वालिटी भी बेहतरीन थी। बहुत खुश हैं सर्विस से।",
      event: "बर्थडे पार्टी",
      avatar: "👩",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "अनिल वर्मा",
      rating: 5,
      comment: "प्रोफेशनल टीम और बहुत ही रीजनेबल रेट्स। जरूर रिकमेंड करूंगा।",
      event: "कॉर्पोरेट इवेंट",
      avatar: "👨‍💼",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (item: any) => {
    setSelectedMedia(item);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedMedia(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 relative overflow-hidde mt-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-6xl lg:text-8xl mb-6"
          >
            📸
          </motion.div>
          
          <h1 className="text-4xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            हमारी गैलरी
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            हमारे कुछ बेहतरीन काम देखें और अनुभव करें हमारी कलाकारी की जादुगरी
          </p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12 lg:mb-16"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id 
                    ? `bg-gradient-to-r ${category.gradient} text-white border-none shadow-xl` 
                    : "border-purple-500/30 text-gray-300 hover:border-purple-400 hover:text-white bg-slate-800/50 backdrop-blur-sm"
                } font-bold text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3 rounded-full transition-all duration-300`}
              >
                <span className="mr-2 text-lg">{category.icon}</span>
                {category.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Gallery Grid */}
        <motion.div layout className="mb-16 lg:mb-20">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => openLightbox(item)}
                  className="cursor-pointer group"
                >
                  <Card className="overflow-hidden bg-slate-800/60 backdrop-blur-md border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 shadow-xl hover:shadow-2xl">
                    <div className="aspect-square relative overflow-hidden">
                      {/* Placeholder with gradient background for now */}
                      <div className={`w-full h-full bg-gradient-to-br ${
                        item.category === "wedding" ? "from-rose-500/20 to-pink-500/20" :
                        item.category === "party" ? "from-orange-500/20 to-yellow-500/20" :
                        item.category === "fabric" ? "from-blue-500/20 to-cyan-500/20" :
                        item.category === "stage" ? "from-green-500/20 to-emerald-500/20" :
                        "from-purple-500/20 to-pink-500/20"
                      } flex items-center justify-center relative overflow-hidden`}>
                        
                        {/* Real Images and Videos */}
                        {item.type === "image" ? (
                          <div className="w-full h-full relative">
                            {imageLoadingStates[item.id] && (
                              <div className="absolute inset-0 flex items-center justify-center bg-slate-700/50">
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full"
                                />
                              </div>
                            )}
                            <img 
                              src={item.src} 
                              alt={item.alt}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                              onLoad={() => setImageLoadingStates(prev => ({...prev, [item.id]: false}))}
                              onLoadStart={() => setImageLoadingStates(prev => ({...prev, [item.id]: true}))}
                              onError={(e) => {
                                // Fallback to placeholder if image fails to load
                                const target = e.currentTarget as HTMLImageElement;
                                target.style.display = 'none';
                                setImageLoadingStates(prev => ({...prev, [item.id]: false}));
                                if (target.nextElementSibling) {
                                  (target.nextElementSibling as HTMLElement).style.display = 'flex';
                                }
                              }}
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full relative">
                            {imageLoadingStates[item.id] && (
                              <div className="absolute inset-0 flex items-center justify-center bg-slate-700/50 z-10">
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full"
                                />
                              </div>
                            )}
                            <img 
                              src={item.thumbnail} 
                              alt={item.alt}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                              onLoad={() => setImageLoadingStates(prev => ({...prev, [item.id]: false}))}
                              onLoadStart={() => setImageLoadingStates(prev => ({...prev, [item.id]: true}))}
                            />
                            <motion.div 
                              className="absolute inset-0 bg-black/40 flex items-center justify-center"
                              whileHover={{ opacity: 0.8 }}
                            >
                              <motion.div 
                                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                              </motion.div>
                            </motion.div>
                          </div>
                        )}
                        
                        {/* Fallback placeholder content (hidden by default) */}
                        <div className="text-center z-10 hidden">
                          <motion.div 
                            className="text-5xl lg:text-6xl mb-2"
                            animate={{ 
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                          >
                            {item.placeholder}
                          </motion.div>
                        </div>
                        
                        {/* Hover overlay */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                      </div>
                    </div>
                    
                    <CardContent className="p-4 lg:p-6">
                      <h3 className="text-lg lg:text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm lg:text-base leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Category badge */}
                      <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        <span className="mr-1">{item.placeholder}</span>
                        {categories.find(cat => cat.id === item.category)?.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Reviews Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-black text-center mb-12 lg:mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            ग्राहकों की खुशी
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="p-6 lg:p-8 bg-slate-800/60 backdrop-blur-md border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${review.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <CardContent className="p-0 relative z-10">
                    <div className="flex items-center mb-4 lg:mb-6">
                      <motion.div 
                        className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${review.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl lg:text-2xl shadow-lg`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                      >
                        {review.avatar}
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-white text-lg lg:text-xl group-hover:text-purple-300 transition-colors duration-300">
                          {review.name}
                        </h4>
                        <motion.div 
                          className="flex text-yellow-400 text-lg lg:text-xl"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                        >
                          {Array.from({ length: review.rating }, (_, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + 0.7 + i * 0.1 }}
                              whileHover={{ scale: 1.2 }}
                            >
                              ⭐
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                    
                    <motion.p 
                      className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-4 lg:mb-6 italic text-base lg:text-lg leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      "{review.comment}"
                    </motion.p>
                    
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      <span className="mr-2">🎯</span>
                      {review.event}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {isLightboxOpen && selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="max-w-4xl max-h-[90vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-purple-300 transition-colors text-2xl z-10"
                >
                  ✕
                </button>
                
                {selectedMedia.type === "video" ? (
                  <div className="bg-black rounded-lg overflow-hidden">
                    <video
                      controls
                      autoPlay
                      className="w-full h-auto max-h-[80vh]"
                      poster={selectedMedia.thumbnail}
                    >
                      <source src={selectedMedia.src} type="video/mp4" />
                      Video playback not supported
                    </video>
                  </div>
                ) : (
                  <div className="bg-slate-800 rounded-lg overflow-hidden">
                    {/* Placeholder for image */}
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-6xl">
                      {selectedMedia.placeholder}
                    </div>
                    {/* <img
                      src={selectedMedia.src}
                      alt={selectedMedia.alt}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    /> */}
                  </div>
                )}
                
                <div className="mt-4 text-white text-center">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">{selectedMedia.title}</h3>
                  <p className="text-gray-300">{selectedMedia.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
              📞
            </motion.div>
            
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-white leading-tight">
              अपना ड्रीम इवेंट बनाने के लिए तैयार हैं?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              हमसे जुड़ें और बनाएं अपना इवेंट यादगार!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg lg:text-xl px-8 lg:px-10 py-4 lg:py-5 rounded-full shadow-xl">
                  <a href="/contact" className="flex items-center space-x-2">
                    <span>💬</span>
                    <span>अभी बात करें</span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold text-lg lg:text-xl px-8 lg:px-10 py-4 lg:py-5 rounded-full">
                  <a href="/services" className="flex items-center space-x-2">
                    <span>🎯</span>
                    <span>सर्विसेज देखें</span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeLightbox}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                ✕
              </motion.button>

              {/* Content */}
              <div className="w-full h-full flex flex-col lg:flex-row gap-6">
                {/* Media Container */}
                <div className="flex-1 flex items-center justify-center">
                  {selectedMedia.type === "image" ? (
                    <motion.img
                      src={selectedMedia.src}
                      alt={selectedMedia.alt}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <motion.video
                      src={selectedMedia.src}
                      controls
                      autoPlay
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      आपका ब्राउज़र वीडियो प्लेबैक का समर्थन नहीं करता।
                    </motion.video>
                  )}
                </div>

                {/* Info Panel */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="lg:w-80 bg-slate-800/80 backdrop-blur-md rounded-lg p-6 border border-purple-500/30"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{selectedMedia.placeholder}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {selectedMedia.title}
                      </h3>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {categories.find(cat => cat.id === selectedMedia.category)?.label}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selectedMedia.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>📁</span>
                      <span>Type: {selectedMedia.type === "image" ? "फोटो" : "वीडियो"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>🏷️</span>
                      <span>Category: {categories.find(cat => cat.id === selectedMedia.category)?.label}</span>
                    </div>
                  </div>

                  <motion.div
                    className="mt-6 pt-6 border-t border-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button
                      onClick={closeLightbox}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-full"
                    >
                      बंद करें
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;