import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Roll_button = ({
  text,
  className,
  y,
}: {
  text: string;
  className?: string;
  y?: number;
}) => {
  const Roll_Text = {
    initial: {
      y: 0,
    },
    hover: {
      y: y || -19,
    },
  };
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      className={cn(
        "group relative flex h-6 cursor-pointer flex-col overflow-hidden",
        className,
      )}
    >
      <motion.span
        variants={Roll_Text}
        transition={{
          duration: 0.2,
        }}
      >
        {text}
      </motion.span>
      <motion.span
        variants={Roll_Text}
        transition={{
          duration: 0.2,
        }}
        className="relative bottom-1"
      >
        {text}
      </motion.span>
    </motion.button>
  );
};
