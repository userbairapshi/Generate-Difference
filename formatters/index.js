import stylish from './stylish.js';
import plain from './plain.js';

const chooseFormatter = (formatName) => {
  switch (formatName) {
    case 'plain':
      return plain;
    case 'json':
      return JSON.stringify;
    default:
      return stylish;
  }
};

export default chooseFormatter;
