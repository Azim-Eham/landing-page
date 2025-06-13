import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Coffee } from 'lucide-react';

const About = () => {

  const features = [
    {
      icon: <Coffee className="h-8 w-8" />,
      title: 'Premium Beans',
      description: 'Sourced from the finest coffee farms around the world',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Made with Love',
      description: 'Every cup is crafted with passion and attention to detail',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in coffee and customer service',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Focused',
      description: 'Supporting local farmers and bringing people together',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Story & Mission
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2015, Azim Coffee Shop began as a dream to create a space where 
                exceptional coffee meets genuine community. Our journey started with a 
                simple belief: that every cup of coffee should tell a story.
              </p>

              <p>
                We partner directly with coffee farmers from around the world, ensuring 
                fair trade practices while bringing you the most exquisite flavors. 
                From the mountains of Ethiopia to the valleys of Colombia, each bean 
                is carefully selected and roasted to perfection.
              </p>

              <p>
                More than just a coffee shop, we're a gathering place for dreamers, 
                thinkers, and coffee lovers. Whether you're starting your day, meeting 
                a friend, or finding inspiration, we're here to fuel your journey.
              </p>
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More About Us
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/298366/pexels-photo-298366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Coffee shop interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">8+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 bg-amber-600 rounded-2xl shadow-xl p-6 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">50k+</div>
                <div className="text-sm opacity-90">Happy Customers</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl mb-4 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About