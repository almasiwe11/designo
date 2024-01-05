import { useEffect } from "react"
import Award from "../Components/Award"
import Design from "../Components/Design"
import Strength from "../Components/Strength"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Award />
      <Design />
      <Strength />
    </div>
  )
}

export default Home
