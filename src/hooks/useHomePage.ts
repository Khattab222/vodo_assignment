import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { searchMovies } from "../store/movies/action/searchMovies";
import { getAllTrendingMovies } from "../store/movies/action/getAllTrendingMovies";




const useHomePage = (searchWord:string) => {

  const dispatch = useAppDispatch()
  const {allMovies,loading,error,total_pages,total_results} = useAppSelector((state) => state.movies)


  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // get data while first render
useEffect(() => {
  // check if search word
  if (searchWord !== "") {
    dispatch(searchMovies({page:page,search:searchWord}))
  }else{

    dispatch(getAllTrendingMovies(page))
  }
}, [dispatch,page])






  return {allMovies,loading,error,total_pages,total_results,handleChange,page}
}

export default useHomePage