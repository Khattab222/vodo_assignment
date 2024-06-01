import Container from '../components/Container'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { useState } from 'react';


type SetSearchWordType = React.Dispatch<React.SetStateAction<string>>;

const MainLayout = ({searchWord,setsearchWord}:{searchWord:string,setsearchWord:SetSearchWordType}) => {

  type TDarkMode = 'light' | "dark"
  const [darkMode, setdarkMode] = useState<TDarkMode>("light")

  return (
    <div className={darkMode}>
  <div className='flex flex-col min-h-screen text-black dark:text-white  dark:bg-gray-900'>
    <div className='' ><Header darkMode={darkMode} setdarkMode={setdarkMode} setsearchWord={setsearchWord} searchWord={searchWord}/></div>
    <div className="flex-grow mt-20">
    <Container>
      <Outlet/>
      </Container>
    </div>
    <div><Footer/></div>

</div>
    </div>
  
  )
}

export default MainLayout