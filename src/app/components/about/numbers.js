import Image from "next/image";
import arrowR from "../../../../public/assets/arrow-r.png";

export default function Numbers() {
  return (
    <div className="border-t border-[#777777] py-10 lg:py-16">
      <div className="container max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-y-0 w-full justify-between">
          <div className="flex flex-col gap-y-7 ">
            <span
              style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
              className="text-lg leading-[24px] tracking-[-0.3px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.4px] text-[#0d0e13]"
            >
              In Number
            </span>
          </div>
          <div className="grid grid-cols-3  gap-x-32">
            <div className="flex flex-col">
              <p
                style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
                className="text-lg leading-[28px] tracking-[-0.2px] text-[#0d0e13]"
              >
                Our core team spread all over the world
              </p>
              <span
                style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
                className="text-7xl text-[#0d0e13] tracking-[-2.25px]"
              >
                40+
              </span>
            </div>
            <div className="flex flex-col">
              <p
                style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
                className="text-lg leading-[28px] tracking-[-0.2px] text-[#0d0e13]"
              >
                Project we completed along the way
              </p>
              <span
                style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
                className="text-7xl text-[#0d0e13] tracking-[-2.25px]"
              >
                190+
              </span>
            </div>
            <div className="flex flex-col">
              <p
                style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
                className="text-lg leading-[28px] tracking-[-0.2px] text-[#0d0e13]"
              >
                Countries represented in our agency
              </p>
              <span
                style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
                className="text-7xl text-[#0d0e13] tracking-[-2.25px]"
              >
                8+
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
