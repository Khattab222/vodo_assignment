import { useEffect } from "react"
import Heading from "../components/heading/Heading"

import MovieCard from "../components/moviecard/MovieCard"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { getAllTrendingMovies } from "../store/movies/action/getAllTrendingMovies"

const HomePage = () => {

  const dispatch = useAppDispatch()
  const {allMovies,loading,error} = useAppSelector((state) => state.movies)



useEffect(() => {
  
dispatch(getAllTrendingMovies())
}, [dispatch])


const moviesList = allMovies.map((movie) =>{
  return ( <MovieCard key={movie.id} {...movie}/>)
})



  return (
    <div className="  ">
      <Heading title="Trending Movies" />
      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">

{
  moviesList
}
     
    
      
        
  </div>
    </div>
  )
}

export default HomePage