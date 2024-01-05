import Button from "./Button"

type Props = {
  Svg: React.FC
  countryName: string
}

function Country({ Svg, countryName }: Props) {
  return (
    <div className="flex flex-col items-center">
      <Svg />
      <h1 className="tracking-[0.6rem] uppercase mb-5 text-xl">
        {countryName}
      </h1>
      <Button linkTo="/location" text="see location" peach />
    </div>
  )
}

export default Country
