import Image from "next/image";
import header from "@pub/images/resim-498.jpg";
import img1 from "@pub/images/about1.jpeg";
import img2 from "@pub/images/about2.jpeg";
import style from "./page.module.css";

import Header from "@/app/components/header/header";
import SectionBottom from "@/app/components/sectionBottom/sectionBottom";
import Preloader from "../components/preloader/preloader";
import Seo from "../components/seo/seo";
export const metadata = Seo({
  url:"/about-us",
  title: "About Us",
  description:"Learn about Emra Home Fashion, our passion for home décor, and expertise in custom curtains and upholstery since 2004. Visit our boutique for unique designs.",
  openGraph: {
    image: {
      url: "https://www.emrahomefashion.com/images/logo_v2_black.png",
      alt: "black colored logo of emra home fashion, custom curtains & drapery services"
    }
  }
});
export default function Home() {
  return (
    <section>
      <Header alt="A close-up of textured fabric with an intricate pattern (possibly paisley or circular motifs) in shades of brown/copper and dark blue/black." image={header} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="topHeading fw-medium">A STORY THAT BEGAN</h1>
            <div className={style.reverseBlock}>
              <div className={`${style.aboutus1} sectionImageWrapper`}>
                <video className="sectionVideoBold" muted autoPlay loop playsInline>
                  <source src="/videos/aboutus.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* <Image className="sectionImageBold" src={img1}></Image> */}
                <span className={style.lineParagraph}></span>
              </div>
              <div
                className={`sectionParagraphContainerWithLine ${style.sectionParagraphContainerFirst}`}
              >
                <p className="sectionParagraphWithLine">
                  As Emra Home Fashion Store, we embarked on our journey in
                  2004, specializing in home textiles and custom-designed
                  curtains. Our work has always been about more than just
                  selling curtains; it’s about creating designs that blend
                  aesthetics and functionality seamlessly. From the very
                  beginning, we focused on mastering our craft through precise
                  measurements, creative designs, and meticulous craftsmanship.
                </p>
              </div>
            </div>
            <div className={style.reverseBlock}>
              <div className={`${style.aboutus2} sectionImageWrapper`}>
                <Image alt="An employee at Emra Home Fashion sewing fabric on a machine, with fabric rolls in the background." className="sectionImageBold" src={img1} />
              </div>
              <div
                className={`sectionParagraphContainer ${style.sectionParagraphContainerSecond}`}
              >
                <p className={`${style.paragraphMiniBorder} sectionParagraph`}>
                  Over the years, we have developed expertise in various aspects
                  of home décor, from upholstery to curtain design. While
                  perfecting technical skills such as cutting, sewing, and
                  designing, we have also deepened our passion for the artistic
                  side of home decoration. Each creation reflects our commitment
                  to blending functionality with aesthetic appeal, ensuring
                  every space tells its own story. With every new project, we
                  continue our quest for inspiration to create unique designs.
                </p>
              </div>
            </div>
            <div
              className={`sectionParagraphContainer ${style.sectionParagraphContainerThird}`}
            >
              <div className={style.reverseBlock}>
                <div className={`${style.aboutus3} sectionImageWrapper`}>
                  <Image alt="A business representative in front of Emra Home Fashion is visible through the shop window with lace curtains." className="sectionImageBold" src={img2} />
                </div>
                <p className="sectionParagraph">
                  In 2013, we fulfilled our dream by opening our boutique store,
                  where we could fully express our artistic vision. Inspired by
                  timeless design and contemporary trends, we carefully curate
                  every piece to reflect sophistication and individuality.
                  Today, as Emra Home Fashion Store, we remain committed to
                  advancing the art of home décor and transforming our clients'
                  living spaces into unique and elegant environments. Our
                  passion for excellence drives us to continually innovate,
                  ensuring each client's home tells a story as beautiful as it
                  is personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionEndLine"></div>
      <SectionBottom />
    </section>
  );
}
