/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useState } from "react";

import PokemonCard from "../PokemonCard";
import { api } from "../../service/api";
import { Pokemon } from "../types/index"
import * as S from "./style";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [next, setNext] = useState('pokemon?limit=20')

  const loadMorePokemons = useCallback(async (url: string) => {
    const { data } = await api.get(url)
    const listRequest = data.results.map(async (urlPokemon: { url: string }) => {
      const res = await api.get(urlPokemon.url);
      return res.data;
    })
    const pokemonsPromise = await Promise.all(listRequest)
    setPokemons(pokemons.concat(pokemonsPromise))
    setNext(data.next)
  }, [pokemons])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        loadMorePokemons(next)
      }
    })
    const ward = document.getElementById('ward') as Element
    intersectionObserver.observe(ward)
    return () => intersectionObserver.disconnect()
  }, [next, loadMorePokemons]);

    return (
    <>
      <S.PokemonList>
        {pokemons.map((pokemon) => (
          <PokemonCard 
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            image={pokemon.sprites.other.dream_world.front_default}
          />
        ))}
      </S.PokemonList>
      <div id="ward">loading...</div>
    </> 
  );
}
