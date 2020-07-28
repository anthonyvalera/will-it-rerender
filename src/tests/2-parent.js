import React, { useState } from "react";

function Child(props) {
  return <h2>I am a child component! Will I re-render?</h2>
}

function Parent() {
  const [increment, setIncrement] = useState(0);

  return (
    <div>
      <h2>Current Increment: {increment}</h2>
      <button onClick={() => setIncrement(current => ++current)}>Increment increment!</button>
      <Child /> {/* This child has no props */}
    </div>
  )
}

export default Parent;
