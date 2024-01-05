import Design from "../Components/Design"
import Designheader from "../Components/Designheader"
import Gallery from "../Components/Gallery"
import Galleryitem from "../Components/Galleryitem"
import water from "/graphic-design/desktop/image-boxed-water.jpg"
import change from "/graphic-design/desktop/image-change.jpg"
import science from "/graphic-design/desktop/image-science.jpg"
export const Graphdesign = () => {
  const graphGal = [
    {
      image: water,
      altimage: "water image",
      title: "water",
      subtitle: "A simple packaging concept made for Boxed Water",
    },
    {
      image: change,
      altimage: "change image",
      title: "change",
      subtitle: "A book cover designed for Tim Brown’s new release, ‘Change’",
    },
    {
      image: science,
      altimage: "science image",
      title: "science",
      subtitle: "A poster made in collaboration with the Federal Art Project",
    },
  ]

  return (
    <div>
      <Designheader
        title="Graphic Design"
        subtitle="We deliver eye-catching branding materials that are 
tailored to meet your business objectives.
"
      />
      <Gallery>
        {graphGal.map((item) => (
          <Galleryitem
            key={item.image}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            altimage={item.altimage}
          />
        ))}
      </Gallery>

      <Design out="graph" />
    </div>
  )
}
