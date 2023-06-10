import React, {useState} from "react";
import "./App.css";
import RoomTypePerNight from "./Components/RoomTypePerNight";
// import AddingBreakfast from "./Components/AddingBreakfast";

function App() {
// const [breakfast, setBreakfast] = useState(false);
const [totalNights, setTotalNights] = useState("1");

  // function addBreakfastInTotal () {
    
  //   if (breakfast !== true) {
  //     console.log("have breakkie")
  //   } else {console.log("no breakfast")}
    
  //   console.log(setBreakfast());
  //   }
  

  
    
  
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <p>A lovely stay to our Beach hotel</p>
      <p>
        Our price per {totalNights} night for a normal room is 100 €, please select how many
        nights that you would like to stay and the cost is shown below.
      </p>


      <RoomTypePerNight 
      bookedNights={setTotalNights}/>
      {/* <AddingBreakfast onAdd={addBreakfastInTotal}/> */}
    </div>
  );
}

export default App;
