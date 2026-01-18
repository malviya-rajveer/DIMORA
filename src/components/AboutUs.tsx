"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Text = [
  {
    text: "Since 2010, we’ve been turning ",
  },
  {
    text: "beautiful dreams into beautifully ",
  },
  {
    text: "designed spaces. Our work balances ",
  },
  {
    text: "aesthetic excellence with everyday   ",
  },
  {
    text: "functionality, ensuring thoughtful",
  },
  {
    text: "design is accessible to everyone.",
  },
];

export const AboutUS = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <section
      data-theme="light"
      className="flex h-screen w-full justify-center bg-white selection:bg-zinc-800 selection:text-white"
    >
      <div
        className={cn(
          "mt-[20vh] grid h-[50vh] grid-cols-3 md:grid-cols-3",
          "w-100 md:w-160 lg:w-180 xl:w-[60.5rem]",
        )}
      >
        <h2 className="font-brand col-span-1 pt-2 pl-5 text-xs text-black md:pt-1 md:pl-0 md:text-[17px] lg:pt-3">
          About Us
        </h2>
        <div className="flex w-150 flex-col gap-8 md:col-span-2 md:ml-11.5">
          <motion.h3
            ref={ref}
            className={cn(
              "font-brand overflow-hidden leading-9 text-black selection:bg-stone-800/10 selection:text-white lg:leading-12",
              "text-lg md:text-2xl lg:text-3xl xl:text-4xl",
            )}
          >
            {Text.map((data, idx) => {
              return (
                <motion.div className="overflow-hidden py-1" key={idx}>
                  <motion.div
                    initial={{
                      y: 40,
                    }}
                    animate={isInView ? { y: 0 } : {}}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    {data.text}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.h3>
          <div aria-hidden className="overflow-hidden">
            <motion.p
              initial={{
                y: 60,
              }}
              animate={isInView ? { y: 0 } : {}}
              transition={{
                duration: 0.5,
              }}
              className="*: w-70 text-xs leading-5 text-neutral-600 md:w-90 md:text-[15px] lg:w-120 xl:w-full"
            >
              The place we live shapes how we feel, think, and experience
              everyday life. A well-designed living environment offers comfort,
              balance, and a sense of belonging, influencing our mood,
              productivity, and overall well-being.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
