import { useState } from "react";

export default function RoomTypePerNight() {
  const [roomType, setRoomType] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("");

  const [night, setNight] = useState("1");
  const addNightNummer = Number(night);

  return (
    <>
      <h1>Our Price List for our 3 room types per night are as follow</h1>
      <p>Standard Room - €90</p>
      <p>Deluxe Room - €150</p>
      <p>Superior Room - €220</p>
      <label>
        Room Type -
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
          <option value="superior">Superior</option>
        </select>
      </label>

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
      <label>
        Pick a fruit:
        <select
          value={selectedFruit}
          onChange={(e) => setSelectedFruit(e.target.value)}
        >
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label>

      <p>Your chosen Room Type: {roomType} </p>
      <p></p>
      {/* {roomType !== "standard" && (
        <p>Cost to pay for the chosen room :({night * 1}*90)</p>
      )} */}

      {addNightNummer > 1 && <p>Number of night staying is: {night}.</p>}
      <p></p>
      <p>Your favorite fruit: {selectedFruit}</p>
    </>
  );
}
