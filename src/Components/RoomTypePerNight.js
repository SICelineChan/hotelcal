import { useState } from "react";

export default function RoomTypePerNight() {
  const [roomType, setRoomType] = useState("select");
  const [night, setNight] = useState("0");
  const addNightNummer = Number(night);

  const onOptionChange = (e) => {
    setRoomType(e.target.value);
  };

  let standardCost = night * 90;
  let deluxeCost = night * 150;
  let superiorCost = night * 220;

  return (
    <>
      <h1>Our Price List for our 3 room types per night are as follow</h1>
      <p>Standard Room - €90</p>
      <p>Deluxe Room - €150</p>
      <p>Superior Room - €220</p>
      <label>
        Please select the room type:
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value="select">Select</option>
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
          <option value="superior">Superior</option>
        </select>
      </label>
      {/* <br />
      <input
        type="radio"
        name="standard"
        value={roomType}
        id="standard"
        checked={roomType === "standard"}
        onChange={onOptionChange}
      />
      <label htmlFor="standard">Standard Room</label>
      <input
        type="radio"
        name="deluxe"
        value={roomType}
        id="deluxe"
        checked={roomType === "deluxe"}
        onChange={onOptionChange}
      />
      <label htmlFor="deluxe">Deluxe Room</label>
      <input
        type="radio"
        name="superior"
        value={roomType}
        id="superior"
        checked={roomType === "superior"}
        onChange={onOptionChange}
      />
      <label htmlFor="superior">Superior Room</label>
      <br /> */}
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
