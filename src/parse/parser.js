import yaml from 'yaml';

const parse = (data, type) => {
  switch (type) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return yaml.parse(data);
    default:
      throw new Error('JSON and YAML formats not found');
  }
};

export default parse;
