type Props = {
  image: string
  altimage: string
  title: string
  subtitle: string
}

function Galleryitem({ image, title, subtitle, altimage }: Props) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col rounded-lg overflow-hidden bg-gray-light">
      <img src={image} alt={altimage} />
      <div className="flex flex-col gap-3 p-8 md:justify-center">
        <h1 className="text-peach text-center text-xl uppercase tracking-widest">
          {title}
        </h1>
        <p className="text-center">{subtitle}</p>
      </div>
    </div>
  )
}

export default Galleryitem
