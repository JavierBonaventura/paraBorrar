import Image from "next/image";
import stories from "../../../../public/assets/work-stories.png";
import lens from "../../../../public/assets/work-lens.png";
import rino from "../../../../public/assets/work-rino.png";
import arrowDown from "../../../../public/assets/arrow-down.png";
import arrowRigthBlack from "../../../../public/assets/arrow-r-black.png";

export default function Unnamed() {
  return (
    <div className="border-t border-[#777777] py-10 lg:py-16 mb-5 lg:mb-16">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl ">
        <div className="flex flex-col justify-center mt-10 lg:mt-24 gap-y-32">
          <p
            style={{ fontFamily: "Switzer-Regular", fontWeight: "500" }}
            className="text-[4rem] leading-[74px] tracking-[-2px] text-[#0D0E13] text-center"
          >
            A human-centric approach is at the core of our principles, and we
            build products for the many based on the diverse perspectives and
            life experiences of our team.
          </p>
          <div className="mx-auto">
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
    </div>
  );
}
