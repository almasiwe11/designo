type Props = {
  name: string
  text: string
  Svg: React.FC
}

const OneStrength = ({ name, text, Svg }: Props) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col items-center gap-5">
      <div className="flex-center">
        <Svg />
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start lg:items-center">
        <h1 className="uppercase font-semibold text-2xl">{name}</h1>
        <p className="text-center md:text-left lg:text-center">{text}</p>
      </div>
    </div>
  )
}

export default OneStrength
