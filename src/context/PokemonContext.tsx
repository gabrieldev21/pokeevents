import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Pokemon } from "../components/types";
import { api } from "../service/api";

interface PokemonProviderProps {
  children: ReactNode;
}

interface IPokemonContext {
  pokemons: Pokemon[];
  searchPokemon: string;
  setSearchPokemon: (search: string) => void;
}

const defaultValue = {
  pokemons: [],
  searchPokemon: "",
  setSearchPokemon: () => {},
};

const PokemonContext = createContext<IPokemonContext>(defaultValue);

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [next, setNext] = useState("pokemon?limit=20");
  const [searchPokemon, setSearchPokemon] = useState("");

  const list = useMemo(
    () =>
      pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
      ),
    [pokemons, searchPokemon]
  );

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
      setPokemons(pokemons.concat(pokemonsPromise));
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

  return (
    <PokemonContext.Provider
      value={{ pokemons: list, searchPokemon, setSearchPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemons() {
  return useContext(PokemonContext);
}
