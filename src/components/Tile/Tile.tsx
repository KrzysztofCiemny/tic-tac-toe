import { TileContainer } from './Tile.styles';
import { TileProps } from '../../types/componentProps';

export const Tile = ({ index, onClick, player }: TileProps) => {
  return (
    <TileContainer
      className="tile"
      key={index}
      onClick={onClick}
      data-player={player}
    ></TileContainer>
  );
};
