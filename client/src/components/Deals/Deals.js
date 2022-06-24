import React from "react";
import "./styles.css";

function Deals({ data = [] }) {
  return (
    <>
      <section className="deals">
        <div className="deals__title">
          <h3>HOT DEALS</h3>
        </div>
        <div className="deals__items">
          {data &&
            data.map(({ id, image, title, regularPrice, discountedPrice }) => (
              <div key={id} className="deals__item">
                {/* {console.log(data)} */}
                <img className="deals__item__image" src={image} alt={title} />
                <p className="deals__item__name">{title}</p>
                <p className="deals__item__price">
                  <span className="price-new">£{regularPrice}</span>
                  <span className="price-old">£{discountedPrice}</span>
                </p>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Deals;
