import React, { useState } from "react";
import model1 from "../../images/Group 745.svg";
import starFill from "../../images/Path 368.svg";
import star from "../../images/Path 369.svg";
import Slider from "react-slick";
import style from "./SimilarProducts.module.scss";

export default class SimilarProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentProduct: [],
    };
  }

  componentDidMount() {
    this.getRecentProduct();
  }

  async getRecentProduct() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      this.setState({ recentProduct: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { recentProduct } = this.state;

    return (
      <section className={`${style.similarproducts} pb-5`}>
        <div className="container">
          <div className={`${style.row} row flex-row flex-nowrap overflow-x-auto`}>
            {recentProduct.map((product) => (
              <div className="col-sm-4 col-md-3" key={product.id}>
                <div
                  className={`${style.product} d-flex justify-content-center align-items-center flex-column gap-2 border px-2 py-3 rounded-3 shadow-sm`}
                >
                  <div className={style.image}>
                    <img className="" src={product.image} alt="model1" />
                  </div>
                  <div className={style.info}>
                    <h1 className="font-sm fw-bold my-2">{product.title.split(" ").slice(0, 3).join(" ")}</h1>
                    <p className="fs-5 text-main fw-bold m-0">{product.price} Le</p>
                    <div className="details d-flex justify-content-between mb-3">
                      <p className="font-sm text-muted m-0">{product.price} Le</p>
                      <span className="bg-main-secondary p-1 fw-bold fs-10">30% Off</span>
                      <img src={model1} className="w-25" alt="logo" />
                    </div>

                    {product.rating && (
                      <div className="rating">
                        <div className="rate d-flex justify-content-center align-items-center font-sm">
                          <img src={starFill} alt="star" />
                          <img src={starFill} alt="star" />
                          <img src={starFill} alt="star" />
                          <img src={starFill} alt="star" />
                          <img src={star} alt="star" />
                          <span className="text-dark fw-bold ms-auto">{product.rating.rate} of 5</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
