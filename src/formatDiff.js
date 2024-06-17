import _ from 'lodash';

const findDifferences = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();

  return keys.flatMap((key) => {
    if (!_.has(obj2, key)) {
      return { key, type: 'deleted', value: obj1[key] };
    }
    if (!_.has(obj1, key)) {
      return { key, type: 'added', value: obj2[key] };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])
      && !Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) {
      return { key, type: 'nested', children: findDifferences(obj1[key], obj2[key]) };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return [
        { key, type: 'deleted', value: obj1[key] },
        { key, type: 'added', value: obj2[key] },
      ];
    }
    return { key, type: 'unchanged', value: obj1[key] };
  }).filter((diff) => diff.length !== 0 || diff.type !== 'unchanged');
};

export default findDifferences;
