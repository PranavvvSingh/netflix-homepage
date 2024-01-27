import { VideoType } from "../types/types"
import { LuDot } from "react-icons/lu"
import { BsPlayCircle } from "react-icons/bs"

const Thumbnail = ({ data }: { data: VideoType }) => {
   return (
      <div className="h-36 min-w-[180px] cursor-pointer transition duration-200 ease-out mid:h-40 md:min-w-[250px] hover:scale-[1.3] group">
         <img
            src={data.url}
            className="rounded-sm object-cover md:rounded"
            alt=""
         />
         
         <BsPlayCircle className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-[15px] -translate-y-[25px] text-white/[0.7] h-[30px] w-[30px] bg-black/[0.7] shadow-xl shadow-black rounded-full" />

         <div className="hidden w-full group-hover:flex flex-col justify-end px-2 py-3 group-hover:absolute -bottom-[1px] bg-gradient-to-t from-black via-black/80 to-transparent h-1/2 text-sm">
            {data.name}
            <div className="flex items-center text-xs text-white/[0.6]">
               <p>{data.genres[0]}</p>
               <LuDot />
               <p>{data.genres[1]}</p>
               <LuDot />
               <p>{data.genres[2]}</p>
            </div>
         </div>
      </div>
   )
}

export default Thumbnail
