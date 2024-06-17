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
  const iter = (currentValue, ancestry) => currentValue.reduce((acc, node, index, array) => {
    const { key, type, value } = node;
    const property = [...ancestry, key].join('.');

    if (type === 'deleted' && index + 1 < array.length && array[index + 1].key === key && array[index + 1].type === 'added') {
      return acc.concat(`Property '${property}' was updated. From ${formatValue(value)} to ${formatValue(array[index + 1].value)}`);
    }
    if (type === 'added' && index > 0 && array[index - 1].key === key && array[index - 1].type === 'deleted') {
      return acc;
    }
    switch (type) {
      case 'added':
        return acc.concat(`Property '${property}' was added with value: ${formatValue(value)}`);
      case 'deleted':
        return acc.concat(`Property '${property}' was removed`);
      case 'nested':
        return acc.concat(iter(node.children, [...ancestry, key]));
      default:
        return acc;
    }
  }, []);

  return iter(diff, []).join('\n');
};

export default plain;
