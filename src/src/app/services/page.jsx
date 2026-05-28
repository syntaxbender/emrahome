import React from "react";
import Image from "next/image";
import Header from "@/app/components/header/header";
import SectionBottom from "@/app/components/sectionBottom/sectionBottom";
import style from "./page.module.css";
import services1 from "@pub/images/services1.jpeg";
import services2 from "@pub/images/services2.jpeg";
import services3 from "@pub/images/services3.jpeg";
import table from "@pub/images/table.jpg";
import Preloader from "../components/preloader/preloader";
import Seo from "../components/seo/seo";
export const metadata = Seo({
  url: "/services",
  title: "Services",
  description: "Need custom sewing, curtain repair, or installation? Emra Home Fashion brings your textile dreams to life and restores your favorites. Free estimates available.",
  openGraph: {
    image: {
      url: "https://www.emrahomefashion.com/images/wholesale/image-654.jpg",
      alt: "A sophisticated curtain fabric featuring a beige base with abstract navy blue linear patterns, ideal for modern drapery and upholstery services."
    }
  }
});
const Services = () => {
  return (
    <section>
      <Header alt="A composition of sewing materials arranged on a wooden table, including a sewing machine, scissors, thread spools, a thimble, and fabric." image={table} />
      <div className="container">
        <div className="row mt-5 d-flex d-lg-none">
          <div className="col-12">
            <h1 className={`${style.goldenHeader}`}>
              SERVICES
            </h1>
          </div>
        </div>
        <div className="row d-none d-lg-flex">
          <div className="col-12">
            <h1 className={`${style.serviceHeader} headerWithBackground`}>
              SEWING
            </h1>
          </div>
        </div>
        <div className={`${style.serviceContainer} row`}>
          <div className="col-12 col-lg-4">
            <Image alt="Detailed close-up of an antique sewing machine with thread." className={style.roundedImages} src={services1} priority />
          </div>
          <div className="col-12 col-lg-8">
            <h1
              className={`${style.serviceHeader} headerWithBackground d-block d-lg-none`}
            >
              SEWING
            </h1>
            <div className={style.paragraphContainer}>
              <p className={style.serviceParagraph}>
                Maybe last year, you found a fabric you loved and planned to
                turn it into a stunning roman shade for your kitchen, but never
                got around to it. Or during a trip abroad, you discovered a rare
                and authentic upholstery fabric that perfectly captured the
                destination's charm, but it’s been sitting unused because you
                couldn’t find the right artisan to bring your idea to life.
                Whatever the case, your dream design doesn’t have to wait any
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-none d-lg-flex">
          <div className="col-12">
            <h1 className={`${style.serviceHeader} headerWithBackground`}>
              REPAIRING
            </h1>
          </div>
        </div>
        <div className={`${style.serviceContainer} row`}>
          <div className="col-12 col-lg-4">
            <Image alt="Hands guide red fabric under a sewing machine needle." className={style.roundedImages} src={services2} />
          </div>
          <div className="col-12 col-lg-8">
            <h1
              className={`${style.serviceHeader} headerWithBackground d-block d-lg-none`}
            >
              REPAIRING
            </h1>
            <div className={style.paragraphContainer}>
              <p className={style.serviceParagraph}>
                Do you have a tear in your curtains at home, or do they need to
                be shortened? Perhaps your favorite roller shade is not
                functioning properly, with some of its rings broken or missing.
                Or maybe the color of your sunshades has faded over time and
                needs replacement. Whether it's a simple fix or a complete
                overhaul, we’re here to help. For all your curtain repair,
                maintenance, and restoration needs, feel free to contact us
                today!
              </p>
            </div>
          </div>
        </div>
        <div className="row d-none d-lg-flex">
          <div className="col-12">
            <h1 className={`${style.serviceHeader} headerWithBackground`}>
              REMOVAL/INSTALLATION
            </h1>
          </div>
        </div>
        <div className={`${style.serviceContainer} row`}>
          <div className="col-12 col-lg-4">
            <Image alt="Orange and black cordless drill with screws and screwdrivers on wood." className={style.roundedImages} src={services3} />
          </div>
          <div className="col-12 col-lg-8">
          <h1
              className={`${style.serviceHeader} headerWithBackground d-block d-lg-none`}
            >
              REMOVAL/INSTALLATION
            </h1>
            <div className={style.paragraphContainer}>
              <p className={style.serviceParagraph}>
                We are moving into a new home, and everything is ready—sofas,
                rugs, and all—but how do we remove the curtains? It’s a task
                that requires skill, with the curtains needing to be taken down,
                cleaned, and reinstalled. Some may not fit certain windows,
                their lengths may need to be adjusted, and some may even require
                additional modifications. Forget all these questions, lean back,
                and enjoy your new home, because we have all the answers.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className={`workWithExpert ${style.workWithExpert}`}
            >
              <span className="slogan">WORK WITH EXPERT</span>
              <span className="estimate">FREE ESTIMATE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionEndLine">
        <div className="container d-none d-lg-block">
          <div className="row">
            <div className="col-12">
              <div className="leftLine"></div>
            </div>
          </div>
        </div>
      </div>
      <SectionBottom />
    </section>
  );
};

export default Services;
