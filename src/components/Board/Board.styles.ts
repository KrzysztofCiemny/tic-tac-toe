import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: grid;
  height: 50vmin;
  width: 50vmin;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0.25rem;
  grid-row-gap: 0.25rem;
`;
