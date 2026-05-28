import React from 'react'
import style from "./phoneFixed.module.css"
import Link from 'next/link'
import { FaPhoneAlt } from "react-icons/fa";
import CustomLink from '../customLink/customLink';
const PhoneFixed = () => {
  return (
    <div className={`d-block d-lg-none ${style.phoneFixed}`}>
      <CustomLink stateTrigger={false} href="tel:+12027908820"><FaPhoneAlt /></CustomLink>
    </div>
  )
}

export default PhoneFixed