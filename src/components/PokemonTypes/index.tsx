import { IPokemonTypes } from './types'
import * as S from "./style"

export default function PokemonTypes({ types }: IPokemonTypes) {
  
  return (
    <S.ContainerType>
     {types.map((type) => (
      <small key={type} className={`${type} type`}>
         {type}
       </small>
    ))}
    </S.ContainerType>
  )
}
