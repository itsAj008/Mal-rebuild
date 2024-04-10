import Navbar from '../../Components/navbar';
import SearchBar from "../../Components/SearchBar";
import WatchList from "../../Components/lists/WatchList"
import CompletedList from "../../Components/lists/CompletedList";


import { useSelector } from 'react-redux'

export default function Mainpage() { 
  const watchList = useSelector(state => state.watchList.watchList);
  const completedList = useSelector((state) => state.completedList.completedList)

return (
  <div className="min-h-screen flex flex-col">
      <div className="w-full h-screen  bg-slate-100 dark:bg-gray-700 min-h-screen flex flex-col " > 
        <Navbar /> 
        <SearchBar className=" fixed top-24 sm:top-36  left-1/4"/> 
        <div className="flex-grow flex justify-center">
          <div className=" fixed w-full h-screen top-40 sm:top-52 left-1/4 flex flex-col gap-8 xl:flex-row sm:gap-32 flex-grow overflow-y-scroll ">
            <WatchList   />
              {!!completedList.length &&  <CompletedList   />}       
          </div>  
        </div>
       
      </div>
    </div>
  
  )
}






