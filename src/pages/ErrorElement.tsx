
import { Link } from "react-router-dom";



export default function ErrorElement() {
 

 

 
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className=" text-3xl text-red-500 ">Page not Found</div>
   <Link to='/' replace={true} className="text-center text-green-600">
    
    How about going back to safety?<br/>
    Click Here  
   </Link>
    </div>
  )
}
