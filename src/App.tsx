import { useMachine } from '@xstate/react';
import { Main, Title } from './App.styles';
import { Board } from './components/Board/Board';
import { Button } from './components/Button/Button';
import { Results } from './components/Results/Results';
import { ticTacToeMachine } from './stateMachines/ticTacToeMachine';

function App() {
  const [state, send] = useMachine(ticTacToeMachine);
  return (
    <Main>
      <Title>Tic-Tac-Toe</Title>
      <Board state={state} send={send} />
      <Results state={state} />
      <Button send={send}>Reset Board</Button>
    </Main>
  );
}

export default App;
