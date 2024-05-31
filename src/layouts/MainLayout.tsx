import Container from '../components/Container'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen text-black'>
    <div className='' ><Header/></div>
    <div className="flex-grow mt-20">
    <Container>
      <Outlet/>
      </Container>
    </div>
    <div><Footer/></div>

</div>
  )
}

export default MainLayout