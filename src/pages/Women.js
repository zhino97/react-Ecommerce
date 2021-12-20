import React from "react";
import TheCards from "../components/TheCards";
import { useGetProductsQuery } from "../features/ecommerceApi";

function Women() {
  const { data, isError, isLoding } = useGetProductsQuery();
  if (isLoding) {
    return <div>loding...</div>;
  }
  return (
    <div className="container space">
      <div className="divBorder">
        <div className="row dFlex">
          {data?.map((product, index) => {
            if (product.type === "women") {
              return (
                <div className=" col-md-3">
                  <TheCards
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    text={product.text}
                    type={product.type}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Women;
