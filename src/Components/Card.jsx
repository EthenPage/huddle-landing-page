import React from "react";
import IMAGES from "../Assets/Images";

const Card = ({ head, desc, img }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt="cardimg" />
      </div>
      <div className="card__text">
        <h2>{head}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
