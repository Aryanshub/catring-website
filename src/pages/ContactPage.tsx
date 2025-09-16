import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useToast } from "../components/ui/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    event: "",
    date: "",
    guests: "",
    budget: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "🎉 संदेश भेजा गया!",
      description: "हम 24 घंटे में आपसे संपर्क करेंगे। धन्यवाद!",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      event: "",
      date: "",
      guests: "",
      budget: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📱",
      title: "फोन नंबर",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      action: () => window.open('tel:+919876543210')
    },
    {
      icon: "📧", 
      title: "ईमेल",
      details: ["manoj@mdcelebrations.com", "info@mdcelebrations.com"],
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      action: () => window.open('mailto:manoj@mdcelebrations.com')
    },
    {
      icon: "📍",
      title: "पता",
      details: ["MD Celebrations", "Madhya Pradesh, India"],
      color: "from-purple-500 to-pink-500", 
      bgGradient: "from-purple-500/10 to-pink-500/10",
      action: () => window.open('https://maps.google.com')
    },
    {
      icon: "🕒",
      title: "समय",
      details: ["24/7 उपलब्ध", "सभी दिन सेवा"],
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      action: null
    }
  ];

  const services = [
    { name: "शादी-विवाह", icon: "💒", popular: true },
    { name: "बर्थडे पार्टी", icon: "🎉", popular: false },
    { name: "कॉर्पोरेट इवेंट", icon: "🏢", popular: false },
    { name: "एनिवर्सरी", icon: "💕", popular: false },
    { name: "एंगेजमेंट", icon: "💍", popular: true },
    { name: "अन्य", icon: "🎭", popular: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 relative overflow-hidden">
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

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
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
            📞
          </motion.div>
          
          <h1 className="text-4xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            संपर्क करें
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            आपके सपनों की डेकोरेशन के लिए आज ही हमसे जुड़ें और बनाएं यादगार पल
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 xl:order-1"
          >
            <Card className="bg-slate-800/60 backdrop-blur-md border border-purple-500/30 shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/20">
                <CardTitle className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center">
                  <span className="mr-3 text-3xl">✨</span>
                  अपना इवेंट बुक करें
                </CardTitle>
                <p className="text-gray-300 mt-2">फॉर्म भरें और पाएं फ्री कंसल्टेशन</p>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-gray-300 font-medium mb-2">
                        आपका नाम *
                      </label>
                      <Input
                        name="name"
                        placeholder="पूरा नाम लिखें"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-purple-500/30 focus:border-purple-400 text-white placeholder-gray-400 h-12"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-gray-300 font-medium mb-2">
                        फोन नंबर *
                      </label>
                      <Input
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-purple-500/30 focus:border-purple-400 text-white placeholder-gray-400 h-12"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-gray-300 font-medium mb-2">
                      ईमेल आईडी
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="yourname@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-700/50 border-purple-500/30 focus:border-purple-400 text-white placeholder-gray-400 h-12"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-gray-300 font-medium mb-2">
                      इवेंट का प्रकार *
                    </label>
                    <select
                      name="event"
                      value={formData.event}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 bg-slate-700/50 border border-purple-500/30 focus:border-purple-400 rounded-md focus:outline-none text-white"
                    >
                      <option value="">चुनें...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.name}>
                          {service.icon} {service.name} {service.popular ? "⭐" : ""}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-gray-300 font-medium mb-2">
                        इवेंट की तारीख
                      </label>
                      <Input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-purple-500/30 focus:border-purple-400 text-white h-12"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label className="block text-gray-300 font-medium mb-2">
                        मेहमानों की संख्या
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-slate-700/50 border border-purple-500/30 focus:border-purple-400 rounded-md focus:outline-none text-white"
                      >
                        <option value="">चुनें...</option>
                        <option value="50-100">50-100 लोग</option>
                        <option value="100-200">100-200 लोग</option>
                        <option value="200-500">200-500 लोग</option>
                        <option value="500+">500+ लोग</option>
                      </select>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-gray-300 font-medium mb-2">
                      बजट रेंज
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full h-12 px-4 bg-slate-700/50 border border-purple-500/30 focus:border-purple-400 rounded-md focus:outline-none text-white"
                    >
                      <option value="">चुनें...</option>
                      <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                      <option value="1L-2L">₹1,00,000 - ₹2,00,000</option>
                      <option value="2L-5L">₹2,00,000 - ₹5,00,000</option>
                      <option value="5L+">₹5,00,000+</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-gray-300 font-medium mb-2">
                      अपनी जरूरतों के बारे में बताएं
                    </label>
                    <Textarea
                      name="message"
                      placeholder="कैसी डेकोरेशन चाहिए? कोई स्पेशल रिक्वेस्ट? यहाँ लिखें..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-slate-700/50 border-purple-500/30 focus:border-purple-400 text-white placeholder-gray-400 resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg h-14 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                      size="lg"
                    >
                      <span className="mr-2">🚀</span>
                      संदेश भेजें और फ्री कंसल्टेशन पाएं
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 xl:order-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={info.action ? () => info.action!() : undefined}
                className={`${info.action ? 'cursor-pointer' : ''} group`}
              >
                <Card className={`bg-gradient-to-br ${info.bgGradient} backdrop-blur-md border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden`}>
                  <CardContent className="p-6 lg:p-8 relative">
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="flex items-center space-x-4 relative z-10">
                      <motion.div 
                        className={`text-4xl lg:text-5xl p-3 rounded-full bg-gradient-to-r ${info.color} text-white shadow-lg`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                      >
                        {info.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-base lg:text-lg">
                            {detail}
                          </p>
                        ))}
                      </div>
                      {info.action && (
                        <motion.div
                          className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                          whileHover={{ scale: 1.2 }}
                        >
                          →
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-purple-500/30 shadow-xl relative overflow-hidden"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-black mb-6 text-white flex items-center">
                  <span className="mr-3 text-2xl">⚡</span>
                  तुरंत संपर्क करें
                </h3>
                <div className="space-y-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => window.open('https://wa.me/919876543210?text=नमस्ते! मुझे MD Celebrations की सर्विस के बारे में जानकारी चाहिए।', '_blank')}
                    >
                      <span className="mr-2 text-xl">💬</span>
                      WhatsApp पर चैट करें
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline"
                      className="w-full border-2 border-purple-400 text-white hover:bg-purple-400 hover:text-purple-900 font-bold text-lg h-14 rounded-xl bg-transparent backdrop-blur-sm transition-all duration-300"
                      onClick={() => window.open('tel:+919876543210')}
                    >
                      <span className="mr-2 text-xl">📞</span>
                      डायरेक्ट कॉल करें
                    </Button>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <p className="text-gray-300 text-sm">
                    <span className="inline-block mr-1">⏰</span>
                    24/7 उपलब्ध • फ्री कंसल्टेशन • तुरंत रिस्पॉन्स
                  </p>
                </motion.div>
              </div>
            </motion.div>

           
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;