import { Link } from "react-router-dom"

type Props = {
  text: string
  peach?: boolean
  big?: boolean
  style?: string
  linkTo?: string
  disabled?: boolean
}

const Button = ({
  text,
  style,
  peach,
  linkTo,
  big = false,
  disabled = false,
}: Props) => {
  return (
    <>
      {linkTo ? (
        <Link to={linkTo}>
          <button
            disabled={disabled}
            className={`${
              peach ? "bg-peach  text-gray-light" : "bg-white text-gray-dark"
            } ${style} rounded-lg uppercase   ${
              big ? "px-9 py-3" : "px-5 p-2.5"
            } hover:bg-opacity-75 duration-150 ease-in-out disabled:bg-red-200 disabled:cursor-not-allowed`}
          >
            {text}
          </button>
        </Link>
      ) : (
        <button
          disabled={disabled}
          className={`${
            peach ? "bg-peach  text-gray-light" : "bg-white text-gray-dark"
          } ${style} rounded-lg uppercase   ${
            big ? "px-9 py-3" : "px-5 p-2.5"
          } hover:bg-opacity-75 duration-150 ease-in-out disabled:bg-red-200 disabled:cursor-not-allowed`}
        >
          {text}
        </button>
      )}
    </>
  )
}

export default Button
