import { useState } from "react";
import { useEffect } from "react"
import AnimeCard from "../../Components/AnimeCard";



function Anime() {
    const [Adata ,setAData] = useState([])
    const [page , setPage] = useState(1)
    

    const url = 'https://myanimelist.p.rapidapi.com/anime/top/%7Bcategory%7D';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '098c784652msh0b68b19ae2f9a44p1c0b0bjsnec4d4ed2597b',
            'x-rapidapi-host': 'myanimelist.p.rapidapi.com'
        }
    };

  const fetchTopAnime = async() => {
    const resp = await fetch(url , options)
    const data = await resp.json();
    setAData(data)
    console.log(data)

  }
 
  const handlePageChange = (page) => {

    if(page >=0 && page <= Math.ceil(Adata.length/9)){
        setPage(page)
    }
  }
  
  useEffect(() => {
    fetchTopAnime()

  },[])  

//   style={{gridTemplateColumns: ' repeat(3,1fr)' , gridTemplateRows:' repeat(3,1fr)'}}
  return (
    <>
      <div  className=" flex flex-col h-full justify-center  items-center">
        <div 
            className=" w-[70%] xl:w-[60%]  h-[80%] ml-10 bg-slate-300 grid gap-4 xl:gap-6 rounded-md p-1 pr-2 md:p-4   md:px-5  grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-y-scroll mt-4 " >

            {!!Adata.length > 0 ?
             Adata.slice(page*9 - 9, page*9).map((data) => (
                <AnimeCard key={data.myanimelist_id} data = {data} />
            )
            ) 
            : 
            
                <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-3 items-center ">
                    <div className=" animate-loading h-20 w-20 rounded-full border-2 border-t-2 border-t-blue-600 " />
                    
                    <span className=" text-gray-500 text-xl text-center">Loading <span className="animate-blink">...</span></span>
                </div>

            }
          
            
        </div>
        <div className=" flex justify-center  items-end pt-2">
            <span className = {`border border-gray-400 px-2 bg-gray-300 hover:scale-105 ${page===1 ? 'opacity-0': "opacity-100"}`} onClick={() => handlePageChange(page - 1)} >⬅️</span>
            {[...Array(Math.ceil(Adata.length / 9))].map((_,i) => (
                <span 
                    key={i}
                    className ={` border border-gray-400 px-2 bg-gray-300 hover:scale-105 cursor-pointer ${page === i+1 ? " bg-slate-400 text-white":""}`}

                    onClick={() => handlePageChange(i + 1)}
                    >   
                    {i+1}
                </span>
            ))}
            <span className = {`border border-gray-400 px-2 bg-gray-300 hover:scale-105 ${page === Math.ceil(Adata.length/9) ? 'opacity-0': "opacity-100"}`} onClick={() => handlePageChange(page + 1)}>➡️</span>
       </div>

        </div>

       
    </>

  )
}

export default Anime
