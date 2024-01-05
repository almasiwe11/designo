import RespImage from "./RespImage"

type Props = {
  imageRight?: boolean
  title: string
  children: React.ReactNode
  peach?: boolean
  imageDes: string
  imageTab: string
  imageMob: string
  altimage: string
}

const ImageText = ({
  imageRight = false,
  title,
  children,
  peach = false,
  imageDes,
  imageTab,
  imageMob,
  altimage,
}: Props) => {
  return (
    <div
      className={`flex flex-col lg:mt-8 mb-32 lg:flex-row rounded-xl overflow-hidden ${
        peach ? "bg-peach" : "bg-gray-light"
      }`}
    >
      <div
        className={`${
          imageRight ? "lg:order-0" : "lg:order-1"
        } order-1  flex flex-col items-center lg:items-start gap-6 justify-center p-16 ${
          peach ? "text-white" : "text-gray-dark"
        } `}
      >
        <h1
          className={`text-3xl font-bold capitalize ${
            !peach && "text-peach text-center lg:text-left"
          }`}
        >
          {title}
        </h1>
        <p className="text-center lg:text-left"> {children}</p>
      </div>
      <div className={`order-0 ${imageRight ? "lg:order-1" : "lg:order-0"}`}>
        <RespImage
          style="w-full lg:w-auto lg:max-w-[480px]"
          desktop={imageDes}
          tablet={imageTab}
          mobile={imageMob}
          alt={altimage}
        />
      </div>
    </div>
  )
}

export default ImageText
