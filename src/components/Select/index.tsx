import TypeIcon from "../../assets/images/select.png"

import * as S from "./style"

export default function Select() {
  return (
    <S.Wrapper>
      <img src={TypeIcon} alt="select button"/>
      <S.SelectType><option value="PokeType">Type</option></S.SelectType>
    </S.Wrapper>
);
}
