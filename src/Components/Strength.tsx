import Passionate from "../Svg/Passionate"
import Resourcefull from "../Svg/Resourcefull"
import Friendly from "../Svg/Friendly"
import OneStrength from "./OneStrength"

const Strength = () => {
  return (
    <div className="flex gap-8 flex-col lg:flex-row wrapper mt-24">
      <OneStrength
        name="Passionate"
        text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        Svg={Passionate}
      />
      <OneStrength
        name="RESOURCEFUL"
        text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        Svg={Resourcefull}
      />
      <OneStrength
        name="Friendly"
        text=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        Svg={Friendly}
      />
    </div>
  )
}

export default Strength
