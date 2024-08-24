import React from 'react'



 
export function Menu(props) {
  
  return (
    <div 
     
    className= 'px-[10px] py-4 border-[1px] border-gray-500 mb-3 rounded-md text-[15px] font-bold w-[290px] text-center'
    
    > 
        <p>Best Restaurants in {props.city}</p>
    </div>
  )
}
 export function MenuItem(props) {

  return (
    <div  className='px-[10px] py-4 border-[1px] border-gray-500 mb-3 rounded-md text-[15px] font-bold w-[290px] text-center'
    
    
    > 
        <p>{props.city} Restaurants Near Me </p>
    </div>
  )
}
