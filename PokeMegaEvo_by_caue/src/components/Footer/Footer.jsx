import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>
          <span className={styles.footerStrong}>MegaDex</span> • Catálogo de Mega Evoluções Pokémon
        </p>
        <p>Projeto acadêmico para a disciplina de Desenvolvimento Web.</p>
      </div>
    </footer>
  );
}