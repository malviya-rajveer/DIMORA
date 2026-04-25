"use client";
import Image from "next/image";
import { Roll_button } from "./ui/roll-button";

export const Footer = () => {
  return (
    <div
      data-theme="light"
      className="flex h-screen w-full items-center justify-center bg-white selection:bg-zinc-800 selection:text-white"
    >
      <div className="mt-[19vh] grid w-100 grid-cols-5 md:w-160 lg:w-180 xl:w-240">
        <div className="col-span-3 md:col-span-2">
          <div className="">
            <Image
              src="/image_4.jpg"
              width={10000}
              height={10000}
              alt=""
              className="h-[68vh] w-75"
            />
            <div className="font-brand text-[12vh] text-black">DIMORA</div>
          </div>
        </div>
        <div className="col-span-2 hidden w-70 md:block">
          <div className="pb-1 font-sans font-medium text-black md:text-sm">
            (NAVIGATION)
          </div>
          <div className="hidden text-left font-sans text-3xl font-semibold text-black md:block lg:text-4xl">
            <div className="py-0.5">
              <Roll_button
                text="HOME"
                className="md:h-8 lg:h-10"
                y={-37}
              ></Roll_button>
            </div>
            <div className="py-0.5">
              <Roll_button
                text="OUR PROJECTS"
                className="md:h-8 lg:h-10"
                y={-37}
              ></Roll_button>
            </div>
            <div className="py-0.5">
              <Roll_button
                text="GALLERY"
                className="md:h-8 lg:h-10"
                y={-37}
              ></Roll_button>
            </div>
            <div className="py-0.5">
              <Roll_button
                text="ARTICLES"
                className="md:h-8 lg:h-10"
                y={-37}
              ></Roll_button>
            </div>
            <div className="py-0.5">
              <Roll_button
                text="DESIGNS"
                className="md:h-8 lg:h-10"
                y={-37}
              ></Roll_button>
            </div>{" "}
            <div className="py-0.5">
              <Roll_button
                text="WORK HISTORY"
                className="h-10"
                y={-37}
              ></Roll_button>
            </div>{" "}
            <div className="py-0.5">
              <Roll_button
                text="ARTICLES"
                className="h-10"
                y={-37}
              ></Roll_button>
            </div>
          </div>
        </div>
        <div className="col-span-1 ml-10 flex flex-col gap-4 md:gap-6">
          <div className="text-[13px] text-neutral-600 md:text-[15px]">
            <h3 className="mb-1 text-black md:mb-2">Company</h3>
            <h4 className="cursor-pointer">Legal</h4>
            <h4 className="cursor-pointer">Privacy Policy</h4>
            <h4 className="cursor-pointer">Terms of service</h4>
            <h4 className="cursor-pointer">Cookie Policy</h4>
          </div>
          <div className="text-[13px] text-neutral-600 md:text-[15px]">
            <h3 className="mb-1 text-black md:mb-2">Connect</h3>
            <h4 className="cursor-pointer">Contact us</h4>
            <h4 className="cursor-pointer">Community</h4>
            <h4 className="cursor-pointer">X (Twitter)</h4>
            <h4 className="cursor-pointer">GitHub</h4>
            <h4 className="cursor-pointer">YouTube</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
