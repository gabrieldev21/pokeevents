import * as S from "./style"

interface IPokemonCard {
  id?: number;
  name: string;
  image: string;
  types: string[]
}

export default function PokemonCard({id, name, image, types} : IPokemonCard) {
  return (
    <S.Card>
      <img src={image} alt={name} />

      <S.PokeInfo>
        <S.PokeNumber>Nº {id}</S.PokeNumber>
        <S.PokeName>{name}</S.PokeName>
        {types.map((type) => 
          <small key={type} className={`${type} type`}>{type}</small>
        )}
      </S.PokeInfo>
    </S.Card>
  )
}
