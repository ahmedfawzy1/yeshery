import React from "react";
import logo from "../../images/Group 1436.svg";
import newsletter from "../../images/Group 1431.svg";
import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
import facebook from "../../images/Group 1432.svg";
import insta from "../../images/Group 1433.svg";
import twitter from "../../images/Group 1434.svg";
import linkedin from "../../images/Group 1435.svg";
import cash from "../../images/Rectangle 586.png";
import visa from "../../images/Group 1437.png";
import master from "../../images/Group 1438.png";
import nasnav from "../../images/Group 1439.svg";

export default function Footer() {
  return (
    <>
      <footer className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="info">
                <div className="image mb-4">
                  <img src={logo} alt="logo" />
                </div>
                <div className="details font-sm">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                    erat volutpat.
                  </p>
                  <p>
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit, sed dia
                  </p>
                  <p>m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact">
                <p>Subscribe to our newsletter</p>
                <div className="newsletter d-flex position-relative mb-4">
                  <input type="email" className="form-control rounded-5 position-relative" name="email" id="email" placeholder="Enter Your Email" />
                  <button className="bg-main-secondary border-0 rounded-5 text-dark px-3 py-2 font-sm fw-bold d-flex gap-2 position-absolute end-0">
                    Subscribe <img src={newsletter} alt="newsletter" />
                  </button>
                </div>
                <div className="links d-flex justify-content-between">
                  <ul className="d-flex flex-column list-unstyled">
                    <li className="mb-3">
                      <Link className="text-decoration-none text-white" to={"/"}>
                        About Us
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link className="text-decoration-none text-white" to={"/"}>
                        Contact Us
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link className="text-decoration-none text-white" to={"/"}>
                        Track Order
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link className="text-decoration-none text-white" to={"/"}>
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link className="text-decoration-none text-white" to={"/"}>
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link className="text-decoration-none text-white" to={"/"}>
                        Sell With Us
                      </Link>
                    </li>
                  </ul>

                  <ul className="d-flex flex-column list-unstyled">
                    <li className="mb-3">
                      <Link className="text-decoration-none text-white" to={"/"}>
                        <img className="me-2" src={facebook} alt="facebook" />
                        /YESHTERY
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link className="text-decoration-none text-white" to={"/"}>
                        <img className="me-2" src={linkedin} alt="linkedin" />
                        /YESHTERY
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link className="text-decoration-none text-white" to={"/"}>
                        <img className="me-2" src={insta} alt="insta" />
                        /YESHTERY
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link className="text-decoration-none text-white" to={"/"}>
                        <img className="me-2" src={twitter} alt="twitter" />
                        /YESHTERY
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright py-3">
              <div className="container">
                <div className="row flex-row">
                  <div className="col-md-4">
                    <div className="copy">
                      <p className="m-0">© 2021 yeshtery, all rights reserved.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={`${style.payment} d-flex justify-content-center align-items-center gap-3`}>
                      <img src={cash} alt="" />
                      <img src={visa} alt="" />
                      <img src={master} alt="" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="powered d-flex justify-content-center align-items-center gap-2">
                      <p className="m-0">Powered By</p>
                      <img src={nasnav} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
