import { ResultsContainer } from './Results.styles';
import { ResultsProps } from '../../types/componentProps';

export const Results = ({ state }: ResultsProps) => {
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
