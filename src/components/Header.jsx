import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { FaAngleDown } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { MdPhone } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

const Header = () => {

    const [nav, setNav] = useState(0);
    const handleClick = () => setNav(!nav);
    const closeNav = () => setNav(false);

  const menuItems = [
    { title: "О компании", hasDropdown: true },
    { title: "Объекты", hasDropdown: true },
    { title: "Пресс-центр", hasDropdown: true },
    { title: "Отзывы", hasDropdown: false, link: "/reviews" },
    { title: "Контакты", hasDropdown: true },
    { title: "Комплексные решения", hasDropdown: true },
    { title: "Наше оборудование", hasDropdown: true },
    { title: "Оснащение лабораторий", hasDropdown: true },
    { title: "Услуги компании", hasDropdown: true },
  ];

  return (
    <div className="max-w-[1450px] mx-auto py-[20px] px-[12px] lg:px-[30px] 2xl:px-[0px] flex items-center justify-between font-global text-[14px]">
      <Link to={"/"}>
        <img
          src={Logo}
          alt="logo"
          className="w-[100px] md:w-[140px] 2xl:mr-[140px]"
        />
      </Link>
      <div className="hidden lg:flex justify-center items-center flex-col">
        <div className="flex items-center gap-[15px]">
          {menuItems.slice(0, 5).map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-[5px] cursor-pointer"
              >
                {item.link ? (
                  <Link to={item.link}>{item.title}</Link>
                ) : (
                  <span>{item.title}</span>
                )}
                {item.hasDropdown && <FaAngleDown />}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-[15px] border-t border-[#0000004D] pt-[7px] mt-[8px]">
          {menuItems.slice(5, 9).map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-[5px] cursor-pointer"
              >
                <span>{item.title}</span>
                {item.hasDropdown && <FaAngleDown />}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-[15px]">
        <GoSearch className="text-[20px] cursor-pointer" />
        <div className="flex items-center gap-[5px] bg-white rounded-[5px] shadow-sm py-[8px] px-[10px] cursor-pointer">
          <span className="font-semibold">RU</span> <FaAngleDown />
        </div>
        <div className="hidden 2xl:block">
          <span className="font-light">Наши номера</span>
          <div className="flex items-center gap-[5px] cursor-pointer">
            <MdPhone className="text-[16px] text-[#FEAD04]" />
            <a href="tel: +38 (067) 822-85-58" className="font-bold">
              +38 (067) 822-85-58
            </a>
            <FaAngleDown />
          </div>
        </div>
        <Link
          to={"tel: +38 (067) 822-85-58"}
          className="hidden lg:block 2xl:hidden bg-[#FEAD04] rounded-[5px] shadow-sm py-[8px] px-[10px] cursor-pointer"
        >
          <MdPhone className="text-[24px] text-white" />
        </Link>
        <div className="block lg:hidden bg-[#FEAD04] rounded-full shadow-sm py-[8px] px-[10px] cursor-pointer" onClick={handleClick}>
          <TfiMenuAlt className="text-[18px] text-white" />
        </div>
      </div>
      <div className={`fixed top-0 w-full h-screen bg-[#FEAD04] text-white px-[20px] flex justify-center flex-col items-center text-center transition-all duration-500 ${nav ? 'left-0' : '-left-[400px]'}`}>
        <IoMdClose className="text-[24px] mt-[27px] mr-[20px] absolute top-0 right-0" onClick={closeNav} />
        <div className="text-[17px] mt-[40px]">
          {menuItems.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-[5px] cursor-pointer my-[15px]"
              >
                {item.link ? (
                  <Link to={item.link}>{item.title}</Link>
                ) : (
                  <span>{item.title}</span>
                )}
                {item.hasDropdown && <FaAngleDown className="text-[14px]" />}
              </div>
            );
          })}
        </div>
        <div className="w-full border-t border-[#0000001A] flex justify-center flex-col items-center mx-[130px] pt-[15px]">
          <span className="font-light">Наши номера</span>
          <div className="flex items-center gap-[5px] cursor-pointer">
            <MdPhone className="text-[#FEAD04]" />
            <a href="tel: +38 (067) 822-85-58" className="font-semibold">
              +38 (067) 822-85-58
            </a>
            <FaAngleDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
