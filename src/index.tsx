import { render } from 'solid-js/web';
import SlidePuzzle from './SlidePuzzle';

const root = document.getElementById('root');

const App = () => {
  return (
    <div style={{ 'text-align': 'center', margin: '50px' }}>
      <h1>スライドパズル</h1>
      <SlidePuzzle />
    </div>
  );
};

render(() => <App />, root!);
