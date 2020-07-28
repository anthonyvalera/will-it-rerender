import React, { memo, useState } from "react";

const MemoizedChild = memo(function Child({ updateIncrement }) {
  return (
    <>
      <h2>I am a child component that will update my parent's state! Will I re-render?</h2>
      <button onClick={updateIncrement}>Increment increment!</button>
    </>
  )
})

function Parent() {
  const [increment, setIncrement] = useState(0);

  return (
    <div>
      <h2>Current Increment: {increment}</h2>
      <MemoizedChild updateIncrement={() => setIncrement(i => ++i)} />
    </div>
  )
}

export default Parent;
