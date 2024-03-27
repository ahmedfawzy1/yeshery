import React from "react";
import style from "./Navbar.module.scss";
import logo from "../../images/Group 769.svg";
import menu from "../../images/Group 770.svg";
import { Link } from "react-router-dom";
import phone from "../../images/Group 756.svg";
import cart from "../../images/Group 758.svg";
import location from "../../images/Group 753.svg";
import left from "../../images/Path 346.svg";
import right from "../../images/Path 347.svg";
import search from "../../images/Path 774.svg";
import adidas from "../../images/Group 745.svg";
import shape from "../../images/Path 772.svg";
import wishlist from "../../images/Path 771.svg";
import user from "../../images/Path 773.svg";

export default function Navbar({ cartItemCount }) {
  console.log(cartItemCount);
  return (
    <header className="bg-main-secondary">
      <nav className="navbar navbar-expand-lg font-sm">
        <div className="container justify-content-between">
          <div className="logo d-flex align-items-center gap-3">
            <button className="btn p-0 menu" to={"/"}>
              <img src={menu} className="" alt="menu" />
            </button>
            <Link className="" to={"/"}>
              <img src={logo} className="w-100" alt="logo" />
            </Link>
          </div>

          <div className={`${style.offer} justify-content-center align-items-center`}>
            <img className={style.arrow} src={right} alt="right" />
            <p className="m-0 px-2">Valentine’s Day Offers! Buy Two Get One Free Shop Now</p>
            <Link className="pe-2 text-dark fw-bold text-decoration-underline" aria-current="page" href="/">
              Shop Now
            </Link>
            <img className={style.arrow} src={left} alt="left" />
          </div>

          <div className={`${style.info} mb-0 d-flex flex-row gap-3`}>
            <Link className="nav-link d-flex align-items-center fw-bold" aria-current="page" href="/">
              <img src={phone} alt="phone" />
              <p className="m-0 ps-2">Contact Us</p>
            </Link>
            <Link className="nav-link d-flex align-items-center fw-bold" href="/">
              <img src={cart} alt="cart" />
              <p className="m-0 ps-2">Track Order</p>
            </Link>
            <Link className="nav-link d-flex align-items-center fw-bold" href="/">
              <img src={location} alt="location" />
              <p className="m-0 ps-2">Find A Store</p>
            </Link>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg font-sm bg-white">
        <div className="container justify-content-between">
          <div className={`${style.searcharea} d-flex justify-content-center align-items-center`}>
            <form className="d-flex position-relative" role="search">
              <img className={`position-absolute z-2 ${style.searchImg}`} src={search} alt="search" />
              <input className="form-control ps-5 fw-bold rounded-5" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <img src={adidas} alt="adidas" />
          </div>

          <div className="d-flex gap-3">
            <Link className="nav-link d-flex align-items-center fw-bold" aria-current="page" href="/">
              <div className="cart position-relative">
                <img src={shape} alt="shape" />
                <span
                  className={`${style.cartItemCount} position-absolute p-2 bg-danger border border-light rounded-circle d-flex justify-content-center align-items-center`}
                >
                  <span className="text-white">{cartItemCount}</span>
                </span>
              </div>
              <p className="m-0 ps-2">Cart</p>
            </Link>
            <Link className="nav-link d-flex align-items-center fw-bold" href="/">
              <img src={wishlist} alt="wishlist" />
              <p className="m-0 ps-2">Wishlist</p>
            </Link>
            <Link className="nav-link d-flex align-items-center fw-bold" href="/">
              <img src={user} alt="user" />
              <p className="m-0 ps-2">Login</p>
            </Link>
          </div>
        </div>
      </nav>

      <nav className={`bg-dark ${style.category}`}>
        <div className="container">
          <div className={`${style.categoryList} py-2`}>
            <ul className="d-flex justify-content-between align-items-center gap-2 m-0 p-0 text-decoration-none">
              <li>
                <Link className="text-white text-decoration-none fw-semibold" to={"/"}>
                  Men
                </Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none fw-semibold" to={"/"}>
                  Women
                </Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none fw-semibold" to={"/"}>
                  Unisex
                </Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none fw-semibold" to={"/"}>
                  Kids
                </Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none fw-semibold" to={"/"}>
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none fw-semibold" to={"/"}>
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link className="text-danger text-decoration-none fw-semibold" to={"/"}>
                  Offers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
