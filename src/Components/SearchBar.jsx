import { useState , useEffect , useRef } from 'react'
import { addWatchlist } from '../features/todo/watchListSlice'
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'

function SearchBar(props) {
const [input ,setInput] = useState("")
const [animeSearchResult , setAnimeSearchResult] = useState([])
const [loading ,setLoading] = useState(false)
const serachRef = useRef()


const dispatch = useDispatch();


const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b88bbb4fd1msh8cd0c48e1ffa93fp171495jsn307a8a2b4fba',
		'x-rapidapi-host': 'myanimelist-api1.p.rapidapi.com'
	}
};


const fetchAnime = async(name) => {
    setLoading(true)
    const res = await fetch(`https://myanimelist.p.rapidapi.com/v2/anime/search?q=${name}`,options)
    const data = await res.json()
    setLoading(false)
    setAnimeSearchResult(data)
    console.log(data)
}


const handleFocus = async() => {
    setLoading(true)
    if(input.trim().length === 0){
        const res = await fetch('https://myanimelist.p.rapidapi.com/anime/top/all',options)
        console.log(res.status)
        const data = await res.json()
        setAnimeSearchResult(data)
        setLoading(false)
        console.log(data)
    }else{
        fetchAnime(input)
    }
    
}


useEffect(() => {
    const timerId = setTimeout(() => {
        if(input.trim().length > 0 ){
            fetchAnime(input)
        }else {
            setAnimeSearchResult([])
        }
    },300)

    return () => {
        clearTimeout(timerId)
    }

},[input])


useEffect(()=>{
    const handleClose = (e) => {
        if(serachRef.current && !serachRef.current.contains(e.target)){
            setAnimeSearchResult([])
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
        myanimelist_id : "" ,
        title : anime.title  ,
        picture_url : anime.thumbnail ?? anime.picture_url,
        myanimelist_url : anime.myanimelist_url,
    }
    dispatch(addWatchlist(data))
    setInput(" ")
}

    return (
        <div className=''>
            <div className={`${props.className}  `}>

                <div className='flex gap-1 items-center'>
                    <input 
                    className=' w-64 sm:w-[40%] p-2 pl-1 border-2 rounded-md border-gray-300'
                    type="text" value={input}  onChange={(e) => {setInput(e.target.value)}} 
                    onFocus={handleFocus}/>
                    
                    {loading && <div className=" animate-loading h-8 w-8  rounded-full border-4 border-t-4 border-t-blue-600 " />}
                </div>
               
                 <div  className={`absolute flex flex-col gap-2 top-12 z-10 max-h-56 overflow-y-scroll bg-slate-200 w-72 sm:w-[60%] rounded-md py-1 transition-all duration-400 ease-in-out ${animeSearchResult.length > 0 ? 'opacity-100' : 'opacity-0'}`}  ref={serachRef}>

                    {animeSearchResult.length>0 && animeSearchResult.map((anime) => (
                        <div  
                            key={anime.myanimelist_id}
                            className=' flex border border-b-slate-800 items-center gap-3 pb-1 pl-1'
                        > 
                            <img  className=' h-10' src={anime.picture_url ?? anime.thumbnail} alt="" />
                            <Link to={anime.myanimelist_url}><span className=' text-blue-500 truncate block max-w-36 sm:max-w-full'>{anime.title}</span></Link>
                            <button className=' bg-blue-500 py-2 px-3 rounded-md text-xs text-white ml-auto mr-2 hover:bg-blue-400 hover:scale-95 ' onClick={() => handleAdd(anime)}>add</button>
                        </div>
                    ))}
                   
                </div>

            </div>

           
        </div>
  )
}

export default SearchBar
