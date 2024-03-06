import Image from "next/image";
import arrowRightOrange from "../../../../public/assets/arrow-right-orange.png";

export default function Question() {
  return (
    <div className="border-t border-[#777777] py-10 lg:py-16">
      <div className="container max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex flex-col gap-y-20">
        <div className="space-y-16">
          <h1
            style={{ fontFamily: "Switzer-Regular", fontWeight: "500" }}
            className="text-[4rem] leading-[4rem] tracking-[-2px] lg:text-[12.5rem] lg:leading-[12.5rem] lg:tracking-[-0.4px] text-center text-[#0d0e13]"
          >
            Want to start <br />a project?
          </h1>
          <div className="flex justify-center">
            <a
              href=""
              className="inline-block bg-[#FF6314] rounded-full text-white"
            >
              <div className="flex justify-center items-center gap-x-10 px-6 py-4">
                <span
                  style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
                  className="text-2xl leading-[32px] tracking-[-0.4px] lg:text-[2rem] lg:leading-[42px] lg:tracking-[-0.53px]"
                >
                  Let´s Talk
                </span>
                <div className="w-7 bg-white rounded-full p-1">
                  <Image src={arrowRightOrange} className="w-full" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
