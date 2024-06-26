import { useEffect, useRef, useState, useCallback } from "react";
import Loading from "../../Components/Loading";

function Manga() {
  const [manga, setManga] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [tload, setTload] = useState(false);
  const scrollRef = useRef(null);
  console.log(scrollRef)

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '841b5de90emshca7110afd23a353p12bf14jsncce64dd2ec31',
      'x-rapidapi-host': 'myanimelist-api1.p.rapidapi.com'
    }
  };
  

  const fetchInitialData = async () => {
    const url = `https://myanimelist-api1.p.rapidapi.com/manga/top/special?p=1`;
    setLoading(true);
    setError(null);

    try {
      const resp = await fetch(url, options);
      if (resp.status === 429) {
        throw new Error("You have exceeded the request limit");
      }
      const data = await resp.json();
      setManga(data);
      setLoading(false);
      console.log(data);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      console.log(err);
    }
  };

  const fetchData = async (page) => {
    const url = `https://myanimelist-api1.p.rapidapi.com/manga/top/special?p=${page}`;
    setError(null);

    try {
      const resp = await fetch(url, options);
      if (resp.status === 429) {
        throw new Error("You have exceeded the request limit");
      }
      const data = await resp.json();
      setTload(false);
      setManga((prev) => [...prev, ...data]);
      console.log(data);
    } catch (err) {
      setError(err.message);
      setTload(false);
      console.log(err);
    }
  };

  const throttle = (cb, interval) => {
    let last = 0;

    return (...args) => {
      let now = new Date().getTime();
      if (now - last < interval) return;
      last = now;
      return cb(...args);
    };
  };

  useEffect(() => {
    if (page > 1) {
      fetchData(page);
      console.log(page)
      console.log("fetching remaing data")
    }
  }, [page]);

  useEffect(() => {
    fetchInitialData();
    console.log(document.documentElement.clientHeight)
    console.log(scrollRef.current.scrollTop)

    console.log(scrollRef.current.scrollHeight)

  },[])

  const handleScroll = useCallback(
    throttle(() => {
      if (
        scrollRef.current &&
        scrollRef.current.clientHeight + scrollRef.current.scrollTop >=
          scrollRef.current.scrollHeight - 100
      ) {
        console.log("Reached the end");
        setTload(true);
        setPage((prev) => prev + 1);
      }
  
      // if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight -100){
      //   setPage(prev => prev + 1)
      //   alert('reached')
      //   console.log('reached ')
      // }

      // if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 50) {
      //   setPage((prevPage) => prevPage + 1);
      //   alert('reached')
      //   console.log('reached ')
      // }
      
    }, 500),
    []
  );

  useEffect(() => {
    const scrollableDiv = scrollRef.current;

    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
      console.log(scrollRef.current.clientHeight)
      console.log(scrollRef.current.scrollTop)

      return () => {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      };
    }

   
    // window.addEventListener('scroll', handleScroll)

    // return () => {
    //   window.removeEventListener('scroll', handleScroll)
    // }
  }, [handleScroll]);

  return (
    <div className="w-full h-full flex flex-col gap-2 items-center overflow-y-scroll" ref={scrollRef}>
      {loading ? (<Loading />) 
         : error ? 
              (<div className="w-[80%] h-[80%] bg-slate-400 rounded-md p-5">
                    <div className="text-2xl text-black">{error}</div>
              </div>)
               : manga.length > 0 
                    ? (<div className="w-fit max-w-[80%] h-fit mt-20 bg-slate-400 rounded-md p-5 grid grid-cols-8 gap-4">
                              {manga.map((data) => (
                                <div
                                  key={data.title}
                                  className="group bg-gray-300 h-fit w-24 px-1 py-1 rounded-md flex flex-col"
                                >
                                  <img
                                    className="h-28 group-hover:scale-105"
                                    src={data.picture_url}
                                    alt={data.title}
                                  />
                                  <span className="text-gray-600 font-semibold text-sm truncate block max-w-full">
                                    {data.title}
                                  </span>
                                </div>
                                ))
                              }
                              {tload && (
                                <div className="flex justify-center items-center">
                                  <div className="animate-loading h-8 w-8 rounded-full border-4 border-t-4 border-t-blue-600" />
                                </div>
                              )}
                         </div>) 
                     : null}

      </div>
      );
}

export default Manga;
