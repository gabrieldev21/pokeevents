import styled from "styled-components";

export const Card = styled.div`
  height: 9rem;
  width: 10rem;
  background-color: ${({ theme }) => theme.colors.graytheme};
  cursor: pointer;
  border: hidden;
  border-radius: 1.5rem;
  box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
  margin: 1.2rem;
  padding: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;

  img {
    position: absolute;
    top: -1.7rem;
    width: 3.6rem;
    height: 3.6rem;
  }
`;

export const PokeName = styled.div`
  margin: 0.6rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 800;
`;

export const PokeNumber = styled.div`
  margin-top: 0.6rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.darkgray};
  font-weight: bold;
`;

export const PokeInfo = styled.div`
  margin: 1rem;
`;
