import React from 'react';

const card = ({ id, pair, value, url, hidden, clear, clickCard }) => {
  return (
    <div
      className={clear ? 'card card-clear' : 'card'}
      id={id}
      data-pair={pair}
      data-clear={clear}
      onClick={clickCard}
    >
      <div className={hidden ? 'card-content card-hidden' : 'card-content'}>
        <img src={`${url}`} alt="" />
      </div>
    </div>
  );
};

export default card;
