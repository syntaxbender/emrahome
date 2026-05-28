"use client";
import React, { useEffect } from "react";
import jsPreloader from "./jsPreloader.module.css";
import { setLoaderStatus, isLoaderDone } from "./preloaderSlice";
import { useSelector, useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { pageState, setPage } from '@/app/components/customLink/customLinkSlice';
const Preloader = () => {
  const page = useSelector(pageState);
  const pathname = usePathname();
  const loaderDone = useSelector(isLoaderDone);
  const dispatch = useDispatch();
  const handleLoaderStatus = (status) => {
    dispatch(setLoaderStatus(status));
  };
  const handleIndex = (status) => {
    dispatch(setPage(status));
  };

  useEffect(() => {
    handleIndex(pathname);
    setTimeout(() => {
      handleLoaderStatus(true);
    }, 200);
  }, [pathname]);
  return (
    <div
      className={`${jsPreloader.jsPreloader} ${
        loaderDone ? jsPreloader.loaded : ""
      }`}
    >
      <div className={jsPreloader.preloaderInner}>
        <span className={jsPreloader.dot}></span>
        <div className={jsPreloader.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
