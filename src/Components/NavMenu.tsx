import { Link } from "react-router-dom"

type PropTypes = {
  liStyle?: string
  ulStyle?: string
  onClick?: () => void
}

function NavMenu({ liStyle, ulStyle, onClick }: PropTypes): JSX.Element {
  const list = [
    {
      name: "our company",
      path: "/about",
    },
    { name: "locations", path: "/locations" },
    { name: "contact", path: "/contact" },
  ]
  return (
    <ul className={`${ulStyle} uppercase`}>
      {list.map((linkName) => (
        <Link
          onClick={onClick}
          to={linkName.path}
          key={linkName.name}
          className={`${liStyle} relative after:absolute after:bottom-1 after:left-0 after:w-full hover:after:border-b hover:after:border-gray-dark`}
        >
          {linkName.name}
        </Link>
      ))}
    </ul>
  )
}

export default NavMenu
