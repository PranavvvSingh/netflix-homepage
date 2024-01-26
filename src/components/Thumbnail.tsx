import { VideoType } from "../types/types"

const Thumbnail = ({ data }: { data: VideoType }) => {
   return (
      <div className="h-36 min-w-[180px] cursor-pointer transition duration-200 ease-out mid:h-40 md:min-w-[260px] hover:scale-105">
         <img
            src={data.url}
            className="rounded-sm object-cover md:rounded"
            alt=""
         />
      </div>
   )
}

export default Thumbnail
