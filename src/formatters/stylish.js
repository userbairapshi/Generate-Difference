import _ from 'lodash';

const createIndent = (depth, indentSize) => ' '.repeat(depth * indentSize);

const formatValue = (value, depth, indentSize) => {
  if (_.isObject(value) && !Array.isArray(value)) {
    const nestedIndent = createIndent(depth + 1, indentSize);
    const bracketIndent = createIndent(depth, indentSize);
    const entries = Object.entries(value)
      .map(([key, val]) => `${nestedIndent}${key}: ${formatValue(val, depth + 1, indentSize)}`);
    return `{\n${entries.join('\n')}\n${bracketIndent}}`;
  }
  return String(value);
};

const stylish = (diff, depth = 1, indentSize = 4) => {
  const currentIndent = ' '.repeat(depth * indentSize - 2);
  const bracketIndent = createIndent(depth - 1, indentSize);

  const formattedDiff = diff.map((node) => {
    const {
      key, type, value, children,
    } = node;
    const formattedValue = type === 'nested' ? stylish(children, depth + 1, indentSize) : formatValue(value, depth, indentSize);
    switch (type) {
      case 'deleted':
        return `${currentIndent}- ${key}: ${formattedValue}`;
      case 'added':
        return `${currentIndent}+ ${key}: ${formattedValue}`;
      case 'nested':
        return `${currentIndent}  ${key}: ${formattedValue}`;
      case 'unchanged':
        return `${currentIndent}  ${key}: ${formattedValue}`;
      default:
        throw new Error('Unknown node status!');
    }
  });

  return ['{', ...formattedDiff, `${bracketIndent}}`].join('\n');
};

export default stylish;
