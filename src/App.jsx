
import { Outlet } from "react-router-dom";
import Navbar from "./Components/navbar";


function App() {
  
  return (
    <>
    <div className="min-h-screen flex flex-col">
      <div className="w-full h-screen  bg-slate-100 dark:bg-gray-700 min-h-screen flex flex-col " > 
        <Navbar /> 
        <Outlet />
       
      </div>
    </div>
    </>
  )
}

export default App
