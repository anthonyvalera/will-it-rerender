import React, { useState } from "react";

function Child({styles}) {
  return <h2 style={styles}>I am a child component with S T Y L E! Will I re-render?</h2>
}

function Parent() {
  const [increment, setIncrement] = useState(0);

  return (
    <div>
      <h2>Current Increment: {increment}</h2>
      <button onClick={() => setIncrement(current => ++current)}>Increment increment!</button>
      <Child styles={{ color: "red" }} />
    </div>
  )
}

export default Parent;
