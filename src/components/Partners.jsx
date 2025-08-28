import React from 'react';
import Partner1 from '../assets/partner1.png';
import Partner2 from '../assets/partner2.png';
import Partner3 from '../assets/partner3.png';
import Partner4 from '../assets/partner4.png';
import Partner5 from '../assets/partner5.png';

const Partners = () => {
    return (
        <div className="max-w-[1450px] mx-auto px-4 lg:px-10 py-10 font-global">
            <div className='w-[98%] lg:w-[90%] mx-auto shadow-xl py-[30px] px-[20px]'>
                <h2 className="uppercase text-[18px] lg:text-[26px] mb-4 items-center"><b>Н</b>аши партнёры</h2>
                <div className='flex items-center gap-[20px] overflow-x-scroll lg:overflow-hidden'>
                    <img src={Partner1} alt="partner1" className='w-[120px] lg:w-[200px] flex-shrink-0' />
                    <img src={Partner2} alt="partner2" className='w-[120px] lg:w-[200px] flex-shrink-0' />
                    <img src={Partner3} alt="partner3" className='w-[120px] lg:w-[200px] flex-shrink-0' />
                    <img src={Partner4} alt="partner4" className='w-[120px] lg:w-[200px] flex-shrink-0' />
                    <img src={Partner5} alt="partner5" className='w-[120px] lg:w-[200px] flex-shrink-0' />
                </div>
            </div>
        </div>
    );
};

export default Partners;