"use client"
import React from 'react'
import { setActive, isActiveState,activeIndexState,setActiveIndex } from '../navSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import style from './mobileNav.module.css';
import CustomLink from '../../customLink/customLink.jsx';

const MobileNav = ({ items }) => {
  const isActive = useSelector(isActiveState);
  const activeIndex = useSelector(activeIndexState);
  // const isSubsActive = useSelector(isSubsActiveState);
  const dispatch = useDispatch();
  // const handleLoaderStatus = (status) => {
  //   dispatch(setLoaderStatus(status));
  // }
  const handleActiveIndex = (index) => {
    dispatch(setActiveIndex(index));
  }
  // const handleSubState = (index, value) => {
  //   dispatch(setSubsActive({
  //     index,
  //     value
  //   }));
  // }
  const handleState = () => {
    dispatch(setActive(!isActive));
  }

  const navigationItems = [];

  for (const i in items) {
    // if ("sub" in items[i]) {
    //   const subItems = [];
    //   for (const i2 in items[i].sub) {
    //     const subItem = (
    //       <div className={style.mobileSubButton} key={`i2-${i2}`}>
    //         <CustomLink onClick={() => {
    //           handleState();
    //           //handleLoaderStatus(false);
    //           handleActiveIndex(i);
    //         }} href={items[i].sub[i2].link}>{items[i].sub[i2].title}</CustomLink>
    //       </div>
    //     );
    //     subItems.push(subItem);
    //   }
    //   navigationItems.push(
    //     <div key={`i-${i}`} onClick={() => { handleSubState(i, !isSubsActive[i]) }} className={`mobile-has-sub ${style.mobileMenuButton} ${(isSubsActive[i]) ? " active" : ""}`}>
    //       <div className={`${(activeIndex == i) ? " active" : ""}`}>{items[i].title}</div>
    //     </div>
    //   );
    //   navigationItems.push(
    //     <div className={`${style.mobileSubContainer} ${(isSubsActive[i]) ? style.mobileSubContainerActive : ""}`}>
    //       {subItems}
    //     </div>
    //   )
    // } else {
      navigationItems.push(
        <div key={`i-${i}`} className={style.mobileMenuButton}><CustomLink onClick={() => {
          handleState();
          //handleLoaderStatus(false);
          handleActiveIndex(i);
        }} className={(activeIndex == i) ? "active" : ""} href={items[i].link}>{items[i].title}</CustomLink></div>
     )
    //}
  }
  return (
    <>
      <nav className={`${style.mobileNav} ${(isActive) ? style.mobileNavActive : ""}`}>
        {navigationItems}
      </nav>
      <div onClick={handleState} className={`${style.mobileNavTrigger} ${(isActive) ? style.mobileNavTriggerActive : ""}`}><div className={style.mobileNavTriggerInner}></div></div>
    </>
  )
}

export default MobileNav;