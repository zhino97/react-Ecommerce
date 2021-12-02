import React from "react";
import TheCards from "../components/TheCards";
import TheCaroucel from "../components/TheCaroucel";
import OfferCard from "../components/OfferCard";
// import { Link } from "react-router-dom";

const Products = [
  {
    title: "LA VIE EST BELLE EAU DE PARFUM SPRAY",
    text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
    image:
      "https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw7d553d24/3605532612836_LA_VIE_EST_BELLE_L_EAU_DE_PARFUM_75ml.jpg?sw=375&sfrm=jpg&q=70",
    price: 125,
    type: 1,
  },
  {
    title: "IDÔLE AURA",
    text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
    image:
      "https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dwf2f5fbcc/3614273476287-idole-aura-packshot-50ml-1000x1000.jpg?sw=375&sfrm=jpg&q=70",
    price: 99,
    type: 1,
  },
  {
    title: "Miss Dior Rose N'Roses",
    text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
    image:
      "https://www.sephora.com/productimages/sku/s2300481-main-zoom.jpg?imwidth=315",
    price: 115,
    type: 1,
  },
  {
    title: "Boss The Scent Hugo Boss Cologne - A",
    text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
    image:
      "https://fimgs.net/mdimg/perfume/375x500.31445.jpg",
    price: 70,
    type: 2,
  },
  {
    title: "COCO NOIR",
    text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
    image:
      "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_620/coco-noir-eau-de-parfum-spray-3-4fl-oz--packshot-default-113660-8848377348126.jpg",
    price: 138,
    type: 2,
  },
];


export default function Home() {
  return (
    <div>
      <TheCaroucel />
      <div className="divider-custom divider-light space ">
        <div className="divider-custom-line"></div>
        <i>
          <h1>Last Products</h1>
        </i>
        <div className="divider-custom-line"></div>
      </div>

      <div className="dFlex">
        {Products.map((product, index) => {
          return (
            <TheCards
              image={product.image}
              title={product.title}
              price={product.price}
              text={product.text}
            />
          );
        })}

        {/* <TheCards  title= "Women's perfume4"
    text= "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. "
    image=
      "https://www.lancome-usa.com/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw1903aa0b/3605532612690_LA_VIE_EST_BELLE_L_EAU_DE_PARFUM_30ml.jpg"
    price= "80$"
    type= "2"/> */}
      </div>

      <div className="divider-custom divider-light space">
        <div className="divider-custom-line"></div>
        <i>
          <h1>Offers</h1>
        </i>
        <div className="divider-custom-line"></div>
      </div>
      <OfferCard />
    </div>
  );
}
