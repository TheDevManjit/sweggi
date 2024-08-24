import React, { useState } from 'react'
import Card from './Card';
import RestorentData from '../../Restorent';
import MobileSize from '../Hooks/MobileSize';
import MobileCard from './mobileCard';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


export default function OnlineDel() {
    const [visibleCount, setVisibleCount] = useState(11);
   


    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 4); // Load 3 more items
    };

    


    return (
        <div>

            <div className='max-w-[1200px] mx-auto  items-center  mb-[40px] sm:max-w-[1200px]:' >
                <div className='flex items-center justify-between '>
                    <div className='font-bold text-[25px]'>

                        Restaurants with online food delivery in Patna
                        <div className='inline ms-7 lg:hidden'>
                            <NavLink to={'/'}>
                            <FaArrowLeft className='inline' />
                            </NavLink>
                       
                        </div>

                    </div>



                </div>

                <div >
                    <div  className=' mt-[30px] lg:grid grid-cols-4 hidden '>
                    {
                        RestorentData.map(
                            (d, i) => {

                                return <>

                              
                                <Card {...d} key={i} link='/items'/>
                               
                           
                                </>
                                 })
                    }
                        
                    </div>
                    


                </div>
            </div>

            {/* // mobile card */}

            <div >
                <div className=' mt-[30px] lg:hidden'>
                    {/* {
                        RestorentData.map(
                            (d,i) => {
                            return (<Card {...d} key={i} />)
                        })
                    } */}
                    {
                        RestorentData.slice(0,visibleCount).map(
                            (d, i) => {
                                return (<MobileCard {...d} key={i} />)
                            })
                    }
                   
                </div>

                <div className='text-center mt-[50px] py-3 px-5 bg-orange-500 text-white font-bold rounded-md lg:hidden' onClick={handleLoadMore}>
                    
                    SEE MORE RESTORENT
                    
                    </div>
            </div>



        </div>



    )
}
