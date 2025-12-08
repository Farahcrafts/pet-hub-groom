import React from "react";
import { useState } from "react";
import "../CSS/Navbar.css";

function Navbar() {
  // État pour le menu toggle
  const [isOpen, setIsOpen] = useState(false);

  //scrollIntoView function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Ferme le menu après avoir cliqué sur un lien (pour mobile)
    setIsOpen(false);
  };

  // Fonction pour basculer le menu
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <nav>
      <div className="nav-bar">
        <span className="logo">Purr & Paw</span>

        {/* Menu s'affiche/cache selon isOpen */}
        <div className={`menu ${isOpen ? "active" : ""}`}>
          <ul id="menu-list">
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => scrollToSection("meetPets")}>Gallery</li>
            <li onClick={() => scrollToSection("subscribePage")}>Contact</li>
          </ul>
        </div>
        <button
          className="logo-toggle"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls="menu-list"
          aria-label="Basculer le menu de navigation"
        >
          <img src="/images/menu.png" alt="" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
