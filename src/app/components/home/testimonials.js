"use client";

import Image from "next/image";
import testimonial from "../../../../public/assets/testimonial.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Test() {
  return (
    <section className="">
      <Swiper
        pagination={{
          type: "fraction",
          renderFraction: (currentClass, totalClass, index, slides) => {
            const totalSlides = slides ? slides.length : 0;
            return `<span class="${currentClass} text-white">${
              index + 1
            }</span> <span class="text-white">-</span> <span class="${totalClass} text-white">${totalSlides}</span>`;
          },
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper swiper-test mb-10"
      >
        <SwiperSlide>
          <div className="bg-[#FF6314]">
            <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl ">
              <div className="py-10 lg:py-20">
                <div className="border-b border-white pb-2">
                  <spa
                    style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
                    n
                    className="text-lg leading-[24px] tracking-[-0.3px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.4px] text-white"
                  >
                    Testimonials
                  </spa>
                </div>
                <div className="flex flex-col gap-y-10">
                  <p
                    style={{ fontFamily: "Switzer-Regular", fontWeight: "500" }}
                    className="text-[2rem] leading-[42px] tracking-[-1px] lg:text-6xl lg:leading-[78px] lg:tracking-[-2.13px] text-white pt-10"
                  >
                    “The TopNotch have worked us up to the top for key search
                    terms and are making sure we stay there."
                  </p>
                  <div className="flex items-center gap-x-10">
                    <div className="w-16">
                      <Image src={testimonial} className="w-full" />
                    </div>
                    <div className="flex flex-col text-white">
                      <span
                        style={{
                          fontFamily: "Switzer-Regular",
                          fontWeight: "600",
                        }}
                        className="text-base leading-[22px] tracking-[-0.27px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.4px]"
                      >
                        Simon Shank
                      </span>
                      <span
                        style={{
                          fontFamily: "Switzer-Regular",
                          fontWeight: "300",
                        }}
                        className="text-sm leading-[18px] tracking-[-0.23px] lg:text-lg  lg:leading-[24px] lg:tracking-[-0.3px]"
                      >
                        Rino Co-Founder
                      </span>
                    </div>
                  </div>
                  <div
                    style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
                    className="text-sm leading-[18px] tracking-[-0.16px] lg:text-lg lg:leading-[28px] lg:tracking-[-0.2px] text-white flex flex-wrap lg:flex-nowrap gap-2 lg:gap-x-7 pt-5 lg:pt-24"
                  >
                    <div className="border rounded-2xl border-white px-4 hover:border-[#979797] hover:bg-[#979797] transition-all ease-in-out duration-300">
                      <a href="">WEB DEVELOPMENT</a>
                    </div>
                    <div className="border rounded-2xl border-white px-4 hover:border-[#979797] hover:bg-[#979797] transition-all ease-in-out duration-300">
                      <a href="">STRATEGY</a>
                    </div>
                    <div className="border rounded-2xl border-white px-4 hover:border-[#979797] hover:bg-[#979797] transition-all ease-in-out duration-300">
                      <a href="">DESIGN SERVICES</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-500">
            <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl ">
              <div className="py-10 lg:py-20">
                <div className="border-b border-white pb-2">
                  <span
                    style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
                    className="text-lg leading-[24px] tracking-[-0.3px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.4px] text-white"
                  >
                    Testimonials
                  </span>
                </div>
                <div className="flex flex-col gap-y-10">
                  <p
                    style={{ fontFamily: "Switzer-Regular", fontWeight: "500" }}
                    className="text-[2rem] leading-[42px] tracking-[-1px] lg:text-6xl lg:leading-[78px] lg:tracking-[-2.13px] text-white pt-10"
                  >
                    “The TopNotch have worked us up to the top for key search
                    terms and are making sure we stay there."
                  </p>
                  <div className="flex items-center gap-x-10">
                    <div className="w-16">
                      <Image src={testimonial} className="w-full" />
                    </div>
                    <div className="flex flex-col text-white">
                      <span
                        style={{
                          fontFamily: "Switzer-Regular",
                          fontWeight: "600",
                        }}
                        className="text-base leading-[22px] tracking-[-0.27px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.4px]"
                      >
                        Simon Shank
                      </span>
                      <span
                        style={{
                          fontFamily: "Switzer-Regular",
                          fontWeight: "300",
                        }}
                        className="text-sm leading-[18px] tracking-[-0.23px] lg:text-lg  lg:leading-[24px] lg:tracking-[-0.3px]"
                      >
                        Rino Co-Founder
                      </span>
                    </div>
                  </div>
                  <div
                    style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
                    className="text-sm leading-[18px] tracking-[-0.16px] lg:text-lg lg:leading-[28px] lg:tracking-[-0.2px] text-white flex flex-wrap lg:flex-nowrap gap-2 lg:gap-x-7 pt-5 lg:pt-24"
                  >
                    <div className="border rounded-2xl border-white px-4 hover:border-[#979797] hover:bg-[#979797] transition-all ease-in-out duration-300">
                      <a href="">WEB DEVELOPMENT</a>
                    </div>
                    <div className="border rounded-2xl border-white px-4 hover:border-[#979797] hover:bg-[#979797] transition-all ease-in-out duration-300">
                      <a href="">STRATEGY</a>
                    </div>
                    <div className="border rounded-2xl border-white px-4 hover:border-[#979797] hover:bg-[#979797] transition-all ease-in-out duration-300">
                      <a href="">DESIGN SERVICES</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
