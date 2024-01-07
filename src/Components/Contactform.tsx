import Circle from "../Svg/Circle"
import Form from "./Form"
import Whiteheading from "./Whiteheading"

function Contactform() {
  return (
    <div className="pg-peach gap-8 lg:gap-0 mb-12 lg:px-16 px-5 py-8 lg:py-12 relative lg:h-[450px] overflow-hidden rounded-xl bg-peach flex flex-col lg:grid lg:grid-cols-2 items-center lg:items-start">
      <div className="absolute bottom-0 left-0 -z-20">
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

      <Form />
    </div>
  )
}

export default Contactform
