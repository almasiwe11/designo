import Country from "./Country"
import Australia from "../Svg/Australia"
import Canada from "../Svg/Canada"
import Uk from "../Svg/Uk"

function Countries() {
  return (
    <div className="text-black mb-32 flex flex-col lg:flex-row justify-between px-20">
      <Country Svg={Canada} countryName="Canada" />
      <Country Svg={Australia} countryName="Australia" />
      <Country Svg={Uk} countryName="United kingdom" />
    </div>
  )
}

export default Countries
