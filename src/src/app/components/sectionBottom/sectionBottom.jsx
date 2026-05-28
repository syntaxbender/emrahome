import React from 'react'
import Image from 'next/image';
import logo from "@pub/images/logo_v2_mini_black.png"
import { FaFacebook,FaInstagram } from "react-icons/fa6";
import { PiScissors } from "react-icons/pi";
import Link from 'next/link';
import style from "./sectionBottom.module.css"
import CustomLink from '../customLink/customLink';
const SectionBottom = () => {
  return (
    <div className={style.sectionBottom}>
      <Image alt="Abstract Logo of Emra Home Fashion with geometric lines, forming letters." className={style.logo} src={logo}/>
      <span className={style.slogan}>
        Art, experience and scissors.
      </span>
      <div className={style.socialContainer}>
        <CustomLink stateTrigger={false} href="https://www.facebook.com/emrahomefashion"><FaFacebook/></CustomLink>
        <CustomLink stateTrigger={false} href="tel:+12027908820"><PiScissors /></CustomLink>
        <CustomLink stateTrigger={false} href="https://www.instagram.com/emrahomefashion"><FaInstagram/></CustomLink>
      </div>
    </div>
  )
}

export default SectionBottom