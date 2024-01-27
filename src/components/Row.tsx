import { useState, useEffect, useRef } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { VideoType } from "../types/types"
import Thumbnail from "./Thumbnail"
import { fetchData } from "../utils/fetchData"

const Row = ({collection_name}: {collection_name: string}) => {
   const [data, setData] = useState<VideoType[]>([])
   const rowRef = useRef<HTMLDivElement>(null)
   const [isMoved, setIsMoved] = useState(false)
   const handleClick = (direction: string) => {
      setIsMoved(true)
      if (rowRef.current) {
         const { scrollLeft, clientWidth } = rowRef.current
         const scrollTo =
            direction == "left"
               ? scrollLeft - clientWidth
               : scrollLeft + clientWidth
         rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
      }
   }
   // const fetchData = async () => {
   //    const querySnapshot = await getDocs(collection(db, "new_releases"))
   //    const list: VideoType[] = querySnapshot.docs.map((doc) => {
   //       const data = doc.data()
   //       return {
   //          id: doc.id,
   //          name: data.name,
   //          url: data.url,
   //          genres: data.genres,
   //       }
   //    })
   //    setData(list)
   // }
   useEffect(() => {
      const fetchVideos = async () => {
         const response = await fetchData(collection_name)
         setData(response)
      }
      fetchVideos()
   }, [])
   return (
      <div className="space-y-0.5 md:space-y-2">
         <h2 className="w-56 cursor-pointer text-sm md:text-xl font-semibold text-[#e5e5e5] transition duration-200 hover:text-white">
            New Releases
         </h2>
         <div className="group/row relative md:-ml-5">
            <FaChevronLeft
               className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group/row-hover:opacity-100 ${
                  !isMoved && "hidden"
               }`}
               onClick={() => handleClick("left")}
            />
            <div
               ref={rowRef}
               className="scrollbar-hide flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 p-5"
            >
               {data.map((video) => (
                  <Thumbnail key={crypto.randomUUID()} data={video} />
               ))}
            </div>
            <FaChevronRight
               className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group/row-hover:opacity-100"
               onClick={() => handleClick("right")}
            />
         </div>
      </div>
   )
}

export default Row
