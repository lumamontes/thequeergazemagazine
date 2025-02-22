'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { useEffect, useState } from 'react';
import { Logo } from '../Logo/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`fixed top-6 left-6 right-6 flex justify-between items-center text-lg font-light z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-lg border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      {/* Logo / Title */}
      <Link href="/">
        <motion.span 
          whileHover={{ scale: 1.05 }} 
          className="tracking-wide cursor-pointer text-black text-2xl font-semibold"
        >
          
        </motion.span>
      </Link>

      {/* Navigation */}
      <nav className="hidden sm:flex space-x-8">
        <Link href="/about">
          <motion.span whileHover={{ scale: 1.05 }} className="cursor-pointer text-gray-800 hover:text-black">
            About
          </motion.span>
        </Link>
        <Link href="/issues">
          <motion.span whileHover={{ scale: 1.05 }} className="cursor-pointer text-gray-800 hover:text-black">
            Issues
          </motion.span>
        </Link>
        <Link href="/contact">
          <motion.span whileHover={{ scale: 1.05 }} className="cursor-pointer text-gray-800 hover:text-black">
            Contact
          </motion.span>
        </Link>
      </nav>

      <MobileMenu />
    </motion.header>
  );
};

export default Header;
