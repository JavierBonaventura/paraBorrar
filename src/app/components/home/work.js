import Image from "next/image";
import stories from "../../../../public/assets/work-stories.png";
import lens from "../../../../public/assets/work-lens.png";
import rino from "../../../../public/assets/work-rino.png";
import arrowDown from "../../../../public/assets/arrow-down.png";
import arrowRigthBlack from "../../../../public/assets/arrow-r-black.png";

export default function Work() {
  return (
    <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl ">
      <div className="py-10 lg:py-16">
        <div className="">
          <span
            style={{ fontFamily: "Switzer-Regular", fontWeight: "500" }}
            className="text-[4rem] leading-[85px] tracking-[-2px] lg:text-[12.5rem] lg:leading-[12.5rem] lg:tracking-[-6.25px] text-[#0d0e13]"
          >
            Work
          </span>
        </div>
        <div className="grid gird-cols-1 gap-y-8 lg:gap-y-20">
          <div className="pt-5 lg:pt-10 border-t border-[#777777]">
            <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-x-10 ">
              <div className="w-full lg:w-1/2 ">
                <Image className="shadow-xl" src={stories} alt="" />
              </div>
              <div className="w-full lg:w-1/2 gap-y-8 lg:gap-y-0 flex flex-col justify-between">
                <div className="flex flex-col gap-y-3 lg:gap-y-8">
                  <div className="flex justify-between items-center">
                    <span
                      style={{
                        fontFamily: "Switzer-Regular",
                        fontWeight: "500",
                      }}
                      className="text-[2rem] leading-[42px] tracking-[-1px] lg:leading-[64px] lg:tracking-[-1.5px] lg:text-5xl text-[#0D0E13]"
                    >
                      Stories
                    </span>
                    <a href="" className="w-10 ">
                      <Image src={arrowDown} alt="" className="w-full " />
                    </a>
                  </div>
                  <p
                    style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
                    className="text-base leading-[26px] tracking-[-0.18px] lg:text-lg lg:leading-[28px] lg:tracking-[-0.2px] text-[#0D0E13] lg:pr-24 text-justify"
                  >
                    Company name is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                </div>

                <div
                  style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
                  className="text-sm leading-[18px] tracking-[-0.16px] lg:text-lg lg:leading-[28px] lg:tracking-[-0.2px] text-[#979797] flex flex-wrap lg:flex-nowrap gap-2  lg:gap-x-7"
                >
                  <div className="border rounded-2xl border-[#979797] px-4 hover:bg-[#979797] hover:text-white transition-all duration-300 ease-in-out">
                    <a href="">UI/UX</a>
                  </div>
                  <div className="border rounded-2xl border-[#979797] px-4 hover:bg-[#979797] hover:text-white transition-all duration-300 ease-in-out">
                    <a href="">WEB DEVELOPMENT</a>
                  </div>
                  <div className="border rounded-2xl border-[#979797] px-4 hover:bg-[#979797] hover:text-white transition-all duration-300 ease-in-out">
                    <a href="">DESIGN SERVICES</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 lg:pt-10 border-t border-[#777777]">
            <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-x-10 ">
              <div className="w-full lg:w-1/2">
                <Image className="shadow-xl" src={lens} alt="" />
              </div>
              <div className="w-full lg:w-1/2 gap-y-8 lg:gap-y-0 flex flex-col justify-between">
                <div className="flex flex-col gap-y-3 lg:gap-y-8">
                  <div className="flex justify-between items-center">
                    <span
                      style={{
                        fontFamily: "Switzer-Regular",
                        fontWeight: "500",
                      }}
                      className="text-[2rem] leading-[42px] tracking-[-1px] lg:leading-[64px] lg:tracking-[-1.5px] lg:text-5xl text-[#0D0E13]"
                    >
                      LensBaby
                    </span>
                    <a href="" className="w-10 ">
                      <Image src={arrowDown} alt="" className="w-full " />
                    </a>
                  </div>
                  <p
                    style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
                    className="text-base leading-[26px] tracking-[-0.18px] lg:text-lg lg:leading-[28px] lg:tracking-[-0.2px] text-[#0D0E13] lg:pr-24 text-justify"
                  >
                    Company name is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                </div>
                <div
                  style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
                  className="text-sm leading-[18px] tracking-[-0.16px] lg:text-lg lg:leading-[28px] lg:tracking-[-0.2px] text-[#979797] flex flex-wrap lg:flex-nowrap  gap-2  lg:gap-x-7"
                >
                  <div className="border rounded-2xl border-[#979797] px-4 hover:bg-[#979797] hover:text-white transition-all duration-300 ease-in-out">
                    <a href="">WEB DEVELOPMENT</a>
                  </div>
                  <div className="border rounded-2xl border-[#979797] px-4 hover:bg-[#979797] hover:text-white transition-all duration-300 ease-in-out">
                    <a href="">STRATEGY</a>
                  </div>
                  <div className="border rounded-2xl border-[#979797] px-4 hover:bg-[#979797] hover:text-white transition-all duration-300 ease-in-out">
                    <a href="">DESIGN SERVICES</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 lg:pt-10 border-t border-[#777777]">
            <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-x-10 ">
              <div className="w-full lg:w-1/2">
                <Image className="shadow-xl" src={rino} alt="" />
              </div>
              <div className="w-full lg:w-1/2 gap-y-8 lg:gap-y-0 flex flex-col justify-between">
                <div className="flex flex-col gap-y-3 lg:gap-y-8">
                  <div className="flex justify-between items-center">
                    <span
                      style={{
                        fontFamily: "Switzer-Regular",
                        fontWeight: "500",
                      }}
                      className="text-[2rem] leading-[42px] tracking-[-1px] lg:leading-[64px] lg:tracking-[-1.5px] lg:text-5xl text-[#0D0E13]"
                    >
                      Rino Cases
                    </span>
                    <a href="" className="w-10 ">
                      <Image src={arrowDown} alt="" className="w-full " />
                    </a>
                  </div>
                  <p
                    style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
                    className="text-base leading-[26px] tracking-[-0.18px] lg:text-lg lg:leading-[28px] lg:tracking-[-0.2px] text-[#0D0E13] lg:pr-24 text-justify"
                  >
                    Company name is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                </div>
                <div
                  style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
                  className="text-sm leading-[18px] tracking-[-0.16px] lg:text-lg lg:leading-[28px] lg:tracking-[-0.2px] text-[#979797] flex flex-wrap lg:flex-nowrap  gap-2  lg:gap-x-7"
                >
                  <div className="border rounded-2xl border-[#979797] px-4 hover:bg-[#979797] hover:text-white transition-all duration-300 ease-in-out">
                    <a href="">STRATEGY</a>
                  </div>

                  <div className="border rounded-2xl border-[#979797] px-4 hover:bg-[#979797] hover:text-white transition-all duration-300 ease-in-out">
                    <a href="">DIGITAL MARKETING</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 lg:mt-24">
          <a
            href=""
            className="inline-block bg-[#0d0e13] rounded-3xl text-white hover:bg-[#FF6314] transition-all duration-300 ease-in-out"
          >
            <div className="flex justify-center items-center gap-x-10 px-4 py-2">
              <span
                style={{ fontFamily: "Switzer-Regular", fontWeight: "500" }}
                className="text-xl leading-[26px] tracking-[-0.33px] "
              >
                See all work
              </span>
              <div className="w-5 bg-white rounded-full p-1">
                <Image src={arrowRigthBlack} className="w-full" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
