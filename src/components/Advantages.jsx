import React from 'react';
import Advantages1 from '../assets/advantages_1.png';
import Advantages2 from '../assets/advantages_2.png';
import Advantages3 from '../assets/advantages_3.png';
import Advantages4 from '../assets/advantages_4.png';

const Advantages = () => {
    return (
        <div className="hidden lg:block max-w-[1450px] mx-auto pt-[50px] px-[12px] lg:px-[30px] 2xl:px-[0px] mb-[30px]">
            <h2 className="uppercase text-[18px] text-center md:text-[28px] mb-[30px]"><b>П</b>реимущества</h2>
            <div className='flex items-center justify-around'>
                <div className='flex justify-center flex-col w-[160px]'>
                    <img src={Advantages1} alt="advantages" />
                    <p className='text-[18px] font-semibold font-global text-center'>Стран, в которых работают наши объекты</p>
                </div>
                <div className='w-[2px] h-[90px] bg-[#E2E2E2]'></div>
                <div className='flex justify-center flex-col w-[190px]'>
                    <img src={Advantages2} alt="advantages" />
                    <p className='text-[18px] font-semibold font-global text-center'>Лет опыта разработок и внедрения</p>
                </div>
                <div className='w-[2px] h-[90px] bg-[#E2E2E2]'></div>
                <div className='flex justify-center flex-col w-[160px]'>
                    <img src={Advantages3} alt="advantages" />
                    <p className='text-[18px] font-semibold font-global text-center'>Наименований выпускаемого оборудования</p>
                </div>
                <div className='w-[2px] h-[90px] bg-[#E2E2E2]'></div>
                <div className='flex justify-center flex-col w-[170px]'>
                    <img src={Advantages4} alt="advantages" />
                    <p className='text-[18px] font-semibold font-global text-center'>Работающих производств в мире</p>
                </div>
            </div>
        </div>
    );
};

export default Advantages;