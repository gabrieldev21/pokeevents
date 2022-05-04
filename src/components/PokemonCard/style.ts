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
    top: -1.7rem;
    width: 3.6rem;
    height: 3.6rem;
  }
`;

export const PokeName = styled.div`
  margin: 0.8rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 800;
`;

export const PokeNumber = styled.div`
  margin-top: 0.6rem;
  font-size: 0.85rem;
  color: #a8a8b3;
  font-weight: bold;
`;

export const PokeInfo = styled.div`
  margin-top: 1rem;

  .type {
    padding: 0.4rem;
    margin: 4px;
    border-radius: 0.4rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
    color: #29292e;
  }

  .fire {
    background-color: #fddfdf;
  }

  .grass {
    background-color: #defde0;
  }

  .electric {
    background-color: #fcf7de;
  }

  .water {
    background-color: #def3fd;
  }

  .rock {
    background-color: #d5d5d4;
  }

  .fairy {
    background-color: #fceaff;
  }

  .poison {
    background-color: #98d7a5;
  }

  .bug {
    background-color: #f8d5a3;
  }

  .dragon {
    background-color: #97b3e6;
  }

  .psychic {
    background-color: #eaeda1;
  }

  .flying {
    background-color: #d5d5d4;
  }

  .fighting {
    background-color: #e6e0d4;
  }

  .ice {
    background-color: #97b3e6;
  }

  .normal {
    background-color: #f5f5f5;
  }
`;
