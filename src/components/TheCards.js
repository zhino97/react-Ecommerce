import React from "react";
import { Container } from "react-bootstrap";
import { ImHeart, ImSearch, ImCart } from "react-icons/im";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";

function TheCards(props) {
  return (
    <Container>
      <div className="row dFlex  d-flex cardSize">
        <div className="product-grid">
          {/* <div className="col-md-4"> */}
          <div className="product-image">
            <Link to="#" className="image">
              <img className="pic-1" src={props.image} />
            </Link>
            <ul className="product-links">
              <li>
                <Link to="#" data-tip="Favorite">
                  <i>
                    <ImHeart />
                  </i>
                </Link>
              </li>
              <li>
                <Link to={`/productcards/${props.name}`} data-tip="Detail">
                  <i>
                    <ImSearch />
                  </i>
                </Link>
              </li>
              <li>
                <Link to="" data-tip="Add">
                  <i>
                    <ImCart />
                  </i>
                </Link>
              </li>
            </ul>
            <div className="price">${props.price}</div>
          </div>
          <div className="product-content">
            <h3 className="title">
              {props.name}
              <Link to="#"></Link>
            </h3>
            <ul className="rating">
              <li>
                <MDBIcon icon="star" />
              </li>
              <li>
                <MDBIcon icon="star" />
              </li>
              <li>
                <MDBIcon icon="star" />
              </li>
              <li>
                <MDBIcon icon="star" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Container>
  );
}

export default TheCards;
