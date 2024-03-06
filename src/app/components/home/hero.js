import Image from "next/image";
import LogoWa from "../../../../public/assets/icon-whatsapp.svg";

export default function Hero() {
  return (
    <div
      className=" bg-[#0d0e13] text-white h-screen-hero-home-custom relative flex flex-col justify-start
     "
    >
      <a
        href=""
        className="hidden absolute right-80 top-40 2xl:top-60 2xl:right-[40rem] bg-[#FF6314] p-10 rounded-full h-36 w-36 lg:flex items-center justify-center  hover:-translate-y-2 transition-all ease-in-out duration-300"
      >
        <div className="text-center text-lg uppercase">
          <span style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}>
            Let´s <br /> Talk
          </span>
        </div>
      </a>
      <div className="container max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <a
          href=""
          className="fixed bottom-32 right-5 w-12 lg:w-14 z-50 hover:scale-110 transition-all ease-in-out duration-300"
        >
          <Image src={LogoWa} alt="" className="w-full" />
        </a>
        <div className="py-10  2xl:pt-32 space-y-10 lg:space-y-0">
          <h5
            style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
            className="text-xs leading-[22px] tracking-[-0.13px] lg:text-lg lg:leading-[28px] lg:tracking-[-0.2px] uppercase"
          >
            “We are dedicated to thinking, designing <br /> and developing the
            best websites”
          </h5>
          <h1
            style={{ fontFamily: "Switzer-Regular", fontWeight: "500" }}
            className="text-[4rem] leading-[4rem] tracking-[-2px] lg:text-[11.25rem] lg:leading-[12.5rem] lg:tracking-[-6.25px]"
          >
            In Fellow. <br />
            We make webs
          </h1>
          <div className="lg:hidden bg-[#FF6314]  rounded-full h-24 w-24 flex items-center justify-center">
            <div className="text-center text-sm uppercase">
              <span
                style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
              >
                Let´s <br /> Talk
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#777777] absolute bottom-0 w-full py-5">
        <div
          className="container max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex justify-between "
          style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
        >
          <span className="text-sm leading-[18px] tracking-[-0.19px] lg:text-lg lg:leading-[22px] lg:tracking-[-0.22px]">
            © 2024
          </span>
          <a
            href="#first-section"
            className="hidden lg:block text-sm leading-[18px] tracking-[-0.19px] lg:text-lg lg:leading-[22px] lg:tracking-[-0.22px] text-[#9c9b9b] border-b border-transparent hover:border-[#9c9b9b] transition-all duration-300 ease-in-out"
          >
            Scroll to explore
          </a>
          <a
            href="#second-section"
            className="block lg:hidden text-sm leading-[18px] tracking-[-0.19px] lg:text-lg lg:leading-[22px] lg:tracking-[-0.22px] text-[#9c9b9b] border-b border-transparent hover:border-[#9c9b9b] transition-all duration-300 ease-in-out"
          >
            Scroll to explore
          </a>
        </div>
      </div>
    </div>
  );
}
