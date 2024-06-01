
import { Link } from 'react-router-dom';
import { TMovie } from '../../types/movietype'
import { Button } from '@mui/material';





const imgpath = `https://image.tmdb.org/t/p/w500/`;

const MovieCard = ({poster_path,title,overview,id,vote_average}:TMovie) => {
  return (
    <div className=" rounded-lg relative group overflow-hidden  ">
      <div className=' absolute bg-indigo-500 w-[40px] h-[30px] top-0 right-0 text-center font-semibold text-xl text-amber-300 rounded  z-9 '>{Math.ceil (vote_average)}</div>
    <img src={imgpath + poster_path} alt="" className="w-full rounded-lg group-hover:scale-125 transition " />
    <Link to={`movie/${id}`} className="
    flex 
    flex-col
    justify-between
     absolute
     text-white
      opacity-0
       top-0 left-0
        right-0 bottom-0 font-semibold p-2 group-hover:opacity-100 transition
        duration-500 pb-4 bg-black/[.70]  ">
            <h2 className='text-center text-2xl'>{title}</h2>

            <p className='tracking-wide line-clamp-5 leading-5 text-justify mt-5 transition
        duration-1000  translate-y-10   group-hover:translate-y-2 '>{overview}</p>
  <Button variant="contained">Discover</Button>
        </Link>
  </div>
  )
}

export default MovieCard