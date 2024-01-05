import { useEffect } from "react"
import Design from "../Components/Design"
import Designheader from "../Components/Designheader"
import Gallery from "../Components/Gallery"
import Galleryitem from "../Components/Galleryitem"
import { GalleryItem } from "../Types/Types"
import airfilter from "/app-design/desktop/image-airfilter.jpg"
import eyecam from "/app-design/desktop/image-eyecam.jpg"
import faceit from "/app-design/desktop/image-faceit.jpg"
import loopstudios from "/app-design/desktop/image-loopstudios.jpg"
import todo from "/app-design/desktop/image-todo.jpg"

const Appdesign = () => {
  const appDes: GalleryItem[] = [
    {
      image: airfilter,
      altimage: "airfilter image",
      title: "airfilter",
      subtitle:
        "Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      image: eyecam,
      altimage: "eyecam image",
      title: "eyecam",
      subtitle:
        "Product that lets you edit your favorite photos and videos at any time",
    },

    {
      image: faceit,
      altimage: "FACEIT image",
      title: "FACEIT",
      subtitle:
        "Get to meet your favorite internet superstar with the faceit app",
    },
    {
      image: todo,
      altimage: "todo image",
      title: "todo",
      subtitle: "A todo app that features cloud sync with light and dark mode",
    },
    {
      image: loopstudios,
      altimage: "loopstudios image",
      title: "loopstudios",
      subtitle: "A VR experience app made for Loopstudios",
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="">
      <Designheader
        title="App Design"
        subtitle="Our mobile designs bring intuitive digital solutions
 to your customers right at their fingertips."
      />
      <Gallery>
        {appDes.map((item) => (
          <Galleryitem
            key={item.image}
            title={item.title}
            subtitle={item.subtitle}
            altimage={item.altimage}
            image={item.image}
          />
        ))}
      </Gallery>
      <Design out="app" />
    </div>
  )
}

export default Appdesign
