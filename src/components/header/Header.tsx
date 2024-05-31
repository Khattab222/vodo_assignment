import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../store/hooks"
import { searchMovies } from "../../store/movies/action/searchMovies"

const Header = () => {
const navigate = useNavigate()
const dispatch = useAppDispatch()

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    navigate('/')
    dispatch(searchMovies({page:1,search:newValue}))
  }

  return (
    <nav className="bg-gray-800 p-2 fixed w-full top-0 z-10 text-white ">
          <div className=" p-2 flex items-center justify-between ">
            <Link to='/'  className="font-title text-3xl bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent    ">Vodo Movies</Link>
            <div className="flex-grow "> <input onChange={(e)=>handleSearch(e)} type="text" placeholder="Search ....." className=" outline-none rounded w-1/2 block mx-auto p-2 text-slate-600 font-semibold" /></div>
         
          </div>
</nav>
  )
}

export default Header