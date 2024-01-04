type Props = {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <button className="bg-gray-light rounded-lg text-gray-dark p-2.5 px-5">
      {text}
    </button>
  )
}

export default Button
