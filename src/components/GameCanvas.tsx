import React from 'react';
import Character from './Character';
import ClothingSelector from './ClothingSelector';

const GameCanvas = () => {
  return (
    <div className="game-canvas">
      <div className="character-area">
        <Character />
      </div>
      <aside className="clothing-options">
        <ClothingSelector />
      </aside>
    </div>
  );
};

export default GameCanvas;