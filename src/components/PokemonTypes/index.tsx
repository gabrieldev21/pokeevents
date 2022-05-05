import { IPokemonTypes } from './types'
import * as S from "./style"

export default function PokemonTypes({ pokemon }: IPokemonTypes) {
  
  return (
    <S.ContainerType>
     {pokemon.types.map((type) => (
      <small key={type} className={`${type} type`}>
         {type}
       </small>
    ))}
    </S.ContainerType>
  )
}
