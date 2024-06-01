
import Heading from "../components/heading/Heading"
import MovieCard from "../components/moviecard/MovieCard"
import PaginationCount from "../components/pagination/Pagination"
import Loading from "../components/loading/Loading"
import useHomePage from "../hooks/useHomePage"

const HomePage = ({searchWord}:{searchWord:string}) => {

 const {allMovies,loading,error,total_pages,total_results,handleChange,page}=useHomePage(searchWord )



const moviesList = allMovies?.map((movie) =>{
  return ( <MovieCard key={movie.id} {...movie}/>)
})



  return (
    <div className="  ">
      <Heading title="Trending Movies" />
      <Loading status={loading} error={error} >
      <h3 className="font-semibold ">{total_results} results</h3>
      <PaginationCount count={total_pages} page={page} handleChange={handleChange} /> 
      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">

{
  moviesList
}
      
  </div>
  </Loading>
    </div>
  )
}

export default HomePage