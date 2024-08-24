import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import Card from './Card';
import RestorentData from '../../Restorent';
import { RxCaretDown } from "react-icons/rx";
import { CgSearch } from "react-icons/cg";
import { FaRegThumbsUp } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Restro() {
    const componentRef = useRef(null);
    const sliderRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);
    const [slide, setSlide] = useState(0);

    const menuStyle = ['flex items-center gap-2 border-[1px] border-gray-400 rounded-3xl px-2 h-[35px] justify-center']

    const menuItem = [
        {
            name: 'Sort By',
            icon: <RxCaretDown />
        }
        , {
            name: 'Fast Delivery',
            icon: <RxCaretDown />
        }, {
            name: 'New on Swiggy',
            icon: ''
        },
        {
            name: 'Rating 4.0+',
            icon: ''
        },
        {
            name: 'Sort By',
            icon: ''
        },
        {
            name: 'Sort By',
            icon: ''
        },
        {
            name: 'Sort By',
            icon: ''
        }
    ]


    function nextSlide() {
        if (slide < RestorentData.length - 6) {
            setSlide(slide + 3);
        }
    }

    function preSlide() {
        if (slide > 0) {
            setSlide(slide - 3);
        }
    }
    useEffect(() => {
        const handleScroll = () => {
            if (componentRef.current) {
                const topPosition = componentRef.current.getBoundingClientRect().top;
                setIsAtTop(topPosition <= 0); // True if the component is at the top
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='max-w-[1200px] mx-auto items-center mt-3 grow shrink-0' ref={componentRef}>
            <div className='font-bold text-[25px] flex items-center gap-2 lg:hidden'>
                <FaRegThumbsUp /> Top Picks For You
            </div>
            <div className='flex items-center justify-between '>
                <div className='font-bold text-[25px] hidden lg:flex'>
                    Top restaurant chains in Patna
                </div>

                <div className='lg:flex hidden'>
                    <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer'>
                        <FaArrowLeft onClick={preSlide} />
                    </div>
                    <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer'>
                        <FaArrowRight onClick={nextSlide} />
                    </div>
                </div>
            </div>

            <div
                className={`bg-white w-[1200px]  hidden gap-3  mt-4 lg:flex ${isAtTop ? 'fixed top-0 z-[9999] mt-4 py-[3px] duration-100' : ''}`}

            >

                {
                    menuItem.map((menu, i) => {
                        return (
                            <div key={i} className={`${menuStyle}`}>

                                {menu.name}
                                <div>
                                    {menu.icon}
                                </div>

                            </div>
                        )
                    })
                }
                <div className={`flex items-center gap-2  ms-auto border-[1px] border-gray-400 rounded-xl w-[25%] px-2 py-3 mt-[-7px] justify-center ${isAtTop ? '' : 'hidden'}`}>
                    <div className='flex items-center gap-2 w-full'>
                        <CgSearch /> <input type="text" placeholder='Search for restaurant and food' className='w-full outline-none' />
                    </div>
                </div>
            </div>

            <div ref={sliderRef} className="flex shrink-0 lg:gap-5 grow overflow-hidden mt-8 w-full gap-1 ">
                {
                    RestorentData.map((d, i) => (
                        <div className='duration-300 ' key={i}
                            style={{ transform: `translateX(-${slide * 105}%)` }}>
                                
                                <Card {...d} style="hidden" link="/items" />
                              
                           
                        </div>
                    ))
                }
            </div>

            <hr className='my-[60px] border-[1px]' />
        </div>
    );
}
