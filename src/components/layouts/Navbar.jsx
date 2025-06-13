import React from 'react'
import {motion} from 'framer-motion';
import {Coffee, Menu, X, Moon, Sun} from 'lucide-react'
import {useSelector, useDispatch} from 'react-redux';
import {toggleMenu, closeMenu} from '../../redux/slices/uiSlice';
import {useScrollPosition} from '../../hooks/useScrollPosition';
import useDarkMode from '../../hooks/useDarkMode';

const Navbar = () => {
    const {isMenuOpen} = useSelector((state) => state.ui);
    const dispatch = useDispatch();
    const scrollPosition = useScrollPosition();
    const [darkMode, setDarkMode] = useDarkMode()

    const navItems = [
        {name: 'Home', href: '#home'},
        {name: 'Menu', href: '#menu'},
        {name: 'About', href:'#about'},
        {name: 'Reviews', href: '#reviews'},
        {name: 'Contact', href: '#contact'},
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if(element){
            element.scrollIntoView({behavior: 'smooth'});
            dispatch(closeMenu());
        }
    };
  return (
    <motion.div 
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    initial={{y: -100}}
    animate={{y: 0}}
    transition={{duration: 0.6}}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
                {/* Logo */}
                <motion.div
                className='flex items-center space-x-2'
                whileHover={{scale: 1.05}}>
                    <Coffee className={`h-8 w-8 ${scrollPosition > 50 ? 'text-amber-600' : 'text-white'}`} />
                    <span className={`text-xl font-bold ${scrollPosition > 50 ? 'text-gray-900' : 'text-white'}`}>
                        Azim Coffee Shop
                    </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center space-x-8'>
                    {navItems.map((item, index) => (
                        <motion.button
                        key={index}
                        onClick={() => scrollToSection(item.href)}
                        className={`transition-colors duration-200 hover:text-amber-600 ${scrollPosition > 50 ? 'text-gray-700' : 'text-white'}`}
                        whileHover={{y: -2}}
                        whileTap={{y: 0}}>
                            {item.name}
                        </motion.button>
                        ))}
                        <motion.button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`p-2 rounded-full transition-colors duration-200 ${scrollPosition > 50 ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'}`}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}>
                            {darkMode ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
                        </motion.button>
                </div>

                {/* Mobile Menu button */}
                <div className='md:hidden flex items-center space-x-2'>
                    <motion.button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`p-2 rounded-full transition-colors duration-200 ${scrollPosition > 50 ? 'text-gray-700 hover-bg-gray-100' : 'text-white hover:bg-white/20'}`}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}>
                        {darkMode ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
                    </motion.button>
                    <motion.button
                    onClick={() => dispatch(toggleMenu())}
                    className={`p-2 transition-colors duration-200 ${scrollPosition > 50 ? 'text-gray-700' : 'text-white'}`}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}>
                        {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                    </motion.button>
                </div>
            </div>
        </div>
        {/* Mobile Navigation */}
        <motion.div
        className='md:hidden bg-white/95 backdrop-blur-md shadow-lg'
        initial={{height: 0, opacity: 0}}
        animate={{height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0}}
        transition={{duration: 0.3}}
        style={{overflow: 'hidden'}}>
            <div className='px-4 py-4 sapce-y-4'>
                {navItems.map((item, index) => (
                    <motion.button
                    key={index}
                    onClick={()=> scrollToSection(item.href)}
                    className='block w-full text-left text-gray-700 hover:text-amber-600 transition-colors duration-200'
                    whileHover={{x: 10}}>
                        {item.name}
                    </motion.button>
                ))}
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Navbar