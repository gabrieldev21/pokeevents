import styled from 'styled-components';

export const PokePaper = styled.div`
  border: none;
  height: 100vh;
  width: 100vw;
  max-width: 26rem;
  max-height: 32rem;
  border-radius: 10px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CloseButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 1rem;  
  right: 1.6rem;  
  outline: inherit;
  font-weight: bold;
  font-size: 1.4rem;
`

export const PokerDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  img {
    margin-top: 1.8rem;
    width: 10rem;
    height: 10rem;
  }

  span {
    font-weight: bold;
    margin: 1rem;
    color: ${({ theme }) => theme.colors.almostblack}
  }
`

export const PokerModalNumber = styled.div`
  margin-top: 1rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.gray};
`

export const PokerModalName = styled.h1`
  color: ${({ theme }) => theme.colors.almostblack};
  text-transform: capitalize;
`

export const PokerModalFlavor = styled.div`
  text-align: center;
  font-size: 1.2rem;
`