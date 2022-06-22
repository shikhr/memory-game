import React from 'react';
import useGame from '../hooks/use-game';
import Gameplay from './Gameplay';
import Restart from './Restart';

const Game = () => {
  const { gameState, data, cardBackground, clickCardHandler, restart } =
    useGame();
  if (gameState === 1)
    return (
      <Gameplay
        data={data}
        cardBackground={cardBackground}
        onClickCard={clickCardHandler}
      />
    );

  if (gameState === 2) return <Restart restartGame={restart} />;
};

export default Game;
