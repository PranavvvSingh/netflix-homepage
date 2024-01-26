import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { VideoType } from "../types/types"
const responsive = {
   superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      slidesToSlide: 6,
   },
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
      partialVisibilityGutter: 100,
   },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4,
   },
   mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 3,
   },
}
const CustomCarousel = ({ data }: { data: VideoType[] }) => {
   return (
      <Carousel
         responsive={responsive}
         swipeable={false}
         draggable={false}
         infinite={true}
         // partialVisible={true}
         centerMode={true}
         keyBoardControl={true}
         transitionDuration={500}
         removeArrowOnDeviceType={["tablet", "mobile"]}
      >
         {data.map((video) => (
            <img src={video.url} key={video.id} className="aspect-video px-[2px]"></img>
         ))}
      </Carousel>
   )
}

export default CustomCarousel
