import poster from "../assets/modernfamily.jpg"
import { FaPlay } from "react-icons/fa"
import { AiOutlineInfoCircle } from "react-icons/ai"

const Banner = () => {
   return (
      <div className="flex flex-col space-y-2 md:space-y-4 py-16 md:h-[100vh] md:justify-end md:pb-12">
         <div className="absolute -z-10 top-0 left-0 h-[100vh] w-screen">
            <img
               src={poster}
               alt=""
               className="h-screen w-full object-cover object-center"
            />
         </div>
         <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
            Modern Family
         </h1>
         <p className="max-w-xs text-xs md:max-w-lg md:text-lg">
            Jay has grown children, grandchildren and a gorgeous young wife with
            a preteen son of her own. Together, they must bridge generational
            and cultural gaps.
         </p>
         <div className="flex space-x-3">
            <button className="flex items-center justify-center gap-2 bg-white rounded px-4 md:px-6 py-1 md:py-2 text-lg md:text-xl font-semibold text-black cursor-pointer">
               <FaPlay className="text-2xl" />
               Play
            </button>
            <button className="flex items-center justify-center gap-2 bg-[gray]/70 rounded px-4 md:px-6 py-1 md:py-2 text-lg md:text-xl font-semibold cursor-pointer">
               <AiOutlineInfoCircle className="text-2xl" />
               More Info
            </button>
         </div>
         {/* <button className="flex items-center justify-center gap-2 absolute left-[50px] bottom-[100px] bg-white rounded px-6 py-2 text-lg font-semibold">
            <FaPlay className="text-2xl" />
            Play
         </button>
         <button className="flex items-center justify-center gap-2 absolute left-[180px] bottom-[100px] text-white bg-neutral-600/[0.8] rounded px-6 py-2 text-lg font-semibold">
            <AiOutlineInfoCircle className="text-2xl" />
            More Info
         </button> */}
      </div>
   )
}

export default Banner
