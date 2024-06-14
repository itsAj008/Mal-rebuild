import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import store from './app/store'

import Mainpage from "./Pages/mainPage/MainPage";
import Anime from './Pages/Anime_page/Anime.jsx'
import Manga from './Pages/manga_page/Manga.jsx'
import About from './Pages/about_page/About.jsx'


import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children :[
      {
        path:'/',
        element:<Mainpage />
      },
      {
        path:'Anime',
        element:<Anime />
      },
      {
        path:'manga',
        element:<Manga />
      },
      {
        path:'about',
        element:<About />
      },
    
      
     
    ],
  },

 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}> 
    <RouterProvider router={router} />
  </Provider>,
)
