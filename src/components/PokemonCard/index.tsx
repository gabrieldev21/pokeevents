import * as S from "./style"

interface IPokemonCard {
  id?: number;
  name: string;
  image: string;
  type: string
}

export default function PokemonCard({id, name, image, type} : IPokemonCard) {
  return (
    <S.Card>
      <img src={image} alt={name} />

      <S.PokeInfo>
        <S.PokeNumber>{id}</S.PokeNumber>
        <S.PokeName>{name}</S.PokeName>
        <small className={`${type} type`}>{type}</small>
      </S.PokeInfo>
    </S.Card>
  )
}
