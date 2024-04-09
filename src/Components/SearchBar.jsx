import { useState , useEffect } from 'react'
import { addWatchlist } from '../features/todo/watchListSlice'
import { useDispatch } from "react-redux"

function SearchBar(props) {
const [input ,setInput] = useState("")

const dispatch = useDispatch();

useEffect(() => {
    const timerId = setTimeout(() => {
        console.log(input)
    },1000)

    return () => {
        clearTimeout(timerId)
    }

},[input])


const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addWatchlist(input))
    setInput(" ")
}

    return (
        <>
            <div className={`flex gap-1  ${props.className}`}>
                <input 
                className=' w-80 p-2 pl-1 border-2 rounded-md border-gray-300'
                type="text" value={input}  onChange={(e) => {setInput(e.target.value)}} />
                <button className=' w-20 bg-green-500 p-2 text-white border-2 rounded-md' onClick={handleSubmit}>add</button>
                
            </div>
        </>
  )
}

export default SearchBar
