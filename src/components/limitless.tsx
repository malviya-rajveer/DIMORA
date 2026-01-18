"use client";
import { cn } from "@/lib/utils";
import { useInView, motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
export const Limit_less = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { amount: 0.7, once: true });

  const isInView2 = useInView(ref2, { amount: 0.5, once: true });
  return (
    <section
      data-theme="dark"
      className="relative z-0 h-full w-full overflow-hidden bg-stone-800/20 selection:bg-zinc-800 selection:text-white"
    >
      <Image
        src={"/dia-dark-background.png"}
        alt=""
        height={3000}
        width={3000}
        className="maskt-to-10% pointer-events-none absolute right-0 bottom-0 -z-10 mask-t-from-0% mask-l-from-90% mask-l-to-100%"
      ></Image>

      <motion.div
        ref={ref}
        className="mx-auto mt-[10vh] flex w-[92vw] flex-col-reverse overflow-hidden md:grid md:grid-cols-2"
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
        <div
          className={cn(
            "relative pt-10 font-sans text-4xl font-medium text-white md:left-10",
            "md:text-4xl",
            "lg:text-[54px] lg:leading-15",
            "xl:left-19 xl:text-7xl xl:leading-20",
          )}
        >
          <span className="md:pr-20">WE SEE FROM</span>{" "}
          <span className="md:pl-20">THE HORIZON</span>
        </div>
      </motion.div>
      <motion.div
        ref={ref2}
        className="mx-auto w-[92vw] overflow-hidden pb-[10vh] md:mt-[10vh] md:grid md:grid-cols-2"
        initial={{ opacity: 0, y: 30 }}
        transition={{
          duration: 0.5,
        }}
        animate={isInView2 ? { opacity: 1, y: 0 } : {}}
      >
        <div
          className={cn(
            "relative pt-20 font-sans text-4xl font-medium text-white md:text-4xl lg:text-[54px] xl:text-7xl",
          )}
        >
          WE TAKE RISK'S
        </div>
        <motion.img
          src={"/_ (2).jpeg"}
          alt=""
          className="h-60 w-155 object-cover object-left"
          width={600}
          height={600}
        ></motion.img>
      </motion.div>
    </section>
  );
};
