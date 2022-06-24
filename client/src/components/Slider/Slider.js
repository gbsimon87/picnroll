import React, { useState, useEffect } from "react";

import "./styles.css";

function Slider({ data = [], name, size = "sm" }) {
  const [sliderData] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = sliderData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, sliderData]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className={`section slider-${name}`}>
      <div
        className="section-center"
        style={{ height: size === "sm" ? "5rem" : "10rem" }}
      >
        {sliderData &&
          sliderData.map((sliderItem, itemIndex) => {
            let { id, image, header, label } = sliderItem;
            let position = "nextSlide";
            if (itemIndex === index) {
              position = "activeSlide";
            }
            if (
              itemIndex === index - 1 ||
              (index === 0 && itemIndex === sliderData.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={`${position}`} key={id}>
                <img src={image} alt={label} className="article-image" />
                <h4>{header}</h4>
                <h6>{label}</h6>
              </article>
            );
          })}
      </div>
    </section>
  );
}

export default Slider;
