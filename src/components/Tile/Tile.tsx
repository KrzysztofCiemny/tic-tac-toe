import { TileContainer } from './Tile.styles';

type TileProps = {
  index: number;
  onClick: () => void;
  player: 'x' | 'o' | null;
};

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
