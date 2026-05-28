import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import SectionBottom from "../components/sectionBottom/sectionBottom";
import Header from "@/app/components/header/header";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import contact from "@pub/images/contact.jpg";
import Preloader from "../components/preloader/preloader";
import Seo from "../components/seo/seo";
export const metadata = Seo({
  url:"/contact-us",
  title: "Contact Us",
  description:"Expert drapery and upholstery workshop by Emra Home Fashion. Get a free estimate for custom home décor. Connect with us via phone, email, or social media.",
  openGraph: {
    image: {
      url: "https://www.emrahomefashion.com/images/logo_v2_black.png",
      alt: "black colored logo of emra home fashion, custom curtains & drapery services"
    }
  }
});
const ContactUs = () => {
  return (
    <section>
      <Header alt="A close-up of a green vintage rotary phone. The handset and coiled cord are also visible." image={contact} />
      <div className="container">
        <div className={`${styles.rowReverse} row gx-3 gx-lg-5`}>
          <div className="col-12 col-lg-6">
            <h1
              style={{ padding: "10px 100px" }}
              className={`headerWithBackground ${styles.headerWithBackground}`}
            >
              LEAVE A MESSAGE
            </h1>
            <div className="row mt-4 gx-3">
              <div className="col-6">
                <input type="text" placeholder="NAME" />
              </div>
              <div className="col-6">
                <input type="text" placeholder="E- MAIL" />
              </div>
              <div className="col-12">
                <textarea placeholder="Leave a message us..."></textarea>
              </div>
              <div className="col-12">
                <button className="contact">SEND</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h1 className={`headerWithBackground ${styles.headerWithBackground}`}>CONTACT US</h1>
            <div className="row">
              <div className="col-12">
                <div className={styles.contactDetails}>
                  <div className={styles.contactDetail}>
                    <div className={styles.contactDetailImage}>
                      <FaPhone />
                    </div>
                    <div className={styles.contactDetailContainer}>
                      <div className={styles.contactDetailHead}>
                        <h4>Phone</h4>
                      </div>
                      <div className={styles.contactDetailText}>
                        <p>+1 202 790 8820</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.contactDetail}>
                    <div className={styles.contactDetailImage}>
                      <FaEnvelope />
                    </div>
                    <div className={styles.contactDetailContainer}>
                      <div className={styles.contactDetailHead}>
                        <h4>E-mail</h4>
                      </div>
                      <div className={styles.contactDetailText}>
                        <p>info@emrahomefashion.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <span className={styles.socialSlogan}>
              We're on social media too — we’d love to connect!
            </span>
          </div>
        </div>
      </div>
      <SectionBottom />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className={`${styles.workWithExpert} workWithExpert`}
            >
              <span className="slogan">WORK WITH EXPERT</span>
              <span className="estimate">FREE ESTIMATE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionEndLine"></div>
    </section>
  );
};

export default ContactUs;
