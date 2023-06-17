import React, {useState} from "react";
import "./App.css";
import RoomTypePerNight from "./Components/RoomTypePerNight";
import TopTitle from "./Components/TopTitle";
// import SimpleRoom from "./Components/SimpleRoom";
import AddingBreakfast from "./Components/AddingBreakfast";

function App() {
 
  const [haveBreakkie, setHaveBreakkie] = useState("");

  function PlusBreakfast (breakfastAdded){
    setHaveBreakkie(() => {
      return [breakfastAdded]
      
    })
    
  }

  return (
    <div className="App">
    <TopTitle guestName="Guest"/>
    
    
      
    <RoomTypePerNight />
    <AddingBreakfast onAdd={PlusBreakfast} />

    <p>You have choosen to {haveBreakkie} breakfast</p>
   
   
    </div>
  );
}

export default App;
