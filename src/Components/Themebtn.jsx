import { useState, useEffect } from "react";


export default function ThemeBtn(props) {
  const [themeMode , setThemeMode] = useState("light")
  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }


 const onchange = (e) => {
        const darkThemestatus = e.currentTarget.checked
        if(darkThemestatus){
            darkTheme()
        }else{
            lightTheme()
        }
 }

 useEffect(() =>{
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(themeMode)

 },[themeMode])

    return (
        <label className={`relative inline-flex items-center cursor-pointer ${props.className}`}>
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange = {onchange}
                checked={themeMode==="dark"}
            />

            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500 "></div>
            <span className={`hidden ml-3 text-sm font-medium text-gray-900 dark:text-white md:block`}>Toggle Theme</span>

 
          
        </label>
    );
}

