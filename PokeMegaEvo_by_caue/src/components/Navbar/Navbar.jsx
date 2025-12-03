import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo Pokémon */}
        <Link to="/" className={styles.brand}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokémon Logo"
            className={styles.logo}
          />
        </Link>

        {/* Navegação */}
        <nav className={styles.nav}>
          <Link 
            to="/" 
            className={location.pathname === "/" ? styles.active : ""}
          >
            PokeHome
          </Link>

          <Link
            to="/pokemons"
            className={location.pathname === "/pokemons" ? styles.active : ""}
          >
            PokeBusca
          </Link>

          <Link
            to="/megainfo"
            className={location.pathname === "/megainfo" ? styles.active : ""}
          >
            Mega Evoluções
          </Link>

          <Link
            to="/sobre"
            className={location.pathname === "/sobre" ? styles.active : ""}
          >
            Sobre o Projeto
          </Link>
        </nav>
      </div>
    </header>
  );
}
