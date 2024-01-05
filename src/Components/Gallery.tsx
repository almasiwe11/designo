type Props = {
  children: React.ReactNode
}

const Gallery = ({ children }: Props) => {
  return (
    <div className="flex flex-col lg:grid grid-cols-3 gap-4 wrapper my-16">
      {children}
    </div>
  )
}

export default Gallery
