"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import anima from "../../../../public/assets/logo-anima.png";
import ansa from "../../../../public/assets/logo-ansa.png";
import pigni from "../../../../public/assets/logo-pigni.png";
import tradex from "../../../../public/assets/logo-gdtradex.png";
import newBank from "../../../../public/assets/logo-newbank.png";
import piano from "../../../../public/assets/logo-piano.png";
import conev from "../../../../public/assets/logo-conev.png";
import confidence from "../../../../public/assets/logo-confidence.png";
import escorial from "../../../../public/assets/logo-escorial.png";
import ribera from "../../../../public/assets/logo-ribera.png";
import feriado from "../../../../public/assets/logo-feriado.png";
import finova from "../../../../public/assets/logo-finova.png";
import simpli from "../../../../public/assets/logo-simpli.png";
import colegio from "../../../../public/assets/logo-colegio.png";
import jar from "../../../../public/assets/logo-jar.png";
import kelpie from "../../../../public/assets/logo-kelpie.png";
import pl from "../../../../public/assets/logo-3pl.png";
import abogados from "../../../../public/assets/logo-abogados.png";
import temple from "../../../../public/assets/logo-temple.png";
import bosque from "../../../../public/assets/logo-bosque.png";
import galicia from "../../../../public/assets/logo-galicia.png";
import goland from "../../../../public/assets/logo-goland.png";
import clipex from "../../../../public/assets/logo-clipex.png";
import amura from "../../../../public/assets/logo-amura.png";
import diarma from "../../../../public/assets/logo-diarma.png";
import cdu from "../../../../public/assets/logo-cdu.png";
import mccain from "../../../../public/assets/logo-mccain.png";
import meikle from "../../../../public/assets/logo-meikle.png";
import simplitec from "../../../../public/assets/logo-simplitec.png";
import smilepic from "../../../../public/assets/logo-smilepic.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation]);

export default function Clients() {
  return (
    <div className="border-t border-[#777777] py-10 lg:py-16">
      <div className="container max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex flex-col gap-y-20">
        <div className="flex  w-full justify-between ">
          <div className="flex flex-col gap-y-10 lg:gap-y-16 w-full">
            <span
              style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
              className="text-lg leading-[24px] tracking-[-0.3px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.4px] text-[#0D0E13]"
            >
              Features clients
            </span>
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-y-7 lg:gap-y-20">
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300">
                <Image src={anima} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={ansa} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={pigni} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={tradex} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={newBank} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={piano} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={conev} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={confidence} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={escorial} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={ribera} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={feriado} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={finova} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={simpli} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={colegio} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={jar} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={kelpie} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={pl} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={abogados} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={temple} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={bosque} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={galicia} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={goland} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={clipex} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={amura} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={diarma} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={cdu} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={mccain} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={meikle} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={simplitec} className="w-full" />
              </div>
              <div className="w-28 lg:w-40 mx-auto hover:-translate-y-1 transition-all ease-in-out duration-300 my-auto">
                <Image src={smilepic} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden swiper-clients pt-10 ">
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          loop={true}
          navigation={true}
          pagination={false}
          className=""
        >
          <SwiperSlide className="">
            <Image className="mx-auto px-8" src={anima} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={ansa} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={pigni} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={tradex} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={newBank} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={piano} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={conev} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={confidence} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={escorial} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={ribera} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={feriado} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={finova} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={simpli} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={colegio} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={jar} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={kelpie} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={pl} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={abogados} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={temple} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={bosque} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={galicia} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={goland} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={clipex} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={amura} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={diarma} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={cdu} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={mccain} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={meikle} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={simplitec} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="mx-auto px-8" src={smilepic} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
