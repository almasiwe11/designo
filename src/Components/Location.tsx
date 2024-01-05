import RespImage from "./RespImage"

type Props = {
  imageDes: string
  imageMob: string
  imageAlt: string
  st1: string
  st2: string
  p: string
  m: string
  country: string
  imageFirst?: boolean
}

const Location = ({
  imageDes,
  imageMob,
  imageAlt,
  st1,
  st2,
  p,
  m,
  country,
  imageFirst = false,
}: Props) => {
  return (
    <div className="flex flex-col md:gap-5 lg:flex-row ">
      <div
        className={`flex md:rounded-xl flex-col gap-5 items-center md:items-start p-16 lg:p-12 order-1 lg:order-0 bg-gray-light w-full ${
          imageFirst ? "lg:order-2" : "lg:order-0"
        }`}
      >
        <h1 className="text-peach text-3xl font-semibold md:block">
          {country}
        </h1>
        <div className="flex flex-col md:flex-row md:gap-24">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <span className="font-bold">Designo Central Office</span>
            <span>{st1}</span>
            <span>{st2}</span>
          </div>

          <div className="flex flex-col gap-1 items-center md:items-start">
            <span className="font-bold">Contact</span>
            <span>P:{p}</span>
            <span>M:{m}</span>
          </div>
        </div>
      </div>
      <RespImage
        desktop={imageDes}
        tablet={imageMob}
        mobile={imageMob}
        alt={imageAlt}
        style="md:rounded-xl w-full"
        picStyle={imageFirst ? "lg:order-0" : "lg:order-2"}
      />
    </div>
  )
}

export default Location
