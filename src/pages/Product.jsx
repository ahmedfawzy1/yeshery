import React from "react";
import "./Product.scss";
import MinCategory from "../components/MinCategory/MinCategory";
import logo from "../images/Group 745.svg";
import starFill from "../images/Path 368.svg";
import star from "../images/Path 369.svg";
import color1 from "../images/Group 354.png";
import color2 from "../images/Group 356.png";
import Slider from "react-slick";
import model1 from "../images/Group 333.png";
import model2 from "../images/Group 331.png";
import model3 from "../images/Group 329.png";
import model4 from "../images/Group 335.png";
import plus from "../images/Path 363.svg";
import minus from "../images/Path 364.svg";
import SimilarProducts from "../components/SimilarProducts/SimilarProducts";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      cartItemCount: 0,
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/2`);
      const data = await response.json();
      this.setState({ product: data });
    } catch (error) {
      console.log(error);
    }
  }

  addToCart = () => {
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: 5,
        date: "2024 - 02 - 03",
        products: [
          { productId: 5, quantity: 1 },
          { productId: 1, quantity: 5 },
        ],
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState((prevState) => ({
          cartItemCount: prevState.cartItemCount + 1,
        }));
        toast.success("Product added to cart successfully");
      })
      .catch((err) => console.log(err));
  };
  removeFromCart = () => {
    if (this.state.cartItemCount > 0) {
      fetch("https://fakestoreapi.com/carts/7", {
        method: "PUT",
        body: JSON.stringify({
          userId: 3,
          date: 2019 - 12 - 10,
          products: [{ productId: 1, quantity: 3 }],
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          this.setState((prevState) => ({
            cartItemCount: prevState.cartItemCount - 1,
          }));
          toast.success("Product remove from cart successfully");
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const { product, cartItemCount } = this.state;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            arrows: false,
          },
        },
      ],
    };
    return (
      <>
        <MinCategory />
        <Navbar product={product} cartItemCount={cartItemCount} />
        <section className="productdetails py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6">
                <div className="image w-75 m-auto">
                  <img className="w-100" src={product.image} alt={product.title} />
                </div>
                <div className="imageslider pt-4">
                  <Slider {...settings}>
                    <img className="w-100 p-1" src={model1} alt="model" />
                    <img className="w-100 p-1" src={model2} alt="model" />
                    <img className="w-100 p-1" src={model3} alt="model" />
                    <img className="w-100 p-1" src={model4} alt="model" />
                  </Slider>
                </div>
              </div>

              <div className="col-md-6">
                <div className="details ps-4">
                  <img src={logo} className="" alt="logo" />
                  <h1 className="h5 fw-bold my-2">{product.title}</h1>
                  <p className="text-muted mb-3">{product.category}</p>
                  {this.state.rating && (
                    <div className="rating">
                      <div className="rate d-flex align-items-center font-sm">
                        <img src={starFill} alt="star" />
                        <img src={starFill} alt="star" />
                        <img src={starFill} alt="star" />
                        <img src={starFill} alt="star" />
                        <img src={star} alt="star" />
                        <span className="mx-3 text-dark fw-bold">{product.rating.rate} of 5</span>
                        <span>{product.rating.count} Rates</span>
                      </div>
                    </div>
                  )}
                  <div className="price d-flex align-items-center gap-3 mt-3">
                    <p className="fs-2 text-main fw-bold m-0">{product.price} Le</p>
                    <p className="fs-6 text-muted m-0">{product.price} Le</p>
                    <span className="bg-main-secondary p-1 fw-bold font-sm">30% Off</span>
                  </div>
                  <hr />
                  <div className="size">
                    <h5 className="fw-bold">Size</h5>
                    <div className="sizes d-flex gap-3">
                      <button className="bg-transparent border-custom rounded-circle text-main fs-10 fw-bold">Small</button>
                      <button className="bg-transparent border-custom rounded-circle text-main fs-10 fw-bold">Medium</button>
                      <button className="border-custom rounded-circle text-main fs-10 fw-bold">Large</button>
                      <button className="bg-transparent border-custom rounded-circle text-main fs-10 fw-bold">X Large</button>
                      <button className="bg-transparent border-custom rounded-circle text-main fs-10 fw-bold">XX Large</button>
                    </div>
                  </div>
                  <hr />
                  <div className="color">
                    <h5 className="fw-bold">Color</h5>
                    <div className="sizes d-flex gap-3">
                      <button className="bg-transparent rounded-circle text-main fs-10 fw-bold">
                        <img src={color1} alt="size" />
                      </button>
                      <button className="bg-transparent border-custom rounded-circle text-main fs-10 fw-bold">
                        <img src={color2} alt="size" />
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="quantily bg-body-tertiary d-flex justify-content-between align-items-center">
                    <button onClick={this.addToCart} className="bg-main-secondary border-custom rounded-circle text-main fs-10 fw-bold">
                      <img src={plus} alt="plus" />
                    </button>
                    <span className="text-dark fw-bold">{cartItemCount}</span>
                    <button onClick={this.removeFromCart} className="bg-main-secondary border-custom rounded-circle text-main fs-10 fw-bold">
                      <img src={minus} alt="minus" />
                    </button>
                  </div>
                  <div className="pickcart d-flex gap-4 mt-4">
                    <button onClick={this.addToCart} className="bg-main-primary border-0 rounded-5 text-white px-4 py-2 font-sm fw-medium">
                      Add To Cart
                    </button>
                    <button className="bg-main-secondary border-0 rounded-5 text-dark px-3 py-2 font-sm fw-bold">Pickup From Store</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SimilarProducts />
      </>
    );
  }
}
