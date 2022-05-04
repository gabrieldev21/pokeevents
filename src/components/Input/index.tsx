import SearchIcon from "../../assets/images/search.png"
import { usePokemons } from "../../context/PokemonContext";
import * as S from "./style"; 

export default function Input() {
  const {searchPokemon, setSearchPokemon } = usePokemons();

  console.log(searchPokemon);

  return (
      <S.Wrapper>
        <S.Input
          value={searchPokemon}
          onChange={(event) => setSearchPokemon(event.target.value)}
          placeholder="Search your Pokèmon!" />
        <img src={SearchIcon} alt="search button"/>
        
      </S.Wrapper>
  );
}
