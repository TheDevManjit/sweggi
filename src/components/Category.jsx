import React, { useState, useRef} from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import CategoryData from '../../category';
import MobileSize from '../Hooks/MobileSize';
import { NavLink } from 'react-router-dom';


export default function Category() {

    const [slide, setSlide] = useState(0)
   // const myComponentRef = useRef(null);
    const isMobile = MobileSize()

    function nextslide() {
        console.log(Category.length)
        if (CategoryData.length - 8 == slide) {
            return false;
        }
        setSlide(slide + 3)
        console.log(slide)
        console.log(CategoryData)

    }
    function preSlide() {
        if (slide == 0) {
            return false;
        }
        setSlide(slide - 3)
        console.log(slide)
    }



    return (
        <div 
        
        className='max-w-[1200px] mx-auto  items-center mt-2 '
       
        >
            <div className='flex items-center justify-between '>
                <div className='font-bold text-[25px]'>

                    What's On Your Mind ?

                </div>
                <div className='flex'>
                    <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center  cursor-pointer'>
                        <FaArrowLeft onClick={preSlide} />
                    </div>
                    <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer'>
                        <FaArrowRight onClick={nextslide} />
                    </div>
                </div>


            </div>

            <div className='flex overflow-hidden'>
                {
                    CategoryData.map(
                        (cat, index) => {
                            return (
                                <div key={index} className='w-[170px] shrink-0 transition-[400ms] '  style={
                                    {
                                        transform: `translate( -${slide * 100}%)`
                                    }
                                }>
                                   <NavLink to={"/restro"}>
                                   <img src={"/images/" + cat.image} alt="" />
                                   </NavLink>
                                    
                                </div>
                            )
                        }
                    )
                }
            </div>
            <hr className='my-7 border-[1px]' />
        </div>
    )
}

