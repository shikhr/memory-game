import _ from 'lodash';

const randomCardBg = () => {
  document
    .querySelector(':root')
    .style.setProperty('--bg', `var(--b${_.random(1, 2)})`);
};

export { randomCardBg };
