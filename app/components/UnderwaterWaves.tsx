"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function UnderwaterWaves() {
  return (
    <div className="absolute right-[3%] md:right-[5%] lg:right-[10%] top-[70px] md:top-24 lg:top-36 xl:top-40 w-[250px] md:w-[350px] lg:w-[450px] xl:w-[550px] h-auto">
      <motion.div
        className="absolute top-0 left-0 w-full"
        animate={{ x: 8 }}
        initial={{ x: -8 }}
        transition={{ duration: 1, ease: [0.37, 0, 0.63, 1], repeat: Infinity, repeatType: "mirror" }}
      >
        <Image src="/underwater/top.png" alt="" width={450} height={74} className="w-full h-auto" />
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full"
        animate={{ x: -6 }}
        initial={{ x: 6 }}
        transition={{ duration: 2, ease: [0.37, 0, 0.63, 1], repeat: Infinity, repeatType: "mirror" }}
      >
        <Image src="/underwater/middle.png" alt="" width={450} height={74} className="w-full h-auto" />
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full"
        animate={{ x: -4 }}
        initial={{ x: 4 }}
        transition={{ duration: 1.5, ease: [0.37, 0, 0.63, 1], repeat: Infinity, repeatType: "mirror" }}
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
  );
}
