import React from "react";
import logo from "../../images/Group 769.svg";
import newsletter from "../../images/Group 1431.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="info">
                <div className="image">
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
                <div className="newsletter d-flex">
                  <input type="email" className="form-control rounded-5 position-relative" name="email" id="email" placeholder="Enter Your Email" />
                  <button className="bg-main-secondary border-0 rounded-5 text-dark px-3 py-2 font-sm fw-bold d-flex gap-2 position-absolute">
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
                        /YESHTERY
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link className="text-decoration-none text-white" to={"/"}>
                        /YESHTERY
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link className="text-decoration-none text-white" to={"/"}>
                        /YESHTERY
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link className="text-decoration-none text-white" to={"/"}>
                        /YESHTERY
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
