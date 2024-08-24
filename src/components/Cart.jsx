import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";

export default function Cart() {
    return (
        <div className='h-full'>

            <div className={`p-[15px] shadow-xl fixed top-0 z-[99999] bg-white lg:w-[100%] h-[100px]`}>
                <div className='max-w-[1200px] mx-auto flex items-center'>
                    <div className='w-[80px]'>
                        <NavLink to={'/'} className="w-full">
                            <img src="images/logo.jpeg" alt="" className='w-full' />
                        </NavLink>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-black font-bold'>
                            SECURE CHECKOUT
                        </p>

                    </div>
                    <nav className='flex list-none gap-10 ms-auto font-[18px] font-semibold'>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="ml-2">Help</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="ml-2">Sign In</span>
                        </div>
                    </nav>
                </div>
            </div>
            <div>
                <div className="bg-gray-100 min-h-screen">
                    <div className=" lg:w-[1200px]  px-4 py-8 lg:flex justify-between mx-auto gap-9">


                        <div className="flex flex-col gap-4 lg:w-[750px]">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <FaRegUser />
                                    <h2 className="ml-2 text-lg font-bold">Account</h2>
                                </div>
                                <p className="text-gray-600">
                                    To place your order now, log in to your existing account or sign up.
                                </p>
                                <div className="flex justify-around mt-6">
                                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                        Have an account?
                                        <br /> LOG IN
                                    </button>
                                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                        New to Swiggy?
                                        <br /> SIGN UP
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <h2 className="ml-2 text-lg font-bold">Delivery address</h2>
                                </div>
                                {/* Add address details here */}
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M8 4a3 3 0 10-2 6h7a3 3 0 10-2-6H8zm7 2a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 11-2 0 1 1 0 012 0zM8 10a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                    <h2 className="ml-2 text-lg font-bold">Payment</h2>
                                </div>
                                {/* Add payment details here */}
                            </div>



                        </div>
                        <div>
                            {/* start */}

                            <div className="bg-white rounded-lg shadow-md p-6 lg:w-[400px]">
                                <div className="flex items-center mb-4">
                                    <img
                                        src="images/Cakes.jpeg"
                                        alt="Restaurant Logo"
                                        className="w-12 h-12"
                                    />
                                    <h2 className="ml-2 text-lg font-bold">
                                        Lazeez Food Family Restaurant
                                    </h2>
                                    
                                    <p className="ml-2 text-sm text-gray-600">Kankarbagh</p>
                                </div>

                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-gray-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                            <path d="M9 8a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                            <path d="M9 14a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                        </svg>
                                        <p className="ml-2">Double Egg Chicken Roll</p>
                                    </div>
                                    <div className="flex items-center">
                                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 px-2 rounded-md">-</button>
                                        <span className="mx-2">1</span>
                                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 px-2 rounded-md">+</button>
                                        <p className="ml-4">₹129</p>
                                        <p className="ml-2 text-gray-600">₹104</p>
                                    </div>
                                </div>

                                <div className="mb-4 w-[75%] mx-auto ">
                                    <p className="text-gray-600 bg-gray-300 p-2">
                                        "Any suggestions? We will pass it on...
                                    </p>
                                </div>

                                <div className=" border-2 p-2 w-[75%] mx-auto items-center mb-4">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        id="noContactDelivery"
                                    />
                                    <label htmlFor="noContactDelivery">
                                        Opt in for No-contact Delivery
                                    </label>

                                    <p className="text-gray-600">
                                    Unwell, or avoiding contact? Please select no-contact delivery. Partner
                                    will safely place the order outside your door (not for COD)
                                </p>
                                </div>
                               

                                <div className="mt-6">
                                    <h3 className="text-lg font-bold mb-2">Bill Details</h3>
                                    <ul className="list-none p-0">
                                        <li className="flex justify-between mb-2">
                                            <span>Item Total</span>
                                            <span>₹129</span>
                                        </li>
                                        <li className="flex justify-between mb-2">
                                            <span>Delivery Fee | 6.3 kms</span>
                                            <span>₹39</span>
                                        </li>
                                        <li className="flex justify-between mb-2">
                                            <span>Extra discount for you</span>
                                            <span>-₹25</span>
                                        </li>
                                        <li className="flex justify-between mb-2">
                                            <span>Delivery Tip</span>
                                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 px-2 rounded-md">
                                                Add tip
                                            </button>
                                        </li>
                                        <li className="flex justify-between mb-2">
                                            <span>Platform fee</span>
                                            <span>₹6</span>
                                        </li>
                                        <li className="flex justify-between mb-2">
                                            <span>GST and Restaurant Charges</span>
                                            <span>₹7.53</span>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between mt-4">
                                        <span className="font-bold">TO PAY</span>
                                        <span className="font-bold">₹157</span>
                                    </div>
                                </div>
                            
                                {/* end */}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            )
}
