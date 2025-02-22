'use client';
import { motion } from 'framer-motion';

import Link from "next/link";

export function FloatingBadge({ title, redirectUrl }: { title: string; redirectUrl: string }) {
  return (
    <Link href={redirectUrl} 
    className="
    m-10
     absolute  max-w-[120px] md:max-w-[680px] 
     max-h-[120px] md:max-h-[680px]
     h-[200px] w-[500px]
     top-6 right-2   transform rotate-[20deg]
     bg-[url('/star.svg')] bg-contain
      bg-center bg-no-repeat
      justify-center items-center
      flex
    "
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className=" flex flex-col items-center justify-center w-full font-cursive"
      >
        <span className=" text-black font-bold text-xs sm:text-sm md:text-base text-center  px-2 py-1">
          ISSUE #2
        </span>
        <span className=" text-black font-bold text-xs sm:text-sm md:text-base text-center px-2 py-1">
          AVAILABLE NOW
        </span>
      </motion.div>
    </Link>
  );
}