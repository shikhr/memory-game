import React from 'react';

const card = ({ card, onClick, bg }) => {
  return (
    <div
      className={
        card.clear ? `card-box card-box-clear bg${bg}` : `card-box bg${bg}`
      }
      id={card.id}
      onClick={onClick.bind(null, card)}
    >
      <div
        className={
          card.hidden ? 'card-content card-content-hidden' : 'card-content'
        }
      >
        <img src={`card_imgs/${card.url}`} alt="" />
      </div>
    </div>
  );
};

export default card;
