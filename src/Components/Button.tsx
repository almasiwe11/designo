import { Link } from "react-router-dom"

type Props = {
  text: string
  peach?: boolean
  style?: string
  linkTo?: string
}

const Button = ({ text, style, peach, linkTo }: Props) => {
  return (
    <>
      {linkTo ? (
        <Link
          to={linkTo}
          className={`${
            peach ? "bg-peach  text-gray-light" : "bg-white text-gray-dark"
          } ${style} rounded-lg uppercase  p-2.5 px-5 hover:bg-opacity-75 duration-150 ease-in-out`}
        >
          {text}
        </Link>
      ) : (
        <button
          className={`${
            peach ? "bg-peach  text-gray-light" : "bg-white text-gray-dark"
          } ${style} rounded-lg uppercase  p-2.5 px-5 hover:bg-opacity-75 duration-150 ease-in-out`}
        >
          {text}
        </button>
      )}
    </>
  )
}

export default Button
