"use client";
import { IconArrowNarrowRightDashed } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Roll_button } from "./ui/roll-button";

export const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const sections = document.querySelectorAll("[data-theme]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-theme") as
              | "light"
              | "dark";
            setTheme(theme);
          }
        });
      },
      { threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="fixed top-0 z-40 h-10 w-full selection:bg-zinc-800 selection:text-white"
      animate={{
        color: theme === "dark" ? "#ffffff" : "#000000",
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="mx-auto flex h-full w-100 items-center justify-between md:w-160 lg:w-180 xl:w-[60.5rem]">
        <motion.div className={"text-xl font-medium"}>DIMORA</motion.div>
        <div className="flex gap-2 md:gap-9">
          <Roll_button text="ABOUT US"></Roll_button>
          <Roll_button text="CAREER"></Roll_button>
          <div className="flex cursor-pointer items-center">
            <Roll_button text="LET'S TALK"></Roll_button>
            <IconArrowNarrowRightDashed size={25} className="rotate-320" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
