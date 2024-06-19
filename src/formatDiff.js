import _ from 'lodash';

const findDifferences = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = _.orderBy(keys);

  return sortedKeys.flatMap((key) => {
    if (!_.has(obj2, key)) {
      return { key, type: 'deleted', value: obj1[key] };
    }
    if (!_.has(obj1, key)) {
      return { key, type: 'added', value: obj2[key] };
    }
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return { key, type: 'nested', children: findDifferences(obj1[key], obj2[key]) };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return [
        { key, type: 'deleted', value: obj1[key] },
        { key, type: 'added', value: obj2[key] },
      ];
    }
    return { key, type: 'unchanged', value: obj1[key] };
  });
};

export default findDifferences;
