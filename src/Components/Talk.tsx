import Cta from "../Svg/Cta"
import Button from "./Button"
import Whiteheading from "./Whiteheading"

function Talk() {
  return (
    <section className="relative h-56 mt-24">
      <div className="wrapper absolute inset-0">
        <div className="lg:h-[300px] py-12 lg:py-0 relative overflow-hidden bg-peach rounded-lg flex flex-col lg:flex-row items-center gap-7 px-20 justify-between">
          <div className="absolute right-0">
            <Cta />
          </div>

          <div className="flex flex-col gap-6 items-center lg:items-start">
            <Whiteheading style="text-center lg:text-start ">
              Let&rsquo;s talk about <br></br> your project
            </Whiteheading>
            <p className="text-white max-w-sm text-center lg:text-start">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>

          <Button style="z-20" text="Get in touch" />
        </div>
      </div>
    </section>
  )
}

export default Talk
