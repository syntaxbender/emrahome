import Image from "next/image";
import style from "./page.module.css";
import home1 from "@pub/images/home1.jpg";
import indoor from "@pub/images/home2.jpg";
import sofa from "@pub/images/reupholstered_sofa.jpg";
import Header from "./components/header/header";
import SectionBottom from "./components/sectionBottom/sectionBottom";
import Preloader from "./components/preloader/preloader";
import logo from "@pub/images/logo_v2_mini_white.png";
import Seo from "./components/seo/seo";
export const metadata = Seo({
  url:"/",
  title: "Drapery & Upholstery Workshop",
  openGraph: {
    image: {
      url: "https://www.emrahomefashion.com/images/aboutus/image-800.jpg",
      alt: "a curtain with elegant patterns in black and grey tones"
    }
  }
});
export default function Home() {
  return (
    <section>
      <Header />
      <div className={`${style.mobileHeader} d-block d-lg-none`}>
        <div className={`${style.content}`}>
          <div className={`container`}>
            <div className="row">
              <div className="col-12">
                <div className={style.logoContainer}>
                  <Image alt="Abstract Logo of Emra Home Fashion with geometric lines, forming letters." 
                  // alt="Logo of Emra Home Fashion, featuring a geometric design above the word EMRA in capital letters." 
                  src={logo} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.overlay}>
          <video muted autoPlay loop playsInline>
            <source src="/videos/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className={`${style.mobileBrand} d-block d-lg-none`}>
        <span className={style.brandBigger}>EMRA</span>
        <span className={style.brandText}>DRAPERY & UPHOLSTERY WORKSHOP</span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="topHeading d-none d-lg-block">WORK WITH EXPERT!</h1>
            <div className={`${style.dress} sectionImageWrapper`}>
              <Image alt="Close-up of draped fabric with a vibrant floral and botanical print featuring pink and orange flowers and green leaves on a dark background." className="sectionImage" src={home1}></Image>
            </div>
            <div className={`${style.mobileEstimate} d-block d-lg-none`}>
              <span>FREE ESTIMATE</span>
            </div>
            <h1 className={`${style.mobileHeading} d-block d-lg-none`} >WORK WITH EXPERT!</h1>
            <div className={`${style.indoor} sectionImageWrapper d-block d-lg-none`}>
              <Image alt="A brown curtain with a repeating light-colored pattern hangs on a rod in a room with a chair and decor." className="sectionImage" src={indoor} priority></Image>
            </div>
            <h1 className="sectionHeading">CUSTOM CURTAINS</h1>
            <div className={style.paragraph}>
              <div
                className={`sectionParagraphContainer ${style.sectionParagraphContainerFirst}`}
              >
                <p className="sectionParagraph">Where Art Becomes Home</p>
                <p className="sectionParagraph">
                  For over two decades, our hands have danced with fabric and
                  thread, weaving stories into every fold, stitch, and seam.
                  Born from the vibrant soul of Türkiye, the timeless elegance
                  of Italy, and the bold spirit of Russia, our creations are
                  more than decor—they are heirlooms of passion, crafted to
                  cradle your world in beauty.
                </p>
                <p className="sectionParagraph">
                  We do not merely measure and cut; we sculpt textures into
                  emotions, transforming spaces into sanctuaries. Each piece is
                  a whispered conversation between heritage and imagination,
                  where silk murmurs secrets of Istanbul’s bazaars, linen
                  breathes the Tuscan sun, and velvet carries the depth of
                  Moscow’s winters.
                </p>
                <p className="sectionParagraph">
                  This is artistry unbound—a symphony of needle and loom, where
                  every curtain sways like a sonnet and every cushion blooms
                  like a canvas. For twenty years, we’ve poured our hearts into
                  the alchemy of design, turning houses into homes and rooms
                  into realms where light, shadow, and memory intertwine.
                </p>
                <p className="sectionParagraph">
                  Let your windows wear our legacy.
                </p>
                <span className={style.lineParagraph}></span>
              </div>
            </div>
            <div className={`${style.sofa} sectionImageWrapper`}>
              <Image alt="A red velvet tufted chaise lounge with a round grey cushion on a rug." className="sectionImage" src={sofa} />
            </div>
            <h1 className="sectionHeading">UPHOLSTERY</h1>
            <div
              className={`sectionParagraphContainer ${style.sectionParagraphContainerSecond}`}
            >
              <p className="sectionParagraph">
                "Your armchairs, those silent witnesses to a thousand whispered
                moments, now wear the soft creases of time like a map of
                memories etched into their fibers. Their seams, frayed by years
                of shared laughter and quiet solitude, breathe like the pages of
                a well-loved novel—tenderly worn, yet sacred. Do not consign
                them to oblivion, for these thrones of nostalgia are not mere
                furniture; they are vessels of your soul’s ephemeral dance.
              </p>
              <p className="sectionParagraph">
                Let us cloak their weary bones in textiles spun from dreams—a
                tapestry of midnight constellations, perhaps, or brocade kissed
                by autumn’s first blush. Imagine their rebirth: threads of gold
                tracing the contours of resilience, patterns blooming like
                forgotten sonnets. To renew them is not to erase the past but to
                weave it into a new lexicon of beauty—a collage where every
                stitch hums with the poetry of what was, and what will be.
              </p>
              <p className="sectionParagraph">
                For memories are not static relics; they are living rivers. Let
                these chairs ripple anew, their fabric a testament to the
                alchemy of love—transforming weariness into wonder, fragility
                into legacy. Keep them close, keep them strange, keep them
                iridescent. In their reinvention, they will cradle tomorrow’s
                stories, still stubbornly, exquisitely yours.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionEndLine"></div>
      <SectionBottom />
    </section>
  );
}
