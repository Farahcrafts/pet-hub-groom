import React from "react";
import "../CSS/schedule.css";

function Schedule() {

  return (
    <section id="schedule">
      <h1>
        Booking With <span>Us</span>
      </h1>
      <div className="scheduleForm">
        <div className="div1">
          <label htmlFor="ownerName">Owner Name</label>
          <input type="text" id="ownerName" placeholder="Owner Name" />

          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" placeholder="+212 0000000" />

          <label htmlFor="petName">Pet Name</label>
          <input type="text" id="petName" placeholder="Pet Name" />

          <label htmlFor="petType">Pet Type</label>
          <select name="petType" id="petType">
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="rabbit">Rabbit</option>
            <option value="hamster">Hamster</option>
          </select>
          <img
            src="/images/loyaltyCard.svg"
            alt="loyalty card"
          />
        </div>
        <div className="div2">
          <label htmlFor="petSize">Pet Size</label>
          <select name="petSize" id="petSize">
            <option value="Xsmall">Extra Small</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>

          <label htmlFor="service">Select Service</label>
          <select name="service" id="service">
            <option value="bathOnly">Bath Only</option>
            <option value="nailTrim">Nail Trim</option>
            <option value="earCleaning">Ear Cleaning</option>
            <option value="spaPackage">SPA Package</option>
            <option value="puppyCut">Puppy Cut</option>
          </select>

          <label htmlFor="date">Preferred Date</label>
          <input type="date" />

          <label htmlFor="time">Preferred Time Slot</label>
          <input type="time" />

          <label htmlFor="note">Note for groomer</label>
          <textarea
            id="note"
            placeholder="Leave a note for the groomer"
          ></textarea>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
