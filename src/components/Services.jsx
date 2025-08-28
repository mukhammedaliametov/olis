import React from "react";
import Card1 from '../assets/services_card1.jpg';
import Card2 from '../assets/services_card2.png';
import Card3 from '../assets/services_card3.png';
import Card4 from '../assets/services_card4.png';
import Card5 from '../assets/services_card5.png';
import Card6 from '../assets/services_card6.png';

const Services = () => {
    const servicesItem = [
        {img: Card1, name: 'Монтаж'},
        {img: Card2, name: 'Сервис'},
        {img: Card3, name: 'Гарантийное и послегарантийное обслуживание'},
        {img: Card4, name: 'Инжиниринг'},
        {img: Card5, name: 'Реконструкции'},
        {img: Card6, name: 'Автоматизация'},
    ]
  return (
    <div className="max-w-[1450px] mx-auto pt-[50px] px-[12px] lg:px-[30px] 2xl:px-[0px]">
      <h2 className="uppercase text-[18px] text-center md:text-left md:text-[28px] mb-[30px]">
        <b>У</b>слуги
      </h2>
      <div className="flex overflow-scroll md:overflow-hidden lg:grid grid-cols-3 gap-[40px]">
        {servicesItem.map((item, index) => {
            return(
                <div className="relative font-global bg-cover w-full min-h-[150px] md:h-[110px] flex items-center justify-center bg-center bg-no-repeat z-2 shadow-xl flex-shrink-0" key={index}>
                    <img src={item.img} alt="img" className="absolute top-0 left-0 -z-1" />
                    <p className="mb-[-80px] bg-[#F8F8F8] py-[10px] px-[30px] text-center font-semibold">{item.name}</p>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Services;
