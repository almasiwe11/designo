import Circle from "../Svg/Circle"
import Button from "./Button"
import Whiteheading from "./Whiteheading"
import phone from "/home/desktop/image-hero-phone.png"

const Award = () => {
  return (
    <section className="wrapper">
      <div className="flex flex-col lg:flex-row h-[100vw] lg:h-[639px] bg-peach rounded-xl relative overflow-hidden px-24 justify-between">
        <div className="flex md:flex-col items-center gap-5 lg:items-start mt-10 lg:mt-36">
          <Whiteheading style="w-96 md:text-center lg:text-start">
            Award-winning custom designs and digital branding solutions
          </Whiteheading>
          <p className="text-gray-light max-w-sm md:text-center lg:text-start">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Button text="Learn More" />
        </div>
        <div className="absolute right-0">
          <Circle />
        </div>
        <img
          className="scale-[130%] lg:relative top-28 left-20"
          src={phone}
          alt="phone image"
        />
      </div>
    </section>
  )
}

export default Award
