import React from "react";
import CardBg1 from "../assets/equipment_card1.jpg";
import CardBg2 from "../assets/equipment_card2.jpg";
import CardBg3 from "../assets/equipment_card3.jpg";
import CardBg4 from "../assets/equipment_card4.jpg";
import CardBg5 from "../assets/equipment_card5.png";
import CardBg6 from "../assets/equipment_card6.png";
import CardIcon1 from "../assets/card1.svg";
import CardIcon2 from "../assets/card2.svg";
import CardIcon3 from "../assets/card3.svg";
import CardIcon4 from "../assets/card4.svg";
import CardIcon5 from "../assets/card5.svg";
import CardIcon6 from "../assets/card6.svg";
import CardImg1 from "../assets/equipment_img1.png";
import CardImg2 from "../assets/equipment_img2.png";
import CardImg3 from "../assets/equipment_img3.png";
import CardImg4 from "../assets/equipment_img4.png";
import CardImg5 from "../assets/equipment_img5.png";
import CardImg6 from "../assets/equipment_img6.png";

const Equipment = () => {
  const equipmentCards = [
    {
      bg_img: CardBg1,
      icon: CardIcon1,
      title: "Зерноочиститель оборудование",
      img: CardImg1,
      w: 180,
      top: "30px",
    },
    {
      bg_img: CardBg2,
      icon: CardIcon2,
      title: "Оборудование для производства круп",
      img: CardImg2,
      w: 130,
      top: "10px",
      right: "20px",
    },
    {
      bg_img: CardBg3,
      icon: CardIcon3,
      title: "Лабораторное оборудование",
      img: CardImg3,
      w: 160,
      top: "10px",
      right: "20px",
    },
    {
      bg_img: CardBg4,
      icon: CardIcon4,
      title: "Оборудование для производства муки",
      img: CardImg4,
      w: 190,
      top: "40px",
    },
    {
      bg_img: CardBg5,
      icon: CardIcon5,
      title: "Транспортное и аспирационное оборудование",
      img: CardImg5,
      w: 250,
      top: "25px",
    },
    {
      bg_img: CardBg6,
      icon: CardIcon6,
      title: "Самотечное оборудование",
      img: CardImg6,
      w: 225,
      top: "20px",
    },
  ];

  return (
    <div className="max-w-[1450px] mx-auto pt-[50px] px-[12px] lg:px-[30px] 2xl:px-[0px] font-global">
      <h2 className="uppercase text-[18px] text-center md:text-left md:text-[28px] mb-[30px]">
        <b>Н</b>аше оборудование
      </h2>
      <div className="hidden lg:grid grid-cols-3 gap-[20px]">
        {equipmentCards.map((item, index) => {
          return (
            <div
              key={index}
              className="relative h-[252px] bg-cover flex items-center overflow-hidden z-2 shadow-xl"
            >
              <img
                src={item.bg_img}
                alt="bg-img"
                className="absolute top-0 left-0 w-full -z-2"
              />
              <div className="absolute top-0 left-0 w-full bg-[#ffffffbe] h-full -z-1 backdrop-blur-[2px]"></div>
              <div className="flex items-center z-2 ">
                <div className="flex items-center gap-[10px] bg-white px-[20px] py-[10px] w-[100%]">
                  <img src={item.icon} alt="icon" />
                  <p className="text-[14px] w-[60%]">{item.title}</p>
                </div>
                <img
                  src={item.img}
                  alt="img"
                  className="absolute top-[20%] right-0"
                  style={{ width: item.w, top: item.top, right: item.right }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid lg:hidden grid-cols-2 gap-[20px]">
        {equipmentCards.map((item, index) => {
          return (
            <div
              key={index}
              className="relative bg-cover h-[270px] flex items-center bg-center bg-no-repeat overflow-hidden z-2 shadow-xl"
            >
              <img
                src={item.bg_img}
                alt="bg-img"
                className="absolute top-0 left-0 w-full -z-2 h-full"
              />
              <div className="absolute top-0 left-0 w-full bg-[#ffffffbe] h-full -z-1 backdrop-blur-[2px]"></div>
              <div className="flex items-center justify-center flex-col p-[5px]">
                <div className="flex items-center flex-col justify-center bg-white p-[10px] text-center">
                  <img src={item.icon} alt="icon" className="w-[20%]" />
                  <p className="text-[10px] font-semibold">{item.title}</p>
                </div>
                <img src={item.img} alt="img" className={`w-[${item.w}] mt-[10px]`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Equipment;
