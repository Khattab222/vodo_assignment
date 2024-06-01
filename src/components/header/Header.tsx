import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../store/hooks"
import { searchMovies } from "../../store/movies/action/searchMovies"
import { getAllTrendingMovies } from "../../store/movies/action/getAllTrendingMovies"
import { useEffect } from "react";
import style from "./header.module.css"
import { DarkMode } from "@mui/icons-material";


const {nav,rabnav,homeLink,searchBar}=style



type THeaderProps ={
  searchWord:string
  setsearchWord:React.Dispatch<React.SetStateAction<string>>
  setdarkMode:React.Dispatch<React.SetStateAction<"dark" | "light">>
  darkMode:"dark" | "light"
}

const Header = ({searchWord,setsearchWord,setdarkMode,darkMode}:THeaderProps) => {
const navigate = useNavigate()
const dispatch = useAppDispatch()


useEffect(() => {

  navigate('/')
  if (searchWord === '') {
 
    dispatch(getAllTrendingMovies(1))
  }else{
    dispatch(searchMovies({page:1,search:searchWord}))
  }
}, [searchWord])

const handleDarkMode = () =>{
  if (darkMode == "light") {
    
    setdarkMode('dark')
  }else{
    setdarkMode('light')

  }
}


  return (
    <nav className={`${nav} dark:bg-gray-800`}>
          <div className={rabnav}>
            <Link to='/'  className={`${homeLink}  md:text-3xl `}>Vodo Movies</Link>
            <div className="flex-grow "> <input onChange={(e)=>setsearchWord(e.target.value)} type="text" placeholder="Search ....." className={`${searchBar} dark:bg-gray-600 dark:text-white`} /></div>
              <div onClick={handleDarkMode} className=" cursor-pointer " > <DarkMode color={darkMode ==="dark"?"primary":"secondary"} sx={{ fontSize: 40,marginRight:'5px' }}/> </div>
          </div>
</nav>
  )
}

export default Header