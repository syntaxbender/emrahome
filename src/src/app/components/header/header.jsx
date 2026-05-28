import React from "react";
import style from "./header.module.css";
import Image from "next/image";
import logo from "@pub/images/logo_v2_white.png";
import DesktopNav from "../nav/desktopNav/desktopNav";
import MobileNav from "../nav/mobileNav/mobileNav";
import { mainNavigation } from "@/app/navigation";
import Preloader from "../preloader/preloader";
const Header = ({ image=null,alt=null }) => {
  return (
    <>
    <Preloader/>
    <div className={`${style.header}`}>
      <div className={`${style.row} ${style.content}`}>
        <div className={`container d-none d-lg-block ${style.firstRow}`}>
          <div className="row">
            <div className="col-12">
              <div className={style.logoContainer}>
                <Image alt="Logo of Emra Home Fashion, featuring a geometric design above the word EMRA in capital letters." src={logo} />
              </div>
              <div className={style.textContainer}>
                <h1 className={style.headerTitle}>
                  DRAPERY & UPHOLSTERY WORKSHOP
                </h1>
                <span className={style.headerHighlight}>FREE ESTIMATE</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`container ${style.secondRow}`}>
          <div className="row  d-none d-lg-flex align-items-end h-100">
            <div className="col-12">
              <div className={style.desktopNav}>
                <DesktopNav borderAlign="up" items={mainNavigation} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <MobileNav items={mainNavigation} />
            </div>
          </div>
        </div>
      </div>

      <div className={`d-none d-lg-block ${style.overlay}`}>
        {image && alt ? (
          <Image alt={alt} className={style.headerImg} src={image} />
        ) : (
          <video muted autoPlay loop playsInline>
            <source src="/videos/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
    </>
  );
};

export default Header;
