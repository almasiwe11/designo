import { BrowserRouter, Routes, Route } from "react-router-dom"
import Applayout from "./Components/Applayout"
import Home from "./Pages/Home"
import Webdesign from "./Pages/Webdesign"
import Appdesign from "./Pages/Appdesign"
import { Graphdesign } from "./Pages/Graphdesign"
import { About } from "./Pages/About"
import { Locations } from "./Pages/Locations"
import { Contact } from "./Pages/Contact"

function App() {
  return (
    <div className="font-jost ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route index element={<Home />} />
            <Route path="/web-design" element={<Webdesign />} />
            <Route path="/app-design" element={<Appdesign />} />
            <Route path="/graph-design" element={<Graphdesign />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
