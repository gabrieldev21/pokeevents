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
  margin: 0.6rem 0;
 
  img {
    max-width: 1.7rem;
    max-height: 1.7rem;
    opacity: 0.8;
  }
`;


export const Input = styled.input`
  background: var(--white);
  width: 100%;
  border: none;
  color: var(--text-title);
  outline: none;
`;
