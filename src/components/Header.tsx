import logo from "../assets/netflix.png"
import { IoSearchOutline } from "react-icons/io5"
import { FaRegBell } from "react-icons/fa"
import { useEffect, useState } from "react"

const Header = () => {
   const [scroll, setScroll] = useState(false)
   useEffect(()=>{
      const handleScroll = () =>{
         if(window.scrollY > 0) setScroll(true)
         else setScroll(false)
      }
      window.addEventListener("scroll", handleScroll)
      return () =>{
         window.removeEventListener("scroll", handleScroll) 
      } 
   },[])
   const links = [
      "Home",
      "TV Shows",
      "Movies",
      "New & Popular",
      "My List",
      "Browse by Languages",
   ]
   return (
      <nav
         className={`${
            scroll ? "bg-[#141414]" : "bg-transparent"
         } transition-all shadow-[inset_0_35px_60px_-15px_rgba(0,0,0,0.9)] fixed w-full flex justify-between items-center py-3 px-10 z-20`}
      >
         <div className="flex gap-10 items-center">
            <img src={logo} alt="" className="h-[45px]" />
            <div className="text-sm hidden md:flex gap-5">
               {links.map((link) => (
                  <p key={crypto.randomUUID()}>{link}</p>
               ))}
            </div>
         </div>
         <div className="flex text-2xl gap-5">
            <IoSearchOutline />
            <FaRegBell />
         </div>
      </nav>
   )
}

export default Header
