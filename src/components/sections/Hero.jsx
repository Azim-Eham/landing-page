import React from 'react'
import {motion} from 'framer-motion'
import {ArrowRight, Play} from 'lucide-react'

const Hero = () => {

  const scrollToMenu = () => {
    const element = document.querySelector('#menu');

    if(element){
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <section id='home'
    className='relative h-screen overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Coffee shop interior" 
        className='w-full h-full object-cover'/>
        <div className='absolute inset-0 bg-black/40'></div>
      </div>

      {/* Hero Content */}
      <div className='relative z-10 h-full flex items-center'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
            <div className='max-w-3xl'>
              <motion.h1
              className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}>
                Where Every Sip
                <span className='block text-amber-400'>
                  Tells a Story
                </span>
              </motion.h1>

              <motion.p
              className='text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed'
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.4}}>
                Experience the perfect blend of premium coffee, cozy atmosphere, and passionate craftsmanship at Azim Coffee Shop.
              </motion.p>

              <motion.div
              className='flex flex-col sm:flex-row gap-4'
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}>
                <motion.button
                onClick={scrollToMenu}
                className='group bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl cursor-pointer'
                whileHover={{scale: 1.05, y: -2}}
                whileTap={{scale: 0.95}}>
                  <span>Explore Menu</span>
                  <ArrowRight className='h-5 w-5 group-hover:translate-x-1 transition-transform duration-300' />
                </motion.button>

                <motion.button
                className='group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 border border-white/30 cursor-pointer'
                whileHover={{scale: 1.05, y: -2}}
                whileTap={{scale: 0.95}}>
                  <Play className='h-5 w-5' />
                  <span>Watch Story</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
        className='absolute bottom-8 left-1/2 transform-translate-x-1.2'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.8, delay: 1}}>
          <motion.div 
          className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'
          animate={{y: [0, 10, 0]}}
          transition={{duration: 2, repeat: Infinity}}>
            <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}>
            </motion.div>
          </motion.div>
        </motion.div>
    </section>
  )
}

export default Hero