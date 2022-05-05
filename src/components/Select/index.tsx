import TypeIcon from "../../assets/images/select.png";

import { usePokemons } from "../../context/PokemonContext";

import * as S from "./style";

export default function Select() {
  const { types, typeSelected, setTypeSelected } = usePokemons();

  return (
    <S.Wrapper>
      <img src={TypeIcon} alt="select button" />
      <S.SelectType value={typeSelected} onChange={event => setTypeSelected(event.target.value)}>
        <option value="">Type</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </S.SelectType>
    </S.Wrapper>
  );
}
