import React from 'react'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";

export default function Itemcard(props) {
    return (
        <>
            <div>
                <div className='flex items-center justify-between w-full px-2'>
                    <div className='font-bold  text-zinc-700'>
                        <p className='font-bold text-[20px]'>{props.path}</p>
                        <p><MdOutlineCurrencyRupee className='inline' />{props.price}</p>
                        <p className=' flex items-center gap-1 text-green-500 my-2'><IoMdStarOutline className='inline text-green-700' />{props.ratings}(56)</p>
                        <p className='w-[200px] lg:w-[600px] text-zinc-500 '>{props.data}</p>
                    </div>
                    <div>
                        <div className="h-[156px] w-[144px] border-2 group rounded-[15px]   relative shrink-0 grow">
                            <img className=' group-hover:scale-110  duration-100 w-full h-full object-cover  ' src={`images/${props.image}`} alt="" />
                            {/* <img className=' group-hover:scale-110 duration-100 w-full h-full object-cover  ' src={`http://localhost:5000/images/` + props.image} alt="" /> */}
                            <div className='absolute w-full  h-full top-6 left-[20%] flex items-end p-2 text-[.7rem] lg:text-[20px] font-extrabold text-orange-500 tracking-tighter'>
                                <span className='bg-white px-[15px] border-2  rounded-xl'>ADD</span>
                            </div>

                        </div>
                    </div>
                   
                </div>
                <hr className='border-1 my-12'/>
            </div>

        </>
    )
}
