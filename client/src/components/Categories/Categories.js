import React from "react";
import "./styles.css";

function Categories({ data }) {
  return (
    <section className="categories">
      {data &&
        data.map(({ image, title, label, id }) => {
          return (
            <div key={id} className="categories__item">
              <img
                className="categories__item__image"
                src={image}
                alt={image}
              />
              <div className="categories__item__footer">
                <p className="categories__item__footer--name">{title}</p>
                <p className="categories__item__footer--label">{label}</p>
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default Categories;
