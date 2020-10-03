import React from "react";

export default function ColorContainer() {
  return (
    <section className="color-container" id="color-container">
      <span className="custom-span" id="color-toggler">
        <i
          style={{
            top: "50%",
            fontSize: "22px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute",
          }}
          className="fas fa-cog"
        ></i>
      </span>
      <p>Choose your favorite color</p>
      <ul className="color-list-style" id="color-list">
        <li className="color-change color-list-li" data-color="#fb7813"></li>
        <li className="color-change color-list-li" data-color="#f54291"></li>
        <li className="color-change color-list-li" data-color="#0779e4"></li>
        <li className="color-change color-list-li" data-color="#efa8e4 "></li>
        <li className="color-change color-list-li" data-color="#fd5e53"></li>
      </ul>
      <hr />
      <p>default color</p>
      <ul className="color-list-style color-list-default">
        <li className="color-list-li" data-color="#2ecc71"></li>
      </ul>
    </section>
  );
}
