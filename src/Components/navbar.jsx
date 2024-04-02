import Avatar from "./Avatar";

// import { IoIosAddCircleOutline } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { SiMyanimelist, SiAboutdotme } from "react-icons/si";
import { BsFillBookFill } from "react-icons/bs";
import { SiAcademia } from "react-icons/si";
import { LuSettings } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {

  return (
    <div className=" w-full flex items-start sm:justify-between sm:items-center">
      <ul className="w-fit ml-8 flex flex-col xl:flex-row gap-20 xl:items-center">
        <li className="group-hover:scale-110 ">
          <Link to="/main" >
            <SiMyanimelist className="text-7xl hover:text-slate-700 hover:scale-110" />
          </Link>
        </li>
        <li className="hover:scale-110">
          <NavLink to="/home" className="anchortag">
            <AiFillHome className="block xl:hidden " />
            <span className="text-lg">Home</span>
          </NavLink>
        </li>
        <li   className="hover:scale-110">
          <NavLink to="/anime" className="anchortag">
            <SiAcademia className="block xl:hidden"/>
            <span className="text-lg">Anime</span>
          </NavLink>
        </li>
        <li className="hover:scale-110">
          <NavLink to="/manga" className="anchortag">
            <BsFillBookFill className="block xl:hidden" />
            <span className="text-lg">Manga</span>
          </NavLink>
        </li>
        <li className="hover:scale-110">
          <NavLink to="/about" className="anchortag">
            <SiAboutdotme  className="block xl:hidden" />
            <span className="text-lg">About</span>
          </NavLink>
        </li>
        <li className="hover:scale-110">
          <NavLink to="/" className="anchortag">
            <LuSettings className="block xl:hidden" />
            <span className="text-lg">Settings</span>
          </NavLink>
        </li>

      </ul>
      <Avatar className=" w-10 ml-auto mr-8  rounded-full" />
    </div>
  );
}
