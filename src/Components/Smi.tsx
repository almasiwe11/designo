import Facebook from "../Svg/Facebook"
import Instagram from "../Svg/Instagram"
import Pinterest from "../Svg/Pinterest"
import Twitter from "../Svg/Twitter"
import Yoututbe from "../Svg/Yoututbe"

function Smi() {
  return (
    <div className="flex gap-3">
      <Facebook />
      <Yoututbe />
      <Twitter />
      <Pinterest />
      <Instagram />
    </div>
  )
}

export default Smi
