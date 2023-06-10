import React, { useState } from "react";

export default function SimpleRoom(roomtype, night) {
  const [price, setPrice] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setPrice((prevPrice) => {
      return { ...prevPrice, [name]: value };
    });
  }

  function submitPrice(e) {
    e.preventDefault();
  }

  return (
    <>
      <div>
        <form>
          <input
            name="roomStyle"
            onChange={handleChange}
            value={price.title}
            placeholder="roomStyle"
          />
          <input
            name="night"
            onChange={handleChange}
            value={price.content}
            placeholder="Put the number/s of night/s"
          />
          <button onClick={submitPrice}>Add</button>
        </form>
      </div>
      <div>
        <h2>The room type that you would like is {roomtype}</h2>
        <h2>The number of night/s which you would like to stay is {night}</h2>
      </div>
    </>
  );
}
