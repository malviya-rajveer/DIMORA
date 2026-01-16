"use client";
import { Roll_button } from "./ui/roll-button";

export const Footer = () => {
  return (
    <div
      data-theme="light"
      className="flex h-screen w-full items-center justify-center bg-white"
    >
      <div className="grid h-[70vh] w-240 grid-cols-5">
        <div className="col-span-2">
          <div className="">
            <img src="image_4.jpg" alt="" className="h-108" />
            <div className="font-brand text-7xl text-black">DIMORA</div>
          </div>
        </div>
        <div className="col-span-2 w-70">
          <div className="pb-1 font-sans font-medium text-black">
            (NAVIGATION)
          </div>
          <div className="text-left font-sans text-4xl font-semibold text-black">
            <div className="py-0.5">
              <Roll_button text="HOME" className="h-10" y={-37}></Roll_button>
            </div>
            <div className="py-0.5">
              <Roll_button
                text="OUR PROJECTS"
                className="h-10"
                y={-37}
              ></Roll_button>
            </div>
            <div className="py-0.5">
              <Roll_button
                text="GALLERY"
                className="h-10"
                y={-37}
              ></Roll_button>
            </div>
            <div className="py-0.5">
              <Roll_button
                text="ARTICLES"
                className="h-10"
                y={-37}
              ></Roll_button>
            </div>
            <div className="py-0.5">
              <Roll_button
                text="DESIGNS"
                className="h-10"
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
        <div className="col-span-1 flex flex-col gap-6">
          <div className="text-md text-neutral-600">
            <h3 className="mb-2 text-black">Company</h3>
            <h4 className="cursor-pointer">Legal</h4>
            <h4 className="cursor-pointer">Privacy Policy</h4>
            <h4 className="cursor-pointer">Terms of service</h4>
            <h4 className="cursor-pointer">Cookie Policy</h4>
          </div>
          <div className="text-md text-neutral-600">
            <h3 className="mb-2 text-black">Connect</h3>
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
