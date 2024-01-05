import HorizontalImageText from "../Components/HorizontalImageText"
import heroDes from "/about/desktop/image-about-hero.jpg"
import heroTab from "/about/tablet/image-about-hero.jpg"
import heroMob from "/about/mobile/image-about-hero.jpg"
import talentDes from "/about/desktop/image-world-class-talent.jpg"
import talentTab from "/about/tablet/image-world-class-talent.jpg"
import talentMob from "/about/mobile/image-world-class-talent.jpg"
import realDes from "/about/desktop/image-real-deal.jpg"
import realTab from "/about/tablet/image-real-deal.jpg"
import realMob from "/about/mobile/image-real-deal.jpg"
import Countries from "../Components/Countries"

export const About = () => {
  return (
    <div className="md:wrapper">
      <HorizontalImageText
        altimage="Hero image"
        imageMob={heroMob}
        imageDes={heroDes}
        imageTab={heroTab}
        imageRight
        peach
        title="about us"
      >
        Founded in 2010, we are a creative agency that produces lasting results
        for our clients. We’ve partnered with many startups, corporations, and
        nonprofits alike to craft designs that make real impact. We’re always
        looking forward to creating brands, products, and digital experiences
        that connect with our clients’ audiences.
      </HorizontalImageText>

      <HorizontalImageText
        altimage="Wold-class talent image"
        imageDes={talentDes}
        imageTab={talentTab}
        imageMob={talentMob}
        title="wold-class talent"
      >
        We are a crew of strategists, problem-solvers, and technologists. Every
        design is thoughtfully crafted from concept to launch, ensuring success
        in its given market. We are constantly updating our skills in a myriad
        of platforms.
        <br></br>
        <br></br>
        Our team is multi-disciplinary and we are not merely interested in form
        — content and meaning are just as important. We give great importance to
        craftsmanship, service, and prompt delivery. Clients have always been
        impressed with our high-quality outcomes that encapsulates their brand’s
        story and mission.
      </HorizontalImageText>
      <Countries />
      <HorizontalImageText
        altimage="The real deal image"
        imageDes={realDes}
        imageTab={realTab}
        imageMob={realMob}
        imageRight
        title="The real deal"
      >
        As strategic partners in our clients’ businesses, we are ready to take
        on any challenge as our own. Solving real problems require empathy and
        collaboration, and we strive to bring a fresh perspective to every
        opportunity. We make design and technology more accessible and give you
        tools to measure success.
        <br></br>
        <br></br>
        We are visual storytellers in appealing and captivating ways. By
        combining business and marketing strategies, we inspire audiences to
        take action and drive real results.
      </HorizontalImageText>
    </div>
  )
}
