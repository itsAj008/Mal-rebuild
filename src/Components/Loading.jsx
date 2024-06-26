
import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
      <div>
        
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-3 items-center ">
                    <div className=" animate-loading h-20 w-20 rounded-full border-2 border-t-2 border-t-blue-600 " />
                    
                    <span className=" text-gray-500 dark:text-white text-xl text-center">Loading <span className="animate-blink">...</span></span>
                </div>

        
      </div>
    )
  }
}

export default Loading
