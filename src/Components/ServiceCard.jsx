import React from "react";
import "../CSS/ServiceCard.css";

function ServiceCard(props) {
  return (
    <div className="service-card">
      <img className="service-img" src={props.img} alt="" />
      <h3 className="service-title">{props.title}</h3>
      <p className="service-description">{props.description}</p>
    </div>
  );
}

export default ServiceCard;
