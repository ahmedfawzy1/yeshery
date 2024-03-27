import React, { createContext } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar.jsx";
import Product from "../pages/Product.jsx";

const ProductContextt = React.createContext();

export default class ProductContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      cartItemCount: 0,
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
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
    // const { product, cartItemCount } = this.state;
    const contextValue = { product: this.state.product, cartItemCount: this.state.cartItemCount };
    // console.log(product);

    return (
      <>
        {/* <Navbar cartItemCount={cartItemCount} />
        <Product
          message="Hello from Parent!"
          product={product}
          cartItemCount={cartItemCount}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
        /> */}
        <ProductContextt.Provider value={contextValue}>{this.props.children}</ProductContextt.Provider>
      </>
    );
  }
}
