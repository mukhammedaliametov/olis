import React from "react";
import { FaLinkedinIn, FaYoutube, FaFacebook } from "react-icons/fa";
import HeroBg from "../assets/hero_bg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-[1450px] mx-auto py-[20px] px-[12px] lg:px-[30px] 2xl:px-[0px]">
      <div className="flex flex-col-reverse md:flex-row items-center w-full justify-between mt-[30px]">
        <div className="w-full lg:w-[300px] flex justify-between items-center gap-[10px] font-global">
          <div className="hidden lg:flex flex-col gap-[16px]">
            <p className="-rotate-90 mt-[-30px] mb-[20px] ml-[-16px] font-bold">
              Соцсети
            </p>
            <div className="w-[1px] h-[60px] bg-black ml-[16px]"></div>
            <div className="flex flex-col gap-[6px] m-[0px]">
              <Link to={"#"} className="w-[30px] h-[30px] rounded-[5px] flex justify-center items-center bg-[#FEAD04] text-white opacity-75 hover:opacity-100">
                <FaLinkedinIn />
              </Link>
              <Link to={"#"} className="w-[30px] h-[30px] rounded-[5px] flex justify-center items-center bg-[#FEAD04] text-white opacity-75 hover:opacity-100">
                <FaYoutube />
              </Link>
              <Link to={"#"} className="w-[30px] h-[30px] rounded-[5px] flex justify-center items-center bg-[#FEAD04] text-white opacity-75 hover:opacity-100">
                <FaFacebook />
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-[150px] lg:w-[490px] z-2 mt-[20px] md:mt-0">
            <h1 className="text-[28px]/[26px] lg:text-[36px]/[38px] w-full text-[#FEAD04] font-black">ТЕХНОЛОГИИ <p className="bg-[#F8F8F8] py-[15px] w-full sm:w-[440px]">И ОБОРУДОВАНИЕ</p></h1>
            <p className="w-full md:w-[310px] font-light text-[22px] md:text-[22px] border-t border-black pt-[10px] mt-[10px]">для очистки, переработки и контроля качества зерна</p>
            <button className="py-[15px] px-[45px] bg-[#FEAD04] text-white font-bold mt-[20px] cursor-pointer opacity-75 hover:opacity-100 duration-300">Оставить заявку</button>
          </div>
        </div>
        <div className="w-full md:w-[750px] xl:w-[880px] 2xl:w-[1000px] md:ml-[-200px]  z-1">
          <img src={HeroBg} alt="hero-bg" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
