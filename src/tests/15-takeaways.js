import React from "react";


function Parent() {
  return (
    <div>
      <h2>Rendering is cheap, Reconcillation is costly</h2>
      <ul>
        <li>Memoize when applicable</li>
        <li>Extract static props</li>
        <li>Flatten Props</li>
        <li>Use the React DevTools Profiler</li>
      </ul>
    </div>
  )
}

export default Parent;
