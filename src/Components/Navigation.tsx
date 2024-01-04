import { useState } from "react"
import Close from "./Close"
import Hamburger from "./Hamburger"
import NavMenu from "./NavMenu"
import Logo from "/shared/desktop/logo-dark.png"
import Logolight from "/shared/desktop/logo-light.png"

type Props = {
  dark: boolean
  mobileMenu?: boolean
}

const Navigation = ({ dark = false, mobileMenu = false }: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <div
        className={`h-20 flex-center relative z-50 ${
          dark ? "bg-white" : "bg-transparent"
        }`}
      >
        <div
          className={`wrapper flex ${
            dark ? "justify-between items-center" : "flex-col"
          }  `}
        >
          <div className={`${!dark && "flex-center md:inline-block"}`}>
            <img src={dark ? Logo : Logolight} alt="Logo" className="h-5" />
          </div>
          <div>
            <div className={mobileMenu ? "hidden md:block" : "block"}>
              {!dark && (
                <div className="border border-t-1 border-gray-dark md:hidden my-5"></div>
              )}
              <NavMenu
                ulStyle={`flex ${
                  dark
                    ? "text-gray-dark gap-8"
                    : "text-gray-light flex-col gap-3 items-center md:flex-row md:items-start"
                }`}
              />
            </div>
            <div
              onClick={() => setOpen((prev) => !prev)}
              className={
                !mobileMenu ? "hidden" : "block md:hidden cursor-pointer"
              }
            >
              {open && <Close />}
              {!open && <Hamburger />}
            </div>
          </div>
        </div>
      </div>
      {mobileMenu && open && (
        <div className="absolute top-full left-0 right-0  bg-black z-50">
          <NavMenu ulStyle="flex flex-col gap-4 px-5 text-gray-light py-8 text-lg" />
        </div>
      )}

      {mobileMenu && open && (
        <div className="fixed inset-0 bg-black/40 z-30"></div>
      )}
    </div>
  )
}

export default Navigation
