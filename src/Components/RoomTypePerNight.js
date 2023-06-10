import { useState } from "react";

export default function RoomTypePerNight({props, bookedNights}) {
  const [roomType, setRoomType] = useState("select");
  const [night, setNight] = useState("1");
  

  let standardCost = night * 100;
  let deluxeCost = night * 200;
  let superiorCost = night * 300;

  function setTotalNumberOfNight () {
    console.log("the total night is " + night);
    let totalCost = 0;
    if (roomType === "select") {
      totalCost += standardCost
      console.log(totalCost);
    } else if (roomType === "deluxe") {
      totalCost += deluxeCost
      console.log(totalCost);
    } else if (roomType === "superior") {
      totalCost += superiorCost
      console.log(totalCost);
  }
  
  console.log(totalCost);


}
  return (
    <>
      <h2>Our Price List for our 3 room types per night are as follow:</h2>
      <p>Standard Room - €100</p>
      <p>Deluxe Room - €150</p>
      <p>Superior Room - €250</p>
      <label>
        <br />
        Please select the room type:
        <select
          value={roomType}
          placeholder="please select"
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value="select">Select</option>
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
          <option value="superior">Superior</option>
        </select>
      </label>
      <br />
      <label>
        Number of nights:
        <input
          value={night}
          onChange={(e) => setNight(e.target.value)}
          type="number"
        />
        <button
          onClick={setTotalNumberOfNight}
        >
          submit
        </button>
      </label>

      <hr />

      {roomType === "standard" && (
        <p>
          For the {roomType}, the cost to pay for the chosen room : €
          {standardCost}
        </p>
      )}
      {roomType === "deluxe" && (
        <p>
          For the {roomType}, the cost to pay for the chosen room : €
          {deluxeCost}
        </p>
      )}
      {roomType === "superior" && (
        <p>
          For the {roomType}, the cost to pay for the chosen room : €
          {superiorCost}
        </p>
      )}

      {<p>Number of night staying is: {night}.</p>}
      {<p>{bookedNights}</p>} 
      
    </>
  );
}
