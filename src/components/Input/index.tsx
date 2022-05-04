import { useState } from "react";

import SearchIcon from "../../assets/images/search.png"
import * as S from "./style"; 

export default function Input() {
  const [listpokemon, setListPokemon] = useState('')

  return (
      <S.Wrapper>
        <S.Input
          value={listpokemon}
          onChange={(event) => setListPokemon(event.target.value)}
          placeholder="Search your Pokèmon!" />
        <img src={SearchIcon} alt="search button"/>
      </S.Wrapper>
  );
}
