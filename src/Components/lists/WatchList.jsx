import { useDispatch, useSelector } from 'react-redux'
import { removeWatchlist } from '../../features/todo/watchListSlice'
import { addCompleted } from '../../features/todo/completedListSlice';
import { AiFillDelete } from "react-icons/ai";

const WatchList = () => {

    const watchList = useSelector(state => state.watchList.watchList);
    const dispatch = useDispatch()

    const handleComplete = (item) => {
        dispatch(addCompleted(item))
        dispatch(removeWatchlist(item.id))
    }



    return(
        <div>
            <h2 className='text-gray-700 dark:text-gray-300 ml-3 mb-5 w-fit border-b-2 border-gray-400 '>Watch-List 📃:</h2>
            <div className="  bg-slate-400  w-72 sm:w-[400px] sm:min-w-60 min-h-8 h-fit max-h-72 p-2 rounded-lg overflow-y-scroll ">
                {watchList.map((item) => (
                <div key={item.id}
                     className=" bg-slate-300 p-2 pl-3 rounded-lg m-2 flex gap-3 items-center text-base font-fantasy">

                    <input type="checkbox" className=" size-4" onClick={() => handleComplete(item)}/>
                    {item.text}
                    <AiFillDelete className=" ml-auto text-red-500 mr-1 size-6" onClick={() => dispatch(removeWatchlist(item.id))}/>
                  
                </div>
                ))}
            </div> 

        </div>

      
    )
  }
  

export default WatchList
