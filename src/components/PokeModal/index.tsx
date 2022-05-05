import PokemonTypes from "../PokemonTypes";
import Portal from "../Portal";

import { Pokemon } from "../types";
import * as S from "./style";

interface PokemonModalProps {
  isOpen?: boolean;
  handleClose: () => void;
  pokemon: Pokemon;
}

export default function PokemonModal({
  isOpen,
  handleClose,
  pokemon,
}: PokemonModalProps) {
  if (!isOpen) {
    return null;
  }

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
            <PokemonTypes pokemon={pokemon} />
            <span>POKÉDEX ENTRY</span>  
            <S.PokerModalAttributes>{pokemon.types}</S.PokerModalAttributes>
          </S.PokerDescription>

      </S.PokePaper>
    </Portal>
  );
}
