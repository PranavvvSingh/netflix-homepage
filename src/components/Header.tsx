import logo from "../assets/netflix.png"
import { IoSearchOutline } from "react-icons/io5"
import { FaRegBell } from "react-icons/fa"

const Header = () => {
   const links = [
      "Home",
      "TV Shows",
      "Movies",
      "New & Popular",
      "My List",
      "Browse by Languages",
   ]
   return (
      <nav className="fixed w-full flex justify-between items-center bg-neutral-900 py-3 px-10 z-20">
         <div className="flex gap-10 items-center">
            <img src={logo} alt="" className="h-[45px]" />
            <div className="text-neutral-200 text-sm flex gap-5">
               {links.map((link) => (
                  <p key={crypto.randomUUID()}>{link}</p>
               ))}
            </div>
         </div>
         <div className="flex text-neutral-200 text-2xl gap-5">
            <IoSearchOutline />
            <FaRegBell />
         </div>
      </nav>
   )
}

export default Header
