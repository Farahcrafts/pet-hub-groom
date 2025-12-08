import React from "react";
import "../CSS/band.css";

function Band(props) {
  return (
    <>
      <div className="band1" style={{ backgroundColor: props.backgroundColor }}>
        <p className="petcure">PETCURE</p>
        <img src="/images/paw.png" alt="" />
        <p className="petcare">PetCare</p>
        <img src="/images/paw.png" alt="" />
        <p className="animalz">Animalz</p>
        <img src="/images/paw.png" alt="" />
        <p className="groom">Groom</p>
        <img src="/images/paw.png" alt="" />
        <p className="petcure">PETCURE</p>
        <img src="/images/paw.png" alt="" />
        <p className="petcare">PetCare</p>
        <img src="/images/paw.png" alt="" />
        <p className="animalz">Animalz</p>
        <img src="/images/paw.png" alt="" />
        <p className="groom">Groom</p>
        <img src="/images/paw.png" alt="" />
      </div>
    </>
  );
}

export default Band;
