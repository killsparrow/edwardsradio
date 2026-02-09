"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function UnderwaterWaves() {
  return (
    <div
      className="absolute flex items-center justify-center
        left-[30%] top-[20%] w-[75%] h-[50%]
        md:left-[47%] md:top-[4%] md:w-[51.04%] md:h-[41.6%]"
    >
      <div className="relative w-[80%]">
        <motion.div
          className="absolute top-0 left-0 w-full"
          animate={{ x: 8 }}
          initial={{ x: -8 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        >
          <Image src="/underwater/top.png" alt="" width={450} height={74} className="w-full h-auto" />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full"
          animate={{ x: -6 }}
          initial={{ x: 6 }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        >
          <Image src="/underwater/middle.png" alt="" width={450} height={74} className="w-full h-auto" />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full"
          animate={{ x: -4 }}
          initial={{ x: 4 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        >
          <Image src="/underwater/bottom.png" alt="" width={450} height={74} className="w-full h-auto" />
        </motion.div>
        {/* Invisible element to maintain aspect ratio */}
        <div className="invisible">
          <Image src="/underwater/top.png" alt="" width={450} height={74} className="w-full h-auto" />
        </div>
        <p className="text-center mt-0 text-[18px]" style={{ color: '#51323a', fontFamily: '"neuzeit-grotesk", sans-serif' }}>
          <strong>by: edwards radio</strong>
        </p>
      </div>
    </div>
  );
}
