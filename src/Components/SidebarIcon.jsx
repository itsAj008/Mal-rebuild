import React from 'react'
import { Link, NavLink } from "react-router-dom";

import { useState } from 'react';


const SidebarIcon = ({icon , text ,link="/#", className =""}) => {


  const [active,setActive] = useState(false)

    return (
    <li className={` group ${className}`}>
        <NavLink to={link} className={({ isActive }) => (isActive ? setActive(true) : setActive(false))} style={{display:'flex'}}  >
          <div className={` text-3xl block xl:hidden bg-slate-200 p-3   ${active ? 'rounded-xl  b dark:bg-gray-400 bg-gray-700 dark:text-black  text-slate-200' : ' rounded-full  group-hover:rounded-xl group-hover:bg-gray-700 dark:group-hover:bg-gray-400 dark:group-hover:text-black  group-hover:text-slate-200  dark:bg-gray-800 dark:text-white'}`}>
            {icon}
          </div>
          <span className={`hidden absolute left-20 p-2 m-2 text-lg group-hover:block xl:block xl:relative dark:text-white hover:text-gray-500  hover:scale-105 ${active ? 'hidden xl:block xl:font-bold xl:dark:text-gray-700 xl:text-gray-500' : ' '}`} >{text}</span>
        </NavLink>
    </li>
    
    )
}
export default SidebarIcon
