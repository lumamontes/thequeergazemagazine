'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const glowVariants = {
  initial: {
    opacity: 0, // Glow is invisible by default
    scale: 1,   // No scaling initially
  },
  hover: {
    opacity: 1, // Glow becomes fully visible on hover
    scale: 1.5, // Glow expands on hover
    transition: { duration: 0.3, ease: 'easeOut' }, // Smooth transition
  },
};

export function NavItem({ title, href, color }: { title: string; href: string; color: string }) {
  let textColor = `text-${color}`
  let bgColor = `bg-${color}`
  return (
    <motion.div 
      initial="initial"
      whileHover="hover"
      className="relative inline-block p-4" // Add padding for better spacing
    >
   
      {/* Text */}
      <Link href={href} className={`relative z-10  text-3xl ${textColor}`}> {/* Text styling */}
      <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileHover={{ opacity: 1, scale: 1.5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        className={`absolute w-full h-full rounded-full ${bgColor}  opacity-50 blur-xl`}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.3, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.div>
        {title}
      </Link>
    </motion.div>
  );
}