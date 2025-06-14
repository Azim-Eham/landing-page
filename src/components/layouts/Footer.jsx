import React from 'react'
import {motion} from 'framer-motion'
import {Coffee, Facebook, Twitter, Instagram, MapPin, Phone, Mail, Heart} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {icon: <Facebook size={20} />, href: '#', name: "Facebook"},
    {icon: <Instagram size={20} />, href: '#', name: "Instagram"},
    {icon: <Twitter size={20} />, href: '#', name: "Twitter"},
  ]

  const quickLinks =[
    {name: "Menu", href: "#menu"},
    {name: "About", href: "#about"},
    {name: "Reviews", href: "#reviews"},
    {name: "Contact", href: "#contact"},
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <footer className='bg-stone-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <motion.div
          className='lg:col-span-2'
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duaration: 0.6}}
          viewport={{once: true}}>
            <div className='flex items-center space-x-3 mb-6'>
              <Coffee className='h-10 w-10 text-amber-500' />
              <span className='text-2xl font-bold'>
                Azim Coffee Shop
              </span>
            </div>
            <p className='text-gray-300 mb-6 leading-relaxed max-w-md'>
              Where every sip tells a story. Join us for exceptional coffee,
              warm community, and moments that matter. Your neighborhood
              coffee destination since 2015.
            </p>

            <div className='space-y-3'>
              <div className='flex items-center space-x-3 text-gray-300'>
                <MapPin className='h-5 w-5 text-amber-500' />
                <span>123 Coffee Street, Downtown District</span>
              </div>
              <div className='flex items-center space-x-3 text-gray-300'>
                  <Phone className='h-5 w-5 text-amber-500' />
                  <span>0123456789</span>
              </div>
              <div className='flex items-center space-x-3 text-gray-300'>
                  <Mail className='h-5 w-5 text-amber-500' />
                  <span>xyz@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.1}}
          viewport={{once: true}}>
            <h3 className='text-lg font-semibold mb-6'>Quick Links</h3>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <li
                key={index}>
                  <motion.button
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-amber-500 transition-colors duration-200 block cursor-pointer"
                  whileHover={{ x: 5 }}>
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.2}}
          viewport={{once: true}}>
            <h3 className='text-lb font-semibold mb-6'>Opening Hours</h3>
            <div className='space-y-2 text-gray-300 mb-8'>
              <div className='flex justify-between'>
                <span>Mon - Fri</span>
                <span>06:00 AM - 09:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sat - Sun</span>
                <span>07:00 AM - 10:00 PM</span>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
              <div className='flex space-x-4'>
                {socialLinks.map((link, index) => (
                  <motion.a
                  key={index}
                  href={link.href}
                  className='bg-stone-800 hover:bg-amber-600 p-3 rounded-full transition-all duration-300 cursor-pointer'
                  whileHover={{scale: 1.1, y: -2}}
                  whileTap={{scale: 0.95}}
                  aria-label={link.name}>
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
        className='border-t border-stone-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.3}}
        viewport={{once: true}}>
          <div className='flex items-center space-x-2 text-gray-300 mb-4 md:mb-0'>
            <span>© 2024 Azim Coffee Shop. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span>for coffee lovers.</span>
          </div>

          <div className='flex space-x-6 text-sm text-gray-300'>
            <motion.a
            href='#'
            className="hover:text-amber-500 transition-colors duration-200"
            whileHover={{ y: -1 }}>
              Privacy Policy
            </motion.a>

            <motion.a
            href='#'
            className="hover:text-amber-500 transition-colors duration-200"
            whileHover={{ y: -1 }}>
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer