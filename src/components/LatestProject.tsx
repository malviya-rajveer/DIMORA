"use client";
import { Project } from "./ui/Project";
export const Latest_Product = () => {
  return (
    <section
      data-theme="dark"
      className="flex h-full w-full flex-col bg-stone-800/20 selection:bg-zinc-800 selection:text-white"
    >
      <h2 className="mx-auto mt-[17vh] text-4xl text-white md:text-6xl xl:text-7xl">
        <span className="font-brand">ELEGANT &</span>
        <span className="font-sans"> MODERN</span>
      </h2>
      {/* <p>Our latest Completed Projects</p> */}
      <div className="grod-cols-1 mx-auto mt-[12vh] grid h-full w-[95vw] gap-10 pb-[10vh] font-sans md:grid-cols-2">
        <Project
          img="/image_3.jpg"
          place="NEW YORK"
          className="size-150 lg:size-200"
        />
        <Project img="/image_1.jpg" place="CHICAGO" className="" />

        <Project
          img="/image_4.jpg"
          place="TORONTO"
          className="size-150 lg:size-200"
        />
        <Project img="/image_5.jpg" place="ATLANTA" className="h-140" />
      </div>
    </section>
  );
};
