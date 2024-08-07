import { Main, Title } from './App.styles';
import { Board } from './components/Board/Board';
import { Button } from './components/Button/Button';
import { Results } from './components/Results/Results';

function App() {
  return (
    <Main>
      <Title>Tic-Tac-Toe</Title>
      <Board />
      <Results />
      <Button>Reset Board</Button>
    </Main>
  );
}

export default App;
