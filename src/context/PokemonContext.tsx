import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { api } from "../service/api";

import { IPokemonApi, Pokemon } from "../components/types";
import { IPokemonContext, PokemonProviderProps } from "./types";


const defaultValue = {
  pokemons: [],
  searchPokemon: "",
  setSearchPokemon: () => {},
  types: [],
  typeSelected: "",
  setTypeSelected: () => {},
};

const PokemonContext = createContext<IPokemonContext>(defaultValue);

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [next, setNext] = useState("pokemon?limit=20");
  const [searchPokemon, setSearchPokemon] = useState("");
  const [types, setTypes] = useState<string[]>([]);
  const [typeSelected, setTypeSelected] = useState("");

  const list = useMemo(
    () =>
      pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
        && (!typeSelected || pokemon.types.includes(typeSelected))
      ),
    [pokemons, searchPokemon, typeSelected]
  );

  const loadTypes = useCallback(async () => {
    const { data } = await api.get("/type");
    setTypes(data.results.map((type: { name: string }) => type.name));
  }, []);

  const loadMorePokemons = useCallback(
    async (url: string) => {
      const { data } = await api.get(url);
      const listRequest = data.results.map(
        async (urlPokemon: { url: string }) => {
          const res = await api.get(urlPokemon.url);
          return res.data;
        }
      );
      const pokemonsPromise = await Promise.all(listRequest);
      const pokemonsResponse: Pokemon[] = pokemonsPromise.map((pokemon: IPokemonApi ) => ({
        ...pokemon,
        types: pokemon.types.flatMap(type => type.type.name)
      }))
      setPokemons(pokemons.concat(pokemonsResponse));
      setNext(data.next);
    },
    [pokemons]
  );

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        loadMorePokemons(next);
      }
    });
    const ward = document.getElementById("ward") as Element;
    intersectionObserver.observe(ward);
    return () => intersectionObserver.disconnect();
  }, [next, loadMorePokemons]);

  useEffect(() => {
    loadTypes();
  }, [loadTypes]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons: list,
        searchPokemon,
        setSearchPokemon,
        types,
        typeSelected,
        setTypeSelected,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemons() {
  return useContext(PokemonContext);
}
