//Footer Section
import Banner from "../../assets/website/footer-pattern.jpg";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  
  const FooterLinks = [
    {
      title: "Home",
      link: "home",
    },
    {
      title: "About",
      link: "about",
    },
    {
      title: "Contact",
      link: "contact",
    },
    {
      title: "Blog",
      link: "blog",
    },
  ];

  
  export {FooterLinks,BannerImg};