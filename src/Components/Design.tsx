import AppDes from "/home/desktop/image-app-design.jpg"
import AppTab from "/home/tablet/image-app-design.jpg"
import AppMob from "/home/mobile/image-app-design.jpg"
import GraphDes from "/home/desktop/image-graphic-design.jpg"
import GraphTab from "/home/tablet/image-graphic-design.jpg"
import GraphMob from "/home/mobile/image-graphic-design.jpg"
import WebDes from "/home/desktop/image-web-design-large.jpg"
import WebTab from "/home/tablet/image-web-design.jpg"
import WebMob from "/home/mobile/image-web-design.jpg"
import RespImage from "./RespImage"
import Whiteheading from "./Whiteheading"
import RightArr from "../Svg/RightArr"

const Design = () => {
  return (
    <section className="wrapper mt-24">
      <div className="flex flex-col lg:grid grid-cols-2 gap-4">
        <div className="row-span-2 relative cursor-pointer after: after:absolute after:inset-0 after:hover:bg-peach/70 after:duration-300 after:ease-in-out ">
          <RespImage
            desktop={WebDes}
            tablet={WebTab}
            mobile={WebMob}
            alt="Web design image"
            style="rounded-lg "
          />
          <div className="flex-center flex-col gap-4 absolute inset-0 z-20">
            <Whiteheading style="uppercase text-3xl">web design</Whiteheading>
            <div className="text-gray-light flex gap-3 items-center uppercase tracking-widest">
              <span>View projects</span>
              <RightArr />
            </div>
          </div>
        </div>
        <div className="relative cursor-pointer after: after:absolute after:inset-0 after:hover:bg-peach/70 after:duration-300 after:ease-in-out">
          <RespImage
            desktop={AppDes}
            tablet={AppTab}
            mobile={AppMob}
            alt="App design image"
            style="rounded-lg"
          />
          <div className="flex-center flex-col gap-4 absolute inset-0 z-20">
            <Whiteheading style="uppercase text-3xl">web design</Whiteheading>
            <div className="text-gray-light flex gap-3 items-center uppercase tracking-widest">
              <span>View projects</span>
              <RightArr />
            </div>
          </div>
        </div>
        <div className="relative cursor-pointer after: after:absolute after:inset-0 after:hover:bg-peach/70 after:duration-300 after:ease-in-out">
          <RespImage
            desktop={GraphDes}
            tablet={GraphTab}
            mobile={GraphMob}
            alt="Graphic design image"
            style="rounded-lg"
          />
          <div className="flex-center flex-col gap-4 absolute inset-0 z-20">
            <Whiteheading style="uppercase text-3xl">web design</Whiteheading>
            <div className="text-gray-light flex gap-3 items-center uppercase tracking-widest">
              <span>View projects</span>
              <RightArr />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Design
