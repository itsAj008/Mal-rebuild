import { useState , useEffect , useRef } from 'react'
import { addWatchlist } from '../features/todo/watchListSlice'
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'

function SearchBar(props) {
const [input ,setInput] = useState("")
const [animeSearchResult , setAnimeSearchResult] = useState('')
const [loading ,setLoading] = useState(false)
const serachRef = useRef()

const dispatch = useDispatch();

const fetchAnime = async(name) => {
    setLoading(true)
    const res = await fetch(`https://dummyjson.com/users/search?q=${name}`)
    const data = await res.json()
    setLoading(false)
    setAnimeSearchResult(data.users)
    console.log(data.users)
}


const handleFocus = async() => {
    setLoading(true)
    if(input.trim().length === 0){
        const res = await fetch('https://dummyjson.com/users')
        const data = await res.json()
        setAnimeSearchResult(data.users)
        setLoading(false)
        console.log(data.users)
    }else{
        fetchAnime(input)
    }
    
}


useEffect(() => {
    const timerId = setTimeout(() => {
        if(input.trim().length > 0 ){
            fetchAnime(input)
        }else {
            setAnimeSearchResult('')
        }
    },300)

    return () => {
        clearTimeout(timerId)
    }

},[input])


useEffect(()=>{
    const handleClose = (e) => {
        if(serachRef.current && !serachRef.current.contains(e.target)){
            setAnimeSearchResult('')
        }
    }

    document.addEventListener('mousedown',handleClose);

    return () => {
        document.removeEventListener('mousedown',handleClose)
    }
},[])






const handleAdd = (anime) => {
    console.log(anime)
    const data = {
        myanimelist_id : anime.id ,
        title : anime.firstName  ,
        picture_url : anime.image,
        myanimelist_url : '',
    }
    dispatch(addWatchlist(data))
    setInput(" ")
}

    return (
        <div className=''>
            <div className={`${props.className}  `}>

                <div className='flex gap-1 items-center'>
                    <input 
                    className=' w-64 sm:w-80 p-2 pl-1 border-2 rounded-md border-gray-300'
                    type="text" value={input}  onChange={(e) => {setInput(e.target.value)}} 
                    onFocus={handleFocus}/>
                    
                    {loading && <div className=" animate-loading h-8 w-8 ml-[-4%] rounded-full border-4 border-t-4 border-t-blue-600 " />}
                </div>
               
                 <div  className={`absolute flex flex-col gap-2 top-12 z-10 max-h-56 overflow-y-scroll bg-slate-200 w-72 sm:w-80 rounded-md py-1 transition-all duration-400 ease-in-out ${animeSearchResult.length > 0 ? 'opacity-100' : 'opacity-0'}`}  ref={serachRef}>

                    {animeSearchResult.length>0 && animeSearchResult.map((anime) => (
                        <div  
                            key={anime.id}
                            className=' flex border border-b-slate-800 items-center gap-3 pb-1'
                        > 
                            <img  className=' h-10' src={anime.image} alt="" />
                            <Link to="#">{anime.firstName}{ anime.lastName}</Link>
                            <button className=' bg-blue-500 py-2 px-3 rounded-md text-xs text-white ml-auto mr-2 hover:bg-blue-400 hover:scale-95 ' onClick={() => handleAdd(anime)}>add</button>
                        </div>
                    ))}
                   
                </div>

            </div>

           
        </div>
  )
}

export default SearchBar
