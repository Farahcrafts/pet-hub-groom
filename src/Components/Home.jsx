import React from "react";
import ScheduleButton from "./ScheduleButton";
import "../CSS/Home.css";

function Home() {
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
    <>
      <section id="home">
        <div className="first-part">
          <img className="pinkDog" src="/images/pinkDog.svg" alt="" />
          <img className="pinkCats" src="/images/pinkCats.svg" alt="" />
        </div>

        <div className="second-part">
          {/* the text part */}
          <div className="yourBetterGrooming">
            <img className="star" src="/images/star.svg" alt="" />
            <div className="your-better">
              <h1 className="your">Your</h1>
              <h1 className="better">BETTER</h1>
            </div>
            <h1 className="grooming">GROOMING</h1>
          </div>

          {/* the details part */}
          <div className="details">
            <img className="greenDogs" src="/images/greenDogs.svg" alt="" />
            <p>
              Our pet grooming studio delivers gentle, professional care for
              every cat and dog. We offer bathing, styling, nail trimming, and
              hygiene services in a clean, calm space. Our team prioritizes
              comfort and safety, ensuring each pet leaves refreshed and looking
              their best.
            </p>
            <ScheduleButton
              backgroundColor="#f7f6f2"
              onClick={() => scrollToSection("schedule")}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
