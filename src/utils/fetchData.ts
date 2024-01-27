import { getDocs, collection } from "firebase/firestore"
import { db } from "../firebase/config"
import { VideoType } from "../types/types"

export const fetchData = async (movie_collection: string) => {
   const querySnapshot = await getDocs(collection(db, movie_collection))
   const list: VideoType[] = querySnapshot.docs.map((doc) => {
      const data = doc.data()
      return {
         id: doc.id,
         name: data.name,
         url: data.url,
         genres: data.genres,
      }
   })
   return list
}
