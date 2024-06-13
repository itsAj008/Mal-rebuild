
import SearchBar from "../../Components/SearchBar";
import WatchList from "../../Components/lists/WatchList"
import CompletedList from "../../Components/lists/CompletedList";

import { Link } from "react-router-dom";


import { useSelector } from 'react-redux'
import { useState } from "react";

export default function Mainpage() { 

  const [ showList , setShowList ] = useState('watchList')
  
  const completedList = useSelector((state) => state.completedList.completedList)
  const watchList = useSelector((state) => state.watchList.watchList)

return (
  <>
    
        {/* <SearchBar className=""/>  */}
        {/* <div className="flex-grow flex justify-center"> */}
          <div className=" fixed w-full h-full top-40  left-[23%] xl:left-[15%]  flex flex-col gap-10 ">
           <SearchBar className=""/> 
            <div className=" flex gap-5 sm:gap-12">
              <span 
                  className={`ml-2  w-fit  border-gray-400 cursor-pointer hover:dark:text-white hover:text-gray-400 ${ showList === 'watchList' ?"dark:text-white text-gray500 font-semibold border-b-2" : "text-gray-700 dark:text-gray-300 "}`}
                  onClick={() => setShowList('watchList')}> Watch-List 📃 
              </span>
              <span 
                 className={` w-fit  border-gray-400 cursor-pointer hover:dark:text-white hover:text-gray-400 ${ showList === 'completedList' ?"dark:text-white text-gray500 font-semibold border-b-2" : "text-gray-700 dark:text-gray-300 "}`}
                  onClick={() => setShowList('completedList')}
                  > Completed ✅
              </span>

            </div>
            <div>
            {showList === "watchList" ? (
                watchList.length ? (
                  <WatchList />
                ) : (
                  <span className="ml-[5%] dark:text-white">No list found!</span>
                )
              ) : showList === "completedList" ? (
                completedList.length ? (
                  <CompletedList />
                ) : (
                  <span className="ml-[5%] dark:text-white">No list found!</span>
                )
              ) : (
                <span className="ml-[5%] dark:text-white">No list found!</span>
              )}

            </div>
             

          </div>  
        {/* </div> */}

    </>
  
  )
}






