import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PokemonInfoPage from "./pages/PokemonInfoPage"
import { MyContext } from "./context/MyContext"
import { useState } from "react"

function App() {
  const [currentPokemonID, setCurrentPokemonID] = useState(134);
  // set up so that name id numbar sets to current id and then for num line increment the current pokemon id whatever
  // left off here
  const [name, setName] = useState("Vaporeon");
  const [number, setNumber] = useState(134);

  // search Name CONSTs
  const [isName, setIsName] = useState(true);
  
  // search Number CONSTS
  const [isNumber, setIsNumber] = useState(true);

  // ID BAR NUMBEr CONSTS
  const [numBarID, setNumBarID] = useState(134);
  const [isNumBar, setIsNumBar] = useState(134);
  
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
