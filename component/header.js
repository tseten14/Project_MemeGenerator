import React from "react";

//Always put function in capital
export default function Header() {
  return (
    <header className="Header">
      <img
        className="Troll"
        src={require("../images/troll-face.png")}
        alt="troll"
      />

      <h2 className="MemeImg">Meme Generator</h2>
      <h4 className="HeaderC"> REACT course Project 3 </h4>
    </header>
  );
}
