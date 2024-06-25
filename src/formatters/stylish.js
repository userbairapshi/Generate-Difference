import _ from 'lodash';

const createIndent = (depth, indentSize) => ' '.repeat(depth * indentSize);

const formatValue = (value, depth, indentSize) => {
  if (_.isPlainObject(value)) {
    const nestedIndent = createIndent(depth + 1, indentSize);
    const bracketIndent = createIndent(depth, indentSize);
    const entries = Object.entries(value)
      .map(([key, val]) => `${nestedIndent}${key}: ${formatValue(val, depth + 1, indentSize)}`);
    return `{\n${entries.join('\n')}\n${bracketIndent}}`;
  }
  return String(value);
};

const stylish = (diff, depth = 1, indentSize = 4) => {
  const lines = diff.flatMap((node) => {
    const {
      key, type, value, oldValue, newValue, children,
    } = node;

    const currentIndent = createIndent(depth, indentSize).slice(2);

    switch (type) {
      case 'added':
        return `${currentIndent}+ ${key}: ${formatValue(value, depth, indentSize)}`;
      case 'deleted':
        return `${currentIndent}- ${key}: ${formatValue(value, depth, indentSize)}`;
      case 'changed':
        return [
          `${currentIndent}- ${key}: ${formatValue(oldValue, depth, indentSize)}`,
          `${currentIndent}+ ${key}: ${formatValue(newValue, depth, indentSize)}`,
        ];
      case 'nested':
        return `${currentIndent}  ${key}: ${stylish(children, depth + 1, indentSize)}`;
      case 'unchanged':
        return `${currentIndent}  ${key}: ${formatValue(value, depth, indentSize)}`;
    }
  });

  const closingBracketIndent = createIndent(depth - 1, indentSize);
  return `{\n${lines.join('\n')}\n${closingBracketIndent}}`;
};

export default stylish;
