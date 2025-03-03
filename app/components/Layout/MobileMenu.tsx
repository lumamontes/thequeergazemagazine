'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MobileMenu = ({ scrolled }: { scrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`sm:hidden flex items-center justify-center  rounded-md focus:outline-none
            ${scrolled ? 'text-white-site ' : 'text-black'}
          `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`fixed inset-0 bg-pink-site flex flex-col items-center justify-center space-y-8 text-xl font-medium
                        ${scrolled ? 'border-b border-white-site border ' : ''}
            `}
        >
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Link href="/about">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer text-gray-700 hover:text-black"
            >
              About
            </motion.span>
          </Link>
          <Link href="/issues">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer text-gray-700 hover:text-black"
            >
              Issues
            </motion.span>
          </Link>
          <Link href="/submissions">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer text-gray-700 hover:text-black"
            >
              Submissions
            </motion.span>
          </Link>
          <Link href="/blog">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer text-gray-700 hover:text-black"
            >
              Blog
            </motion.span>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default MobileMenu;
