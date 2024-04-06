import Avatar from "./Avatar";

// import { IoIosAddCircleOutline } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { SiMyanimelist, SiAboutdotme } from "react-icons/si";
import { BsFillBookFill } from "react-icons/bs";
import { SiAcademia } from "react-icons/si";
import { LuSettings } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import ThemeBtn from "./Themebtn";
import { useEffect,useState } from "react";


const SidebarIcon = ({icon , text,link="/#",className =""}) => (
    <li className={` group ${className}`}>
        <NavLink to={link} className=" flex">
          <div className="text-3xl block xl:hidden bg-slate-200 p-3 rounded-full  group-hover:rounded-xl group-hover:bg-gray-700 group-hover:text-slate-200  dark:bg-gray-800 dark:text-white" >
            {icon}
          </div>
          <span className=" hidden absolute left-20 p-2 m-2 text-lg group-hover:block xl:block xl:relative">{text}</span>
        </NavLink>
    </li>
    

)
   
// absolute w-auto p-2 m-2 left-20 rounded-md
//         shadow-md text-white bg-gray-900
//         text-xs font-bold
//         transition-all duration-100 origin-left group-hover:block 






export default function Navbar() {


  return (
    <>
     <div className="w-auto xl:w-full xl:flex xl:justify-between ">
        <ul className=" bg-slate-300  w-20 h-screen flex flex-col gap-12 items-center xl:flex-row xl:h-20 xl:w-full dark:bg-gray-500 dark:xl:text-white " >
            <li>
              <div className="hover:scale-105 xl:ml-5">
                <Link to="/main" >
                  <SiMyanimelist className="text-7xl hover:text-slate-700  dark:text-white xl:text-black" />
                </Link>
              </div>
            </li>
            <SidebarIcon icon={<AiFillHome size="34"/>} text={"Home"} />
            <SidebarIcon icon={<SiAcademia />} text={"Anime"} />
            <SidebarIcon icon={<BsFillBookFill />} text={"Manga"} />
            <SidebarIcon icon={<SiAboutdotme size="34"/>} text={"About"} />
            <SidebarIcon icon={<LuSettings />} text={"Settings"} className={"mt-auto xl:m-0 mb-5"}/>
            

            <li className="hidden xl:block">
            <ThemeBtn className="top-1 left-20"/>
            </li>
        </ul>
        <div className=" fixed  right-3 bottom-16 scale-100 xl:scale-0 ">
          <ThemeBtn className="top-1 left-20 " cls="scale-0"/>
    </div>
        
        <div className=" absolute scale-0 top-5 right-10 xl:scale-100   ">
          <Avatar className=" w-10 rounded-full" />
        </div>
    </div>
    
    <div className="fixed  top-5 right-10 xl:hidden">
        <Avatar className="w-10 rounded-full" />
    </div>

    </>
   
  );
}


