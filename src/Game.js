import React, { useEffect, useState } from 'react';
import cardData from './data';
import Card from './components/Card.js';
import _ from 'lodash';

const Game = () => {
  const [gameState, setGameState] = useState(1);
  const [data, setData] = useState(_.shuffle(cardData));
  const [selectedCard, setSelectedCard] = useState({});
  const [clickedCard, setClickedCard] = useState({});
  const [checking, setChecking] = useState(false);

  const clickCard = (e) => {
    if (checking) return;
    const clicked = e.target.closest('.card');
    if (!clicked) return;
    const clickedId = +clicked.id;

    const thisCard = data.find((card) => card.id === clickedId);
    if (thisCard.clear) return;

    thisCard.hidden = false;
    setClickedCard(thisCard);
  };

  useEffect(() => {
    if (_.isEmpty(clickedCard)) return;
    if (_.isEmpty(selectedCard)) {
      setSelectedCard(clickedCard);
    } else {
      checkCard();
    }
  }, [clickedCard]);

  const checkCard = () => {
    console.log(clickedCard, selectedCard);
    if (selectedCard.id === clickedCard.id) {
      console.log('samee');
      resetSelection();
    } else {
      setChecking(true);
      setTimeout(() => {
        matchCards();
        resetSelection();
        setChecking(false);
      }, 800);
    }
  };
  const matchCards = () => {
    if (clickedCard.pair === selectedCard.pair) {
      removePair();
      checkForWin();
    }
  };
  const removePair = () => {
    selectedCard.clear = true;
    clickedCard.clear = true;
  };

  const resetSelection = () => {
    selectedCard.hidden = true;
    clickedCard.hidden = true;
    setSelectedCard({});
    setClickedCard({});
  };
  const checkForWin = () => {
    if (data.some((card) => card.clear === false)) return;
    setGameState(2);
  };
  const restart = () => {
    setGameState(1);
    const data1 = data.map((card) => {
      return { ...card, clear: false, hidden: true };
    });
    setData(_.shuffle(data1));
  };
  if (gameState === 1)
    return (
      <div className="card-container">
        {data.map((card) => {
          return <Card key={card.id} {...card} clickCard={clickCard} />;
        })}
      </div>
    );
  if (gameState === 2)
    return (
      <div className="restart">
        <h4>YOU WIN!</h4>
        <button onClick={restart}>RESTART</button>
      </div>
    );
};

export default Game;
