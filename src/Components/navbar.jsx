import Avatar from "./Avatar";

// import { IoIosAddCircleOutline } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { SiMyanimelist, SiAboutdotme } from "react-icons/si";
import { BsFillBookFill } from "react-icons/bs";
import { SiAcademia } from "react-icons/si";
import { LuSettings } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import ThemeBtn from "./Themebtn";
import { useEffect, useState } from "react";
import LoginPage from "../Pages/Login/LoginPage";
import SignupPage from "../Pages/Signup/SignupPage";



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
   


export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const closePopUp = () => {
    setShowLogin(false);
    setShowSignup(false);
  };
  const openSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <>
      <div className="w-auto xl:w-full xl:flex xl:justify-between ">
          <ul className=" bg-slate-300  w-20 h-screen flex flex-col gap-8 items-center xl:flex-row xl:h-20 xl:w-full dark:bg-slate-500 dark:xl:text-white " >
              <li>
                <div className="hover:scale-105 xl:ml-8">
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
              
          </ul>

      </div>
      
      <div className="flex fixed gap-5 items-center top-5 right-5 ">
              <ThemeBtn className=" right-8 xl:right-16 " />
              <div className="flex">
                <button onClick={openLogin} className="loginbtn dark:text-white">Login</button>
                <button onClick={openSignup}  className="loginbtn  dark:text-white ml-2 ">signup</button>
              </div>
              <Avatar className="w-10 rounded-full" />
      </div>

      
      <div>
        {showLogin && <LoginPage closePopup={closePopUp} openSignup={openSignup}/>}
        {showSignup && <SignupPage closePopup={closePopUp} openLogin={openLogin}/>}
      </div>

    </>
   
  );
}


