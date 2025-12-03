import React from "react";
import { megaPokemons } from "../../data/megaPokemons.js";
import PokemonCard from "../../components/PokemonCard/PokemonCard.jsx";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <img 
  src="https://www.kittl.com/_next/image?url=https%3A%2F%2Fcache.kittl.com%2Fpr%3Asharp%2Frs%3Afit%3A3000%3A2000%3A0%2Fplain%2Fapi%2Fusers%2Fcmipk5z575iyy0i6ggb1zeq20%2Fuploads%2Fcmipk6afd62h10i6la4u4gpdb.png&w=3840&q=75"
  alt="Pokemon Mega Evolution"
  className={styles.logo}
/>
        <p className={styles.subtitle}>
          Explore algumas das formas mais poderosas e icônicas do mundo Pokémon.
          Clique em uma carta para ver detalhes da mega evolução.
        </p>
      </section>

      <section className={styles.grid}>
        {megaPokemons.map((mega) => (
          <PokemonCard key={mega.id} mega={mega} />
        ))}
      </section>
    </>
  );
}