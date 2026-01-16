"use client";
import { useInView, motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
export const Limit_less = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { amount: 0.7 });

  const isInView2 = useInView(ref2, { amount: 0.5 });
  return (
    <section
      data-theme="dark"
      className="relative h-screen w-full overflow-hidden bg-stone-800/20 selection:bg-zinc-800 selection:text-white"
    >
      <Image
        src={"/dia-dark-background.png"}
        alt=""
        height={3000}
        width={3000}
        className="maskt-to-10% pointer-events-none absolute right-0 bottom-0 mask-t-from-0% mask-l-from-90% mask-l-to-100%"
      ></Image>
      {/* <Image
        src={"/dia-dark-background.png"}
        alt=""
        height={500}
        width={500}
        className="absolute right-50"
      ></Image> */}
      <motion.div
        ref={ref}
        className="absolute top-20 left-10 grid grid-cols-2 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        transition={{
          duration: 0.5,
        }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
      >
        <motion.img
          src={"/lightwall.png"}
          alt=""
          className="h-60 w-250 object-cover object-left"
          width={600}
          height={600}
        ></motion.img>
        <div className="relative left-19 pt-10 font-sans text-7xl font-medium text-white">
          <span className="pr-20">WE SEE FROM</span>{" "}
          <span className="pl-20">THE HORIZON</span>
        </div>
      </motion.div>
      <motion.div
        ref={ref2}
        className="absolute right-10 bottom-10 flex"
        initial={{ opacity: 0, y: 30 }}
        transition={{
          duration: 0.5,
        }}
        animate={isInView2 ? { opacity: 1, y: 0 } : {}}
      >
        {/* <Image
          src={"/dia-dark-background.png"}
          alt=""
          height={500}
          width={500}
          className="scale-x- absolute -top-10 -left-23 rotate-y-180 mask-l-from-0"
        ></Image> */}
        <div className="pt-20 pr-20 font-sans text-7xl font-medium text-white">
          WE TAKE RISK'S
        </div>
        <motion.img
          src={"/_ (2).jpeg"}
          alt=""
          className="h-60 w-150 object-cover object-left"
          width={600}
          height={600}
        ></motion.img>
      </motion.div>
    </section>
  );
};
