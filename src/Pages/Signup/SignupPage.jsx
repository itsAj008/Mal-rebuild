import React from 'react'

function SignupPage({ closePopup, openLogin}) {
    const handleLogin = () => {
      // Logic for handling login
    };

    return (
      <div >
               <div className=" z-10 flex flex-col fixed top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2  w-fit  h-fit px-5 rounded-md bg-slate-300 dark:bg-slate-300 shadow-lg shadow-black-600/50 dark:shadow-slate-400/50 bg-opacity-50 "  >
        <button onClick={closePopup} className= ' w-fit  ml-[+340px] mt-2 mb-2 text-sm border-1 px-1 rounded-md  font-semibold'>close</button>
        <h2 className='text-center mb-2  font-bold text-2xl'>Sign up</h2>
          <form onSubmit={handleLogin} className='flex flex-col gap-3 p-5 w-96'>
          <input type="email" placeholder="Email" className=' border-2 rounded-md  p-1 pl-2' />
            <input type="text" placeholder="Username" className=' border-2 rounded-md  p-1 pl-2' />
            <input type="password" placeholder="Password" className=' border-2 rounded-md  p-1 pl-2'/>
            <button className='loginbtn w-full hover:scale-100 mt-1 bg-blue-500 text-white border-none hover:bg-blue-700 dark:'  type="submit">Sign Up</button>
            <p className='mt-5 mb-5'>Already have an account? <span className='border-b-3 border-blue-100 text-blue-500 font-bold cursor-pointer' onClick={openLogin}>Log in</span></p>
          </form>
          
        </div>
      </div>
    );
  }

export default SignupPage



