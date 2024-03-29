import React from "react";
import style from "./cart.module.scss";
import shirt from "../../images/Group 354.png";

export default function Cart({ showComponent, setShowComponent }) {
  return (
    <>
      <div className={`position-fixed top-0 ${style.layer} ${showComponent ? style.show : style.hide}`}></div>
      <div className={`${style.cart} position-fixed top-0 ${showComponent ? style.show : style.hide}`}>
        <div className={`${style.mycart} p-4`}>
          <div className="closeBtn text-end">
            <button onClick={() => setShowComponent(!showComponent)} className="btn fs-1">
              x
            </button>
          </div>
          <h3 className="text-main text-center fw-bold mb-3">My Cart</h3>
          <p className="fw-bold">Cart Summary</p>

          <div className="details border rounded-4 p-3 d-flex flex-row justify-content-between align-items-center gap-5">
            <div className="image w-25">
              <img className="w-100" src={shirt} alt="" />
            </div>
            <div className="text">
              <h1 className="h6 fw-bold my-2">shirt</h1>
              <p className="text-muted mb-1 fw-bold font-sm">color: VECNAV/FROBER/PUNBER</p>
              <p className="text-muted mb-1 fw-bold font-sm">size: 36</p>
              <p className="text-muted mb-1 fw-bold font-sm">Quantity: 1</p>

              <div className="price d-flex align-items-center gap-3 mt-2">
                <p className="fs-3 text-main fw-bold m-0">5464 EGP</p>
              </div>
            </div>
          </div>
          <p className="fs-5 mt-4 fw-bold m-0 text-center">Total: 5464 EGP</p>

          <div className="pickcart d-flex justify-content-between gap-4 mt-4">
            <button className="bg-main-secondary border-0 rounded-5 text-dark px-5 py-2 fw-bold">Review Cart</button>
            <button className="bg-main-primary border-0 rounded-5 text-white px-3 py-2 fw-bold">Complete Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
