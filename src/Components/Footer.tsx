import Navigation from "./Navigation"

function Footer() {
  return (
    <div className="bg-black py-12">
      <Navigation dark={false} />
      <div className="wrapper">
        <div className="border border-t-1 border-gray-dark hidden md:block"></div>
        <div className="flex"></div>
      </div>
    </div>
  )
}

export default Footer
