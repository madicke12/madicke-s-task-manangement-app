
import Sidenav from "./sidenav"
import Navbar from "./navbar"
const layout=({children})=>{
    return(
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full md:flex-none md:w-64 hidden md:block">
        <Sidenav />
      </div>
      <div className="w-full px-2 py-4">
      <Navbar/>
      <div className="flex-grow p-6  md:py-5">{children}</div>
      </div>
    </div>
    )
}

export default layout