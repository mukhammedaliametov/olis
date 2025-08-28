import React from "react";
import NewsImg from "../assets/news.png";
import { FaAngleRight } from "react-icons/fa6";

const News = () => {
  const newsItems = [
    {
      img: NewsImg,
      title: "Компания ОЛИС запустила в Турции завод ",
      info: 'Компания "ОЛИС" в 2020 году поставила комплектную линию производства зерновых хлопьев',
      date: "15.06.2021",
    },
    {
      img: NewsImg,
      title: "Компания ОЛИС запустила в Турции завод ",
      info: 'Компания "ОЛИС" в 2020 году поставила комплектную линию производства зерновых хлопьев',
      date: "15.06.2021",
    },
    {
      img: NewsImg,
      title: "Компания ОЛИС запустила в Турции завод ",
      info: 'Компания "ОЛИС" в 2020 году поставила комплектную линию производства зерновых хлопьев',
      date: "15.06.2021",
    },
    {
      img: NewsImg,
      title: "Компания ОЛИС запустила в Турции завод ",
      info: 'Компания "ОЛИС" в 2020 году поставила комплектную линию производства зерновых хлопьев',
      date: "15.06.2021",
    },
    {
      img: NewsImg,
      title: "Компания ОЛИС запустила в Турции завод ",
      info: 'Компания "ОЛИС" в 2020 году поставила комплектную линию производства зерновых хлопьев',
      date: "15.06.2021",
    },
  ];
  return (
    <div className="max-w-[1450px] mx-auto pt-[50px] px-[12px] lg:px-[30px] 2xl:px-[0px] font-global mb-[50px]">
      <h2 className="uppercase text-[18px] text-center md:text-[28px] mb-[30px]">
        <b>П</b>оследние новости
      </h2>
      <div className="flex items-center gap-[20px] overflow-x-scroll">
        {newsItems.map((item, index) => {
            return(
                <div key={index} className="flex items-center relative w-full md:w-[28%] flex-shrink-0 bg-white">
                    <img src={item.img} alt="img" className="w-[130px]" />
                    <p className="absolute left-0 top-[10px] text-[14px] bg-[#FEAD04] text-white font-semibold p-1">{item.date}</p>
                    <div className="px-[10px]">
                        <p className="font-semibold text-[16px]">{item.title}</p>
                        <p className="mt-[5px] text-[12px] font-regular">{item.info}</p>
                        <button className="flex items-center gap-[8px] text-[13px] my-[10px] text-[#FEAD04] cursor-pointer">Читать подробнее <FaAngleRight /></button>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default News;
