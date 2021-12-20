import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function TheCaroucel() {
  return (
    <div>
      {/* <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100  imgC"
            src="https://cdn.crello.com/api/media/medium/441265486/stock-photo-cropped-view-woman-holding-bottle?token="
            alt="Second slide"
          />
          <Carousel.Caption>
            <Link to="/thecards">
              <button className="btn">Shop Now</button>
            </Link>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  imgC"
            src="https://cdn.crello.com/api/media/medium/194435982/stock-photo-hand-holding-stylish-bottle-perfume?token="
            alt="Third slide"
          />
          <Carousel.Caption>
            <Link to="">
              <button className="btn">Shop Now</button>
            </Link>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <div className="divBack2">
        <div className="divBackground">
          <h1 className="textD">Welcom to World of Perfume</h1>
        </div>
      </div>
    </div>
  );
}

export default TheCaroucel;
