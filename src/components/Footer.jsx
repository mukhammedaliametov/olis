import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 text-sm relative">
      <div className="max-w-[1450px] mx-auto px-4 font-global flex flex-col lg:flex-row gap-[20px] lg:gap-0 items-top justify-between">
        <div>
          <Link to='/'><img src={logo} alt="logo" className="w-[160px]" /></Link>
          <p className="text-[14px] opacity-50 my-[20px]">© 2021 ООО «ОЛИС». <br /> Все права защищены</p>
          <Link to="/" className="text-[#FEAD04] my-[15px]">Карта сайта</Link>
        </div>
        <div>
          <p className="font-semibold">Подпишись на рассылку</p>
          <div className="flex items-center mt-[10px]">
            <input type="text" placeholder="E-mail" className="border-1 border-[#F1F1F1] py-[10px] px-[15px] outline-none" />
            <div className="py-[10px] px-[15px] bg-[#FEAD04] cursor-pointer text-white">
               <IoIosSend className="text-[22px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="font-semibold">Наша компания</p>
          <Link to={"/"}>Как мы работаем</Link>
          <Link to={"/"}>Отзывы о компании</Link>
          <Link to={"/"}>Новинки компании</Link>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="font-semibold">Пресс-центр</p>
          <Link to={"/"}>Новости</Link>
          <Link to={"/"}>Статьи</Link>
          <Link to={"/"}>Выставки</Link>
        </div>
        <div>
          <p className="font-semibold mb-[10px]">Контакты</p>
          <div className="flex items-center gap-[20px]">
            <div className="flex flex-col gap-[6px]">
              <div>
                <p className="font-semibold text-[14px] mb-[5px]">Телефон</p>
                <a href="tel: +38 (067) 822-85-58" className="flex items-center gap-[5px] text-[12px]">
                  <FaPhoneAlt className="text-[#FEAD04]" /> +38 (067) 822-85-58
                </a>
              </div>
              <div>
                <p className="font-semibold text-[14px] mb-[5px]">Звонки из СНГ:</p>
                <a href="tel: +7 (831) 288-93-74" className="flex items-center gap-[5px] text-[12px]">
                  <FaPhoneAlt className="text-[#FEAD04]" /> +7 (831) 288-93-74
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div>
                <p className="font-semibold text-[14px] mb-[5px]">E-mail</p>
                <a href="mailto: olis1@ukr.net" className="flex items-center gap-[5px] text-[12px]">olis1@ukr.net</a>
                <a href="mailto: info@olis.com.ua" className="flex items-center gap-[5px] text-[12px]">info@olis.com.ua</a>
              </div>
              <div>
                <p className="font-semibold text-[14px] mb-[5px]">Время работы</p>
                <p className="flex items-center gap-[5px] text-[12px]">с 8:00 - до 17:00</p>
              </div>
            </div>
          </div>
        </div>
        <div>

        <div className="flex items-center gap-[10px] text-[18px]">
          <Link to="/" className="bg-[#FEAD04] text-white w-[28px] h-[28px] rounded-full flex items-center justify-center">
            <FaLinkedinIn />
          </Link>
          <Link to="/" className="bg-[#FEAD04] text-white w-[28px] h-[28px] rounded-full flex items-center justify-center">
            <FaYoutube />
          </Link>
          <Link to="/" className="bg-[#FEAD04] text-white w-[28px] h-[28px] rounded-full flex items-center justify-center">
            <FaFacebookF />
          </Link>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
