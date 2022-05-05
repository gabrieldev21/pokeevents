import PokemonCard from "../PokemonCard";
import { usePokemons } from "../../context/PokemonContext";

import * as S from "./style";

export default function PokemonList() {
  const { pokemons, hasMore } = usePokemons();

  return (
      <S.PokemonList>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
        {hasMore && <p id="ward">LOADING...</p>}
      </S.PokemonList>
  );
}
