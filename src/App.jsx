import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails";
import SearchResults from "./pages/SearchResult/SearchResults";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" Component={Hero} />
          <Route path="/pokemon/:id" Component={PokemonDetails} />
          <Route path="/pokemon/search/:name" Component={SearchResults} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
