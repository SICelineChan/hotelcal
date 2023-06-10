import { useState } from "react";

export default function AddingBreakfast(props) {
  const [breakfastAdded, setBreakfastAdded] = useState("");

  const onOptionChange = (e) => {
    setBreakfastAdded(e.target.value);
  };

  function addBreakfast (e) {

    console.log(breakfastAdded + " to breakfast");
    props.onAdd(breakfastAdded);
    e.preventDefault();
  }
  

  return (
    <div>
      <h2>Select to add breakfast</h2>
      <h3>€12 per night.</h3>

      <input
        type="radio"
        name="breakfastAdded"
        value="yes"
        id="yes"
        checked={breakfastAdded === "yes"}
        onChange={onOptionChange}
      />

      <label htmlFor="yesBreakfast">Yes</label>

      <input
        type="radio"
        name="breakfastAdded"
        value="no"
        id="no"
        checked={breakfastAdded === "no"}
        onChange={onOptionChange}
      />
      <label htmlFor="noBreakfast">No</label>
      <button onClick={addBreakfast}>Add</button>
      <p>
        You have selected <em> {breakfastAdded} </em>for breakfast.
      </p>
    </div>
  );
}
