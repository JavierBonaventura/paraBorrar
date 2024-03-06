import Image from "next/image";
import arrowR from "../../../../public/assets/arrow-r.png";

export default function About() {
  return (
    <div
      id="second-section"
      className="border-t border-[#777777] py-10 lg:py-16"
    >
      <div className="container max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-y-0 w-full justify-between">
          <div className="flex flex-col gap-y-7">
            <span
              style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
              className="text-lg leading-[24px] tracking-[-0.3px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.4px] text-[#0d0e13]"
            >
              About us
            </span>
            <a
              href=""
              className="hidden lg:flex items-center gap-x-2 border border-[#777777] rounded-3xl py-1 px-4 hover:bg-[#FF6314] hover:border-[#ff6314] transition-all ease-in-out duration-300 "
            >
              <span
                style={{ fontFamily: "Switzer-Regular", fontWeight: "500" }}
                className="text-xl leading-[26px] tracking-[-0.33px] text-[#0d0e13]"
              >
                Get to know us
              </span>
              <div className="w-4 bg-black rounded-full p-1">
                <Image src={arrowR} alt="" className="w-[full]" />
              </div>
            </a>
          </div>
          <div className="w-full lg:w-[80%]">
            <p
              style={{ fontFamily: "Switzer-Regular", fontWeight: "500" }}
              className="text-[2rem] leading-[42px] tracking-[-1px] lg:text-[4rem] lg:leading-[4.6rem] lg:tracking-[-2px] text-[#0d0e13]"
            >
              We are a dynamic development agency specializing in websites that
              captivate and satisfy clients.
            </p>
          </div>

          <a
            href=""
            className="w-[210px] flex lg:hidden justify-between items-center gap-x-2 border border-[#777777] rounded-3xl py-1 px-4 "
          >
            <span className="text-xl leading-[26px] tracking-[-0.33px] text-[#0d0e13]">
              Get to know us
            </span>{" "}
            <div className="w-6 bg-black rounded-full p-1">
              <Image src={arrowR} alt="" className="w-[full]" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
