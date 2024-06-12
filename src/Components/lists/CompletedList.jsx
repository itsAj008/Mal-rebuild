import { useDispatch, useSelector } from 'react-redux'
import { removeCompleted } from '../../features/todo/completedListSlice'
import { AiFillDelete } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { HiMiniListBullet } from "react-icons/hi2";
import { useState } from 'react';
import { addWatchlist } from '../../features/todo/watchListSlice';
import { Link } from 'react-router-dom';



const CompletedList = () => {

  const completedList = useSelector((state) => state.completedList.completedList)
  const dispatch = useDispatch()


  const handleMove = (item) => {
    dispatch(addWatchlist(item))
    dispatch(removeCompleted(item.id))
    
  }

  const handleDelete = (item) => {
    dispatch(removeCompleted(item.id))

  }

    return(
      <div> 
           
        <div className="  bg-slate-400  w-[70%] xl:w-[50%] py-2 flex flex-col h-fit max-h-96 overflow-y-scroll min-h-24  rounded-md ">
            {completedList.map((item,i) => {
                console.log(item)
                return (
                <div key={item.id}
                    className=" bg-slate-300 w-full h-20 flex border border-gray-400 gap-5  items-center  py-1 px-2">
                    <span>{i+1}</span>
            
                    <img className= " h-full  " src={item.picture_url} alt={item.title} />
                    <Link to={item.myanimelist_url} className=' text-blue-500 ml-3 cursor-pointer'>{item.title}</Link>
            
                    
                      <div 
                              className=' flex gap-2 justify-center items-center  ml-auto rounded-xl bg-slate-200 w-16 h-10 shadow-lg  dark:bg-slate-300  shadow-black-600/50 dark:shadow-slate-400/50  cursor-pointer'
                            >
            
                            <HiMiniListBullet  className='text-green-600 size-6 cursor-pointer hover:scale-95 ' onClick={() => handleMove(item)} />
                            <AiFillDelete className=' text-red-500 size-6 cursor-pointer  hover:scale-95'  onClick={() => handleDelete(item)} />
                    </div>
                    
                  
                </div>
                )})}
        </div> 
      
      </div>



      
      
    )
  }
  

export default CompletedList;



