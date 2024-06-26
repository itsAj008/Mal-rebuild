import Avatar from "./Avatar";

// import { IoIosAddCircleOutline } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { SiMyanimelist, SiAboutdotme } from "react-icons/si";
import { BsFillBookFill } from "react-icons/bs";
import { SiAcademia } from "react-icons/si";
import { LuSettings } from "react-icons/lu";
import { Link } from "react-router-dom";
import ThemeBtn from "./Themebtn";
import { useEffect, useState } from "react";
import LoginPage from "../Pages/Login/LoginPage";
import SignupPage from "../Pages/Signup/SignupPage";
import SuccessPopup from "./SuccessPopup";
import FailurePopup from "./FailurePopup";

import SidebarIcon from "./SidebarIcon";



   


export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showSPopup, setShowSPopup] = useState(false);
  const [showFPopup, setShowFPopup] = useState(false);

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
      <div className=" fixed w-auto xl:w-full xl:flex xl:justify-between  ">
          <ul className=" bg-slate-300  lg:w-20 h-screen flex flex-col gap-8 items-center xl:flex-row xl:h-20 xl:w-full dark:bg-slate-500 dark:xl:text-white " >
              <li>
                <div className="hover:scale-105 xl:ml-8">
                  <Link to="/" >
                    <SiMyanimelist className="text-6xl lg:text-7xl hover:text-slate-700  dark:text-white xl:text-black" />
                  </Link>
                </div>
              </li>
              <SidebarIcon icon={<AiFillHome />} text={"Home"} link={'/'} />
              <SidebarIcon icon={<SiAcademia />} text={"Anime"} link = {"/anime" } />
              <SidebarIcon icon={<BsFillBookFill />} text={"Manga"} link={'/manga'}/>
              <SidebarIcon icon={<SiAboutdotme/>} text={"About"} link={'/about'}/>
              <SidebarIcon icon={<LuSettings />} text={"Settings"} link={'/settings'} className={"mt-auto xl:m-0 mb-5"}/>
              
          </ul>
      </div>
      
      <div className="flex fixed sm:gap-5 items-center top-5 right-5  ">
              <ThemeBtn className=" right-5 xl:right-16 " />
              <div className="flex">
                <button onClick={openLogin} className="loginbtn dark:text-white">Login</button>
                <button onClick={openSignup}  className="loginbtn  dark:text-white ml-2 mr-1">signup</button>
              </div>
              <Avatar className="w-10 rounded-full" />
      </div>

      
      <div>
        {showLogin && <LoginPage closePopup={closePopUp} openSignup={openSignup} setShowSPopup={setShowSPopup} setShowFPopup={setShowFPopup} />}
        {showSignup && <SignupPage closePopup={closePopUp} openLogin={openLogin} setShowSPopup={setShowSPopup} setShowFPopup={setShowFPopup} />}
      </div>

      {showSPopup && <SuccessPopup message="Account created successfully!" />}
      {showFPopup && <FailurePopup message="Account creation failed!!" />}

      {setTimeout(() => {
      setShowSPopup(false);
      setShowFPopup(false);
      }, 2000)}

    </>
   
  );
}


