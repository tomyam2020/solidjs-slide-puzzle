// src/SlidePuzzle.tsx
import { createSignal } from 'solid-js';
import { For } from 'solid-js';

const SIZE = 4; // 4x4 grid
const INITIAL_TILES = Array.from({ length: SIZE * SIZE }, (_, i) =>
  i === SIZE * SIZE - 1 ? null : i + 1
);

const SlidePuzzle = () => {
  const [tiles, setTiles] = createSignal(INITIAL_TILES);
  const [emptyIndex, setEmptyIndex] = createSignal(INITIAL_TILES.length - 1); // Start with the last tile empty

  const getTilePosition = (index: number) => ({
    row: Math.floor(index / SIZE),
    col: index % SIZE,
  });

  const isAdjacent = (indexA: number, indexB: number) => {
    const posA = getTilePosition(indexA);
    const posB = getTilePosition(indexB);
    return (
      (Math.abs(posA.row - posB.row) === 1 && posA.col === posB.col) ||
      (Math.abs(posA.col - posB.col) === 1 && posA.row === posB.row)
    );
  };

  const moveTile = (index: number) => {
    if (isAdjacent(index, emptyIndex())) {
      const newTiles = [...tiles()];
      [newTiles[index], newTiles[emptyIndex()]] = [
        newTiles[emptyIndex()],
        newTiles[index],
      ];
      setTiles(newTiles);
      setEmptyIndex(index);
    }
  };

  return (
    <div
      style={{
        display: 'grid',
        'grid-template-columns': `repeat(${SIZE}, 100px)`,
        gap: '5px',
      }}
    >
      <For each={tiles()} fallback={<div>Loading...</div>}>
        {(tile, index) => (
          <div
            onClick={() => tile !== null && moveTile(index())}
            style={{
              width: '100px',
              height: '100px',
              display: 'flex',
              'align-items': 'center',
              'justify-content': 'center',
              'background-color': tile === null ? '#ccc' : '#f0a',
              'font-size': '24px',
              cursor: tile === null ? 'default' : 'pointer',
            }}
          >
            {tile}
          </div>
        )}
      </For>
    </div>
  );
};

export default SlidePuzzle;
