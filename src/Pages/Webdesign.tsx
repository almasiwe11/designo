import Designheader from "../Components/Designheader"
import Gallery from "../Components/Gallery"
import Galleryitem from "../Components/Galleryitem"
import { GalleryItem } from "../Types/Types"
import express from "/web-design/desktop/image-express.jpg"
import blogr from "/web-design/desktop/image-blogr.jpg"
import builder from "/web-design/desktop/image-builder.jpg"
import camp from "/web-design/desktop/image-camp.jpg"
import photon from "/web-design/desktop/image-express.jpg"
import transfer from "/web-design/desktop/image-transfer.jpg"
import Design from "../Components/Design"
import { useEffect } from "react"

const Webdesign = () => {
  const webGallery: GalleryItem[] = [
    {
      image: express,
      altimage: "express image",
      title: "express",
      subtitle: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      image: blogr,
      altimage: "blogr image",
      title: "blogr",
      subtitle:
        "Blogr is a platform for creating an online blog or publication",
    },
    {
      image: builder,
      altimage: "builder image",
      title: "builder",
      subtitle: "Connects users with local contractors based on their location",
    },
    {
      image: camp,
      altimage: "camp image",
      title: "camp",
      subtitle:
        "Get expert training in coding, data, design, and digital marketing",
    },
    {
      image: photon,
      altimage: "photon image",
      title: "photon",
      subtitle:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      image: transfer,
      altimage: "transfer image",
      title: "transfer",
      subtitle:
        "Site for low-cost money transfers and sending money within seconds",
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="">
      <Designheader
        title="Web Design"
        subtitle="We build websites that serve as powerful marketing tools 
and bring memorable brand experiences."
      />
      <Gallery>
        {webGallery.map((item) => (
          <Galleryitem
            key={item.image}
            title={item.title}
            image={item.image}
            subtitle={item.subtitle}
            altimage={item.altimage}
          />
        ))}
      </Gallery>
      <Design out="web" />
    </div>
  )
}

export default Webdesign
