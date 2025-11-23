import React from "react";
import "./Header.css";
import { ChevronRight } from "lucide-react";

const Header = () => {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1 className="hero-title">
            Delicious Food <br />
            <span>PetPuja</span>
          </h1>
          <p className="hero-subtitle">
            Experience the best flavors in town. Fresh ingredients, tasty meals,
            and fastest delivery right to your doorstep.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-menu"
              style={{ fontSize: "1.1rem", padding: "12px 35px" }}
            >
              View Full Menu <ChevronRight size={20} />
            </button>

            <button className="btn-secondary">Book a Table</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;