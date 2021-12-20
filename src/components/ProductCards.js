import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { appendCart, removeCart } from "../features/CartSlice";
import { useGetProductsQuery } from "../features/ecommerceApi";

function ProductCards() {
  const dispatch = useDispatch();
  let { name2 } = useParams();

  const { data, isError, isLoding } = useGetProductsQuery();
  if (isLoding) {
    return <div>loding...</div>;
  }

  let myproduct = data?.filter((product) => {
    return product.name === name2;
  });

  return (
    <div>
      {myproduct.map((product, index) => {
        return (
          <div className="container pCard">
            <div id="demo" className="slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-6 text-center align-self-center">
                        {" "}
                        <img className="img-fluid" src={product.image} />{" "}
                      </div>
                      <div className="col-md-6 info">
                        <div className="row title">
                          <div className="col">
                            <h2> {product.name}</h2>
                          </div>
                        </div>
                        <br />
                        <p> {product.text}</p> <h5>${product.price}</h5>
                        <span className="fa fa-star checked"></span>{" "}
                        <span className="fa fa-star checked"></span>{" "}
                        <span className="fa fa-star checked"></span>{" "}
                        <span className="fa fa-star checked"></span>{" "}
                        <span className="fa fa-star-half-full"></span>{" "}
                        <span id="reviews">1590 Reviews</span>
                        <div className="row price"> </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col text-right align-self-center">
                        {" "}
                        <button
                          class="btn"
                          onClick={() => {
                            dispatch(appendCart(product));
                          }}
                        >
                          Add to cart
                        </button>{" "}
                        &nbsp;
                        <button
                          class="btn"
                          onClick={() => {
                            dispatch(removeCart(product.name));
                          }}
                        >
                          remove from cart
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCards;
