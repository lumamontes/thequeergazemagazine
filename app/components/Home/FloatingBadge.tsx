'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export function FloatingBadge() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        rotate: [10, 12, 10],
      }}
      transition={{
        y: {
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        },
        rotate: {
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        },
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="
        absolute top-6 right-6 md:right-12
        w-[120px] h-[120px] md:w-[180px] md:h-[180px]
        flex flex-col items-center justify-center font-cursive
        bg-contain bg-center bg-no-repeat
        cursor-pointer
        z-10
        debug-border
      "
      style={{
        backgroundImage: `url('/star.svg')`,
      }}
    >
      <Link
        className="
          flex flex-col items-center justify-center
          w-full h-full
          z-10 text-center
        "
        href={'/issues/issue-2-gender-trouble'}
        aria-label="View current issue"
      >
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full bg-yellow-site opacity-30 blur-xl" />
          </div>
        )}

        <span className="text-black font-bold text-xs sm:text-sm md:text-base text-center px-1">
          ISSUE #2
          <br />
          <span className={isHovered ? 'text-amber-600' : 'text-black'}>
            OUT NOW
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
