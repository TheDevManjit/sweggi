import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='mt-[50px] bg-slate-400  hidden lg:block'>
                <div className='flex justify-between max-w-[1000px] mx-auto items-center py-6'>
                    <h2 className='text-[28px] font-bold text-gray-600'>For better experience,download <br /> the Swiggy app now</h2>
                    <div className='flex gap-2'>
                        <img src="images/app_store.png" alt="" className='w-[240px] h-[70px] ' />
                        <img src="images/play_store.png" alt="" className='w-[240px] h-[70px] ' />
                    </div>
                </div>
                <div className='bg-black flex text-zinc-400 justify-around mt-10 pt-10'>
                    <div>
                        <img src="images/logo.jpeg" alt="" className='w-20 rounded-2xl shrink-0 grow'/>
                        <p>© 2024 Bundl Technologies Pvt. Ltd</p>
                    </div>
                    <div>
                        <p className='text-white font-bold text-xl'>Company</p>
                        <ul>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Team</li>
                            <li>Swiggy One</li>
                            <li>swiggy instaMart</li>


                        </ul>
                    </div>
                    <div>
                        <p className='text-white font-bold text-xl'>Contact Us</p>
                        <ul>
                            <li>Help & support</li>
                            <li>Partner with us</li>
                            <li>Ride with us</li>



                        </ul>
                        <p className='text-white font-bold text-xl mt-3'>Legal</p>
                        <ul>
                            <li>Terms & condition</li>
                            <li>Cookie Policy</li>
                            <li>Team</li>
                            <li>Privacy Policy</li>



                        </ul>
                    </div>

                    <div>
                        <p className='text-white font-bold text-xl'>Where delier To:</p>
                        <ul>
                            <li>Banlore</li>
                            <li>Gurgaw</li>
                            <li>Patna</li>
                            <li>Delhi</li>
                            <li>Mumbai</li>
                            <li>More</li>
                           

                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}
