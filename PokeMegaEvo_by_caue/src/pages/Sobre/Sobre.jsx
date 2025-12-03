import React from "react";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Sobre o projeto</h1>
      <p className={styles.text}>
        Este sistema foi desenvolvido como trabalho prático da disciplina de
        Desenvolvimento Web. O objetivo é praticar a criação de uma SPA com
        React, utilizando rotas, componentes reutilizáveis e CSS Modules.
      </p>
      <p className={styles.text}>
        O tema escolhido foi um pequeno catálogo de Mega Evoluções Pokémon. A
        ideia é listar algumas formas especiais, permitir filtro por tipo e exibir
        uma página de detalhes para cada uma delas.
      </p>
      <p className={styles.text}>Tecnologias e conceitos utilizados:</p>
      <ul className={styles.list}>
        <li>React com componentes funcionais e hooks</li>
        <li>React Router para navegação entre páginas</li>
        <li>Propriedades (props) para reaproveitamento de componentes</li>
        <li>CSS Modules para estilização isolada</li>
        <li>Layout responsivo para diferentes tamanhos de tela</li>
      </ul>
    </section>
  );
}