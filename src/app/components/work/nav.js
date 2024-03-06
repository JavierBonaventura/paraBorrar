import Image from "next/image";
import logoBlack from "../../../../public/assets/logo-fellow-black.png";
import menu from "../../../../public/assets/menu-black.png";

export default function Nav() {
  return (
    <div id="nav" className="bg-white text-[#0D0E13] h-[5rem]">
      <div className="container max-w-screen-xl 2xl:max-w-screen-2xl mx-auto  flex h-full items-center relative">
        <div className="flex w-full items-center gap-x-20">
          <a href="/" className="w-24">
            <Image src={logoBlack} alt="" className="w-full" />
          </a>
          <div
            className="hidden lg:flex gap-x-10"
            style={{ fontFamily: "Switzer-Regular", fontWeight: "400" }}
          >
            <a
              href="/work"
              className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300"
            >
              Work
            </a>
            <a
              href="/about"
              className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300"
            >
              About
            </a>
            <a
              href=""
              className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300"
            >
              Services
            </a>
            <a
              href=""
              className="border-b border-transparent hover:border-[#0D0E13] transition-all ease-in-out duration-300"
            >
              Contact
            </a>
          </div>
        </div>
        <a href="" className="w-16 ">
          <Image src={menu} alt="" className="w-full" />
        </a>
      </div>
    </div>
  );
}
