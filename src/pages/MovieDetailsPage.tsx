import { Button } from '@mui/material';
import Heading from '../components/heading/Heading';
import Loading from '../components/loading/Loading';
import useMovieDetails from '../hooks/useMovieDetails';


const imgpath = `https://image.tmdb.org/t/p/w500/`;

const MovieDetailsPage = () => {
   const {oneMovieDetails,loading,error }=useMovieDetails()
    
  return (
    <>
    <Heading title='Movie Details'/>
    <Loading status={loading} error={error}>
    <div className='grid grid-cols-6  gap-4 h-min'>
        <div className='details_img'>
          <img src={imgpath + oneMovieDetails?.poster_path} alt={oneMovieDetails?.title} className='w-full h-5/6 rounded-md inline-block' />
        </div>

        {/* details */}
        <div className= 'details_container dark:bg-slate-400 dark:text-white '>
          <h2 className=' font-title text-center text-2xl mb-5'>{oneMovieDetails?.title}</h2>
          <div className=''>
            <span className=' info_title dark:text-white '>Overview :</span>
            <p className='indent-12 tracking-wide leading-8 text-justify text-sm text-slate-600 font-semibold dark:text-white'>{oneMovieDetails?.overview}</p>
          </div>
          <div className='flex items-center my-5 gap-2  leading-8 dark:text-white'>
            <span className='  info_title dark:text-white '>Release Date :</span>
            <p className='info dark:text-white'>{oneMovieDetails?.release_date}</p>
          </div>
          <div className='one_line dark:text-white'>
            <span className='  info_title dark:text-white '>Vote Average :</span>
            <p className='info dark:text-white'>{oneMovieDetails?.vote_average}</p>
          </div>
          <div className='one_line dark:text-white'>
            <span className='  info_title dark:text-white '>popularity :</span>
            <p className='info dark:text-white'>{oneMovieDetails?.popularity}</p>
          </div>
          <div className='one_line dark:text-white'>
            <span className='  info_title dark:text-white '>Production Companies :</span>
            {
              oneMovieDetails?.production_companies?.map((item,i) =>{
                return (
                  <span key={i} className=' companies '>{item.name}</span>
                )
              })
            }
           
           
          </div>
          <div className='one_line dark:text-white'>
            <span className='  info_title dark:text-white '>Production Countries :</span>
            {
              oneMovieDetails?.production_countries?.map((item,i) =>{
                return (
                  <span key={i} className=' companies '>{item.name}</span>
                )
              })
            }
           
           
          </div>
          <div className='flex items-center my-5 gap-2 leading-8 dark:text-white'>
            <span className='  info_title dark:text-white '>Homepage :</span>
          
            <a href={oneMovieDetails?.homepage} target='blank'> <Button size='small' variant="contained" color="error">
            Click Here
</Button></a>
          </div>
          
        </div>
    </div>
    </Loading>
    </>
  )
}

export default MovieDetailsPage