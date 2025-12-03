import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Pokemons from "./pages/Pokemons/Pokemons.jsx";
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";
import styles from "./App.module.css";
import MegaInfo from "./pages/MegaInfo/MegaInfo.jsx";

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/megainfo" element={<MegaInfo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}