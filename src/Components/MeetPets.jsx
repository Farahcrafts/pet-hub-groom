import React from "react";
import { BeforeAfterCard } from "./BeforeAfterCard";
import ScheduleButton from "./ScheduleButton";
import "../CSS/MeetPets.css";
import pets from "../pets.json";

const MeetPets = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section id="meetPets">
      <h1>Meet Our Lovely</h1>
      <h2>pets</h2>
      <div className="befAfcontainer">
        {pets.map((pet) => (
          <BeforeAfterCard
            before={pet.imgBefore}
            after={pet.imgAfter}
            petName={pet.name}
            petDescription={pet.description}
          />
        ))}
      </div>
      <ScheduleButton
        backgroundColor="#ffafec"
        onClick={() => scrollToSection("schedule")}
      />
    </section>
  );
};

export default MeetPets;
