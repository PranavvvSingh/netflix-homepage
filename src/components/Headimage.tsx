import poster from "../assets/modernfamily.jpg"
import { FaPlay } from "react-icons/fa"
import { AiOutlineInfoCircle } from "react-icons/ai"

const Headimage = () => {
   return (
      <div className="relative">
         <div className="static top-0 left-0 w-full">
            <img
               src={poster}
               alt=""
               className="h-screen w-full object-cover object-top"
            />
         </div>
         <button className="flex items-center justify-center gap-2 absolute left-[50px] bottom-[100px] bg-white rounded px-6 py-2 text-lg font-semibold">
            <FaPlay className="text-2xl" />
            Play
         </button>
         <button className="flex items-center justify-center gap-2 absolute left-[180px] bottom-[100px] text-white bg-neutral-600/[0.8] rounded px-6 py-2 text-lg font-semibold">
            <AiOutlineInfoCircle className="text-2xl" />
            More Info
         </button>
      </div>
   )
}

export default Headimage
