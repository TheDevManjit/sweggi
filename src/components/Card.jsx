import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Card(props) {
    return (
        <>
        
            <div className="w-[90px] shrink-0 grow lg:w-[280px] lg:font-bold  mt-5 " >
            <NavLink to={props.link}>  
                <div className="h-[83px] lg:h-[183px] group rounded-[15px] overflow-hidden  relative shrink-0 grow">
                    <img className=' group-hover:scale-110 duration-100 w-full h-full object-cover  ' src={`/images/` + props.image} alt="" />
                    {/* <img className=' group-hover:scale-110 duration-100 w-full h-full object-cover  ' src={`http://localhost:5000/images/` + props.image} alt="" /> */}
                    <div className='image-overlay absolute w-full h-full top-0  flex items-end p-2 text-[.7rem] lg:text-[20px] font-extrabold text-orange-500 tracking-tighter'>
                         <span className='bg-white p-[2px] rounded-xl'>{props.offer}</span>
                    </div>

                </div>
                <div className=' text-[15px] tracking-tighter mt-2 lg:hidden'>
                    {(props.title).slice(0,10) + "...."}
                </div>
                <div className=' text-[17px] text-slate-800 mt-2 hidden lg:block'>
                    {(props.title)}
                </div>
                <div className={`mt-1 flex items-center gap-2   lg:text-[15px] `}>
                    <span className={`${props.style} lg:flex items-center lg:gap-2 text-[15px] `}>
                    <Icon /> {props.rating}
                    </span> 
                  
                    <span className=' tracking-tighter lg:text-[15px]'>
                        {props.minTime} - {props.maxTime} mins
                    </span>
                </div>
                <div className={`text-slate-700 ${props.style} lg:block` }>
                    {props.name}
                    <br />
                    {props.place}
                </div>
                </NavLink>
            </div>
           
        </>
    )
}


function Icon() {
    return (
        <svg
            width="20"
            height="20"
            fill="none"
            ariaHidden="true"
            viewBox="0 0 20 20"
        >
            <circle
                cx="10"
                cy="10"
                r="9"
                fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            ></circle>
            <path
                fill="#fff"
                d="M10.082 12.865a.16.16 0 00-.164 0l-2.602 1.532a.5.5 0 01-.739-.551l.699-2.822a.16.16 0 00-.054-.162L4.955 8.99a.5.5 0 01.28-.884l3-.232a.16.16 0 00.135-.096l1.17-2.714a.5.5 0 01.92 0l1.17 2.714a.161.161 0 00.135.096l3 .232a.5.5 0 01.28.884l-2.267 1.872a.16.16 0 00-.054.162l.698 2.822a.5.5 0 01-.739.55l-2.601-1.531z"
            ></path>
            <defs>
                <linearGradient
                    id="StoreRating20_svg__paint0_linear_32982_71567"
                    x1="10"
                    x2="10"
                    y1="1"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#21973B"></stop>
                    <stop offset="1" stopColor="#128540"></stop>
                </linearGradient>
            </defs>
        </svg>
    );
}
