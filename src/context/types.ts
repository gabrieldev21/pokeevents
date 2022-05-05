import { ReactNode } from "react";

import { Pokemon } from "../components/types";

export interface PokemonProviderProps {
  children: ReactNode;
}

export interface IPokemonContext {
  pokemons: Pokemon[];
  searchPokemon: string;
  setSearchPokemon: (search: string) => void;
  types: string[];
  typeSelected: string;
  hasMore: boolean;
  setTypeSelected: (type: string) => void;
}
