import { useState } from "react";
import AddingBreakfast from "./AddingBreakfast";

export default function RoomTypePerNight() {
  const [roomType, setRoomType] = useState("select");
  const [night, setNight] = useState("1");
  const addNightNummer = Number(night);

  let standardCost = night * 90;
  let deluxeCost = night * 150;
  let superiorCost = night * 220;

  return (
    <>
      <h2>Our Price List for our 3 room types per night are as follow:</h2>
      <h4>For 2 guests staying in our - </h4>
      <p>Standard Room - €90</p>
      <p>Deluxe Room - €150</p>
      <p>Superior Room - €220</p>
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
          onClick={() => {
            setNight(addNightNummer + 1);
          }}
        >
          Add 1 night
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

      {addNightNummer > 1 && <p>Number of night staying is: {night}.</p>}
    </>
  );
}
