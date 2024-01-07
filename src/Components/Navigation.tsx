import { useEffect, useRef, useState } from "react"
import Close from "./Close"
import Hamburger from "./Hamburger"
import NavMenu from "./NavMenu"
import Logo from "/shared/desktop/logo-dark.png"
import Logolight from "/shared/desktop/logo-light.png"
import { Link } from "react-router-dom"

type Props = {
  dark: boolean
  mobileMenu?: boolean
}

const Navigation = ({ dark = false, mobileMenu = false }: Props) => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [open])

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [open, menuRef])

  return (
    <div className="relative">
      <div
        className={`${dark ? "h-20" : "md:h-20 "} flex-center relative z-50 ${
          dark ? "bg-white" : "bg-transparent"
        }`}
      >
        <div
          className={`wrapper flex ${
            dark
              ? "justify-between items-center"
              : "flex-col md:flex-row md:justify-between md:items-center"
          }  `}
        >
          <div className={`${!dark && "flex-center md:inline-block"}`}>
            <Link to="/">
              <img src={dark ? Logo : Logolight} alt="Logo" className="h-5" />
            </Link>
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
        <div
          ref={menuRef}
          className="absolute top-full left-0 right-0 bg-black z-50"
        >
          <NavMenu
            onClick={() => setOpen(false)}
            ulStyle="flex flex-col gap-4 px-5 text-gray-light py-8 text-lg"
          />
        </div>
      )}

      {mobileMenu && open && (
        <div className="fixed inset-0 bg-black/40 z-30"></div>
      )}
    </div>
  )
}

export default Navigation
