import PokedexImg from "../../assets/images/pokedex.png"

import Input from "../Input";
import Select from "../Select";

import { Container, Wrapper } from "./style"; 

export default function Header() {
  
  return (
    <Container>
      <img src={PokedexImg} alt="poke logo" />
      <Wrapper>
        <Input />
        <Select />
      </Wrapper>
    </Container>
  )
}
