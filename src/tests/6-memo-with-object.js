import React, { memo, useState } from "react";

const MemoizedChild = memo(function Child({styles}) {
  return <h2 {...styles}>I am a child component with an object as a prop! Will I re-render?</h2>
})

function Parent() {
  const [increment, setIncrement] = useState(0);

  return (
    <div>
      <h2>Current Increment: {increment}</h2>
      <button onClick={() => setIncrement(current => ++current)}>Increment increment!</button>
      <MemoizedChild styles={{ color: "red" }} />
    </div>
  )
}

export default Parent;
