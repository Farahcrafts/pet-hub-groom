import React from "react";
import "../CSS/befAfCard.css"

export const BeforeAfterCard = (props) => {
  return (
    <>
      <div className="befAfCard">
        <div className="befAfpics">
          <img src={props.before} alt="" />
          <img src={props.after} alt="" />
        </div>
        <div className="befAfdescription">
          <div className="pet-name">{props.petName}</div>
          <div className="pet-description">{props.petDescription}</div>
        </div>
      </div>
    </>
  );
};
