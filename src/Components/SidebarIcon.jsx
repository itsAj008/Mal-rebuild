import React from 'react'
import { Link, NavLink } from "react-router-dom";


const SidebarIcon = ({icon , text,link="/#",className =""}) => (
    <li className={` group ${className}`}>
        <NavLink to={link} className=" flex">
          <div className="text-3xl block xl:hidden bg-slate-200 p-3 rounded-full  group-hover:rounded-xl group-hover:bg-gray-700 dark:group-hover:bg-gray-400 dark:group-hover:text-black  group-hover:text-slate-200  dark:bg-gray-800 dark:text-white" >
            {icon}
          </div>
          <span className=" hidden absolute left-20 p-2 m-2 text-lg group-hover:block xl:block xl:relative  dark:text-white">{text}</span>
        </NavLink>
    </li>
    

)
export default SidebarIcon
