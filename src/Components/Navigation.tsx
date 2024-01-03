import NavMenu from "./NavMenu"
import Logo from "/shared/desktop/logo-dark.png"
import Logolight from "/shared/desktop/logo-light.png"

type Props = {
  dark: boolean
}

const Navigation = ({ dark }: Props) => {
  return (
    <header className="wrapper flex justify-between pt-5 md:pt-8 lg:pt-10 items-center">
      <div className="">
        <img src={dark ? Logo : Logolight} alt="Logo" className="h-5" />
      </div>
      <div className="">
        <NavMenu
          ulStyle={`flex gap-8 ${dark ? "text-black" : "text-gray-light"}`}
        />
      </div>
    </header>
  )
}

export default Navigation
