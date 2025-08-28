import React from 'react';
import CardBg1 from '../assets/solutions_bg1.jpg';
import CardBg2 from '../assets/solutions_bg2.jpg';
import CardBg3 from '../assets/solutions_bg3.jpg';
import CardBg4 from '../assets/solutions_bg4.jpg';
import CardBg5 from '../assets/solutions_bg5.jpg';
import CardBg6 from '../assets/solutions_bg6.png';
import CardImg1 from '../assets/solutions_img1.png';
import CardImg2 from '../assets/solutions_img2.png';
import CardImg3 from '../assets/solutions_img3.png';
import CardImg4 from '../assets/solutions_img4.png';
import CardImg5 from '../assets/solutions_img5.png';
import CardImg6 from '../assets/solutions_img6.png';

const Solutions = () => {
    const solutionsCards = [
        {bgImg: CardBg1, img: CardImg1, info: 'Зерноочистительные комплексы', w: 340},
        {bgImg: CardBg2, img: CardImg2, info: 'Крупозаводы', w: 340},
        {bgImg: CardBg3, img: CardImg3, info: 'Мельницы', w: 300},
        {bgImg: CardBg4, img: CardImg4, info: 'Комплексное оснащение лабораторий', w: 170},
        {bgImg: CardBg5, img: CardImg5, info: 'Переработка подсолнечника и бобовых', w: 340},
        {bgImg: CardBg6, img: CardImg6, info: 'Переработка семян конопли', w: 290},
    ]
    return (
        <div className="max-w-[1450px] mx-auto pt-[50px] px-[12px] lg:px-[30px] 2xl:px-[0px]"> 
            <h2 className="uppercase text-[18px] text-center md:text-left md:text-[28px] mb-[30px]"><b>К</b>ОМПЛЕКСНЫЕ РЕШЕНИЯ</h2>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-[40px]'>
                {solutionsCards.map((item, index) => {
                    return(
                        <div key={index} className='relative h-[152px] md:h-[252px] bg-cover flex z-3 shadow-xl'>
                            <img src={item.bgImg} alt="bgImg" className='absolute top-0 left-0 w-full h-full -z-2' />
                            <div className='absolute top-0 left-0 w-full bg-[#ffffffbe] h-full -z-1 backdrop-blur-[2px]'></div>
                            <div className='z-1'>
                                <p className='bg-[#FEAD04] text-[10px] md:text-[16px] text-white py-[10px] mt-[10px] px-[25px] font-semibold z-3 ml-[-8px] md:ml-[-20px]'>{item.info}</p>
                                <img src={item.img} alt="img" className='absolute bottom-0 mr-[10px] right-0 -z-1' style={{width: item.w}} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Solutions;