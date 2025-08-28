import React from "react";
import aboutImg from "../assets/about.jpg"; 
import worldMap from "../assets/map.jpg"; 
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <div className="max-w-[1450px] mx-auto px-4 lg:px-10 py-10 font-global">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="w-full md:w-[700px]">
          <h2 className="uppercase text-[26px] mb-4 flex items-center gap-2">
            <b>О</b> НАС
          </h2>
          <p className="text-[#333] text-[16px] leading-relaxed mb-6">
            Лидер зерноочистительного оборудования в Украине. Наша компания
            специализируется в разработке, производстве и внедрении
            промышленных технологий и оборудования для переработки зерна.
            Сегодня мы объединили оригинальные современные технологии и
            оборудование под своим зарегистрированным знаком качества,
            подтвержденным более чем 30-ю патентами и наградами.
          </p>
          <button className="bg-[#FFB400] flex items-center gap-[10px] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#e39f00] duration-300 cursor-pointer">
            Скачать каталог <FiDownload />
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="Оборудование"
            className="rounded-lg shadow-md w-full max-w-[600px] object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 items-center">
        <div className="flex justify-center">
          <img
            src={worldMap}
            alt="Карта"
            className="w-full max-w-[600px] object-contain"
          />
        </div>
        <div>
          <h2 className="uppercase text-[26px] mb-4">
            <b>В</b> КАКИХ СТРАНАХ МЫ РАБОТАЕМ
          </h2>
          <p className="text-[#333] text-[16px] leading-relaxed mb-6">
            Технологический уровень и организация нашего производства позволяют
            обеспечить высокое качество изделий по удивительным ценам и
            поставлять их более чем в 30 стран ближнего и дальнего зарубежья.
          </p>
          <button className="bg-[#FFB400] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#e39f00] duration-300 cursor-pointer">
            Открыть карту готовых проектов
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
