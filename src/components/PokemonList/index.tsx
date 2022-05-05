import PokemonCard from "../PokemonCard";
import { usePokemons } from "../../context/PokemonContext";

import * as S from "./style";

export default function PokemonList() {
  const { pokemons } = usePokemons();

    return (
    <>
      <S.PokemonList>
        {pokemons.map((pokemon) => (
          <PokemonCard 
            key={pokemon.id}
            {...pokemon}
          />
        ))}
      </S.PokemonList>
      <div id="ward">loading...</div>
    </> 
  );
}
