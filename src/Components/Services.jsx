import React from "react";
import ScheduleButton from "./ScheduleButton";
import ServiceCard from "./ServiceCard";
import "../CSS/ServicesPage.css";

function Services() {
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
      <section id="services">
        {/* Vertical lines */}
        {[...Array(13)].map((_, i) => (
          <div
            key={`v-${i}`}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "1px",
              backgroundColor: " #30303079", // darker pink
              left: `${(i / 13) * 100}%`,
            }}
          />
        ))}

        {/* Horizontal lines */}
        {[...Array(13)].map((_, i) => (
          <div
            key={`h-${i}`}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "1px",
              backgroundColor: " #30303079",
              top: `${(i / 7) * 100}%`,
            }}
          />
        ))}

        {/* Your content goes here */}
        <div className="cards-container">
          {/* Add your components here */}
          <h2 className="our-services">our services</h2>
          <div className="cards-container-small">
            <ServiceCard
              img="/images/service-cards/bath.svg"
              title="Bath Only"
              description="A gentle bath providing deep cleansing, soft fur, and refreshing natural fragrance."
            />
            <ServiceCard
              img="/images/service-cards/nails-trim.svg"
              title="Nail Trim"
              description="Quick nail trimming ensuring safety, comfort, and healthy movement for every pet."
            />
            <ServiceCard
              img="/images/service-cards/ear-clean.svg"
              title="Ear Cleaning"
              description="Thorough ear cleaning removing buildup, preventing infections, and improving overall hygiene."
            />
            <ServiceCard
              img="/images/service-cards/spa.svg"
              title="Spa Package"
              description="Relaxing spa treatment with premium shampoos, massages, and full coat rejuvenation benefits."
            />
            <ServiceCard
              img="/images/service-cards/teddy-cut.svg"
              title="Puppy Cut"
              description="A cute, low-maintenance trim giving puppies a tidy, adorable everyday look."
            />
          </div>
          <ScheduleButton
            backgroundColor="#d6fe3b"
            onClick={() => scrollToSection("schedule")}
          />
        </div>
      </section>
    </>
  );
}

export default Services;
