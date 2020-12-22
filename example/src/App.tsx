import React from "react";

import { StarRating } from "star-rating";
import "star-rating/dist/index.css";

const App = () => {
  const handleChange = (event: any) => {
    console.log("value changed", event.target.value);
  };

  return (
    <StarRating size="2rem">
      <input onChange={handleChange} type="number" min="1" max="5" value="0" />
    </StarRating>
  );
};

export default App;
