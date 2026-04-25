import { useInView, motion } from "motion/react";
import { useRef } from "react";
import { Roll_button } from "./roll-button";
import { IconArrowNarrowRightDashed } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Project {
  img: string;
  place: string;
  className: string;
}

export const Project = ({ img, place, className }: Project) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { amount: 0.1 });
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.03 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      ref={ref}
      className=""
      transition={{
        duration: 0.3,
      }}
    >
      <Image
        alt=""
        width={1000}
        height={1000}
        src={img}
        className={cn(className)}
      ></Image>
      <div className="mt-2 flex justify-between">
        <div className="text-md inline-block">{place}</div>
        <a className="group flex gap-1">
          <Roll_button text="CHECK OUT" />
          <IconArrowNarrowRightDashed
            size={22}
            className="transiton duration-300 group-hover:-rotate-40"
          ></IconArrowNarrowRightDashed>
        </a>
      </div>
    </motion.div>
  );
};
