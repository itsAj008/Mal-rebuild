import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { lazy } from 'react'
import { Suspense } from 'react'

import { Provider } from 'react-redux'
import store from './app/store'

// import Mainpage from "./Pages/mainPage/MainPage";
// import Anime from './Pages/Anime_page/Anime.jsx'
// import Manga from './Pages/manga_page/Manga.jsx'
// import About from './Pages/about_page/About.jsx'


const MainPage = lazy(() => import( "./Pages/mainPage/MainPage"))
const Anime = lazy(() => import('./Pages/Anime_page/Anime.jsx'))
const Manga = lazy(() => import('./Pages/manga_page/Manga.jsx'))
const About = lazy(() => import('./Pages/about_page/About.jsx'))
const Settings = lazy(() => import('./Pages/settings_page/Settings.jsx'))


import { ErrorBoundary } from 'react-error-boundary'
import Loading from './Components/Loading.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ErrorFallback from './Components/ErrorBoundary.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children :[
      {
        path:'/',
        element:(
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { window.location.reload()}}>
            <Suspense fallback={<Loading />}>
               <MainPage />
            </Suspense>
          </ErrorBoundary>
        )
      },
      {
        path:'anime',
        element:(
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { window.location.reload()}}>
            <Suspense fallback={<Loading />}>
               <Anime />
            </Suspense>
          </ErrorBoundary>
        )
      },
      {
        path:'manga',
        element:(
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { window.location.reload()}}>
            <Suspense fallback={<Loading />}>
              <Manga />
            </Suspense>
          </ErrorBoundary>
        )
      },
      {
        path:'about',
        element:(
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { window.location.reload()}}>
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          </ErrorBoundary>
        )
      },
      {
        path:'settings',
        element:(
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { window.location.reload()}}>
            <Suspense fallback={<Loading />}>
              <Settings />
            </Suspense>
          </ErrorBoundary>
        )
      },
    ],
  },

 
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element = {<App />}>
//           <Route path='' element = {<MainPage />}/>
//           <Route path='/Anime' element = {<Anime />}/>
//           <Route path='/manga' element = {<Manga />}/>
//           <Route path='/about' element = {<About />}/>
//     </Route>
//   )
// )



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}> 
      <RouterProvider router={router} />
  </Provider>,
)
