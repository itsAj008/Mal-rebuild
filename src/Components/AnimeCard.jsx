
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addWatchlist } from  '../features/todo/watchListSlice'

function AnimeCard({data}) {

    const dispatch = useDispatch()
    
    const handleAdd = (e , data) => {
        e.preventDefault();
        console.log(data)

        dispatch(addWatchlist(data))

    }

    // h-24 md:h-56 lg:h-56 

  return (
    <div className=' group bg-slate-500  max-w-54 h-fit rounded-md p-1 pb-2 flex flex-col justify-between text-white font-fantasy gap-1 '>
        <div className='  xl:w-full h-36 xl:h-72 flex flex-col items-center p-1 gap-2'>

            <Link to={data.myanimelist_url}>
                <img className=' w-full  rounded-lg h-28 xl:h-64   group-hover:scale-105 transform-scale ease-in duration-150 '  src={data.picture_url} alt={data.title} />
            </Link>

            <p className=' text-sm truncate block max-w-full'>{data.title}</p>

        
        </div>
        <button className=' bg-blue-400 text-white  text-xs  hover:bg-blue-300 py-1 rounded-md  truncate block max-w-full' onClick={(e) => handleAdd(e,data) }>Add to WatchList</button>
        
        
    </div>
  )
}

export default AnimeCard
