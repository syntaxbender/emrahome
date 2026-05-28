
const notFound = {
  "not-found":{
    key:"not-found",
    title:"Sayfa Bulunamadı",
    link:"/not-found",
    img:null,
    seo:{
      // description: "Expert curtain care: repair, sewing, cleaning, removal & installation. We handle your home textile needs with precision & care. Contact us today!",
      // openGraph: {
      //   image: {
      //     url: "https://www.softxpress.com.tr/images/image.jpg",
      //     alt: "softxpress tanıtım resmi"
      //   }
      // }
    },
    sub:{}
  }
}

const mainNavigation = {
  "home": {
    key: "home",
    title:"Home",
    link: "/",
    img: null,
    seo:{
      title: "SyntaxBender Custom Software Development Services",
    },
    sub: {}
  },
  "about-us": {
    key: "about-us",
    title: "About Us",
    link: "/about-us",
    img: null,
    seo:{ },
    sub: {},
  },
  "products": {
    key: "products",
    title: "Products",
    link: "/products",
    img: null,
    seo:{},
    sub: {}
  },
  "services": {
    key: "services",
    title: "Services",
    link: "/services",
    img: null,
    seo:{},
    sub: {}
  },
  "contact-us": {
    key: "contact-us",
    title: "Contact Us",
    link: "/contact-us",
    img: null,
    seo:{},
    sub: {}
  }
};

const flattenObj = (ob) => {
  let res = [];

  for(const i in ob){
    const {sub, ...rest} = ob[i]
    res.push({...rest});
    if(sub && Object.values(sub).length>0){
      const flatted = flattenObj(sub);
      res = [...res,...flatted]
    }
  }
  return res;
  
};
export { mainNavigation, flattenObj,notFound }