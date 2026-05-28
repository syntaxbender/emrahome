import Image from "next/image";
import row1col1 from "@pub/images/products/row1col1.jpg";
import row1col2 from "@pub/images/products/row1col2.jpg";
import row1col3 from "@pub/images/products/row1col3.jpg";
import row2col1 from "@pub/images/products/row2col1.jpg";
import row2col2 from "@pub/images/products/row2col2.jpg";
import row3col1 from "@pub/images/products/row3col1.jpg";
import row3col2 from "@pub/images/products/row3col2.jpg";
import row3col3 from "@pub/images/products/row3col3.jpg";
import row4col1 from "@pub/images/products/row4col1.jpg";
import row4col2 from "@pub/images/products/row4col2.jpg";
import product1 from "@pub/images/product1.jpg";
import product2 from "@pub/images/product2.jpg";
import product3 from "@pub/images/product3.jpg";
import product4 from "@pub/images/product4.jpg";
import product5 from "@pub/images/plicell_perde.jpg";

import Header from "@/app/components/header/header";
import SectionBottom from "@/app/components/sectionBottom/sectionBottom";
import style from "./page.module.css";
import header from "@pub/images/resim-738.jpg";
import Preloader from "../components/preloader/preloader";
import Link from "next/link";
import CustomLink from "../components/customLink/customLink";
import Seo from "../components/seo/seo";
export const metadata = Seo({
  url: "/products",
  title: "Products",
  description: "Bespoke curtains, Roman and cellular shades, wood and aluminum blinds—stylish, energy-efficient window treatments for light control, privacy, and elegance.",
  openGraph: {
    image: {
      url: "https://www.emrahomefashion.com/images/wholesale/image-654.jpg",
      alt: "A sophisticated curtain fabric featuring a beige base with abstract navy blue linear patterns, ideal for modern drapery and upholstery services."
    }
  }
});
export default function Home() {
  return (
    <section>
      <Header alt="Close-up of dark, textured, and folded fabric." image={header} />
      <div className="container">
        <div className="row d-none d-lg-block">
          <div className="col-12">
            <h1 className={`headerWithBackground ${style.headerWithBackground}`}>FABRICS</h1>
          </div>
        </div>
        <div className="row d-none d-lg-flex">
          <div className="col-8">
            <div
              className={`d-flex ${style.fabricContainer} ${style.fabricLine}`}
            >
              <div className={style.fabric} style={{ width: "75%" }}>
                <Image alt="A modern upholstery fabric detail with symmetrical textures in copper tones and a glossy surface." className="fullWidthImage" src={row1col1} />
              </div>
              <div className={style.fabric} style={{ width: "12.5%" }}>
                <Image alt="This fabric, consisting of samples in different colors and textures, is vertically stacked, with colors in the order of a gray-blue mix, dark gray, navy blue, gray, petrol blue, light beige and brown mix, brown, and light brown tones, each sample having jagged edges." className="fullWidthImage" src={row1col2} />
              </div>
              <div className={style.fabric} style={{ width: "12.5%" }}>
                <Image alt="This fabric, consisting of samples in different colors and textures, is vertically stacked, with colors in the order of light gray, gray, off-white, beige, light brown, gold yellow, light brown, off-white, rusty orange, and dark brown tones, each sample having jagged edges." className="fullWidthImage" src={row1col3} />
              </div>
            </div>
            <div className={`d-flex ${style.fabricContainer}`}>
              <div className={style.fabric} style={{ width: "75%" }}>
                <Image alt="This fabric, a close-up of a material with alternating glossy and matte textures, in black and dark gray colors with large diagonal stripes (similar to plaid), appears wavy due to its draped positioning." className="fullWidthImage" src={row2col1} />
              </div>
              <div className={style.fabric} style={{ width: "25%" }}>
                <Image alt="Fabric swatches with geometric patterns in shades of grey, gold, brown, navy, and turquoise, displayed horizontally with wavy edges." className="fullWidthImage" src={row2col2} />
              </div>
            </div>
            <div className={`d-flex ${style.fabricContainer}`}>
              <div className={style.fabric} style={{ width: "75%" }}>
                <Image alt="This fabric, a close-up of a dark-colored (likely black or very dark gray), slightly glossy or speckled texture, with a draped appearance, prominently displays its folds and shadows." className="fullWidthImage" src={row3col1} />
              </div>
              <div className={style.fabric} style={{ width: "12.5%" }}>
                <Image alt="This fabric, consisting of samples in different colors and textures, is vertically stacked, with colors in the order of dark gray, gray, brown, lighter brown, mustard yellow, light brown, gray, and beige tones, each sample having jagged edges." className="fullWidthImage" src={row3col2} />
              </div>
              <div className={style.fabric} style={{ width: "12.5%" }}>
                <Image alt="This fabric, consisting of samples in different colors and textures, is vertically stacked, with colors in the order of light gray, beige, off-white, navy blue, petrol blue, turquoise, dark green, and purple tones, each sample having jagged edges." className="fullWidthImage" src={row3col3} />
              </div>
            </div>
            <div className={`d-flex ${style.fabricContainer}`}>
              <div className={style.fabric} style={{ width: "75%" }}>
                <Image alt="A luxurious upholstery fabric detail with a red background, embroidered with black baroque patterns, and a velvet texture." className="fullWidthImage" src={row4col1} />
              </div>
              <div className={style.fabric} style={{ width: "25%" }}>
                <Image alt="Luxurious upholstery fabric samples with different background colors, a velvet-like appearance, and classic motifs embroidered on them."  className="fullWidthImage" src={row4col2} />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="goldenBg">
              <p>
                Elevate Your Space with Living Artistry We don’t just craft
                curtains—we weave dreams into fabric, sculpting light and shadow
                into your personal masterpiece. Each drape is born from
                whispered conversations between imagination and thread, kissed
                by decades of mastery and an artisan’s devotion. Complimentary
                Vision SessionLet us wander through your space, palette in hand,
                to design a creation as singular as your soul. No sketches, no
                rules—just pure possibility. Bespoke AlchemyYour curtains emerge
                stroke by stroke—a canvas of rare textiles, textures unchained,
                and hues that hum poems. These are not window dressings, but
                heirlooms-in-the-making, infused with the quiet magic only
                hands, not machines, can conjure. Seamless SymphonyWe arrive as
                silent collaborators: measuring, mounting, transforming your
                rooms into galleries where every sunrise performs. Why Settle
                for Ordinary?Three generations of loom-wisdom pulse in our
                fingertips. We chase beauty that gives walls a heartbeat,
                crafting what mass producers dare not—curtains with a soul. Your
                windows await their aria. Let’s compose it together. (Unseen by
                others. Unforgettable to you.)
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 d-flex d-lg-none">
          <h1 className={`${style.topHeading} headerWithBackground`}>CUSTOM DRAPERY</h1>
          <div className="col-12">
          <Image alt="Two turquoise wingback armchairs and a small coffee table in front of elegant curtains" className={style.productImages} src={product1} priority />
          </div>
          <div className={style.line}></div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <h1 className={`headerWithBackground ${style.headerWithBackground}`}>BLINDS</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="secondaryHeading">WOOD BLINDS</h2>
            <Image alt="Close-up view of wooden Venetian blinds on a window" className={style.productImages} src={product2} />
            <div className="goldenBg">
              <p>
                Wood blinds are timeless window treatments crafted from natural
                or faux wood, offering durability and classic elegance. Their
                adjustable slats provide precise light control and privacy,
                while their insulating properties help regulate indoor
                temperatures. Resistant to warping and fading, they suit
                high-humidity areas like bathrooms (faux wood options) or dry
                spaces (real wood). Available in stains and finishes, they blend
                seamlessly with rustic, modern, or traditional decor, combining
                functionality with organic warmth.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <h2 className="secondaryHeading">ALUMINUM BLINDS</h2>
            <Image alt="Kitchen sink in front of a window with aluminium Venetian blinds" className={style.productImages} src={product3} />
            <div className="goldenBg">
              <p>
                Aluminum blinds are lightweight, durable window coverings with
                slim, metallic slats for precise light control and privacy.
                Resistant to moisture, rust, and fading, they thrive in
                high-humidity areas like kitchens or bathrooms. Their sleek,
                modern design complements contemporary interiors, while
                affordability and low maintenance make them a practical choice
                for homes and offices alike.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-3 mt-lg-5">
          <div className="col-12">
            <h1 className={`headerWithBackground ${style.headerWithBackground}`}>SHADES</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="secondaryHeading">ROMAN SHADES</h2>
            <Image alt="Kitchen counter with sink and plants under a window with a folded brown Roman blind" className={style.productImages} src={product4} />
            <div className="goldenBg">
              <p>
                Roman shades are a timeless and elegant window treatment that
                seamlessly blends functionality with sophisticated design. These
                fabric window coverings consist of a single panel that folds
                into horizontal pleats when raised, creating a neat, tailored
                appearance. Operated by a cord or cordless mechanism, Roman
                shades can be adjusted to various heights, allowing for precise
                control over light and privacy. Their versatility makes them
                suitable for both traditional and contemporary interiors,
                available in a range of fabrics—from breezy linens and crisp
                cottons to luxurious silks—to complement any décor style. Beyond
                aesthetics, Roman shades offer practical benefits, including
                insulation to improve energy efficiency and options for blackout
                or light-filtering materials. Customizable in fold styles, such
                as classic flat folds or relaxed cascading "waterfall" pleats,
                they add depth and texture to a room while maintaining a clean,
                uncluttered look. Ideal for those seeking a balance of form and
                function, Roman shades remain a popular choice in modern home
                design.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <h2 className="secondaryHeading">CELLULAR SHADES</h2>
            <Image alt="Balcony with cellular blinds covering the windows, a chair, and a small table" className={style.productImages} src={product5} />
            <div className="goldenBg">
              <p>
                Cellular shades are energy-efficient window coverings designed
                with honeycomb-shaped cells that trap air, providing insulation
                against heat and cold. They enhance privacy, reduce glare, and
                block harmful UV rays while maintaining a sleek, modern
                aesthetic. Available in single or double-cell designs, they suit
                residential and commercial spaces, balancing functionality and
                style.Cellular shades are energy-efficient window coverings
                designed with honeycomb-shaped cells that trap air, providing
                insulation against heat and cold. They enhance privacy, reduce
                glare, and block harmful UV rays while maintaining a sleek,
                modern aesthetic. Available in single or double-cell designs,
                they suit residential and commercial spaces, balancing
                functionality and style.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionEndLine mt-3"></div>

      <div className="container">
        <div className="row d-flex d-lg-none">
          <div className="col-12">
            <div
              className={`workWithExpert ${style.workWithExpert}`}
            >
              <span className="slogan">WORK WITH EXPERT</span>
              <span className="estimate">FREE ESTIMATE</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "100px" }} className="row d-none d-lg-flex">
          <div className="col-12">
            <div className={style.biggerText}>
              <div className={`${style.biggerTextLine} sectionEndLine`}></div>
              <p>
                Explore our curated selection of bespoke window solutions,
                meticulously crafted to harmonize innovation with elegance. From
                precision-engineered cellular shades to artisanal wood and
                aluminum blinds, each product embodies unparalleled
                craftsmanship.{" "}
                <span className={style.highlight}><CustomLink href="/contact-us">CONTACT US</CustomLink></span> to discover
                how our distinctive approach transforms functional design into
                enduring artistry
                <br />
                AND MORE...
              </p>
              <div className={`${style.biggerTextLine} sectionEndLine`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionEndLine"></div>
      <SectionBottom />
    </section>
  );
}
