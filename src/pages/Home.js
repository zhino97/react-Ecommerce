import React from "react";
import TheCards from "../components/TheCards";
import TheCaroucel from "../components/TheCaroucel";
import OfferCard from "../components/OfferCard";
import { Container } from "react-bootstrap";
import png from "../img/line.png";
import png2 from "../img/line2.png";
import right from "../img/right.png";
import left from "../img/left.png";
import { useGetProductsQuery } from "../features/ecommerceApi";
// import Pagination from "../components/Pagination ";
import Carousel from "../components/Carousel.js";

export default function Home() {
  const { data, isError, isLoding } = useGetProductsQuery();
  if (isLoding) {
    return <div>loding...</div>;
  }
  return (
    <div>
      <TheCaroucel />
      <Container>
        <div className="line space dFlex">
          <div>
            <img alt="/" src={left} />
          </div>
          <div>
            <h2 className="hh2">Products </h2>
            {/* &nbsp; */}
          </div>
          <div>
            <img alt="/" src={right} />
          </div>
        </div>

        <div className="divBorder container">
          <div className="dFlex">
            <div className="row dFlex ">
              {data?.map((product) => {
                return (
                  <div className="col-md-3">
                    <TheCards
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      text={product.text}
                      type={product.type}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="line space dFlex">
          <div>
            <img alt="/" src={left} />
          </div>
          <div>
            <h2 className="hh2">Offers</h2>
            {/* &nbsp; */}
          </div>
          <div>
            <img alt="/" src={right} />
          </div>
        </div>
      </Container>
      <OfferCard />
    </div>
  );
}
