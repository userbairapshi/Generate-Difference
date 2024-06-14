import _ from 'lodash';

const stylish = (value, depth) => {
  if (!_.isObject(value)) {
    return String(value);
  }

  const indentSize = 4;
  const currentIndent = ' '.repeat(depth * indentSize);
  const bracketIndent = ' '.repeat((depth - 1) * indentSize);
  const lines = Object.entries(value).map(([key, val]) => {
    const formattedValue = _.isObject(val) ? stylish(val, depth + 1) : String(val);
    return `${currentIndent}${key}: ${formattedValue}`;
  });

  return ['{', ...lines, `${bracketIndent}}`].join('\n');
};

export { stylish };