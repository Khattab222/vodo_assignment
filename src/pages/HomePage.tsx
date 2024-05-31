import { useEffect, useState } from "react"
import Heading from "../components/heading/Heading"

import MovieCard from "../components/moviecard/MovieCard"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { getAllTrendingMovies } from "../store/movies/action/getAllTrendingMovies"
import PaginationCount from "../components/pagination/Pagination"

const HomePage = () => {

  const dispatch = useAppDispatch()
  const {allMovies,loading,error,total_pages,total_results} = useAppSelector((state) => state.movies)

  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // get data while first render
useEffect(() => {
  
dispatch(getAllTrendingMovies(page))
}, [dispatch,page])


const moviesList = allMovies.map((movie) =>{
  return ( <MovieCard key={movie.id} {...movie}/>)
})



  return (
    <div className="  ">
      <Heading title="Trending Movies" />
      <h3 className="font-semibold ">{total_results} results</h3>
      <PaginationCount count={total_pages} page={page} handleChange={handleChange} /> 
      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">

{
  moviesList
}
      
  </div>

    </div>
  )
}

export default HomePage