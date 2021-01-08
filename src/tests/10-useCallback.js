import React, { memo, useCallback, useState } from "react";

const ChildMemo = memo(function Child({ updateIncrement }) {
  return (
    <>
      <button onClick={updateIncrement}>Increment increment!</button>
      <h2>I am a child component that will update my parent's state! Will I re-render?</h2>
    </>
  )
});

function Parent() {
  const [increment, setIncrement] = useState(0);

  const updateIncrement = useCallback(() => {
    setIncrement(i => ++i)
  }, [setIncrement]);

  return (
    <div>
      <h2>Current Increment: {increment}</h2>
      <ChildMemo updateIncrement={updateIncrement} />
    </div>
  )
}

export default Parent;
