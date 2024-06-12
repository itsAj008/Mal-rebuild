import { useState , useEffect , useRef } from 'react'
import { addWatchlist } from '../features/todo/watchListSlice'
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'

function SearchBar(props) {
const [input ,setInput] = useState("")
const [animeSearchResult , setAnimeSearchResult] = useState('')
const serachRef = useRef()

const dispatch = useDispatch();

const fetchAnime = async(name) => {
    const res = await fetch(`http://dummyjson.com/users/search?q=${name}`)
    const data = await res.json()
    setAnimeSearchResult(data.users)
    console.log(data.users)
}


useEffect(() => {
    const timerId = setTimeout(() => {
        console.log(input)
        if(input.trim().length > 0 ){
            fetchAnime(input)
        }else {
            setAnimeSearchResult('')
        }
       
 
    },1000)

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


const handleFocus = async() => {
    if(input.trim().length === 0){
        const res = await fetch('http://dummyjson.com/users')
        const data = await res.json()
        setAnimeSearchResult(data.users)
        console.log(data.users)
    }
}


// const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addWatchlist(input))
//     setInput(" ")
// }

    return (
        <div className=''>
            <div className={`${props.className}  `}>

                <div className='flex gap-1 '>
                    <input 
                    className=' w-64 sm:w-80 p-2 pl-1 border-2 rounded-md border-gray-300'
                    type="text" value={input}  onChange={(e) => {setInput(e.target.value)}} 
                    onFocus={handleFocus}/>
                    {/* <button className=' w-20 bg-green-500 p-2 text-white border-2 rounded-md' onClick={handleSubmit}>add</button> */}
                </div>
               
                 <div  className={`absolute flex flex-col gap-2 top-14 z-10 max-h-56 overflow-y-scroll bg-slate-200 w-72 sm:w-80 rounded-md py-1 transition-all duration-700 ease-in-out ${animeSearchResult.length > 0 ? ' opacity-100' : 'opacity-0'}`}  ref={serachRef}>

                    {animeSearchResult.length>0 && animeSearchResult.map((anime) => (
                        <div  
                            key={anime.id}
                            className=' flex border border-b-slate-800 items-center gap-3 pb-1'
                        > 
                            <img  className=' h-10' src={anime.image} alt="" />
                            <Link to="#">{anime.firstName}{ anime.lastName}</Link>
                            <button className=' bg-blue-400 py-1 px-2 rounded-md text-xs text-white ml-auto mr-2'>add</button>
                        </div>
                    ))}
                   
                </div>

            </div>

           
        </div>
  )
}

export default SearchBar
