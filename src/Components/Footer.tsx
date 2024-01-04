import Navigation from "./Navigation"
import Smi from "./Smi"

function Footer() {
  return (
    <div className="bg-black py-16">
      <Navigation dark={false} />
      <div className="wrapper">
        <div className="border border-t-1 border-gray-dark hidden md:block"></div>
        <div className="flex mt-8 md:justify-between md:items-end flex-col md:flex-row items-center gap-6 text-gray-light">
          <div className="flex flex-col items-center">
            <span className="font-bold">Designo Central Office</span>
            <span>3886 Wellington Street</span>
            <span>Toronto, Ontario M9C 3J5</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">Contact Us (Central Office)</span>
            <span>P : +1 253-863-8967</span>
            <span>M : contact@designo.co</span>
          </div>
          <Smi />
        </div>
      </div>
    </div>
  )
}

export default Footer
