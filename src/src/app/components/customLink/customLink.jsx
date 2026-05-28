"use client"
import React from 'react'
import Link from "next/link";
import { setLoaderStatus } from '../preloader/preloaderSlice';
import {setPage,pageState} from './customLinkSlice';
import { useSelector, useDispatch } from 'react-redux';


const CustomLink = ({ onClick = ()=>{}, href, stateTrigger=true, ...rest }) => {
  const areUrlsEqual = (url1, url2) => {
    const base = window.location.origin;
    const u1 = new URL(url1, base);
    const u2 = new URL(url2, base);
    console.log("status:",u1.pathname === u2.pathname,u1.pathname,u2.pathname)
    return u1.pathname === u2.pathname;
  }
  const page = useSelector(pageState);
  const clickFunc = (e) => {
    onClick(e);
    stateTrigger && handleLoaderStatus(false);
    stateTrigger && handleIndex(href);
    if(areUrlsEqual(page,href) && window !== undefined){
      setTimeout(() => {
        handleLoaderStatus(true);
        const location = window.location;
        let hash;
        if (location.hash) {
          hash = location.hash.slice(1);
        } else {
          hash = null;
        }  
        if (hash && document.getElementById(hash)) {
          const element = document.getElementById(hash);
          const { top } = element.getBoundingClientRect();
          window.scrollTo(0, window.scrollY + top - 150);
          window.location.href
        }
      }, 300);
    }
  }
  const dispatch = useDispatch();
  const handleLoaderStatus = (status) => {
    dispatch(setLoaderStatus(status));
  }
  const handleIndex = (status) => {
    dispatch(setPage(status));
}
  return (
    <Link href={href} {...rest} onClick={clickFunc}></Link>
  )
}

export default CustomLink