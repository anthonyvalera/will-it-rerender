import React, {useMemo, useState} from 'react';
import './App.css';

import Tests from "./tests";
import { LoggerProvider } from './utils/log';

const testNames = Object.keys(Tests);

function App() {
  const [currentTest, setCurrentTest] = useState("Simple");
  const Active = useMemo(() => Tests[currentTest], [currentTest])

  return (
    <div className="content">
      <nav className="navigation">
        <ul>
          {testNames.map((name, idx) => <li key={name} className={`nav-item${name === currentTest ? " active" : ""}`} onClick={() => setCurrentTest(name)}>{name}</li>)}
        </ul>
      </nav>
      <LoggerProvider key={currentTest}>
        <div className="active-test">
          <h1>{currentTest}</h1>
          <Active />
        </div>
      </LoggerProvider>
    </div>
  );
}

export default App;
 