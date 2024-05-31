import { lazy ,Suspense} from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"



const MainLayout = lazy(() => import ("../layouts/MainLayout"))
const HomePage = lazy(() => import ("../pages/HomePage"))
const MovieDetailsPage = lazy(() => import ("../pages/MovieDetailsPage"))


const AppRouter = () => {
    
const router = createBrowserRouter([
    { path:'/',element:<Suspense fallback={<div className='h-screen flex justify-center items-center font-bold text-slate-500'>Loading Please Wait .... </div>}><MainLayout/></Suspense>,children:[
        {index:true, element:<HomePage/>},
        {path:'movie/:movieId', element:<MovieDetailsPage/>},
    ]}
])

  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter