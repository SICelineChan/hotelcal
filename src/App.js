import * as React from "react";
import "./App.css";
import RoomTypePerNight from "./Components/RoomTypePerNight";

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <p>A lovely stay to our Beach hotel</p>
      <p>
        Our price per night for a normal room is 90 €, please select how many
        nights that you would like to stay and the cost is shown below.
      </p>
      <RoomTypePerNight></RoomTypePerNight>
    </div>
  );
}

export default App;
