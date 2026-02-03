import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PokemonInfoPage from "./pages/PokemonInfoPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PokemonInfoPage />} />
      </Routes>
    </>
  )
}

export default App
