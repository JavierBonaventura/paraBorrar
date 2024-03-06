import Image from "next/image";
import logoBlack from "../../../public/assets/logo-fellow-black.png";
import place from "../../../public/assets/icon-place.png";
import tel from "../../../public/assets/icon-tel.png";
export default function Footer() {
  return (
    <section>
      <div className="border-t border-[#777777]  py-10 lg:py-16">
        <div className="container max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-y-0">
          <div className="w-full lg:w-1/2">
            <div className="w-24">
              <Image src={logoBlack} className="w-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-5 lg:gap-x-24 w-full lg:w-1/2 text-[#0D0E13]">
            <div className="space-y-1 lg:space-y-5">
              <span
                style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
                className="text-lg leading-[24px] tracking-[-0.25px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.33px]"
              >
                Menú
              </span>
              <div
                style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
                className="flex flex-col text-sm leading-[24px] tracking-[-0.19px] lg:text-base lg:leading-[26px] lg:tracking-[-0.22px]"
              >
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    Work
                  </span>
                </a>
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    About
                  </span>
                </a>
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    Services
                  </span>
                </a>
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    Contact
                  </span>
                </a>
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    Careers
                  </span>
                </a>
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    Testimonials
                  </span>
                </a>
              </div>
            </div>
            <div className="space-y-1 lg:space-y-5 ">
              <span
                style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
                className="text-lg leading-[24px] tracking-[-0.25px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.33px]"
              >
                Services
              </span>
              <div
                style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
                className="flex flex-col text-sm leading-[24px] tracking-[-0.19px] lg:text-base lg:leading-[26px] lg:tracking-[-0.22px]"
              >
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    Strategy
                  </span>
                </a>
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    Creative Content
                  </span>
                </a>
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    Web Development
                  </span>
                </a>
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    Design Services
                  </span>
                </a>
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    Digital Marketing{" "}
                  </span>
                </a>
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    Insights
                  </span>
                </a>
              </div>
            </div>
            <div className="space-y-1 lg:space-y-5 ">
              <span
                style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
                className="text-lg leading-[24px] tracking-[-0.25px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.33px]"
              >
                Social
              </span>
              <div
                style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
                className="flex flex-col text-sm leading-[24px] tracking-[-0.19px] lg:text-base lg:leading-[26px] lg:tracking-[-0.22px]"
              >
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    Instagram
                  </span>
                </a>
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    Twitter
                  </span>
                </a>
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    LinkedIn
                  </span>
                </a>
                <a href="">
                  <span className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300">
                    Facebook
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#777777] py-5 lg:py-10 text-[#0D0E13]">
        <div className="container max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between gap-y-5 lg:gap-y-0 ">
          <div className="flex justify-start w-full lg:w-1/2 gap-x-4">
            <div className="w-7">
              <Image src={place} className="w-full" />
            </div>
            <a
              href="https://www.google.com/maps/place/CEC,+Rivadavia+129,+B1642+San+Isidro,+Provincia+de+Buenos+Aires/data=!4m2!3m1!1s0x95bcb034f9c50e19:0x3b0e3c2bca124430?sa=X&ved=2ahUKEwix1-Gn18GEAxUfpJUCHao8AjkQ8gF6BAgPEAA"
              target="_blank"
              style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
              className="text-sm leading-[24px] tracking-[-0.19px] lg:text-base lg:leading-[28px] lg:tracking-[-0.22px] border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300"
            >
              Rivadavia 129, San Isidro, <br /> Buenos Aires, Argentina.
            </a>
          </div>
          <div className="flex justify-start items-center  w-full lg:w-1/2 gap-x-4">
            <div className="w-7">
              <Image src={tel} className="w-full" />
            </div>
            <span
              style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
              className="text-lg leading-[24px] tracking-[-0.25px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.33px]"
            >
              +54 11 6447-4115
            </span>
          </div>
        </div>
      </div>
      <div
        style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
        className="border-t border-[#777777] py-5 lg:py-10"
      >
        <div className="container max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between text-sm leading-[19px] tracking-[-0.19px] lg:text-base lg:leading-[22px] gap-y-2 lg:gap-y-0 text-[#0D0E13]">
          <div className="w-full lg:w-1/2">
            <span>©2024 Digital Fellow.</span>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-between gap-y-2 lg:gap-y-0">
            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-between">
              <a
                href=""
                className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300"
              >
                Terms & Conditions
              </a>
              <a
                href=""
                className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300"
              >
                Privacy Policy
              </a>
            </div>
            <div className="w-full lg:w-1/2 flex lg:justify-end text-[#777777]">
              <a
                href="#nav"
                className="border-b border-transparent hover:border-[#777777] transition-all ease-in-out duration-300"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
