import { useCallback, useEffect, useState } from "react";
import { api } from "../../service/api";
import PokemonTypes from "../PokemonTypes";
import Portal from "../Portal";

import { Pokemon } from "../types";
import * as S from "./style";

interface PokemonModalProps {
  handleClose: () => void;
  pokemon: Pokemon;
}

export default function PokemonModal({
  handleClose,
  pokemon,
}: PokemonModalProps) {

  const [flavor, setFlavor] = useState(""); 

  const fetchFlavors = useCallback( async () => {
     const { data } = await api.get(pokemon.species.url);
     setFlavor(data.flavor_text_entries[0].flavor_text);
  }, [ pokemon, setFlavor ])

  useEffect(() => {
    fetchFlavors();
  },[ fetchFlavors ])

  return (
    <Portal>
      <S.PokePaper>
        <S.CloseButton onClick={handleClose}>X</S.CloseButton>
          <S.PokerDescription>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
            <S.PokerModalNumber>#{pokemon.id}</S.PokerModalNumber>
            <S.PokerModalName>{pokemon.name}</S.PokerModalName>
            <PokemonTypes types={pokemon.types} />
            <span>POKÉDEX ENTRY</span>  
            <S.PokerModalFlavor>{flavor}</S.PokerModalFlavor>
          </S.PokerDescription>

      </S.PokePaper>
    </Portal>
  );
}
