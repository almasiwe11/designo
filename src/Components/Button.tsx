type Props = {
  text: string
  style?: string
}

const Button = ({ text, style }: Props) => {
  return (
    <button
      className={`bg-white ${style} rounded-lg uppercase text-gray-dark p-2.5 px-5`}
    >
      {text}
    </button>
  )
}

export default Button
