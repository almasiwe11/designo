import Cta from "../Svg/Cta"
import Whiteheading from "./Whiteheading"

type Props = {
  title: string
  subtitle: string
}

const Designheader = ({ title, subtitle }: Props) => {
  return (
    <section className="wrapper">
      <div className="bg-peach lg:h-[300px] py-24 rounded-lg flex-center relative overflow-hidden">
        <div className="absolute right-0">
          <Cta />
        </div>

        <div className="flex flex-col items-center gap-4">
          <Whiteheading>{title}</Whiteheading>
          <p className="text-white max-w-sm text-center">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}

export default Designheader
