import { VideoType } from "../types/types"

const Thumbnail = ({ data }: { data: VideoType }) => {
   return (
      <div className="h-32 min-w-[180px] cursor-pointer transition duration-200 ease-out mid:h-40 md:min-w-[230px] hover:scale-[1.3] group">
         {/* <p className="hidden group-hover:block group-hover:absolute top-1/2">
            hello
         </p> */}
         <img
            src={data.url}
            className="rounded-sm object-cover md:rounded"
            alt=""
         />
         {/* <div className="hidden bg-red-600 group-hover:block group-hover:absolute -bottom-15 h-[100px]">ad</div> */}
      </div>
   )
}

export default Thumbnail
