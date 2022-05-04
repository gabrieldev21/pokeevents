import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 94%;
  height: 4rem;
  background: var(--white);
  border: 1px solid #d3e2e5;
  border-radius: 1.2rem;
  padding: 0 16px;
 
  img {
    max-width: 1.6rem;
    max-height: 1.65rem;
    opacity: 0.3;
    margin-right: 0.2rem;
  }
`;


export const SelectType = styled.select`
  background: var(--white);
  width: 100%;
  border: none;
  color: var(--text-body);
  outline: none;
`;
