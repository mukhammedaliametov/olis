import React from "react";
import { Link } from "react-router-dom";
import Reviews1 from "../assets/review1.png";
import Reviews2 from "../assets/review2.png";
import Reviews3 from "../assets/review3.png";
import PlayBtn from '../assets/play_btn.svg';

const Reviews = () => {
  const reviewsItems = [
    {
      img: Reviews1,
      title: 'ООО "Прометей-Сервис"',
      info: 'В 2020 году компанией ОЛИС запущен комплекс по очистке зерна на базе сепаратора ЛУЧ ЗСО-200 в Николаевской области! Представляем Вашему вниманию отзыв руководителя предприятия ООО "Прометей-Сервис". На предприятии установлен зерноочистительный сепаратор барабанного типа ЛУЧ ЗСО-200 производительностью 200 т/час.',
    },
    {
      img: Reviews2,
      title: 'ООО "Прометей-Сервис"',
      info: 'В 2020 году компанией ОЛИС запущен комплекс по очистке зерна на базе сепаратора ЛУЧ ЗСО-200 в Николаевской области! Представляем Вашему вниманию отзыв руководителя предприятия ООО "Прометей-Сервис". На предприятии установлен зерноочистительный сепаратор барабанного типа ЛУЧ ЗСО-200 производительностью 200 т/час.',
    }
  ];
  const reviewsItems2 = [
    {
      img: Reviews3,
      title: 'ООО "Прометей-Сервис"',
      info: 'В 2020 году компанией ОЛИС запущен комплекс по очистке зерна на базе сепаратора ЛУЧ ЗСО-200 в Николаевской области! Представляем Вашему вниманию отзыв руководителя предприятия ООО "Прометей-Сервис". На предприятии установлен зерноочистительный сепаратор барабанного типа ЛУЧ ЗСО-200 производительностью 200 т/час.',
    },
    {
      img: Reviews3,
      title: 'ООО "Прометей-Сервис"',
      info: 'В 2020 году компанией ОЛИС запущен комплекс по очистке зерна на базе сепаратора ЛУЧ ЗСО-200 в Николаевской области! Представляем Вашему вниманию отзыв руководителя предприятия ООО "Прометей-Сервис". На предприятии установлен зерноочистительный сепаратор барабанного типа ЛУЧ ЗСО-200 производительностью 200 т/час.',
    },
  ]
  return (
    <div className="max-w-[1450px] mx-auto px-4 lg:px-10 py-10 font-global">
      <div>
        <div className="text-center"> 
        <Link to="/" className="opacity-65">Главная</Link> / Отзывы
        <h2 className="text-[28px] lg:text-[42px] font-semibold my-[20px] uppercase">Отзывы</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[20px] my-[20px]">
          {reviewsItems.map((item, index) => {
            return (
              <div key={index} className="relative">
                <img src={item.img} alt="img" />
                <img src={PlayBtn} alt="play-btn-icon" className="w-[40px] lg:w-[80px] absolute top-[50px] lg:top-[90px] left-[45%] cursor-pointer" onClick={() => alert('Video hozircha mavjud emas!')} />
                <p className="text-[20px] lg:text-[22px] font-semibold my-[10px]">{item.title}</p>
                <p className="w-full lg:w-[500px] opacity-75 text-[14px]">{item.info}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[20px] my-[20px]">
          {reviewsItems2.map((item, index) => {
            return (
              <div key={index} className="flex flex-col lg:flex-row items-center">
                <img src={item.img} alt="img" className="w-full lg:w-[200px]" />
                <div className="px-0 lg:px-[20px]">
                <p className="text-[20px] lg:text-[22px] font-semibold my-[10px]">{item.title}</p>
                <p className="opacity-75 text-[14px]">{item.info}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[20px] my-[20px]">
          {reviewsItems.map((item, index) => {
            return (
              <div key={index} className="relative">
                <img src={item.img} alt="img" />
                <img src={PlayBtn} alt="play-btn-icon" className="w-[40px] lg:w-[80px] absolute top-[50px] lg:top-[90px] left-[45%] cursor-pointer" onClick={() => alert('Video hozircha mavjud emas!')} />
                <p className="text-[20px] lg:text-[22px] font-semibold my-[10px]">{item.title}</p>
                <p className="w-full lg:w-[500px] opacity-75 text-[14px]">{item.info}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[20px] my-[20px]">
          {reviewsItems2.map((item, index) => {
            return (
              <div key={index} className="flex flex-col lg:flex-row items-center">
                <img src={item.img} alt="img" className="w-full lg:w-[200px]" />
                <div className="px-0 lg:px-[20px]">
                <p className="text-[20px] lg:text-[22px] font-semibold my-[10px]">{item.title}</p>
                <p className="opacity-75 text-[14px]">{item.info}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[20px] my-[20px]">
          {reviewsItems.map((item, index) => {
            return (
              <div key={index} className="relative">
                <img src={item.img} alt="img" />
                <img src={PlayBtn} alt="play-btn-icon" className="w-[40px] lg:w-[80px] absolute top-[50px] lg:top-[90px] left-[45%] cursor-pointer" onClick={() => alert('Video hozircha mavjud emas!')} />
                <p className="text-[20px] lg:text-[22px] font-semibold my-[10px]">{item.title}</p>
                <p className="w-full lg:w-[500px] opacity-75 text-[14px]">{item.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
