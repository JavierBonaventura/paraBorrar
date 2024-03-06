import Image from "next/image";
import stories from "../../../../public/assets/work-stories.png";
import lens from "../../../../public/assets/work-lens.png";
import rino from "../../../../public/assets/work-rino.png";
import arrowDown from "../../../../public/assets/arrow-down.png";
import arrowRigthBlack from "../../../../public/assets/arrow-r-black.png";

export default function Work() {
  return (
    <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl ">
      <div className="py-10 lg:py-16 ">
        <div className="grid grid-cols-1 gap-y-8 lg:gap-y-20">
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
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 border-t border-transparent lg:border-[#777777] pt-5 lg:pt-10 mt-5 lg:mt-10">
          <div className="flex flex-col gap-y-3 lg:gap-x-10 border-t border-[#777777] lg:border-transparent pt-5 lg:pt-0">
            <div className="w-full">
              <Image className="shadow-xl" src={stories} alt="" />
            </div>
            <div className="w-full gap-y-8  flex flex-col justify-between">
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
                  typesetting industry. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor.
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
          <div className="flex flex-col gap-y-3 lg:gap-x-10 border-t border-[#777777] lg:border-transparent pt-5 lg:pt-0 ">
            <div className="w-full">
              <Image className="shadow-xl" src={stories} alt="" />
            </div>
            <div className="w-full gap-y-8  flex flex-col justify-between">
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
                  typesetting industry. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 border-t border-transparent lg:border-[#777777] pt-5 lg:pt-10 mt-5 lg:mt-10">
          <div className="flex flex-col gap-y-3 lg:gap-x-10 border-t border-[#777777] lg:border-transparent pt-5 lg:pt-0 ">
            <div className="w-full">
              <Image className="shadow-xl" src={stories} alt="" />
            </div>
            <div className="w-full gap-y-8  flex flex-col justify-between">
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
                  typesetting industry. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor.
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
          <div className="flex flex-col gap-y-3 lg:gap-x-10 border-t border-[#777777] lg:border-transparent pt-5 lg:pt-0 ">
            <div className="w-full">
              <Image className="shadow-xl" src={stories} alt="" />
            </div>
            <div className="w-full gap-y-8  flex flex-col justify-between">
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
                  typesetting industry. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 border-t border-transparent lg:border-[#777777] pt-5 lg:pt-10 mt-5 lg:mt-10">
          <div className="flex flex-col gap-y-3 lg:gap-x-10 border-t border-[#777777] lg:border-transparent pt-5 lg:pt-0 ">
            <div className="w-full">
              <Image className="shadow-xl" src={stories} alt="" />
            </div>
            <div className="w-full gap-y-8  flex flex-col justify-between">
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
                  typesetting industry. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor.
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
          <div className="flex flex-col gap-y-3 lg:gap-x-10 border-t border-[#777777] lg:border-transparent pt-5 lg:pt-0 ">
            <div className="w-full">
              <Image className="shadow-xl" src={stories} alt="" />
            </div>
            <div className="w-full gap-y-8  flex flex-col justify-between">
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
                  typesetting industry. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 border-t border-transparent lg:border-[#777777] pt-5 lg:pt-10 mt-5 lg:mt-10">
          <div className="flex flex-col gap-y-3 lg:gap-x-10 border-t border-[#777777] lg:border-transparent pt-5 lg:pt-0 ">
            <div className="w-full">
              <Image className="shadow-xl" src={stories} alt="" />
            </div>
            <div className="w-full gap-y-8  flex flex-col justify-between">
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
                  typesetting industry. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor.
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
          <div className="flex flex-col gap-y-3 lg:gap-x-10 border-t border-[#777777] lg:border-transparent pt-5 lg:pt-0 ">
            <div className="w-full">
              <Image className="shadow-xl" src={stories} alt="" />
            </div>
            <div className="w-full gap-y-8  flex flex-col justify-between">
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
                  typesetting industry. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor.
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
      </div>
    </div>
  );
}
