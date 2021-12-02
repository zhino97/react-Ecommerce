import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../features/CartSlice";
import { Col, Row } from "react-bootstrap";
import { MdRemoveShoppingCart } from "react-icons/md";

function Cart() {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  console.log(cart);
  var totalPrice = 0;
  return (
    <div className="container">
      <br />
      <div>
        {cart.map((product, index) => {
          totalPrice += product.price;
          return (
            <div className="cart mt-2">
              <Row className="container">
                <Col>
                  <h2 style={{ fontSize: "2rem" }}>{product.title}</h2>
                  <h4>${product.price}</h4>
                  <p>{product.text}</p>
                  <button className="btn">
                     <MdRemoveShoppingCart
                    onClick={() => {
                      dispatch(removeCart(product.name));
                    }}
                    style={{ fontSize: "1.7rem" }}
                  />
                  </button>
                 
                </Col>
                <Col>
                  <img style={{ width: "150px" }} src={product.image} alt="" />
                </Col>
              </Row>
            </div>
          );
        })}
        <div className="cart-payment mt-5  cart2">
          <h4>Numbers of Items: {cart.length}</h4>

          <h4>Total Price: ${totalPrice}</h4>
        </div>
      </div>
    </div>
  );
}

export default Cart;
