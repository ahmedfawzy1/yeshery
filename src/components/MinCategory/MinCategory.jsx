import React from "react";
import { Link } from "react-router-dom";
import style from "./MinCategory.module.scss";

export default function MinCategory() {
  return (
    <div className={style.mincategory}>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb py-3 m-0">
            <li className="breadcrumb-item">
              <Link className="text-dark fw-bold" to="/">
                Men
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link className="text-dark fw-bold" to="/">
                Clothing
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link className="text-dark fw-bold" to="/">
                Tops
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link className="text-dark fw-bold" to="/">
                Adidas
              </Link>
            </li>
            <li className="breadcrumb-item active fw-bold" aria-current="page">
              Adidas Black T-Shirt
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
