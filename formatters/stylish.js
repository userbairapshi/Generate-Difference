import _ from 'lodash';

const formatValue = (value, depth) => {
  if (_.isObject(value) && !Array.isArray(value)) {
    const nestedIndent = ' '.repeat((depth + 1) * 4);
    const bracketIndent = ' '.repeat(depth * 4);
    const entries = Object.entries(value).map(([key, val]) => `${nestedIndent}${key}: ${formatValue(val, depth + 1)}`);
    return `{\n${entries.join('\n')}\n${bracketIndent}}`;
  }
  return _.isString(value) ? `${value}` : String(value);
};

const stylish = (diff, depth = 1) => {
  const indentSize = 4;
  const currentIndent = ' '.repeat(depth * indentSize - 2);
  const bracketIndent = ' '.repeat((depth - 1) * indentSize);

  const formattedDiff = diff.map((node) => {
    const { key, type, value, children } = node;
    const formattedValue = type === 'nested' ? stylish(children, depth + 1) : formatValue(value, depth);

    switch (type) {
      case 'deleted':
        return `${currentIndent}- ${key}: ${formattedValue}`;
      case 'added':
        return `${currentIndent}+ ${key}: ${formattedValue}`;
      case 'nested':
        return `${currentIndent}  ${key}: ${formattedValue}`;
      case 'unchanged':
        return `${currentIndent}  ${key}: ${formattedValue}`;
    }
  });

  return ['{', ...formattedDiff, `${bracketIndent}}`].join('\n');
};

export { stylish };