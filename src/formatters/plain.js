import _ from 'lodash';

const formatValue = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (diff) => {
  const iter = (currentValue, ancestry) => {
    const newCurrentValue = currentValue.flatMap((node) => {
      const {
        key, type, value, oldValue, newValue, children,
      } = node;
      const property = [...ancestry, key].join('.');

      switch (type) {
        case 'added':
          return `Property '${property}' was added with value: ${formatValue(value)}`;
        case 'deleted':
          return `Property '${property}' was removed`;
        case 'changed':
          return `Property '${property}' was changed. From ${formatValue(oldValue)} to ${formatValue(newValue)}`;
        case 'nested':
          return iter(children, [...ancestry, key]);
        default:
          return [];
      }
    });
    return newCurrentValue;
  };

  return iter(diff, []).join('\n');
};

export default plain;
