import React, {useState} from "react";

function Simple() {
  const [increment, setIncrement] = useState(0);

  return (
    <div>
      <h2>Current Increment: {increment}</h2>
      <button
        onClick={() => setIncrement(current => ++current)}
      >
        Increment increment!
      </button>
    </div>
  )
}

export default Simple;

