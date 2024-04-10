import { useDispatch, useSelector } from 'react-redux'
import { removeCompleted } from '../../features/todo/completedListSlice'
import { AiFillDelete } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { HiMiniListBullet } from "react-icons/hi2";
import { useState } from 'react';
import { addWatchlist } from '../../features/todo/watchListSlice';



const CompletedList = () => {

  const completedList = useSelector((state) => state.completedList.completedList)
  const dispatch = useDispatch()

  const handleMove = (item) => {
    dispatch(addWatchlist(item.text))
    dispatch(removeCompleted(item.id))
    
  }

  const handleDelete = (item) => {
    dispatch(removeCompleted(item.id))

  }

    return(
        <div>
            <h2 className='text-gray-700 dark:text-gray-300 ml-3 mb-5 w-fit border-b-2 border-gray-400'>Completed ✅: </h2>
            <div className=" relative bg-slate-400 w-[400px] min-w-60 min-h-8 h-fit p-2 rounded-lg">
             {completedList.map((item) => (
               <div key={item.id}
                    className=" group bg-slate-300 p-2 pl-5 rounded-lg m-2 flex gap-3 items-center text-base font-fantasy">
                  {item.text}
                  <FiMoreVertical  className=" group ml-auto text-gray-800 size-6 cursor-pointer" />
                  <div className='absolute flex gap-2 justify-center items-center left-[380px] rounded-xl bg-slate-200 w-16 h-10
                                          shadow-lg  dark:bg-slate-300 
                                          shadow-black-600/50 dark:shadow-slate-400/50 
                                          scale-0 peer group-hover:scale-100'>
                              <HiMiniListBullet  className='text-green-600 size-5 cursor-pointer hover:scale-105' onClick={() => handleMove(item)} />
                              <AiFillDelete className=' text-red-500 size-5 cursor-pointer  hover:scale-105'  onClick={() => handleDelete(item)} />
                  </div>
               </div>
             ))}
          </div> 

        </div>
      
      
    )
  }
  

export default CompletedList;
