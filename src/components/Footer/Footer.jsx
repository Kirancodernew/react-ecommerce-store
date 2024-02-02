import React from "react";
import footerLogo from "../../assets/logo.png";
import {
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";
import { BannerImg, FooterLinks } from "./FooterData";

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white" name="footer">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Elevate your shopping experience with curated collections,
              top-selling products, and cutting-edge technology, ensuring style,
              quality, and innovation at your fingertips.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <Link to={link.link} smooth duration={600} offset={-40}>
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">

                <a href="https://github.com/Kirancodernew/">
                  <FaGithub className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/princekiran/">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Hyderabad, Telangana</p>
                </div>
                <div className="flex items-center gap-3">
                  <SiGmail />
                  <p>saikiranbheempur@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+91 8688634012</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
