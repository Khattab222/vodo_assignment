import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useEffect } from "react"
import { getMovieDetails } from "../store/movies/action/getMovieDetails"
import { clearMovieDetails } from "../store/movies/movieSlice"



const useMovieDetails = () => {

    const {movieId} = useParams()
  
    const dispatch = useAppDispatch()
    const {oneMovieDetails,loading,error } = useAppSelector((state) => state.movies)

    useEffect(() => {
   
      dispatch(getMovieDetails(movieId as string))
      return () =>{
       dispatch(clearMovieDetails())
      }
    }, [dispatch,movieId])





  return {oneMovieDetails,loading,error }
}

export default useMovieDetails