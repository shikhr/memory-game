import React from 'react';

const Restart = ({ restartGame }) => {
  return (
    <div className="restart">
      <h4>YOU WIN!</h4>
      <button onClick={restartGame}>RESTART</button>
    </div>
  );
};

export default Restart;
