'use client';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

export function FloatingBadge() {
  return (
    <motion.div
      initial="initial"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.4, ease: 'easeOut' },
      }}
      className="
    absolute top-6 right-6 md:right-12
      max-w-[120px] md:max-w-[280px] 
      max-h-[120px] md:max-h-[680px]
      h-[200px] w-[500px]
      flex flex-col items-center justify-center font-cursive
      bg-contain bg-center bg-no-repeat
      rotate-[10deg]
    "
      style={{
        backgroundImage: `url('/star.svg')`,
      }}
    >
      <Link
        className="
      flex flex-col items-center justify-center
      w-full h-full
    rotate-[10deg]
    relative z-10  text-3xl
    "
        href={'#'}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <motion.div
            className={`absolute w-full h-full rounded-full bg-yellow-site  opacity-5 blur-xl`}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 0.9, opacity: 0.3 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </motion.div>
        <span className="text-black font-bold text-xs sm:text-sm md:text-base text-center px-2 py-1">
          ISSUE #2
          <br />
          OUT NOW
        </span>
      </Link>
    </motion.div>
  );
}
