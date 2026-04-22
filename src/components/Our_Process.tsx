"use client";
import { motion, useInView } from "motion/react";
import Image from "next/image";
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
  const isInView = useInView(ref, { amount: 0.3, once: true });
  const Button_Variant_Path_1 = {
    initial: {
      opacity: 1,
      scaleX: 0,
    },
    hover: {
      opacity: 1,
      scaleX: 1,
    },
  };

  const Button_Variant_Path_2 = {
    initial: {
      x: -9,
    },
    hover: {
      x: 0,
    },
  };

  return (
    <div
      data-theme="light"
      className="flex h-full w-full justify-center bg-white selection:bg-zinc-800 selection:text-white"
    >
      <div className="my-[20vh] flex w-90 gap-3 md:w-160 md:gap-14 lg:w-200 lg:gap-20 xl:w-240">
        <div className="flex w-4xl flex-col">
          <h2 className="pb-1 font-sans text-[10px] text-black md:text-xs lg:text-[15px]">
            (OUR PROCESS)
          </h2>

          <motion.div
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            className="relative flex w-40 items-center justify-center bg-red-300 md:w-60 lg:w-80"
          >
            <div className="h-60 w-40 overflow-hidden md:h-80 md:w-60 lg:h-110 lg:w-80">
              <motion.div
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
              >
                <Image
                  alt=""
                  height={1000}
                  width={1000}
                  src={"/image_3.jpg"}
                  className="object-cover"
                ></Image>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, filter: "blur(0px)" }}
              animate={hover ? { opacity: 1, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.3,
              }}
              className="absolute"
            >
              <Image
                alt=""
                height={200}
                width={200}
                src={"/image_4.jpg"}
                className="h-50 object-cover lg:h-79"
              ></Image>
            </motion.div>
          </motion.div>
          <div className="flex flex-col gap-1 pt-4 text-xs md:text-[14px] lg:text-[17px]">
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
                  className="font-sans text-[22px] font-semibold text-black md:text-4xl md:leading-11 lg:text-5xl lg:leading-14 xl:text-[55px] xl:leading-15"
                >
                  {data.text}
                </motion.div>
              </div>
            );
          })}

          <motion.button
            initial="initial"
            whileHover="hover"
            className="group md:text-md mt-20 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-black px-3 py-1.5 text-sm md:px-5 md:py-2"
          >
            fix a call
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <motion.path
                variants={Button_Variant_Path_1}
                transition={{
                  duration: 0.2,
                  delay: 0,
                }}
                // initial={{ opacity: 0 }}
                // animate={hover ? { opacity: 1 } : {}}
                d="M5 12l14 0"
              />
              <motion.path
                variants={Button_Variant_Path_2}
                transition={{
                  duration: 0.2,
                }}
                d="M15 16l4 -4 M15 8l4 4"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
