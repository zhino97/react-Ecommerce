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
    <div className="container ">
      <br />
      <div>
        {cart.map((product, index) => {
          totalPrice += product.price;
          return (
            <div className="gradient-border mt-2 ">
              <Row className="container">
                <Col>
                  <h2 style={{ fontSize: "2rem" }}>{product.name}</h2>
                  <h4>${product.price}</h4>
                  <button className="btn">
                    <MdRemoveShoppingCart
                      onClick={() => {
                        dispatch(removeCart(product.name));
                      }}
                      style={{ fontSize: "2rem" }}
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
        <div className="cart-payment mt-5  cart2 ">
          <h4>Numbers of Items: {cart.length}</h4>

          <h4>Total Price: ${totalPrice}</h4>
          <button
            className="btn"
            value="The purchase was done."
            onClick={(e) => alert(e.target.value)}
          >
            Buy
          </button>
        </div>
      </div>
    </div>

    // ////////////////////////////////////////////////////////////////////////////////////

    // {cart.map((product, index) => {
    //         totalPrice += product.price;
    //         return (
    // <div className="cart_section">
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col-lg-10 offset-lg-1">
    //       <div className="cart_container">
    //         <div className="cart_title">
    //           Shopping Cart<small> (1 item in your cart) </small>
    //         </div>
    //         <div className="cart_items">
    //           <ul className="cart_list">
    //             <li className="cart_item clearfix">
    //               <div className="cart_item_image">
    //               {product.image}
    //               </div>
    //               <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
    //                 <div className="cart_item_name cart_info_col">
    //                   <div className="cart_item_title">Name</div>
    //                   <div className="cart_item_text">{product.name}</div>
    //                 </div>
    //                 <div className="cart_item_color cart_info_col">
    //                   <div className="cart_item_title">Color</div>
    //                   <div className="cart_item_text">
    //                     <span className="style"></span>Silver
    //                   </div>
    //                 </div>
    //                 <div className="cart_item_quantity cart_info_col">
    //                   <div className="cart_item_title">Quantity</div>
    //                   <div className="cart_item_text">1</div>
    //                 </div>
    //                 <div className="cart_item_price cart_info_col">
    //                   <div className="cart_item_title">Price</div>
    //                   <div className="cart_item_text">{product.price}</div>
    //                 </div>
    //                 <div className="cart_item_total cart_info_col">
    //                   <div className="cart_item_title">Total</div>
    //                   <div className="cart_item_text">  {cart.length}</div>
    //                 </div>
    //               </div>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="order_total">
    //           <div className="order_total_content text-md-right">
    //             <div className="order_total_title">Order Total:</div>
    //             <div className="order_total_amount">${totalPrice}</div>
    //           </div>
    //         </div>
    //         <div className="cart_buttons">
    //           {" "}
    //           <button type="button" className="button cart_button_clear">
    //             Continue Shopping
    //           </button>{" "}
    //           <button type="button" className="button cart_button_checkout">
    //             Add to Cart
    //           </button>{" "}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>

    // )})
    // ////////////////////////////////
  );
}

export default Cart;
