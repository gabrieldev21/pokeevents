import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 250px;
  flex: 8;
  height: 4rem;
  background: ${({ theme }) => theme.colors.white};
  border: 0.5px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 1.2rem;
  padding: 0 16px;
  margin: 16px;
 
  img {
    max-width: 1.7rem;
    max-height: 1.7rem;
    opacity: 0.8;
  }
`;


export const Input = styled.input`
  width: 100%;
  border: none;
  color: ${({ theme }) => theme.colors.almostblack};
  outline: none;
  margin-left: 1.2rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors.darkgray};
  }
`;
