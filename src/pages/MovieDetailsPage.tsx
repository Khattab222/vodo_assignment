import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getMovieDetails } from '../store/movies/action/getMovieDetails';
const MovieDetailsPage = () => {
    const {movieId} = useParams()
  
    const dispatch = useAppDispatch()
    const {oneMovieDetails} = useAppSelector((state) => state.movies)

    useEffect(() => {
   
      dispatch(getMovieDetails(movieId as string))
    }, [dispatch,movieId])
    
  return (
    <div className='grid grid-cols-6'>
        <div className='col-span-2 bg-red-50'>photo</div>
        <div className= 'col-span-4 bg-red-600'>details</div>
    </div>
  )
}

export default MovieDetailsPage