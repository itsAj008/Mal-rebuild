import { useDispatch, useSelector } from 'react-redux'
import { removeWatchlist } from '../../features/todo/watchListSlice'
import { addCompleted } from '../../features/todo/completedListSlice';
import { AiFillDelete } from "react-icons/ai";
import { IoIosMore } from "react-icons/io";

import { Link } from 'react-router-dom';

const WatchList = () => {

    const watchList = useSelector(state => state.watchList.watchList);
    const dispatch = useDispatch()

    const handleComplete = (item) => {
        dispatch(addCompleted(item))
        dispatch(removeWatchlist(item.id))
    }



    return(
        <div>
           
            <div className="  bg-slate-400 py-2 flex flex-col h-fit max-h-96 w-[70%] xl:w-[50%]  overflow-y-scroll rounded-md">
                {watchList.map((item,i) => {
                    console.log(item)
                    return (
                <div key={item.id}
                     className=" bg-slate-300 w-full  h-20 flex border border-gray-400 gap-5  items-center  py-1 px-2">
                    <span>{i+1}</span>
          
                    <img className= " h-full  " src={item.picture_url} alt={item.title} />
                    <Link to={item.myanimelist_url} className=' text-blue-500 ml-3 t-sm truncate block max-w-full'>{item.title}</Link>

                    {/* <IoIosMore /> */}
                    <div className=' ml-auto mr-1  flex opacity-100 items-center gap-2'>
                        <input type="checkbox" className=" size-4" onClick={() => handleComplete(item)}/>
                        <AiFillDelete className="  text-red-500 size-6" onClick={() => dispatch(removeWatchlist(item.id))}/>
                    </div>
                    
                  
                </div>
                )})}
            </div> 

        </div>

      
    )
  }
  

export default WatchList
