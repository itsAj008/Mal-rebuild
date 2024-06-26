import { useState } from "react";
import { useEffect } from "react"
import AnimeCard from "../../Components/AnimeCard";
import Loading from "../../Components/Loading";



function Anime() {
    const [Adata ,setAData] = useState([])
    const [page , setPage] = useState(1)
    const [loading,setLoading] = useState(false)
    const [error , setError] = useState(null)
    
    const url = 'https://myanimelist.p.rapidapi.com/anime/top/%7Bcategory%7D';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'b88bbb4fd1msh8cd0c48e1ffa93fp171495jsn307a8a2b4fba',
        'x-rapidapi-host': 'myanimelist.p.rapidapi.com'
      }
    };

    
  const fetchTopAnime = async() => {
    try{
      setLoading(true)
      const resp = await fetch(url , options)
      if(resp.status === 429){
        throw new Error("you have exceed the request limit")
      }
      const data = await resp.json();
      setAData(data)
      console.log(data)
      setLoading(false)
    }
    catch(err){
      setError(err.message)
      setLoading(false)
      console.log(err)
    }
   

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
      <div  className=" flex flex-col h-full items-center overflow-y-scroll">
        {loading ? <Loading /> 
        : (error ?  ( <div className=" w-[80%]  h-[80%] bg-slate-400  rounded-md p-5  ">
                          <div className=" text-2xl text-black"> {error}</div>
                          </div> )
              :
                (<div className=" w-[70%] xl:w-[80%] h-fit ml-10 bg-slate-300 grid gap-4 xl:gap-6 rounded-md p-1 pr-2 md:p-4   md:px-5  grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-16 " >
                    {!!Adata.length > 0 &&
                    Adata.slice(page*9 - 9, page*9).map((data) => (
                        <AnimeCard key={data.myanimelist_id} data = {data} />
                    ))}
                </div>)
          )
        }
        {loading ? <Loading /> 
        : 
          Adata.length > 0 && 
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
        }

      </div>

       
    </>

  )
}

export default Anime
