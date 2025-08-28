import React from "react";
import bgImage from "../assets/solutions_bg4.jpg";
import logo from "../assets/white_logo.svg";

const Form = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-8 font-global"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-4">
        <div className="flex justify-center lg:justify-start">
          <img src={logo} alt="OLIS logo" className="w-[200px] lg:w-[280px]" />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 lg:px-[70px] w-full max-w-[650px]">
          <h2 className="text-[25px] uppercase mb-2">
            <b>Ф</b>орма обратной связи
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Заполните форму и мы свяжемся с вами
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Имя"
                className="border-b border-gray-400 focus:outline-none py-2"
              />
              <input
                type="text"
                placeholder="Телефон"
                className="border-b border-gray-400 focus:outline-none py-2"
              />
            </div>

            <input
              type="email"
              placeholder="E-mail"
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />

            <button
              type="submit"
              className="bg-[#FFB400] text-white px-6 py-3 w-full md:w-auto rounded-md font-semibold cursor-pointer hover:bg-[#e39f00] duration-300"
            >
              Оставить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
