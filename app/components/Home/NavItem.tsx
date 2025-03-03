'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const textVariants = {
  'pink-site': 'text-pink-site',
  'yellow-site': 'text-yellow-site',
  'lightgreen-site': 'text-lightgreen-site',
  'red-site': 'text-red-site', 
} as {
  [key: string]: string;
}

const bgVariants = {
  'pink-site': 'bg-pink-site',
  'yellow-site': 'bg-yellow-site',
  'lightgreen-site': 'bg-lightgreen-site',
  'red-site': 'bg-red-site',
} as {
  [key: string]: string;
}

export function NavItem({
  title,
  href,
  color,
}: {
  title: string;
  href: string;
  color: string;
}) {
  const textColor = textVariants[color] ?? 'text-gray-500';
  const bgColor = bgVariants[color] ?? 'bg-gray-500';
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative inline-block p-4"
    >
      <Link href={href} className={`relative z-10  text-3xl ${textColor}`}>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <motion.div
            className={`absolute w-full h-full rounded-full ${bgColor}  opacity-50 blur-xl`}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </motion.div>
        {title}
      </Link>
    </motion.div>
  );
}
