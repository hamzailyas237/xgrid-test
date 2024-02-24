import { useState } from "react"
import "./App.css"
import UsersTable from "./components/usersTable/UsersTable"

function App() {
  const [theme, setTheme] = useState(false)
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
      }}
    >
      <label className="switch">
        <input type="checkbox" onChange={(e) => setTheme(e.target.checked)} />
        <span className="slider round"></span>
      </label>
      <UsersTable />
    </div>
  )
}

export default App
