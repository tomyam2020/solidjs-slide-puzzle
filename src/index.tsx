import { render } from 'solid-js/web';
import SlidePuzzle from './SlidePuzzle';
import './index.css';

const root = document.getElementById('root');

const App = () => {
  return (
    <div class='m-6'>
      <SlidePuzzle />
    </div>
  );
};

render(() => <App />, root!);
