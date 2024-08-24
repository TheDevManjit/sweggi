import React from 'react'
import { useState, useRef, } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { MdOutlineSearch } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import MobileSize from '../Hooks/MobileSize'
import { IoIosArrowRoundBack } from "react-icons/io";
import { ImCross, ImOpera } from "react-icons/im";
import { RiCrosshair2Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from 'react-router-dom';



export default function Header() {
    const [toggle, setToggle] = useState(false)
    const [Ltoggle, LsetToggle] = useState(false)


    const myComponentRef = useRef(null);
    const isMobile = MobileSize()




    function showRightMenu() {
        setToggle(true)
        console.log("hello")
    }
    function showLeftMenu() {
        LsetToggle(true)
        console.log("hello")
    }

    function hideRightMenu() {
        setToggle(false)
    }
    function hideLeftMenu() {
        LsetToggle(false)
    }
    const links = [
        {
            id: 1,
            icon: <MdOutlineSearch />,
            name: "Search"
        },
        {
            id: 2,
            icon: <CiDiscount1 />,
            name: "OFFERS",
            sup: "New"
        },
        {
            id: 3,
            icon: <IoHelpBuoyOutline />,
            name: "HELP"
        },
        {
            id: 4,
            icon: <FaRegUser />,
            name: "USER"
        },
        {
            id: 5,
            icon: <IoCartOutline />,
            name: "CART"
        }
    ]

    const handleIconClick = (id) => {
        switch (id) {
            case 1:
                // Perform action for Item 1
                console.log('Action for Item 1');
                break;
            case 2:
                // Perform action for Item 2
                console.log('Action for Item 2');
                break;
            case 3:

                // Perform action for Item 3
                console.log('Action for Item 3');
                break;
            case 4:
                showRightMenu()
                // Perform action for Item 3
                console.log('Action for Item 3');
                break;
            default:
                console.log('No action defined');
        }
    };


    return (
        <>

            {/* right sidebar */}

            <div className='black-overlay w-full fixed lg:duration-500 h-full z-[9999] flex justify-end ' onClick={hideRightMenu} style={
                {
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? "visible" : "hidden"

                }
            }>

                <div className={` lg:w-[500px] w-full bg-white h-full absolute lg:duration-[600ms] ${toggle ? "0% " : "-100%"}`}
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                    style={
                        {
                            // left: toggle ? "0% " : "-100%",
                            right: toggle ? "0%" : "-100%"
                            // ${toggle ? "right-0" : "right[-500px]
                        }}

                >
                    <div className='car'>
                        <div className='p-5 bg-slate-100 lg:w-[500px]'>
                            <div>
                                <IoIosArrowRoundBack className='text-[50px]' onClick={hideRightMenu} />
                            </div>
                            <div className='mt-[30px]'>
                                <p className='font-bold text-[20px]'>LOGIN</p>
                                <p className='text-slate-500'> Enter Your Phone Number to continue</p>
                            </div>



                        </div>

                        <div className='lg:w-[500px] ms-4 mt-[30px]'>
                            <p className='text-[12px] text-slate-400'>PHONE NUMBER</p>

                            <input type="text" className='border-slate-300 border-b w-[90%] outline-none mt-3' />
                        </div>
                    </div>


                </div>



            </div>

            {/* right  sidebar end */}


            {/* leftside bar */}


            <div className='black-overlay w-full fixed lg:duration-500 h-full z-[9999] flex justify-end top-0 ' onClick={hideLeftMenu} style={
                {
                    opacity: Ltoggle ? 1 : 0,
                    visibility: Ltoggle ? "visible" : "hidden"

                }
            }>

                <div className={` lg:w-[500px] w-full bg-white h-full absolute lg:duration-[600ms] ${Ltoggle ? "0% " : "-100%"}`}
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                    style={
                        {
                            left: Ltoggle ? "0% " : "-100%",

                        }}

                >
                    <div className='car'>
                        <div className='p-10 lg:w-[500px]'>
                            <div className=''>
                                <ImCross className='text-[20px]' onClick={hideLeftMenu} />
                               

                            </div>
                            <div className='mt-[30px] border-2 border-slate-300 p-2 lg:w-[400px] mx-auto shadow-md flex text-center'>
                                <input type="text" className=' w-full outline-none mt-1 font-bold ' placeholder='Search for area,street name.... ' />
                                <IoIosSearch className='text-[20px] mt-2'/>
                            </div>
                           
                           
                           



                        </div>

                        <div className='mt-[30px] border-2 border-slate-300 p-5 lg:w-[400px] w-[80%] mx-auto shadow-md '>

                            <span className='flex gap-2 items-center'>
                                <RiCrosshair2Fill />
                                <p className=' hover:text-orange-500'>Get current location </p>

                            </span>
                            <span className='text-[12px] ms-6 text-slate-400'> using GPS</span>




                        </div>
                    </div>


                </div>



            </div>


            {/* left sidebar end */}


            <header ref={myComponentRef}
                className={`p-[15px] shadow-xl sticky top-0 z-[999] bg-white ${isMobile ? 'hidden' : ''}`} >
                <div className='max-w-[1200px] mx-auto   flex items-center'>
                    <div className='w-[80px]'>
                        <NavLink to={'/'} className="w-full">
                        <img src="images/logo.jpeg" alt="" className='w-full' />
                        </NavLink>
                       
                    </div>
                    <div className='flex items-center'>
                        <p className='text-gray-500'>
                            <span className='border-b-[3px] text-black border-black font-bold pb-1'>Bakarganj</span> Sabzibagh, Bakarganj, Patna,</p>
                        <RxCaretDown className='inline text-orange-500 text-[2rem] font-bold cursor-pointer' onClick={showLeftMenu} />
                    </div>
                    <nav className='flex list-none gap-10 ms-auto font-[18px] font-semibold '>
                        {
                            links.map(
                                (link) => {
                                    return (
                                        <li className='flex items-center gap-3 hover:text-[#ff5200] cursor-pointer' key={link.id}>
                                            <div onClick={() => handleIconClick(link.id)} className='flex items-center gap-3 hover:text-[#ff5200] cursor-pointer'>
                                                {link.icon}
                                                {link.name}
                                                <sup>{link.sup}</sup>
                                            </div>

                                        </li>
                                    )
                                }
                            )

                        }

                    </nav>

                </div>
            </header>

            {/* // mobile header */}

            <header
                ref={myComponentRef}
                className={`${isMobile ? '' : 'hidden'}`}
            >
                <div className='flex justify-between px-3  my-2 items-center'>
                    <div>
                        <span className='flex gap-2 items-center font-bold text-xl'>
                            <MdLocationPin className='border-b-2 border-black  ' onClick={showLeftMenu} />
                            Other
                        </span>

                        <span className='text-slate-400'>Sabzibagh, Bakarganj, Patna, Bihar...</span>
                    </div>
                    <div className='bg-[#373A40] rounded-full flex justify-between items-center p-3 text-white'>
                        <FaRegUser className='' onClick={showRightMenu} />
                    </div>
                </div>
                <hr className='my-3 border-[1px]' />
            </header>








            {/* mobile header end */}

            

        </>

    )
}
