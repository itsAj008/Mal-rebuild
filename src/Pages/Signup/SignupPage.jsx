

import ReactDOM from "react-dom";
import { useEffect , useRef ,useState} from 'react';
// import authSerivce from "../../appwrite/auth";
import { Account } from "appwrite";
import authSerivce from "../../appwrite/auth";


function SignupPage({ closePopup, openLogin, setShowSPopup,setShowFPopup}) {

    const modalRef = useRef(null);
    const [user, setUser] = useState({
      name:"",
      email:"",
      password:"",
    })
   
    const signUpUser = async(e) => {
      e.preventDefault()
      console.log(user.name)
      console.log(user.email)
      console.log(user.password)

      const promise = authSerivce.createAccount({
        name: user.name,
        email: user.email,
        password: user.password,
      });

      promise.then((response)=>{
          console.log(response)
          closePopup()
          setShowSPopup(true)
          authSerivce.account.cre
        },
          (error) => {
            console.log(error)
            closePopup()
            setShowFPopup(true)
          }
      )
      
    }

    async function handleLogin () {
        authSerivce.account.createOAuth2Session( 'google','http://localhost:5173/',
        'http://localhost:5173/fail')

    }
    


    useEffect(() => {
        const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closePopup();
        }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [closePopup]);



    return ReactDOM.createPortal  (
      <>
        <div className=' fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60'> </div>
        <div ref={modalRef} className="  z-10 flex flex-col fixed top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2  
                           w-fit  h-fit px-5  rounded-xl bg-slate-200 shadow-lg  dark:bg-slate-300  shadow-black-600/50
                           dark:shadow-slate-400/50  "  >
          <button onClick={closePopup} className='self-end mt-2 mb-2 text-sm border-1 px-1 font-semibold'>Close</button>
          <h2 className='text-center mb-2  font-bold text-2xl'>Sign up</h2>

          <form onSubmit={signUpUser} className='flex flex-col gap-3 p-5 w-96'>
            <input type="text" placeholder="Username"
                   className=' border-2 rounded-md  p-1 pl-2'
                   onChange={(e) => setUser({
                    ...user, name : e.target.value
                    })} />

            <input type="email" placeholder="Email"
                   className=' border-2 rounded-md  p-1 pl-2' 
                   onChange={(e) => setUser({
                    ...user,
                    email: e.target.value,
                   }) }/>
            <input type="password" placeholder="Password" 
                   className=' border-2 rounded-md  p-1 pl-2'
                   onChange={(e) => setUser({
                    ...user,
                    password: e.target.value,
                   }) }/>

            <button className='loginbtn w-full hover:scale-100 mt-1 bg-blue-500
                             text-white border-none hover:bg-blue-700' type="submit">
                              Sign Up</button>

            <p className='mt-5 mb-2'>Already have an account? <span className='border-b-3 border-blue-100 text-blue-500 font-bold cursor-pointer' onClick={openLogin}>Log in</span></p>
          </form>
          <button onClick={handleLogin}>google</button>
        </div>
      </>,
      document.getElementById("login-portal")
    );
  }

export default SignupPage



