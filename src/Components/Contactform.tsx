import Circle from "../Svg/Circle"
import SmallCircle from "../Svg/SmallCircle"
import Whiteheading from "./Whiteheading"

function Contactform() {
  return (
    <div className="pg-peach p-10 relative h-[420px] overflow-hidden rounded-xl bg-peach">
      <div className="absolute bottom-0 left-0">
        <Circle />
      </div>

      <div className="flex flex-col gap-5 justify-center items-center md:items-start">
        <Whiteheading>Contact Us</Whiteheading>
        <p className="text-gray-light text-center md:text-left">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>

      <form action=""></form>
    </div>
  )
}

export default Contactform
