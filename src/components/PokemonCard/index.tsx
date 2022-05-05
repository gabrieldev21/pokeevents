import { useState } from "react";

import PokemonTypes from "../PokemonTypes";
import PokemonModal from "../PokeModal";

import { Pokemon } from "../types";
import * as S from "./style";

export default function PokemonCard(props: Pokemon) {
  const [isPokemonModalOpen, setIsPokemonModalOpen] = useState(false);

  const { id, name, sprites, types } = props;

  return (
    <>
      <S.Card onClick={() => setIsPokemonModalOpen(true)}>
        <img src={sprites.other.dream_world.front_default} alt={name} />

        <S.PokeInfo>
          <S.PokeNumber>Nº {id}</S.PokeNumber>
          <S.PokeName>{name}</S.PokeName>
          <PokemonTypes types={types} />
        </S.PokeInfo>
      </S.Card>
      { isPokemonModalOpen && <PokemonModal
        handleClose={() => setIsPokemonModalOpen(false)}
        pokemon={props}
      /> }
    </>
  );
}
