import { Link } from "react-router-dom"

type PropTypes = {
  liStyle?: string
  ulStyle?: string
}

function NavMenu({ liStyle, ulStyle }: PropTypes): JSX.Element {
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
        <Link to={linkName.path} key={linkName.name} className={`${liStyle}`}>
          {linkName.name}
        </Link>
      ))}
    </ul>
  )
}

export default NavMenu
