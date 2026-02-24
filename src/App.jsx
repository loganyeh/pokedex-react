import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PokemonInfoPage from "./pages/PokemonInfoPage"
import { MyContext } from "./context/MyContext"
import { useState } from "react"
import Favorites from "./pages/FavoritesPage"

function App() {
  const [name, setName] = useState("Vaporeon");
  const [number, setNumber] = useState(134);

  // NEW CONSTANTS
  const [query, setQuery] = useState(1);
  const [queryBool, setQueryBool] = useState(true);
  // create an array for the favorites tab and for the fav pokemon ******

  const [favorites, setFavorites] = useState(["1", "2", "3"]);
  
  return (
    <>
      <MyContext.Provider value={{ query, setQuery, queryBool, setQueryBool, name, setName, number, setNumber, favorites, setFavorites }}>
        <Routes>
          <Route path="/" element={<PokemonInfoPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </MyContext.Provider>
    </>
  )
}

export default App;
