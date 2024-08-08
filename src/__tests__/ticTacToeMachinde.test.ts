import { createActor } from 'xstate';
import { ticTacToeMachine } from '../stateMachines/ticTacToeMachine';

describe('ticTacToeMachine', () => {
  it('initial state is "playing"', () => {
    const actor = createActor(ticTacToeMachine).start();
    expect(actor.getSnapshot().value).toBe('playing');
  });

  it('transitions to { gameOver: winner } when a player wins', () => {
    const actor = createActor(ticTacToeMachine).start();

    // Simulate a winning condition for 'x'
    actor.send({ type: 'PLAY', value: 0 });
    actor.send({ type: 'PLAY', value: 3 });
    actor.send({ type: 'PLAY', value: 1 });
    actor.send({ type: 'PLAY', value: 4 });
    actor.send({ type: 'PLAY', value: 2 });

    expect(actor.getSnapshot().value).toEqual({ gameOver: 'winner' });
  });

  it('transitions to { gameOver: draw } when the board is full and there is no winner', () => {
    const actor = createActor(ticTacToeMachine).start();

    // Simulate a draw condition
    actor.send({ type: 'PLAY', value: 0 }); // x
    actor.send({ type: 'PLAY', value: 1 }); // o
    actor.send({ type: 'PLAY', value: 2 }); // x
    actor.send({ type: 'PLAY', value: 4 }); // o
    actor.send({ type: 'PLAY', value: 3 }); // x
    actor.send({ type: 'PLAY', value: 5 }); // o
    actor.send({ type: 'PLAY', value: 7 }); // x
    actor.send({ type: 'PLAY', value: 6 }); // o
    actor.send({ type: 'PLAY', value: 8 }); // x

    expect(actor.getSnapshot().value).toEqual({ gameOver: 'draw' });
  });

  it('resets to initial state when RESET is sent', () => {
    const actor = createActor(ticTacToeMachine).start();

    // Simulate a winning condition and then reset
    actor.send({ type: 'PLAY', value: 0 });
    actor.send({ type: 'PLAY', value: 3 });
    actor.send({ type: 'PLAY', value: 1 });
    actor.send({ type: 'PLAY', value: 4 });
    actor.send({ type: 'PLAY', value: 2 });
    actor.send({ type: 'RESET' });

    expect(actor.getSnapshot().value).toBe('playing');
    expect(actor.getSnapshot().context).toEqual({
      board: Array(9).fill(null),
      moves: 0,
      player: 'x',
      winner: undefined,
    });
  });
});
