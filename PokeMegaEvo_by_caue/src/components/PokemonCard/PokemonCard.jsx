import React from "react";
import { Link } from "react-router-dom";
import styles from "./PokemonCard.module.css";

export default function PokemonCard({ mega }) {
  return (
    <Link to={`/pokemon/${mega.id}`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={mega.image} alt={mega.name} className={styles.image} />
        </div>
        <h3 className={styles.name}>{mega.name}</h3>
        <p className={styles.type}>{mega.types.join(" • ")}</p>
      </article>
    </Link>
  );
}