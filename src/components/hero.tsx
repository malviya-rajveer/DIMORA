"use client";
import { cn } from "@/lib/utils";
import { IconArrowNarrowRightDashed } from "@tabler/icons-react";
import { motion, stagger, useAnimate } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

export const HeroSection = () => {
  const [scope, animate] = useAnimate();

  const startAnimate = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.3,
        ease: "easeInOut",
        delay: stagger(0.1),
      },
    );
    animate(
      ".para",
      {
        opacity: 1,
        y: 0,
      },
      {
        duration: 0.3,
        delay: 0.8,
      },
    );
  };

  useEffect(() => {
    startAnimate();
  }, []);

  return (
    <section
      data-theme="dark"
      className="relative z-0 flex h-dvh w-full justify-center overflow-hidden selection:bg-zinc-800 selection:text-white"
    >
      <div className="absolute h-full w-full">
        <Image
          src="/hero-Image.png"
          alt=""
          height={0}
          width={0}
          className="absolute h-full w-full object-cover"
        />
      </div>
      <div ref={scope} className="relative flex flex-col items-center">
        <h1
          className={cn(
            "font-brand pointer-events-none relative mt-[30vh] tracking-tighter text-white md:top-2 md:mt-[20vh] xl:mt-[10vh]",
            "text-8xl md:text-[160px] lg:text-[180px] xl:text-[250px]",
          )}
        >
          {"DIMORA".split("").map((text, idx) => {
            return (
              <span
                key={idx}
                style={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: -30,
                }}
                className="inline-block"
              >
                {text}
              </span>
            );
          })}
        </h1>
        <div className="flex w-[22rem] justify-between font-sans text-[11px] text-white md:w-147 md:text-sm lg:w-166 xl:w-228">
          <motion.p
            style={{
              opacity: 0,
              y: -20,
            }}
            className="para inline-block pl-1.5"
          >
            ELEGANT RESIDENCE <br></br> SPECIALLY ONE OF A KIND FOR YOU
          </motion.p>
          <motion.button
            style={{
              opacity: 0,
              y: -20,
            }}
            className="para group flex cursor-pointer items-center"
          >
            EXPLORE WORK
            <IconArrowNarrowRightDashed
              className="transition-transform duration-200 group-hover:-rotate-30"
              size={25}
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
