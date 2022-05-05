import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  min-width: 150px;
  height: 4rem;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 1.2rem;
  margin: 16px;
  padding: 0 16px;
 
  img {
    max-width: 1.6rem;
    max-height: 1.65rem;
    opacity: 0.3;
    margin-right: 0.4rem;
  }
`;


export const SelectType = styled.select`
  color: ${({ theme }) => theme.colors.darkgray};
  width: 100%;
  border: none;
  outline: none;

  option {
    text-transform: capitalize;
  }
`;
