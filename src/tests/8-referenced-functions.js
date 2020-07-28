import React, { memo, useState } from "react";

const ChildMemo = memo(function Child({ setIncrement }) {
  return (
    <>
      <button onClick={() => setIncrement(i => ++i)}>Increment increment!</button>
      <h2>I am a child component that will update my parent's state! Will I re-render?</h2>
    </>
  )
})

function Parent() {
  const [increment, setIncrement] = useState(0);

  return (
    <div>
      <h2>Current Increment: {increment}</h2>
      <ChildMemo setIncrement={setIncrement} />
    </div>
  )
}

export default Parent;
