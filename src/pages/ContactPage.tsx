import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useToast } from "../components/ui/use-toast";

interface FormData {
  name: string;
  phone: string;
  email: string;
  event: string;
  date: string;
  guests: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  event?: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    event: "",
    date: "",
    guests: "",
    budget: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "नाम आवश्यक है";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "नाम कम से कम 2 अक्षर का होना चाहिए";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "फोन नंबर आवश्यक है";
    } else if (!/^[+]?[0-9]{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "सही फोन नंबर डालें";
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "सही ईमेल एड्रेस डालें";
    }
    
    if (!formData.event) {
      newErrors.event = "इवेंट का प्रकार चुनें";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "❌ फॉर्म में गलती",
        description: "कृपया सभी आवश्यक फील्ड सही तरीके से भरें।",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create WhatsApp message
      const whatsappMessage = `नमस्ते! MD Celebrations से संपर्क:\n\n` +
        `नाम: ${formData.name}\n` +
        `फोन: ${formData.phone}\n` +
        `${formData.email ? `ईमेल: ${formData.email}\n` : ''}` +
        `इवेंट: ${formData.event}\n` +
        `${formData.date ? `तारीख: ${formData.date}\n` : ''}` +
        `${formData.guests ? `मेहमान: ${formData.guests}\n` : ''}` +
        `${formData.budget ? `बजट: ${formData.budget}\n` : ''}` +
        `${formData.message ? `मैसेज: ${formData.message}` : ''}`;
      
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      toast({
        title: "🎉 संदेश भेजा गया!",
        description: "हम 24 घंटे में आपसे संपर्क करेंगे। धन्यवाद!",
      });
      
      // Clear form
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
      setErrors({});
      
      // Open WhatsApp after successful submission
      setTimeout(() => {
        window.open(`https://wa.me/917470533001?text=${encodedMessage}`, '_blank');
      }, 1000);
      
    } catch (error) {
      toast({
        title: "❌ एरर हुआ है",
        description: "कुछ गलत हुआ है। कृपया फिर से कोशिश करें।",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
      details: ["+91 74705 33001", "+91 7489020205"],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      action: () => window.open('tel:+917470533001')
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 relative overflow-hidden mt-10">
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

      <div className="container mx-auto px-4 py-8 lg:py-12 xl:py-20 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16 xl:mb-20"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-5xl md:text-6xl lg:text-8xl mb-4 lg:mb-6"
          >
            📞
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4 lg:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            संपर्क करें
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            आपके सपनों की डेकोरेशन के लिए आज ही हमसे जुड़ें और बनाएं यादगार पल
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 lg:gap-12 xl:gap-16">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 xl:order-1 xl:col-span-3"
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-gray-300 font-medium mb-2 text-sm lg:text-base">
                        आपका नाम *
                      </label>
                      <Input
                        name="name"
                        placeholder="पूरा नाम लिखें"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`bg-slate-700/50 border-purple-500/30 focus:border-purple-400 text-white placeholder-gray-400 h-12 lg:h-14 text-base ${errors.name ? 'border-red-500 focus:border-red-400' : ''}`}
                      />
                      {errors.name && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-1"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-gray-300 font-medium mb-2 text-sm lg:text-base">
                        फोन नंबर *
                      </label>
                      <Input
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={`bg-slate-700/50 border-purple-500/30 focus:border-purple-400 text-white placeholder-gray-400 h-12 lg:h-14 text-base ${errors.phone ? 'border-red-500 focus:border-red-400' : ''}`}
                      />
                      {errors.phone && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-1"
                        >
                          {errors.phone}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-gray-300 font-medium mb-2 text-sm lg:text-base">
                      ईमेल आईडी
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="yourname@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-slate-700/50 border-purple-500/30 focus:border-purple-400 text-white placeholder-gray-400 h-12 lg:h-14 text-base ${errors.email ? 'border-red-500 focus:border-red-400' : ''}`}
                    />
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-gray-300 font-medium mb-2 text-sm lg:text-base">
                      इवेंट का प्रकार *
                    </label>
                    <select
                      name="event"
                      value={formData.event}
                      onChange={handleChange}
                      required
                      className={`w-full h-12 lg:h-14 px-4 bg-slate-700/50 border border-purple-500/30 focus:border-purple-400 rounded-md focus:outline-none text-white text-base ${errors.event ? 'border-red-500 focus:border-red-400' : ''}`}
                    >
                      <option value="">चुनें...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.name} className="bg-slate-800">
                          {service.icon} {service.name} {service.popular ? "⭐" : ""}
                        </option>
                      ))}
                    </select>
                    {errors.event && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.event}
                      </motion.p>
                    )}
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-gray-300 font-medium mb-2 text-sm lg:text-base">
                        इवेंट की तारीख
                      </label>
                      <Input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="bg-slate-700/50 border-purple-500/30 focus:border-purple-400 text-white h-12 lg:h-14 text-base"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label className="block text-gray-300 font-medium mb-2 text-sm lg:text-base">
                        मेहमानों की संख्या
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full h-12 lg:h-14 px-4 bg-slate-700/50 border border-purple-500/30 focus:border-purple-400 rounded-md focus:outline-none text-white text-base"
                      >
                        <option value="">चुनें...</option>
                        <option value="50-100" className="bg-slate-800">50-100 लोग</option>
                        <option value="100-200" className="bg-slate-800">100-200 लोग</option>
                        <option value="200-500" className="bg-slate-800">200-500 लोग</option>
                        <option value="500+" className="bg-slate-800">500+ लोग</option>
                      </select>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-gray-300 font-medium mb-2 text-sm lg:text-base">
                      बजट रेंज
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full h-12 lg:h-14 px-4 bg-slate-700/50 border border-purple-500/30 focus:border-purple-400 rounded-md focus:outline-none text-white text-base"
                    >
                      <option value="">चुनें...</option>
                      <option value="25k-50k" className="bg-slate-800">₹25,000 - ₹50,000</option>
                      <option value="50k-1L" className="bg-slate-800">₹50,000 - ₹1,00,000</option>
                      <option value="1L-2L" className="bg-slate-800">₹1,00,000 - ₹2,00,000</option>
                      <option value="2L-5L" className="bg-slate-800">₹2,00,000 - ₹5,00,000</option>
                      <option value="5L+" className="bg-slate-800">₹5,00,000+</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-gray-300 font-medium mb-2 text-sm lg:text-base">
                      अपनी जरूरतों के बारे में बताएं
                    </label>
                    <Textarea
                      name="message"
                      placeholder="कैसी डेकोरेशन चाहिए? कोई स्पेशल रिक्वेस्ट? यहाँ लिखें..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-slate-700/50 border-purple-500/30 focus:border-purple-400 text-white placeholder-gray-400 resize-none text-base"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold text-base lg:text-lg h-14 lg:h-16 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:cursor-not-allowed"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="mr-2 text-xl"
                          >
                            ⏳
                          </motion.div>
                          भेजा जा रहा है...
                        </>
                      ) : (
                        <>
                          <span className="mr-2 text-xl">🚀</span>
                          संदेश भेजें और फ्री कंसल्टेशन पाएं
                        </>
                      )}
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
            className="order-1 xl:order-2 xl:col-span-2 space-y-4 lg:space-y-6"
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
                <Card className={`bg-gradient-to-br ${info.bgGradient} backdrop-blur-md border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden ${info.action ? 'active:scale-95' : ''}`}>
                  <CardContent className="p-4 lg:p-6 xl:p-8 relative">
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="flex items-center space-x-3 lg:space-x-4 relative z-10">
                      <motion.div 
                        className={`text-3xl lg:text-4xl xl:text-5xl p-2 lg:p-3 rounded-full bg-gradient-to-r ${info.color} text-white shadow-lg flex-shrink-0`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {info.icon}
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white mb-1 lg:mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm lg:text-base xl:text-lg truncate">
                            {detail}
                          </p>
                        ))}
                      </div>
                      {info.action && (
                        <motion.div
                          className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300 text-xl lg:text-2xl flex-shrink-0"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.8 }}
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
              className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 backdrop-blur-md p-4 lg:p-6 xl:p-8 rounded-2xl border border-purple-500/30 shadow-xl relative overflow-hidden"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl lg:text-2xl font-black mb-4 lg:mb-6 text-white flex items-center">
                  <span className="mr-2 lg:mr-3 text-xl lg:text-2xl">⚡</span>
                  तुरंत संपर्क करें
                </h3>
                <div className="space-y-3 lg:space-y-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-base lg:text-lg h-12 lg:h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
                      onClick={() => window.open('https://wa.me/917470533001?text=नमस्ते! मुझे MD Celebrations की सर्विस के बारे में जानकारी चाहिए।', '_blank')}
                    >
                      <span className="mr-2 text-lg lg:text-xl">💬</span>
                      WhatsApp पर चैट करें
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline"
                      className="w-full border-2 border-purple-400 text-white hover:bg-purple-400 hover:text-purple-900 font-bold text-base lg:text-lg h-12 lg:h-14 rounded-xl bg-transparent backdrop-blur-sm transition-all duration-300 active:scale-95"
                      onClick={() => window.open('tel:+919876543210')}
                    >
                      <span className="mr-2 text-lg lg:text-xl">📞</span>
                      डायरेक्ट कॉल करें
                    </Button>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mt-4 lg:mt-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <p className="text-gray-300 text-xs lg:text-sm">
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