"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NoCookies() {
  const [open, setOpen] = useState(true);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="
            fixed bottom-24 right-6 z-50
            w-[500px] rounded-xl
            bg-[#2f303b] text-white
            shadow-xl
            p-4
          "
        >
          <h2 className="!mb-0 !pb-0">There are no cookies.</h2>
          {/* <h5 className="mb-3">We burnt them.</h5> */}

                              <p className="text-sm mb-4">
            we burnt them.</p>

          <button
            onClick={() => setOpen(false)}
            className="
              w-full rounded-md
              bg-white text-[#2f303b]
              py-2 text-sm font-semibold
              hover:bg-blue-50
              transition
            "
          >
            Okay
          </button>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
