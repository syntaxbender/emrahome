import React from 'react'
import desktopMenu from "./desktopNav.module.css"
//import Link from 'next/link';
import CustomLink from '../../customLink/customLink.jsx';


const DesktopNav = ({items,align="center",borderAlign="up"}) => {
    const iterableItems = Object.values(items);
    const borderStyle=borderAlign === "up" ? "20px 20px 0px 0px": "0px 0px 20px 20px";
    const menuCollector = [];
    for(const item of iterableItems){
        menuCollector.push(<div><CustomLink href={item.link}>{item.title}</CustomLink></div>)
    }
    return (
        <nav style={{justifyContent:align,borderRadius:borderStyle}} className={desktopMenu.mainNav}>
            {menuCollector}
        </nav>
    )
}

export default DesktopNav