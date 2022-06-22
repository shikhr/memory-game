import { useState, useEffect } from 'react';

import cardData from '../data';
import _ from 'lodash';

const useGame = () => {
  const [gameState, setGameState] = useState(1);
  const [data, setData] = useState(_.shuffle(cardData));
  const [selectedCard, setSelectedCard] = useState({});
  const [clickedCard, setClickedCard] = useState({});
  const [checking, setChecking] = useState(false);
  const [cardBackground, setCardBackground] = useState(1);

  const clickCardHandler = (thisCard) => {
    if (checking) return;
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

  useEffect(() => {
    setCardBackground(_.random(1, 2));
  }, []);

  const checkCard = () => {
    if (selectedCard.id === clickedCard.id) {
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
    setCardBackground(_.random(1, 2));
  };

  const resetSelection = () => {
    selectedCard.hidden = true;
    clickedCard.hidden = true;
    setSelectedCard({});
    setClickedCard({});
  };

  return {
    gameState,
    data,
    cardBackground,
    clickCardHandler,
    restart,
  };
};

export default useGame;
