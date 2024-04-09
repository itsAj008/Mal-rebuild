import { useDispatch, useSelector } from 'react-redux'
import { removeCompleted } from '../../features/todo/completedListSlice'
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { useState } from 'react';
import { addWatchlist } from '../../features/todo/watchListSlice';



const CompletedList = () => {
  const [mod,setMod] = useState(false)

  const completedList = useSelector((state) => state.completedList.completedList)
  const dispatch = useDispatch()

  const handleMove = (item) => {
    dispatch(addWatchlist(item.text))
    dispatch(removeCompleted(item.id))
    setMod(false)
  }

  const handleDelete = (item) => {
    dispatch(removeCompleted(item.id))
    setMod(false)
  }

    return(
        <div>
            <h2 className='text-gray-700 dark:text-gray-300 ml-3 mb-5 w-fit border-b-2 border-gray-400'>Completed : </h2>
            <div className=" relative bg-slate-400 w-[400px] min-w-60 min-h-8 h-fit p-2 rounded-lg">
             {completedList.map((item) => (
               <div key={item.id}
                    className=" bg-slate-300 p-2 pl-5 rounded-lg m-2 flex gap-3 items-center text-lg ">
                  {item.text}
                  <AiFillDelete className=" ml-auto text-red-500 mr-1 size-6 cursor-pointer" onClick={() => setMod(true)} />
                  {mod && <div className='absolute flex gap-2 justify-center items-end pb-2 left-[390px] rounded-xl bg-slate-200 w-16 h-16
                                          shadow-lg  dark:bg-slate-300 
                                          shadow-black-600/50 dark:shadow-slate-400/50  '>
                              <MdOutlineWatchLater className='text-green-500 size-5 cursor-pointer' onClick={() => handleMove(item)} />
                              <AiFillDelete className=' text-red-500 size-5 cursor-pointer'  onClick={() => handleDelete(item)} />
                          </div>}
               </div>
             ))}
          </div> 

        </div>
      
      
    )
  }
  

export default CompletedList;
