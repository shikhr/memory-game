import React from 'react';
import Card from './Card';

const Gameplay = ({ data, cardBackground, onClickCard }) => {
  return (
    <div className="card-container">
      {data.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            bg={cardBackground}
            onClick={onClickCard}
          />
        );
      })}
    </div>
  );
};

export default Gameplay;
