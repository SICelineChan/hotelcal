import { useState } from "react";

export default function RoomTypePerNight() {
  const [roomType, setRoomType] = useState("");
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
        <input value={roomType} onChange={(e) => setRoomType(e.target.value)} />
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
      {roomType !== "" && <p>Chosen Room Type: {roomType}. </p>}
      {addNightNummer > 1 && <p>Number of night staying is: {night}.</p>}
    </>
  );
}
