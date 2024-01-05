import AppDes from "/home/desktop/image-app-design.jpg"
import AppTab from "/home/tablet/image-app-design.jpg"
import AppMob from "/home/mobile/image-app-design.jpg"
import GraphDes from "/home/desktop/image-graphic-design.jpg"
import GraphTab from "/home/tablet/image-graphic-design.jpg"
import GraphMob from "/home/mobile/image-graphic-design.jpg"
import WebDes from "/home/desktop/image-web-design-large.jpg"
import WebDessm from "/home/desktop/image-web-design-small.jpg"
import WebTabsm from "/home/desktop/image-web-design-small.jpg"
import WebMobsm from "/home/desktop/image-web-design-small.jpg"
import WebTab from "/home/tablet/image-web-design.jpg"
import WebMob from "/home/mobile/image-web-design.jpg"
import RespImage from "./RespImage"
import Whiteheading from "./Whiteheading"
import RightArr from "../Svg/RightArr"
import { Link } from "react-router-dom"

type Props = {
  out?: string
}

const Design = ({ out }: Props) => {
  return (
    <section className="wrapper mt-24">
      <div className="flex flex-col lg:grid grid-cols-2 gap-4">
        {out !== "web" && (
          <div
            className={`${
              !out && "row-span-2"
            } relative cursor-pointer after: after:absolute after:inset-0 after:hover:bg-peach/70 after:duration-300 after:ease-in-out `}
          >
            <Link to="/web-design">
              <RespImage
                desktop={!out ? WebDes : WebDessm}
                tablet={!out ? WebTab : WebTabsm}
                mobile={!out ? WebMob : WebMobsm}
                alt="Web design image"
                style="rounded-lg "
              />
              <div className="flex-center flex-col gap-4 absolute inset-0 z-20">
                <Whiteheading style="uppercase">web design</Whiteheading>
                <div className="text-gray-light flex gap-3 items-center uppercase tracking-widest">
                  <span>View projects</span>
                  <RightArr />
                </div>
              </div>
            </Link>
          </div>
        )}
        {out !== "app" && (
          <div className="relative cursor-pointer after: after:absolute after:inset-0 after:hover:bg-peach/70 after:duration-300 after:ease-in-out">
            <Link to="/app-design">
              <RespImage
                desktop={AppDes}
                tablet={AppTab}
                mobile={AppMob}
                alt="App design image"
                style="rounded-lg"
              />
              <div className="flex-center flex-col gap-4 absolute inset-0 z-20">
                <Whiteheading style="uppercase">app design</Whiteheading>
                <div className="text-gray-light flex gap-3 items-center uppercase tracking-widest">
                  <span>View projects</span>
                  <RightArr />
                </div>
              </div>
            </Link>
          </div>
        )}
        {out !== "graph" && (
          <div className="relative cursor-pointer after: after:absolute after:inset-0 after:hover:bg-peach/70 after:duration-300 after:ease-in-out">
            <Link to="/graph-design">
              <RespImage
                desktop={GraphDes}
                tablet={GraphTab}
                mobile={GraphMob}
                alt="Graphic design image"
                style="rounded-lg"
              />
              <div className="flex-center flex-col gap-4 absolute inset-0 z-20">
                <Whiteheading style="uppercase">Graphic design</Whiteheading>
                <div className="text-gray-light flex gap-3 items-center uppercase tracking-widest">
                  <span>View projects</span>
                  <RightArr />
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Design
