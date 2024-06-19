const formatValue = (value) => {
  if (value === null) {
    return 'null';
  }
  if (typeof value === 'object' && !Array.isArray(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (diff) => {
  const iter = (currentValue, ancestry) => {
    const newCurrentValue = currentValue.flatMap((node, index, array) => {
      const {
        key, type, value, oldValue, newValue, children,
      } = node;
      const property = [...ancestry, key].join('.');

      const isUpdated = (type === 'deleted' && index + 1 < array.length && array[index + 1].key === key && array[index + 1].type === 'added');
      const isRedundantAdd = (type === 'added' && index > 0 && array[index - 1].key === key && array[index - 1].type === 'deleted');

      if (isUpdated) {
        return `Property '${property}' was updated. From ${formatValue(value)} to ${formatValue(array[index + 1].value)}`;
      }

      if (isRedundantAdd) {
        return [];
      }

      switch (type) {
        case 'added':
          return `Property '${property}' was added with value: ${formatValue(value)}`;
        case 'deleted':
          return `Property '${property}' was removed`;
        case 'nested':
          return iter(children, [...ancestry, key]);
        case 'changed':
          return `Property '${property}' was changed from ${formatValue(oldValue)} to ${formatValue(newValue)}`;
        default:
          return [];
      }
    });
    return newCurrentValue;
  };

  return iter(diff, []).join('\n');
};

export default plain;
