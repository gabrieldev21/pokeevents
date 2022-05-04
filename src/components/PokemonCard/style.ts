import styled from "styled-components";

export const Card = styled.div`
  height: 9rem;
  width: 10rem;
  background-color: #eee;
  border-radius: 1.5rem;
  box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
  margin: 1.5rem;
  padding: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;

  img {
  position: absolute;
  top: -1.6rem;
  width: 3rem;
  height: 3rem;
  }
`

export const PokeName = styled.div`
  margin: 15px 0 7px;
  letter-spacing: 1px;
`

export const PokeNumber = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 0.8em;
  padding: 5px 10px;
`

export const PokeInfo = styled.div`
  margin-top: 10px;

  .type {
    padding: 0.3rem;
    border-radius: 0.2rem;
    text-transform: uppercase;
    font-size: 0.5rem;
    color: #363f5f;
  }

  .grass {
    background-color: orange;
  }
`
