import React from 'react'
import {motion} from 'framer-motion'
import {Star, Plus} from 'lucide-react'

const Menu = () => {

  const menuItems = [
    {
      id: 1,
      name: 'Signature Espresso',
      description: 'Rich, bold espresso with notes of dark chocolate and caramel',
      price: '250 BDT',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1036444/pexels-photo-1036444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Coffee',
      popular: true,
    },
    {
      id: 2,
      name: 'Vanilla Bean Latte',
      description: 'Smooth espresso with steamed milk and real vanilla bean',
      price: '225 BDT',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/894696/pexels-photo-894696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Coffee',
    },
    {
      id: 3,
      name: 'Artisan Croissant',
      description: 'Buttery, flaky croissant baked fresh every morning',
      price: '100 BDT',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1397292/pexels-photo-1397292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Pastry',
    },
    {
      id: 4,
      name: 'Cold Brew Delight',
      description: 'Smooth cold brew coffee with a hint of caramel',
      price: '275 BDT',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Coffee',
    },
    {
      id: 5,
      name: 'Avocado Toast',
      description: 'Fresh avocado on artisan bread with sea salt and lime',
      price: '350 BDT',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Food',
    },
    {
      id: 6,
      name: 'Matcha Latte',
      description: 'Premium Japanese matcha with steamed oat milk',
      price: '320 BDT',
      rating: 4.4,
      image: 'https://images.pexels.com/photos/28730009/pexels-photo-28730009/free-photo-of-artistic-matcha-latte-with-leaf-garnish.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Coffee',
      popular: true,
    },
  ];

  const containerVarients = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {staggerChildren: 0.1},
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 30},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.6},
    },
  };

  return (
    <section id='menu'
    className='py-20 bg-gradient-to-br from-stone-50 to-amber-50 dark:from-stone-900 dark:to-gray-800 transition-colors'>
      <div className='max-w- 7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
        className='text-center mb-15'
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 0.8}}
        viewport={{once: true}}>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-4 transition-colors'>
            Featured Menu
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-400 max-w-wxl mx-auto transition-colors'>
          Discover our carefully curated selection of premium coffees, fresh pastries, and delicious bites.
          </p>
        </motion.div>

        <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        variants={containerVarients}
        initial='hidden'
        whileInView='visible'
        viewport={{once: true}}>
          {menuItems.map((item, index) => (
            <motion.div
            key={index}
            className='group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden'
            variants={itemVariants}
            whileHover={{y: -8}}>
              <div className='relative overflow-hidden'>
                <img src={item.image} alt={item.name} 
                className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'/>
                {item.popular && (
                  <div className='absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                    Popular
                  </div>
                )}
                <div className='absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 transition-all backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1'>
                  <Star className='h-4 w-4 text-yellow-500 full-current' />
                  <span className='text-sm font-semibold text-gray-800 dark:text-gray-200 transition-colors'>
                    {item.rating}
                  </span>
                </div>
              </div>
              <div className='p-6'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-gray-200 group-hover:text-amber-600 transition-colors duration-300'>
                      {item.name}
                    </h3>
                    <span className='text-2xl font-bold text-amber-600'>
                      {item.price}
                    </span>
                  </div>

                  <p className='text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors'>
                    {item.description}
                  </p>

                  <div className='flex justify-between items-center'>
                    <span className='inline-block bg-stone-100 dark:bg-gray-700 dark:text-gray-200 text-stone-800 transition-colors px-3 py-1 rounded-full text-sm font-medium'>
                      {item.category}
                    </span>

                    <motion.button className='bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-full transition-colors duration-300 cursor-pointer'
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}>
                      <Plus className='h-5 w-5' />
                    </motion.button>
                  </div>
                </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
        className='text-center mt-12'
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 0.2}}
        viewport={{once: true}}>
          <motion.button
          className='bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer'
          whileHover={{scale: 1.05, y: -2}}
          whileTap={{scale: 0.95}}>
            View Full Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu