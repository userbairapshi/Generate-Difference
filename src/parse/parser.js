import yaml from 'yaml';

const parse = (data) => {
  try {
    return JSON.parse(data);
  } catch (jsonError) {
    try {
      return yaml.parse(data);
    } catch (yamlError) {
      throw new Error('Data is neither JSON nor YAML format.');
    }
  }
};

export default parse;
