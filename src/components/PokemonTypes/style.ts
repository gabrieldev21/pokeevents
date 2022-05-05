import styled from 'styled-components';

export const ContainerType = styled.div`
padding: 0.4rem;
margin: 4px;
border-radius: 0.4rem;
text-transform: uppercase;
font-weight: bold;
color: ${({ theme }) => theme.colors.almostblack};

.type {
  padding: 0.4rem;
  margin: 4px;
  border-radius: 0.4rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.almostblack};
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