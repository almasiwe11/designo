import { ReactNode } from "react"

type Props = {
  children: ReactNode
  style?: string
}

const Whiteheading = ({ children, style }: Props) => {
  return <div className={`text-gray-light font-bold  ${style}`}>{children}</div>
}

export default Whiteheading
