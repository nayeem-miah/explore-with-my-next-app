import Image from "next/image"
// import nextImage from "../../../assets/logo-1720462257907.png" //? relative path 
// import nextImage from "@/assets/logo-1720462257907.png" //? absolute path 

function Gallery() {
  return (
    <div>
      <h3>Regular image Tags</h3>

      {/* //! do not use this image tags* */}
      {/* <img src="https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg"
        height={500}
        width={500}
        alt=""
        className="mx-auto"
      /> */}

      {/* //?you can use next/image* */}
      {/* <Image src="https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg"
        height={500}
        width={500}
        alt="nextjs image"
        className="mx-auto"
      /> */}

      {/*//? local image  --> assets folder*/}
      {/* <Image src={nextImage}
        alt="nextjs image"
        className="mx-auto"
      /> */}

      {/*//? local image  --> assets folder*/}
      <Image src={"/nextjs.png"}
        alt="nextjs image"
        className="mx-auto"
        height={500}
        width={500}
      />
    </div>
  )
}

export default Gallery