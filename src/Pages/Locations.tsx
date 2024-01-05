import Location from "../Components/Location"
import CanadaTab from "/locations/tablet/image-map-canada.png"
import CanadaDes from "/locations/desktop/image-map-canada.png"
import australiaDes from "/locations/desktop/image-map-australia.png"
import australiaTab from "/locations/tablet/image-map-australia.png"
import ukDes from "/locations/desktop/image-map-united-kingdom.png"
import ukTab from "/locations/tablet/image-map-uk.png"

export const Locations = () => {
  return (
    <div className="md:wrapper flex flex-col gap-5">
      <Location
        country="Canada"
        imageDes={CanadaDes}
        imageMob={CanadaTab}
        imageAlt="Candada location image"
        st1="3886 Wellington Street"
        st2="Toronto, Ontario M9C 3J5"
        p="+1 253-863-8967"
        m="contact@designo.co"
      />
      <Location
        country="Australia"
        imageDes={australiaDes}
        imageMob={australiaTab}
        imageAlt="Australia location image"
        st1="19 Balonne Street"
        st2="New South Wales 2443"
        p="(02) 6720 9092"
        m="contact@designo.au"
        imageFirst
      />
      <Location
        country="United Kingdom"
        imageDes={ukDes}
        imageMob={ukTab}
        imageAlt="UK location image"
        st1="13  Colorado Way"
        st2="Rhyd-y-fro SA8 9GA"
        p="078 3115 1400"
        m="contact@designo.uk"
      />
    </div>
  )
}
