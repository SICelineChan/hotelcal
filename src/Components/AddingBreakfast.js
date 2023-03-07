import { useState } from "react";

export default function AddingBreakfast() {
  const [breakfastAdded, setBreakfastAdded] = useState("");

  const onOptionChange = (e) => {
    setBreakfastAdded(e.target.value);
  };

  return (
    <div>
      <h2>Select to add breakfast</h2>
      <h3>€7.50 per Person per night.</h3>

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
      <p>
        You have selected <em> {breakfastAdded} </em>for breakfast
      </p>
    </div>
  );
}
