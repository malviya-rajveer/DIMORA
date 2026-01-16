"use client";
import { cn } from "@/lib/utils";
import { IconArrowNarrowRightDashed } from "@tabler/icons-react";
import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

export const HeroSection = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    startAnimate();
  }, []);

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

  return (
    <section
      data-theme="dark"
      className="relative z-0 flex h-dvh w-full justify-center overflow-hidden selection:bg-zinc-800 selection:text-white"
    >
      <div
        className={cn(
          "absolute inset-0 -z-20 flex scale-250 items-center justify-center bg-[url('/hero-Image.png')] bg-contain bg-center bg-no-repeat",
          "xl:scale-x-150 xl:scale-y-130",
        )}
      ></div>
      <div ref={scope} className="relative flex flex-col items-center">
        <h1
          className={cn(
            "font-brand pointer-events-none relative mt-[30vh] tracking-tighter text-white md:top-2 xl:mt-[10vh]",
            "text-8xl xl:text-[250px]",
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
        <div className="flex w-[22rem] justify-between font-sans text-[11px] text-white md:w-4xl md:text-sm">
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
