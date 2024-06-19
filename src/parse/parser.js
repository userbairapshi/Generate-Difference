import yaml from 'yaml';

const parse = (data) => {
  let result;
  try {
    result = JSON.parse(data);
  } catch (jsonError) {
    try {
      result = yaml.parse(data);
    } catch (yamlError) {
      throw new Error('Data is neither JSON nor YAML format.');
    }
  }
  return result;
};

export default parse;
