import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MobileCat() {
    return (
        <div className='flex justify-between items-center ' >
            <NavLink to={"/restro"}>
            <img src="images/res.png" alt="" className='w-[175px] h-[140px]' />
            </NavLink>
            <NavLink to={"/items"}>
            <img src="images/gen.png" alt="" className='w-[175px] h-[145px]'/>
            </NavLink>
           
            
        </div>
    )
}
