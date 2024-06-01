import { lazy ,Suspense, useState} from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorElement from '../pages/ErrorElement'



const MainLayout = lazy(() => import ("../layouts/MainLayout"))
const HomePage = lazy(() => import ("../pages/HomePage"))
const MovieDetailsPage = lazy(() => import ("../pages/MovieDetailsPage"))


const AppRouter = () => {
  const [searchWord, setsearchWord] = useState<string>('')
    
const router = createBrowserRouter([
    { path:'/',element:<Suspense fallback={<div className='h-screen flex justify-center items-center font-bold text-slate-500'>Loading Please Wait .... </div>}><MainLayout setsearchWord={setsearchWord} searchWord={searchWord}/></Suspense>,  errorElement:<ErrorElement/>,children:[
        {index:true, element:<HomePage searchWord={searchWord}/>},
        {path:'movie/:movieId', element:<MovieDetailsPage/>},
    ]}
])

  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter