import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PokemonInfoPage from "./pages/PokemonInfoPage"
import { MyContext } from "./context/MyContext"
import { useState } from "react"

function App() {
  const [name, setName] = useState("Aurorus");
  const [number, setNumber] = useState(699);

  // search Name CONSTs
  const [isName, setIsName] = useState(true);
  
  // search Number CONSTS
  const [isNumber, setIsNumber] = useState(true);

  // ID BAR NUMBEr CONSTS
  const [numBarID, setNumBarID] = useState(699);
  const [isNumBar, setIsNumBar] = useState();
  
  return (
    <>
      <MyContext.Provider value={{ name, setName, number, setNumber, isNumber, setIsNumber, isName, setIsName, isNumBar, setIsNumBar, numBarID, setNumBarID }}>
        <Routes>
          <Route path="/" element={<PokemonInfoPage />} />
        </Routes>
      </MyContext.Provider>
    </>
  )
}

export default App;
