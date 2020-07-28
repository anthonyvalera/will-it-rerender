import React, {createContext, useCallback, useContext, useState} from "react";

export const LoggerContext = createContext(() => null);

export function LoggerProvider({children}) {

  const [logs, setLogs] = useState({})
  
  const log = useCallback(name => {
    setLogs(currentLog => {
      const key = currentLog[name] || 0;
      return { ...currentLog, [name]: key + 1}
    })
  }, [])

  return (
    <LoggerContext.Provider value={log}>
      {children}
      <div className="logs">
        <table>
          <caption>Renders</caption>
          <tbody>
            {Object.entries(logs).map(([name, value]) => (
              <tr key={name + value}>
                <td>{name}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LoggerContext.Provider>
  )
}

export const useLogger = name => {
  const log = useContext(LoggerContext);
  log(name)
}