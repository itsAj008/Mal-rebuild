import Navbar from '../../Components/navbar';
import SearchBar from "../../Components/SearchBar";
import WatchList from "../../Components/lists/WatchList"
import CompletedList from "../../Components/lists/CompletedList";

import { useSelector } from 'react-redux'

export default function Mainpage() { 
  const watchList = useSelector(state => state.watchList.watchList);
  const completedList = useSelector((state) => state.completedList.completedList)

return (
    <div>
      <div className="w-full h-screen bg-slate-100 dark:bg-gray-700" > 
        <Navbar /> 
        <SearchBar className=" fixed  top-36  left-1/4"/> 

        <div className=" fixed w-full h-fit top-52 left-1/4 flex flex-col xl:flex-row gap-32">
           <WatchList   />
            {!!completedList.length &&  <CompletedList   />}       
        </div>  
       
      </div>
    </div>
  
  )
}






