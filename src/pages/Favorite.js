import React from "react";
import TheCards from "../components/TheCards";
import { useGetProductsQuery } from "../features/ecommerceApi";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { appendCart } from "../features/CartSlice";

function Favorite() {
  const dispatch = useDispatch();

  const { data, isError, isLoding } = useGetProductsQuery();
  if (isLoding) {
    return <div>loding...</div>;
  }
  return (
    <div className="container space">
      <div className="divBorder">
        <div className="row dFlex">
          {data?.map((product, index) => {
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
  );
}

export default Favorite;
