import styled from 'styled-components';

export const TileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10vmin;
  background: white;
  border: solid 1px gray;
  cursor: pointer;
  &:hover {
    background-color: aliceblue;
  }
  &:before {
    content: attr(data-player);
  }
`;
