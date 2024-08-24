import { useState } from 'react';
import { CgSearch } from "react-icons/cg";
import Itemcard from './Itemcard';
import itemsData from '../../itemsData';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const DelCard = () => {

    return (
        <>
            <div className='lg:w-[1100px] w-[400px]  mx-auto mt-[100px] '>
                <h3 className='ms-[150px] font-bold text-[30px] mb-[30px]'>Restro Name</h3>
                <div className='inline ms-7 lg:hidden'>
                            <NavLink to={'/'}>
                            <FaArrowLeft className='inline' />
                            </NavLink>
                       
                        </div>
                <div className='lg:w-[800px] border-2 mx-auto px-3 m-3 shadow-[-20px_15px_10px_#C7C8CC] rounded-2xl leading-10 '>
                    <div className='flex items-center font-bold gap-1 text-[17px] '>
                        <Icon className="inline" />  <span>4.4(5k+ ratings ) .<div className=""></div></span> <span className='text-center'>  ₹450 for two</span>
                    </div>
                    <span className='text-orange-600 font-bold underline mb-2'>Burger,Fast Food</span>
                    <div className='mt-[20px] flex items-center h-[15px]'>
                        <div className='text-center flex flex-col items-center w-[8px]  '>
                            <div className='border-[1px] border-slate-600 bg-slate-500 rounded-[100%] w-[8px] h-[8px]'></div>
                            <div className='border-[1px] border-slate-600 rounded-[100%] w-[1px] h-[30px] '></div>

                            <div className='border-[1px] border-slate-600 bg-slate-500 rounded-[100%] w-[8px] h-[8px]'></div>
                        </div>
                        <div className='ms-3 mt-2 font-bold'>
                            <div>
                                Outlet <span>Golambar</span>
                            </div>
                            <div>
                                35-40 mins
                            </div>
                        </div>
                    </div>
                    <div className='mt-7'>Order above 149 for discounted delivery fee</div>
                </div>

                <div>
                    <div>

                        <div className='mt-[40px] lg:w-[800px] w-full mx-auto'>
                            <div className='text-center font-bold text-[20px] text-slate-500'>M E N U</div>
                            <div className={`flex items-center gap-2 mt-[20px]  bg-slate-100 border-[1px] border-gray-400 rounded-xl w-full px-2 py-3 mt-[-7px] justify-center `}>
                                <div className='flex items-center gap-2 w-full'>
                                    <input type="text" placeholder='Search for Dishes' className='w-full outline-none text-center bg-slate-100' /><CgSearch />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[800px] w-full mx-auto mt-6'>
                        <div className='flex gap-3  '>
                            <div className='border-2 p-2 rounded-2xl w-[70px] text-center h-[40px] bg-green-400'>
                                <Toggle />
                            </div>
                            <div className='border-2 p-2 rounded-2xl w-[70px] text-center h-[40px] bg-red-400'>
                                <Toggle />
                            </div>
                            <div className='border-2 p-2 rounded-2xl  text-center h-[40px]'>
                                Best Seller
                            </div>

                        </div>

                        <hr className='border-1 my-5'/>

                        <span className='font-bold text-xl'>Recommended(20)</span>

                        <div className='w-[400px] lg:w-[800px]'>
                         {
                            itemsData.map((item,i)=>{
                               return <Itemcard {...item}/>
                            })
                         }

                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};
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
function Toggle() {
    return <>
        <>

            <label className="switch">
                <input defaultChecked="" type="checkbox" />
                <div className="slider">
                    <div className="circle">
                        <svg
                            className="cross"
                            xmlSpace="preserve"
                            style={{ enableBackground: "new 0 0 512 512" }}
                            viewBox="0 0 365.696 365.696"
                            y={0}
                            x={0}
                            height={6}
                            width={6}
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g>
                                <path
                                    data-original="#000000"
                                    fill="currentColor"
                                    d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
                                />
                            </g>
                        </svg>
                        <svg
                            className="checkmark"
                            xmlSpace="preserve"
                            style={{ enableBackground: "new 0 0 512 512" }}
                            viewBox="0 0 24 24"
                            y={0}
                            x={0}
                            height={10}
                            width={10}
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g>
                                <path
                                    className=""
                                    data-original="#000000"
                                    fill="currentColor"
                                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </label>
        </>


    </>
}
export default DelCard;