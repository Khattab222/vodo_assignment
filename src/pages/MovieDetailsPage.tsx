import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getMovieDetails } from '../store/movies/action/getMovieDetails';
import { Button } from '@mui/material';


const imgpath = `https://image.tmdb.org/t/p/w500/`;

const MovieDetailsPage = () => {
    const {movieId} = useParams()
  
    const dispatch = useAppDispatch()
    const {oneMovieDetails } = useAppSelector((state) => state.movies)

    useEffect(() => {
   
      dispatch(getMovieDetails(movieId as string))
      return () =>{
        console.log("out")
      }
    }, [dispatch,movieId])
    
  return (
    <div className='grid grid-cols-6  gap-4 h-min'>
        <div className='col-span-6 md:col-span-3 shadow-lg rounded-md h-min'>
          <img src={imgpath + oneMovieDetails?.poster_path} alt={oneMovieDetails?.title} className='w-full h-5/6 rounded-md inline-block' />
        </div>

        {/* details */}
        <div className= 'col-span-6 md:col-span-3 bg-slate-100 rounded-md p-4 shadow-2xl flex-col h-min py-7 '>
          <h2 className=' font-title text-center text-2xl mb-5'>{oneMovieDetails?.title}</h2>
          <div className=''>
            <span className=' font-extrabold  text-slate-900'>Overview :</span>
            <p className='indent-12 tracking-wide leading-8 text-justify text-sm text-slate-600 font-semibold'>{oneMovieDetails?.overview}</p>
          </div>
          <div className='flex items-center my-5 gap-2  leading-8'>
            <span className='  font-extrabold  text-slate-900'>Release Date :</span>
            <p className=' text-justify text-sm text-slate-600 font-semibold'>{oneMovieDetails?.release_date}</p>
          </div>
          <div className='flex items-center my-5 gap-2 leading-8'>
            <span className='  font-extrabold  text-slate-900'>Vote Average :</span>
            <p className=' text-justify text-sm text-slate-600 font-semibold'>{oneMovieDetails?.vote_average}</p>
          </div>
          <div className='flex items-center my-5 gap-2 leading-8'>
            <span className='  font-extrabold  text-slate-900'>popularity :</span>
            <p className=' text-justify text-sm text-slate-600 font-semibold'>{oneMovieDetails?.popularity}</p>
          </div>
          <div className='flex items-center my-5 gap-2 leading-8'>
            <span className='  font-extrabold  text-slate-900'>Production Companies :</span>
            {
              oneMovieDetails?.production_companies?.map((item,i) =>{
                return (
                  <span key={i} className=' text-center text-sm text-slate-600 font-semibold bg-slate-300 px-2 rounded '>{item.name}</span>
                )
              })
            }
           
           
          </div>
          <div className='flex items-center my-5 gap-2 leading-8'>
            <span className='  font-extrabold  text-slate-900'>Production Countries :</span>
            {
              oneMovieDetails?.production_countries?.map((item,i) =>{
                return (
                  <span key={i} className=' text-center text-sm text-slate-600 font-semibold bg-slate-300 px-2 rounded '>{item.name}</span>
                )
              })
            }
           
           
          </div>
          <div className='flex items-center my-5 gap-2 leading-8'>
            <span className='  font-extrabold  text-slate-900'>Homepage :</span>
          
            <a href={oneMovieDetails?.homepage} target='blank'> <Button size='small' variant="contained" color="error">
            Click Here
</Button></a>
          </div>
          
        </div>
    </div>
  )
}

export default MovieDetailsPage