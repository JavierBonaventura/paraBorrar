import Image from "next/image";
import LogoWa from "../../../../public/assets/icon-whatsapp.svg";
import Plus from "../../../../public/assets/plus.png";

export default function Hero() {
  return (
    <div
      className=" bg-[#F4F4F4] text-[#0D0E13] lg:h-[70vh] relative flex flex-col justify-start
     "
    >
      <div className="container max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <a
          href=""
          className="fixed bottom-20 right-10 w-10 lg:w-14 z-50 hover:scale-110 transition-all ease-in-out duration-300"
        >
          <Image src={LogoWa} alt="" className="w-full" />
        </a>
        <div className="pb-10 pt-20 lg:pt-0 lg:pb-0  2xl:pt-32 space-y-4 lg:space-y-0">
          <h5
            style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
            className="text-xs leading-[22px] tracking-[-0.13px] lg:text-lg lg:leading-[28px] lg:tracking-[-0.2px] uppercase"
          >
            WE TRANSFORM IDEA <br /> INTO WORLD-CLASS EXPERIENCES.
          </h5>
          <h1
            style={{ fontFamily: "Switzer-Regular", fontWeight: "500" }}
            className="text-[4rem] leading-[4rem] tracking-[-2px] lg:text-[11.25rem] lg:leading-[12.5rem] lg:tracking-[-6.25px]"
          >
            Our Work
          </h1>
        </div>
      </div>
      <div className="border-t-2 border-[#9E9E9E] lg:absolute lg:bottom-0 w-full py-5">
        <div
          className="container max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex justify-between "
          style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
        >
          <span className="text-sm leading-[18px] tracking-[-0.19px] lg:text-lg lg:leading-[22px] lg:tracking-[-0.22px]">
            © 2024
          </span>
          <div className="flex justify-center items-center gap-x-3">
            <a
              href=""
              className="text-sm leading-[18px] tracking-[-0.19px] lg:text-lg lg:leading-[22px] lg:tracking-[-0.22px]"
            >
              Filter: All work
            </a>
            <div className="w-3">
              <Image src={Plus} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
