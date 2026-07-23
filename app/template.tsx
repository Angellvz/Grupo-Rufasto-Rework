"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isPresent, setIsPresent] = useState(true);

  useEffect(() => {
    // Allows the animation to play, then we remove the DOM element entirely
    const timer = setTimeout(() => {
      setIsPresent(false);
    }, 2000); 
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isPresent && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
        >
          {/* Logo container with breathing/pulse animation */}
          <motion.div 
            className="relative flex h-20 w-56 sm:h-24 sm:w-64"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.05, 0.95, 1.1, 0],
              opacity: [0, 1, 1, 1, 0]
            }}
            transition={{ 
              duration: 1.5, 
              times: [0, 0.3, 0.6, 0.9, 1],
              ease: "easeInOut" 
            }}
          >
            <Image
              src="/images/LogoRufasto.png"
              alt="Grupo Rufasto"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      )}
      
      {/* Page content rendered directly without opacity wrappers (Better for SEO/SSR) */}
      {children}
    </>
  );
}
