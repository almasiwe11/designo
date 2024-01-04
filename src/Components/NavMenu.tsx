type PropTypes = {
  liStyle?: string
  ulStyle?: string
}

function NavMenu({ liStyle, ulStyle }: PropTypes): JSX.Element {
  const list = ["our company", "locations", "contact"]
  return (
    <ul className={`${ulStyle} uppercase`}>
      {list.map((linkName) => (
        <li key={linkName} className={`${liStyle}`}>
          {linkName}
        </li>
      ))}
    </ul>
  )
}

export default NavMenu
