import PokemonCard from "../PokemonCard";
import * as S from "./style";
import { usePokemons } from "../../context/PokemonContext";

export default function PokemonList() {
  const { pokemons } = usePokemons();

    return (
    <>
      <S.PokemonList>
        {pokemons.map((pokemon) => (
          <PokemonCard 
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            image={pokemon.sprites.other.dream_world.front_default}
          />
        ))}
      </S.PokemonList>
      <div id="ward">loading...</div>
    </> 
  );
}
