import React from "react";
import { Link, useParams } from "react-router-dom";
import { megaPokemons } from "../../data/megaPokemons.js";
import styles from "./PokemonDetails.module.css";

export default function PokemonDetails() {
  const { id } = useParams();
  const mega = megaPokemons.find((m) => m.id === id);

  if (!mega) {
    return (
      <div>
        <p>Não encontramos essa mega evolução.</p>
        <Link to="/pokemons" className={styles.backLink}>
          Voltar para a lista
        </Link>
      </div>
    );
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.imageBox}>
        <img src={mega.image} alt={mega.name} className={styles.image} />
      </div>
      <div>
        <h1 className={styles.title}>{mega.name}</h1>
        <p className={styles.types}>{mega.types.join(" • ")}</p>
        <p className={styles.description}>{mega.description}</p>

        <Link to="/pokemons" className={styles.backLink}>
          ← Voltar para Mega Evoluções
        </Link>
      </div>
    </section>
  );
}
