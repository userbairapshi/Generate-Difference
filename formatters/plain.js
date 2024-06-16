const formatValue = (value) => {
  if (value === null) {
    return 'null';
  }
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (diff) => {
  const iter = (currentValue, ancestry) => {
    const lines = [];
    for (let i = 0; i < currentValue.length; i += 1) {
      const node = currentValue[i];
      const { key, type, value, newValue } = node;
      const property = [...ancestry, key].join('.');

      if (type === 'deleted' && i + 1 < currentValue.length && currentValue[i + 1].key === key && currentValue[i + 1].type === 'added') {
        lines.push(`Property '${property}' was updated. From ${formatValue(value)} to ${formatValue(currentValue[i + 1].value)}`);
      } else if (type === 'added' && i > 0 && currentValue[i - 1].key === key && currentValue[i - 1].type === 'deleted') {
      } else {
        switch (type) {
          case 'added':
            lines.push(`Property '${property}' was added with value: ${formatValue(value)}`);
            break;
          case 'deleted':
            lines.push(`Property '${property}' was removed`);
            break;
          case 'nested':
            lines.push(...iter(node.children, [...ancestry, key]));
            break;
        }
      }
    }
    return lines;
  };

  return iter(diff, []).join('\n');
};


export { plain };

