import { StateFrom } from 'xstate';
import { ticTacToeMachine } from '../stateMachines/ticTacToeMachine';

type SendEvent = (event: { type: 'PLAY'; value: number } | { type: 'RESET' }) => void;

type State = StateFrom<typeof ticTacToeMachine>;

export type ButtonProps = {
  children: React.ReactNode;
  send: SendEvent;
};

export type ResultsProps = {
  state: State;
};

export type BoardProps = {
  state: State;
  send: SendEvent;
};

export type TileProps = {
  index: number;
  onClick: () => void;
  player: 'x' | 'o' | null;
};
