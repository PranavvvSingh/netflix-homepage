import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"
import { useEffect, useState } from "react"
import CustomCarousel from "./CustomCarousel"
import { VideoType } from "../types/types"

const Playlists = () => {
   const [data, setData] = useState<VideoType[]>([])
   const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "new_releases"))
      const list: VideoType[] = querySnapshot.docs.map((doc) => {
         const data = doc.data()
         return {
            id: doc.id,
            name: data.name,
            url: data.url,
            genres: data.genres,
         }
      })
      setData(list)
   }
   useEffect(()=>{
      fetchData()
   },[])
   return (
      <div className="h-[300px] bg-neutral-900 w-full text-neutral-200 py-10 text-xl font-semibold">
         New Releases
         <CustomCarousel data={data}/>
      </div>
   )
}

export default Playlists
