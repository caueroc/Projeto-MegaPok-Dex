import React from "react";
import styles from "./MegaInfo.module.css";

export default function MegaInfo() {
  return (
    <section className={styles.wrapper}>
      <h1>Sobre as Mega Evoluções</h1>

      <p>
        As Mega Evoluções são transformações especiais introduzidas na geração VI
        dos jogos Pokémon. Elas permitem que certos Pokémon alcancem um estágio
        temporário de poder muito maior durante as batalhas.
      </p>

      <h2>Como funcionam</h2>
      <p>
        Para mega evoluir, o Pokémon precisa segurar sua Mega Stone específica,
        enquanto o treinador possui uma Key Stone. Durante a batalha, quando o
        vínculo entre treinador e Pokémon é forte o suficiente, a Mega Evolução
        pode ser ativada.
      </p>

      <h2>Efeitos na batalha</h2>
      <ul>
        <li>Atributos são aumentados significativamente</li>
        <li>Alguns Pokémon mudam de tipo ao mega evoluir</li>
        <li>Algumas habilidades também mudam</li>
        <li>A transformação dura apenas até o fim da batalha</li>
      </ul>

      <h2>Curiosidades</h2>
      <ul>
        <li>Nem todos os Pokémon possuem formas Mega</li>
        <li>Rayquaza é o único que mega evolui sem Mega Stone</li>
        <li>As Mega Evoluções não existem nos jogos mais recentes</li>
      </ul>

      <h2>Por que foram criadas?</h2>
      <p>
        A ideia das Mega Evoluções surgiu para oferecer novas estratégias e
        renovar batalhas competitivas, permitindo que Pokémon antigos ganhassem
        destaque novamente através de formas mais poderosas e visualmente
        impressionantes.
      </p>

      <h2>Importância no projeto</h2>
      <p>
        Este catálogo utiliza apenas Pokémon que possuem formas Mega. Aqui você
        pode ver suas informações, tipos, estatísticas e curiosidades sobre cada
        transformação.
      </p>
    </section>
  );
}
