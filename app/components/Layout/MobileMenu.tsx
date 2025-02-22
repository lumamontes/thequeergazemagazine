'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button 
        className="sm:hidden flex items-center justify-center w-10 h-10 rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="w-6 h-[2px] bg-black transition-all duration-300"
        />
        <motion.div
          initial={false}
          animate={{ opacity: isOpen ? 0 : 1 }}
          className="w-6 h-[2px] bg-black mt-1 transition-all duration-300"
        />
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? -45 : 0, translateY: isOpen ? -8 : 0 }}
          className="w-6 h-[2px] bg-black mt-1 transition-all duration-300"
        />
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 text-xl font-medium"
        >
          <button 
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          <Link href="/about">
            <motion.span whileHover={{ scale: 1.05 }} className="cursor-pointer text-gray-700 hover:text-black">
              About
            </motion.span>
          </Link>
          <Link href="/issues">
            <motion.span whileHover={{ scale: 1.05 }} className="cursor-pointer text-gray-700 hover:text-black">
              Issues
            </motion.span>
          </Link>
          <Link href="/contact">
            <motion.span whileHover={{ scale: 1.05 }} className="cursor-pointer text-gray-700 hover:text-black">
              Contact
            </motion.span>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default MobileMenu;
