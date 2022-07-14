import React from "react";
import memesData from "../memesData";
export default function Meme() {
  /**
   * Challenge: Get a random image from the `memesData` array
   * when the "new meme image" button is clicked.
   *
   * Log the URL of the image to the console. (Don't worry
   * about displaying the image yet)
   */

  function RandomGenerator() {
    var Array1 = memesData.data.memes;

    const RandomNo = Array1[Math.floor(Math.random() * Array1.length)];
    // const randomNumber = Math.floor(Math.random() * memesArray.length)

    var url = RandomNo.url;
    console.log(url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />

        <button onClick={RandomGenerator} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
