import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PokemonInfoPage from "./pages/PokemonInfoPage"
import { MyContext } from "./context/MyContext"
import { useState } from "react"

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(699);

  const [isNumber, setIsNumber] = useState(true);
  
  return (
    <>
      <MyContext.Provider value={{ name, setName, number, setNumber, isNumber, setIsNumber }}>
        <Routes>
          <Route path="/" element={<PokemonInfoPage />} />
        </Routes>
      </MyContext.Provider>
    </>
  )
}

export default App
