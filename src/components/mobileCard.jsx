import React from 'react'
import { CiStar } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
export default function MobileCard(props) {
    return (
        <>
            <div >
                <NavLink to={"/items"} className="  flex gap-4 mt-4 h-[100px]">


                    <div className='w-[90px]'>
                        <div className="h-[100px]  group rounded-[15px] overflow-hidden  relative ">
                            <img className=' group-hover:scale-110 duration-100 w-full h-full object-cover  ' src={`/images/` + props.image} alt="" />
                            {/* <img className=' group-hover:scale-110 duration-100 w-full h-full object-cover  ' src={`http://localhost:5000/images/` + props.image} alt="" /> */}
                            <div className='image-overlay absolute w-full h-full top-0  flex items-end p-2 text-[.7rem] lg:text-[20px] font-extrabold text-orange-500 tracking-tighter'>
                                <span className='bg-white p-[2px] rounded-xl'>{props.offer}</span>
                            </div>

                        </div>
                    </div>

                    <div className='h-[80px]  py-5'>
                        <div className=' text-[15px]'>
                            {props.title.slice()}
                        </div>
                        <div className="flex items-center gap-2 text-[15px] text-slate-500 font-semibold">
                            <span className='flex items-center gap-2 text-[13px]'>
                                <CiStar className='' /> ' {props.rating}
                            </span>


                            <span className=' tracking-tighter text-[12px]'>
                                {"' " + props.minTime} - {props.maxTime} mins
                            </span>

                            <span>
                                <p>' ₹300 for two </p>
                            </span>
                        </div>
                        <div className={`text-slate-400  lg:block text-[12px] flex`}>
                            {props.name}

                            {"  " + props.place.slice(0, 8) + ".."}
                        </div>
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
