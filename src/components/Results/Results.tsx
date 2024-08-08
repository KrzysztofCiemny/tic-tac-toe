import { ResultsContainer } from './Results.styles';

export const Results = ({ state }: any) => {
  return (
    <ResultsContainer>
      Results:
      {state.matches('gameOver') && (
        <span>
          {state.hasTag('winner') && <span> Winner: {state.context.winner}</span>}
          {state.hasTag('draw') && <span> Draw</span>}
        </span>
      )}
    </ResultsContainer>
  );
};
