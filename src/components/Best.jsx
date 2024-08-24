import { useState } from 'react';
import React from 'react'
import { Menu, MenuItem } from './Menu';
import { IoIosMore } from "react-icons/io";


export default function Best() {
    const indianCities = [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Chennai",
        "Kolkata",
        "Hyderabad",
        "Pune",
        "Ahmedabad",
        "Jaipur",
        "Surat",
        "Lucknow",
        "Kanpur",
        "Nagpur",
        "Visakhapatnam",
        "Indore",
        "Thane",
        "Bhopal",
        "Patna",
        "Vadodara",
        "Ludhiana"
    ];

    const cuisines = [
        "Italian",
        "Chinese",
        "Indian",
        "Mexican",
        "Japanese",
        "French",
        "Thai",
        "Greek",
        "Spanish",
        "Mediterranean",
        "Korean",
        "Vietnamese",
        "Turkish",
        "Moroccan",
        "Lebanese",
        "American",
        "Brazilian",
        "Ethiopian",
        "Caribbean",
        "Middle Eastern"
    ];

    const [visibleCount, setVisibleCount] = useState(11);
    const [visibleCountItem, setVisibleCountItem] = useState(11);


    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 4); // Load 3 more items
    };

    const handleLoadMoreItem = () => {
        setVisibleCountItem(prevCount => prevCount + 4); // Load 3 more items
    };

    return (
        <div className='max-w-[1200px] mx-auto mt-[40px] '>
            <div className='font-bold text-[25px] '>
                Best Restaurants Near Me
            </div>
            <div className='mx-auto   flex items-center justify-center'>
                <div className='grid grid-cols-4 gap-2 w-full mt-6 '>
                    {

                        indianCities.slice(0, visibleCount).map((item, index) => (
                            <Menu key={index} city={item} />

                        ))

                    }
                    <div className='px-[10px] py-4 border-[1px] border-gray-500 mb-3 rounded-md text-[15px] font-bold w-[290px] flex justify-center 
                    items-center gap-5
                    ' onClick={handleLoadMore}>
                        <p className='flex text-center'>More</p>
                        <IoIosMore />
                    </div>
                </div>

            </div>




            <div className='font-bold text-[25px] mt-[40px]'>
                Best Cuisines Near Me
            </div>
            <div className='mx-auto   flex items-center justify-center'>
                <div className='grid grid-cols-4 gap-2 w-full mt-6 '>
                    {

                        cuisines.slice(0, visibleCountItem).map((item, index) => (
                            <MenuItem key={index} city={item} />

                        ))

                    }
                    <div className='px-[10px] py-4 border-[1px] border-gray-500 mb-3 rounded-md text-[15px] font-bold w-[290px] flex justify-center 
                    items-center gap-5
                    ' onClick={handleLoadMoreItem}>
                        <p className='flex text-center'>More</p>
                        <IoIosMore />
                    </div>
                </div>

            </div>

            <div className='font-bold text-[25px] mt-[40px]'>

                Explore Every Restaurants Near Me
            </div>
            <div className='mx-auto   flex items-center justify-center '>
                <div className='grid grid-cols-2 gap-2 w-full mt-5 '>

                    <div className='px-[10px] py-4 border-[1px] border-gray-500 mb-3 rounded-md text-[15px] font-bold  text-center'>
                        <p>Explore Restaurants Near Me </p>
                    </div>
                    <div className='px-[10px] py-4 border-[1px] border-gray-500 mb-3 rounded-md text-[15px] font-bold  text-center'>
                        <p>Explore Top Rated Restaurents Near Me </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
