import React, { useMemo, useState } from "react";
import { megaPokemons } from "../../data/megaPokemons";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import styles from "./Pokemons.module.css";

// Cores por tipo
const typeColors = {
  Fogo: "#ee5630ff",
  Água: "#6390F0",
  Planta: "#7AC74C",
  Elétrico: "#f6e904ff",
  Dragão: "#e6ad1fff",
  Sombrio: "#090c65ff",
  Psíquico: "#F95587",
  Fada: "#D685AD",
  Pedra: "#837944ff",
  Terra: "#9c7c2bff",
  Lutador: "#C22E28",
  Inseto: "#A6B91A",
  Aço: "#B7B7CE",
  Gelo: "#96D9D6",
  Voador: "#A98FF3",
  Fantasma: "#2c076fff",
  Normal: "#A8A77A",
  Venenoso: "#A33EA1"
};

// Botão de tipo (card)
function TypeCard({ type, active, onClick }) {
  return (
    <button
      className={`${styles.typeCard} ${active ? styles.activeType : ""}`}
      style={{ background: typeColors[type] }}
      onClick={() => onClick(type)}
    >
      {type}
    </button>
  );
}

export default function Pokemons() {
  const [typeFilter, setTypeFilter] = useState("todos");
  const [search, setSearch] = useState("");

  // Todos os tipos existentes
  const allTypes = useMemo(() => {
    const set = new Set();
    megaPokemons.forEach((p) => p.types.forEach((t) => set.add(t)));
    return ["todos", ...Array.from(set)];
  }, []);

  // Aplicação dos filtros
  const filtered = useMemo(() => {
    return megaPokemons
      .filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((p) => typeFilter === "todos" || p.types.includes(typeFilter));
  }, [search, typeFilter]);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Mega Evoluções</h1>

        {/* Barra de busca */}
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />

        {/* Filtro por tipo */}
        <div className={styles.filterRow}>
          <span>Filtrar por tipo:</span>
          <select
            className={styles.select}
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            {allTypes.map((type) => (
              <option key={type} value={type}>
                {type === "todos" ? "Todos os tipos" : type}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Botões coloridos dos tipos */}
      <div className={styles.typesGrid}>
        {allTypes
          .filter((t) => t !== "todos")
          .map((type) => (
            <TypeCard
              key={type}
              type={type}
              active={typeFilter === type}
              onClick={(clickedType) => {
                if (typeFilter === clickedType) {
                  setTypeFilter("todos"); // desmarca
                } else {
                  setTypeFilter(clickedType); // aplica
                }
              }}
            />
          ))}
      </div>

      {/* Grid de cards */}
      <section className={styles.grid}>
        {filtered.length > 0 ? (
          filtered.map((mega) => (
            <PokemonCard key={mega.id} mega={mega} />
          ))
        ) : (
          <p className={styles.noResults}>Nenhum Pokémon encontrado.</p>
        )}
      </section>
    </>
  );
}
