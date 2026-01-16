"use client";
import { cn } from "@/lib/utils";
import { motion, stagger, useInView } from "motion/react";
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
  const isInView = useInView(ref, { once: false, amount: 1 });
  return (
    <section
      data-theme="light"
      className="flex h-screen w-full justify-center bg-white selection:bg-zinc-800 selection:text-white"
    >
      <div className="mt-[20vh] grid h-[50vh] w-[60.5rem] grid-cols-3">
        <h2 className="font-brand text-[20px] text-black">About Us</h2>
        <div className="col-span-2 ml-11.5 flex w-150 flex-col gap-8">
          <motion.h3
            ref={ref}
            className={cn(
              "font-brand overflow-hidden leading-12 text-black selection:bg-stone-800/10 selection:text-white",
              "xl:text-4xl",
            )}
          >
            {Text.map((data, idx) => {
              return (
                <motion.div className="overflow-hidden" key={idx}>
                  <motion.div
                    initial={{
                      y: 40,
                    }}
                    animate={isInView ? { y: 0 } : {}}
                    transition={{
                      duration: 0.3,
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
              className="text-[15px] leading-5 text-neutral-500"
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
