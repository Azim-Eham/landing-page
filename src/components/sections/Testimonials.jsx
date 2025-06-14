import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: "Azim Coffee Shop has become my daily ritual. The coffee is exceptional, and the atmosphere is perfect for both work and relaxation. The staff always remembers my order and greets me with a smile.",
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Coffee Enthusiast',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: "As someone who's traveled the world for coffee, I can confidently say Azim Coffee Shop serves some of the best espresso I've ever had. Their attention to detail is remarkable.",
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Local Business Owner',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: "This place has become our unofficial office space. The WiFi is fast, the coffee keeps us energized, and the cozy atmosphere sparks creativity. Couldn't ask for more!",
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Food Blogger',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: "Azim Coffee Shop doesn't just serve coffee; they create experiences. Every visit feels special, from the carefully crafted drinks to the warm, welcoming environment.",
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Student',
      image: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: "Found my perfect study spot! The background music is just right, the coffee keeps me focused, and the staff is incredibly friendly. It's become my second home.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the amazing people 
            who make our coffee shop a community.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <button onClick={prevTestimonial} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button onClick={nextTestimonial} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
            <ChevronRight className="h-6 w-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-6 right-6 text-amber-200">
                <Quote className="h-16 w-16" />
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <motion.div className="flex-shrink-0" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-amber-100"
                  />
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                  <motion.div className="flex justify-center md:justify-start space-x-1 mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </motion.div>

                  <motion.blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                    "{testimonials[currentIndex].text}"
                  </motion.blockquote>

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                    <div className="font-bold text-xl text-gray-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-amber-600 font-medium">
                      {testimonials[currentIndex].role}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-amber-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>

        <motion.div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          {[
            { number: '50,000+', label: 'Happy Customers' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '1M+', label: 'Cups Served' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-2xl p-8 shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
