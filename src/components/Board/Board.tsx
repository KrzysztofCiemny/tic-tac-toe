import { boardFields } from '../../data/boardData';
import { BoardContainer } from './Board.styles';
import { Tile } from '../Tile/Tile';

export const Board = () => {
  return (
    <BoardContainer>
      {boardFields.map((index) => {
        return <Tile key={index} />;
      })}
    </BoardContainer>
  );
};
