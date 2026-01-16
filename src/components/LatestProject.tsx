"use client";
import { IconArrowNarrowRightDashed } from "@tabler/icons-react";
import { Roll_button } from "./ui/roll-button";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
export const Latest_Product = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const isInView2 = useInView(ref2, { amount: 0.1 });
  return (
    <section
      data-theme="dark"
      className="flex h-full w-full flex-col bg-stone-800/20 selection:bg-zinc-800 selection:text-white"
    >
      <h2 className="mx-auto mt-[17vh] text-7xl">
        <span className="font-brand">ELEGANT &</span>
        <span className="font-sans"> MODERN</span>
      </h2>
      {/* <p>Our latest Completed Projects</p> */}
      <div className="mx-auto mt-[12vh] grid h-full w-[95vw] grid-cols-2 gap-10 pb-[10vh] font-sans">
        <div ref={ref} className="">
          <motion.img
            initial={{ opacity: 0, scale: 1.03 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.3,
            }}
            src={"/image_3.jpg"}
            className="size-200"
          ></motion.img>
          <div className="mt-2 flex justify-between">
            <text className="text-md inline-block">NEW YORK</text>
            <a className="group flex gap-1">
              <Roll_button text="CHECK OUT" />
              <IconArrowNarrowRightDashed
                size={22}
                className="transiton duration-300 group-hover:-rotate-40"
              ></IconArrowNarrowRightDashed>
            </a>
          </div>
        </div>
        <div className="">
          <motion.img
            initial={{ opacity: 0, scale: 1.03 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.3,
            }}
            src={"/image_1.jpg"}
          ></motion.img>
          <div className="mt-2 flex justify-between">
            <text className="text-md inline-block">CHICAGO</text>
            <a className="group flex gap-1">
              <Roll_button text="CHECK OUT" />
              <IconArrowNarrowRightDashed
                size={22}
                className="transiton duration-300 group-hover:-rotate-40"
              ></IconArrowNarrowRightDashed>
            </a>
          </div>
        </div>
        <div ref={ref2} className="">
          <motion.img
            initial={{ opacity: 0, scale: 1.03 }}
            animate={isInView2 ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.3,
            }}
            src={"/image_4.jpg"}
            className="size-200"
          ></motion.img>
          <div className="mt-2 flex justify-between">
            <text className="text-md inline-block">TORONTO</text>
            <a className="group flex gap-1">
              <Roll_button text="CHECK OUT" />
              <IconArrowNarrowRightDashed
                size={22}
                className="transiton duration-300 group-hover:-rotate-40"
              ></IconArrowNarrowRightDashed>
            </a>
          </div>
        </div>
        <div className="">
          <motion.img
            initial={{ opacity: 0, scale: 1.03 }}
            animate={isInView2 ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.3,
            }}
            className=""
            src={"image_5.jpg"}
          ></motion.img>
          <div className="mt-2 flex justify-between">
            <text className="text-md inline-block">ATLANTA</text>
            <a className="group flex gap-1">
              <Roll_button text="CHECK OUT" />
              <IconArrowNarrowRightDashed
                size={22}
                className="transiton duration-300 group-hover:-rotate-40"
              ></IconArrowNarrowRightDashed>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
