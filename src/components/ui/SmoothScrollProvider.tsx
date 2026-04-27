"use client";
import ReactLenis from "lenis/react";

interface Prop {
  children: React.ReactNode;
}
export const ReactLenisProvider = ({ children }: Prop) => {
  return (
    <ReactLenis
      root={true}
      options={{
        duration: 1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};
