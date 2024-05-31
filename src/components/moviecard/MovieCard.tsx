
import { TMovie } from '../../types/movietype'

const imgpath = `https://image.tmdb.org/t/p/w500/`;

const MovieCard = ({poster_path}:TMovie) => {
  return (
    <div className=" rounded-lg relative group  ">
    <img src={imgpath + poster_path} alt="" className="w-full rounded-lg" />
    <div className="
    flex 
    flex-col
    justify-between
     absolute
     text-white
      opacity-0
       top-0 left-0
        right-0 bottom-0 font-semibold p-2 group-hover:opacity-100 transition
        duration-500 ">
            <h2 className='text-center text-2xl'>Film Title</h2>
            <p className='tracking-wide line-clamp-5 leading-5 text-justify mt-5 transition
        duration-1000  translate-y-10   group-hover:translate-y-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quaerat perspiciatis unde sint voluptatem rerum veniam blanditiis quisquam nihil at.</p>

        </div>
  </div>
  )
}

export default MovieCard