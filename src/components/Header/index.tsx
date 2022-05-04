import PokedexImg from "../../assets/images/pokedex.png"

import Input from "../Input";
import Select from "../Select";

import { Container } from "./style"; 

export default function Header() {
  
  return (
    <Container>
      <img src={PokedexImg} alt="poke logo" />
      <Input />
      <Select />
    </Container>
  )
}
