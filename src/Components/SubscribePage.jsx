import React from "react";
import "../CSS/subscribePage.css";

function SubscribePage() {
  return (
    <section id="subscribePage">
      <h1>Stay In Touch</h1>
      <h2>with love and style</h2>

      <div className="inputDiv">
        <div>
          <label>SUBRSRIBE TO SPECIAL OFFERS</label>
        </div>
        <div>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <button type="submit">SUBSCRIBE</button>
        </div>
      </div>
      <div className="ShopInfo">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448.99934625113565!2d-4.999645162104286!3d34.00429214866866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b218a632b25%3A0x939d4d87631ec450!2sPet%20And%20Spa!5e0!3m2!1sfr!2sma!4v1764013230846!5m2!1sfr!2sma"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="horaires">
          <h3>Opening Hours</h3>
          <h5>Monday to Friday</h5>
          <p>
            Open 09:00 to 19:00, offering reliable grooming care throughout your
            busy weekdays.
          </p>

          <h5>Weekends</h5>
          <p>
            Open 10:00 to 16:00, providing relaxed weekend grooming for your
            pets’ comfort.
          </p>
        </div>
        <div className="medialinks">
          <h3>Follow Us</h3>
          <div>
            <img src="/images/instagram.png" alt="" />
            <p>purandpaw_</p>
          </div>
          <div>
            <img src="/images/facebook.png" alt="" />
            <p>purandpaw.co</p>
          </div>
          <div>
            <img src="/images/tiktok.png" alt="" />
            <p>purandpaw</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribePage;
