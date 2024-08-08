import { createMachine, assign } from 'xstate';
import { ContextType, EventsType, playEventSchema } from '../types/machine';
import { winningCombinations } from '../data/machineData';

const context: ContextType = {
  board: Array(9).fill(null),
  moves: 0,
  player: 'x',
  winner: undefined,
};

export const ticTacToeMachine = createMachine(
  {
    initial: 'playing',
    types: {} as {
      context: typeof context;
      events: EventsType;
    },
    context,
    states: {
      playing: {
        always: [
          { target: 'gameOver.winner', guard: 'checkWin' },
          { target: 'gameOver.draw', guard: 'checkDraw' },
        ],
        on: {
          PLAY: [
            {
              target: 'playing',
              guard: 'isValidMove',
              actions: 'updateBoard',
            },
          ],
          RESET: {
            target: 'playing',
            actions: 'resetGame',
          },
        },
      },
      gameOver: {
        initial: 'winner',
        states: {
          winner: {
            tags: 'winner',
            entry: 'setWinner',
          },
          draw: {
            tags: 'draw',
          },
        },
        on: {
          RESET: {
            target: 'playing',
            actions: 'resetGame',
          },
        },
      },
    },
  },
  {
    actions: {
      updateBoard: assign({
        board: ({ context, event }) => {
          const validatedPlayEvent = playEventSchema.parse(event);

          const updatedBoard = [...context.board];
          updatedBoard[validatedPlayEvent.value] = context.player;
          return updatedBoard;
        },
        moves: ({ context }) => context.moves + 1,
        player: ({ context }) => (context.player === 'x' ? 'o' : 'x'),
      }),
      resetGame: assign(() => context),
      setWinner: assign({
        winner: ({ context }) => (context.player === 'x' ? 'o' : 'x'),
      }),
    },
    guards: {
      checkWin: ({ context }) => {
        const { board } = context;

        for (const combination of winningCombinations) {
          const xWon = combination.every((index) => {
            return board[index] === 'x';
          });

          if (xWon) {
            return true;
          }

          const oWon = combination.every((index) => {
            return board[index] === 'o';
          });

          if (oWon) {
            return true;
          }
        }

        return false;
      },
      checkDraw: ({ context }) => {
        return context.moves === 9;
      },
      isValidMove: ({ context, event }) => {
        const validatedPlayEvent = playEventSchema.safeParse(event);

        if (!validatedPlayEvent.success) {
          return false;
        }

        return context.board[validatedPlayEvent.data.value] === null;
      },
    },
  }
);
