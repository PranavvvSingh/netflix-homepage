import { useState, useEffect, useRef } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { VideoType } from "../types/types"
import Thumbnail from "./Thumbnail"
import { fetchData } from "../utils/fetchData"
import { formatString } from "../utils/formatString"

const Row = ({collection_name}: {collection_name: string}) => {
   const [data, setData] = useState<VideoType[]>([])
   const rowRef = useRef<HTMLDivElement>(null)
   const handleClick = (direction: string) => {
      if (rowRef.current) {
         const { scrollLeft, clientWidth } = rowRef.current
         const scrollTo =
            direction == "left"
               ? scrollLeft - clientWidth
               : scrollLeft + clientWidth
         rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
      }
   }

   useEffect(() => {
      const fetchVideos = async () => {
         const response = await fetchData(collection_name)
         setData(response)
      }
      fetchVideos()
   }, [])

   return (
      <div>
         <h2 className="w-56 cursor-pointer text-sm md:text-xl font-semibold text-[#e5e5e5] transition duration-200 hover:text-white capitalize">
            {formatString(collection_name)}
         </h2>
         <div className="group/row relative -ml-5">
            <div
               className={`absolute flex items-center top-0 bottom-0 left-0 z-40 m-auto h-28 md:h-36  opacity-0 transition group-hover/row:opacity-100 bg-black/[0.5]`}
               onClick={() => handleClick("left")}
            >
               <FaChevronLeft className="h-9 w-9 cursor-pointer hover:scale-125 transition-all duration-200 ease-out" />
            </div>

            <div
               ref={rowRef}
               className="scrollbar-hide flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 p-5"
            >
               {data.map((video) => (
                  <Thumbnail key={crypto.randomUUID()} data={video} />
               ))}
            </div>
            <span
               className="absolute flex items-center top-0 bottom-0 right-0 z-40 m-auto h-28  md:h-36 opacity-0 transition  group-hover/row:opacity-100 bg-black/[0.5]"
               onClick={() => handleClick("right")}
            >
               <FaChevronRight className="h-9 w-9 cursor-pointer hover:scale-125 transition-all duration-200" />
            </span>
         </div>
      </div>
   )
}

export default Row
