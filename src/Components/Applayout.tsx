import { Outlet } from "react-router"
import Header from "./Header"
import Talk from "./Talk"
import Footer from "./Footer"

function Applayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Talk />
      <Footer />
    </div>
  )
}

export default Applayout
