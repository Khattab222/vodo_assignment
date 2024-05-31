
const Header = () => {
  return (
    <nav className="bg-gray-800 p-2 fixed w-full top-0 z-10 text-white ">
          <div className=" p-2 flex items-center justify-between ">
            <div className="font-title ">Vodo Movies</div>
            <div className="flex-grow "> <input type="text" placeholder="Search ....." className=" outline-none rounded w-1/2 block mx-auto p-2 text-slate-600 font-semibold" /></div>
         
          </div>
</nav>
  )
}

export default Header