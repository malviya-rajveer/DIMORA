"use client";
import { IconArrowNarrowRightDashed } from "@tabler/icons-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const SectionHeroText = [
  {
    text: "GREAT",
  },
  {
    text: "ARCHITECTURE",
  },
  {
    text: "ISN’T JUST ABOUT",
  },
  {
    text: "TALENT AND",
  },
  {
    text: "EXPERIENCE, BUT",
  },
  {
    text: "COLLABORATIONS",
  },
  {
    text: "AND",
  },
  {
    text: "RELATIONSHIPS.",
  },
];
export const Our_Process = () => {
  const [hover, setHover] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <div
      data-theme="light"
      className="flex h-full w-full justify-center bg-white selection:bg-zinc-800 selection:text-white"
    >
      <div className="my-[20vh] flex w-240 gap-20">
        <div className="flex w-4xl flex-col">
          <h2 className="pb-1 font-sans text-[15px] text-black">
            (OUR PROCESS)
          </h2>

          <motion.div
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            className="relative flex w-80 items-center justify-center bg-red-300"
          >
            <div className="h-110 w-80 overflow-hidden">
              <motion.img
                initial={{
                  scale: 1.09,
                }}
                animate={
                  hover
                    ? {
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  duration: 0.3,
                }}
                src={"/image_3.jpg"}
                className="object-cover"
              ></motion.img>
            </div>

            <motion.img
              initial={{ opacity: 0, filter: "blur(0px)" }}
              animate={hover ? { opacity: 1, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.3,
              }}
              src={"/image_4.jpg"}
              className="absolute h-79 object-cover"
            ></motion.img>
          </motion.div>
          <div className="flex flex-col gap-1 pt-4">
            <text className="font-sans text-black">(01) Sketch Design</text>
            <text className="font-sans text-black">
              (02) Design Development
            </text>
            <text className="font-sans text-black">
              (03) Development Application
            </text>
            <text className="font-sans text-black">(04) Interior Design</text>
            <text className="font-sans text-black">
              (05) Building approval plans + documentation
            </text>
            <text className="font-sans text-black">
              (06) Construction plans + documentation
            </text>
          </div>
        </div>
        <div ref={ref} className="w-7xl">
          {SectionHeroText.map((data, idx) => {
            return (
              <div className="overflow-hidden" key={idx}>
                <motion.div
                  initial={{
                    y: 53,
                  }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{
                    duration: 0.3,
                  }}
                  className="font-sans leading-15 font-semibold text-black xl:text-[55px]"
                >
                  {data.text}
                </motion.div>
              </div>
            );
          })}

          <button className="text-md group mt-20 flex cursor-pointer gap-2 rounded-full bg-black px-5 py-2">
            fix a call
            <IconArrowNarrowRightDashed className="transition-transform duration-200 group-hover:-rotate-30"></IconArrowNarrowRightDashed>
          </button>
        </div>
      </div>
    </div>
  );
};
