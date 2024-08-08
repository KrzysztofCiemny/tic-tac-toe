import { boardFields } from '../../data/boardData';
import { BoardContainer } from './Board.styles';
import { Tile } from '../Tile/Tile';
import { BoardProps } from '../../types/componentProps';

export const Board = ({ state, send }: BoardProps) => {
  return (
    <BoardContainer>
      {boardFields.map((index) => {
        return (
          <Tile
            index={index}
            onClick={() => send({ type: 'PLAY', value: index })}
            key={index}
            player={state.context.board[index]}
          />
        );
      })}
    </BoardContainer>
  );
};
