"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = 0; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
    
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg items-center justify-center space-x-4",
          "bg-white bg-opacity-30 backdrop-blur-lg",  
          className
        )}
        style={{
          boxShadow: "0 -5px 15px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.3)", 
        }}


      >
        {navItems.map((navItem, idx) => (
          <span
            key={`link=${idx}`}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 !cursor-pointer"
            )}
            onClick={() => handleScroll(navItem.link.slice(1))}  
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm">{navItem.name}</span>
          </span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
