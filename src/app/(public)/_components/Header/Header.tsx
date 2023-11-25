import Image from "next/image";
import React from "react";
import logo from "@/../public/images/logo.png";
import heart from "@/../public/images/heart.png";
import Link from "next/link";
import { BeakerIcon, EnvelopeIcon, MapIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'


function Header() {
  return (
    <div className="flex items-center"   style={{
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      background: '#f1f1f1',
    }}>
      <div className="w-[30%] flex items-center justify-center">
        {" "}
        <Image
          src={logo}
          alt="bgmain"
          className="h-[100px] w-[180px] rounded-[10px] object-contain"
        />
      </div>
      <div className="main-menu__right">
        <div className="main-menu__right-top 2xl:w-[75%] w-[95%]">
          <div className="main-menu__right-top-left">
            <div className="main-menu__volunteers">
              <div className="main-menu__volunteers-icon">
                <Image
                  src={heart}
                  alt="bgmain"
                  className="h-[30px] w-[30px] object-contain"
                />{" "}
              </div>
              <div className="main-menu__volunteers-text-box">
                <p className="main-menu__volunteers-text ml-[20px]">
                  <a href="become-volunteer.html">
                    Become a<span>volunteers</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="main-menu__right-top-right">
            <div className="main-menu__right-top-address">
              <ul className="list-unstyled main-menu__right-top-address-list flex items-center justify-between">
                <li className="mr-[30px] flex items-center">
                  <div className="icon mr-[20px]">
                  <PhoneIcon className="h-6 w-6" />
                  </div>
                  <div className="content">
                    <p>Helpline</p>
                    <h5>
                      <a href="tel:980009630">+ 98 (000) - 9630</a>
                    </h5>
                  </div>
                </li>
                <li className="mr-[30px] flex items-center"> 
                  <div className="icon mr-[20px]">
                  <EnvelopeIcon className="h-6 w-6" />
                                    </div>
                  <div className="content">
                    <p>Send email</p>
                    <h5>
                      <a href="mailto:needhelp@company.com">
                        needhelp@company.com
                      </a>
                    </h5>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="icon mr-[20px]">
                  <MapPinIcon className="h-6 w-6" />                  </div>
                  <div className="content">
                    <p>380 St Kilda Road</p>
                    <h5>Melbourne, Australia</h5>
                  </div>
                </li>
              </ul>
            </div>
            <div className="main-menu__right-top-social w-[81%] mx-auto">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="main-menu__right-bottom">
                       <ul>
                        <Link href="/" className="mr-[20px]">Home</Link>
                        <Link href="/" className="mr-[20px]">About Us</Link>
                        <Link href="/" className="mr-[20px]">Our Projects</Link>
                        <Link href="/" className="mr-[20px]">Events</Link>
                        <Link href="/">Contact Now</Link>
                        </ul>      
                            </div>
      </div>
    </div>
  );
}

export default Header;
