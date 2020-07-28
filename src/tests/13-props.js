import React, { memo, useState } from "react";

function ArrowIcon() {
  return <span>&rarr;</span>
}

function GrandChild(props) {
  return <h3>I'm a grandchild!</h3>
}

const MemoChild = memo(function Child({child: Child, icon}) {
  return (
    <>
      <h2>{icon} I am a child component! Will I re-render?</h2>
      <Child />
    </>
  )
})

function Parent() {
  const [increment, setIncrement] = useState(0);

  return (
    <div>
      <h2>Current Increment: {increment}</h2>
      <button onClick={() => setIncrement(current => ++current)}>Increment increment!</button>
      <MemoChild 
        firstName="hello"
        lastName="world"
        styles={{ color: "blue" }}
        items={[0, 1, 2]}
        child={GrandChild}
        icon={<ArrowIcon />}
      />
    </div>
  )
}

export default Parent;
