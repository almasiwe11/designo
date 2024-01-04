import Cta from "../Svg/Cta"
import Button from "./Button"
import Whiteheading from "./Whiteheading"

function Talk() {
  return (
    <div className="wrapper mt-32">
      <div className="h-[300px] relative overflow-hidden bg-peach rounded-lg flex items-center px-20 justify-between">
        <div className="absolute right-0">
          <Cta />
        </div>

        <div className="flex flex-col gap-6">
          <Whiteheading style="text-3xl ">
            Let&rsquo;s talk about <br></br> your project
          </Whiteheading>
          <p className="text-white max-w-sm">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>

        <Button style="z-20" text="Get in touch" />
      </div>
    </div>
  )
}

export default Talk
