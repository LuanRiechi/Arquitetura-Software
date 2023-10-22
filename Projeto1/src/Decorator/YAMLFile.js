import FileDecorator from './FileDecorator.js';
import yaml from 'js-yaml';

export default class YAMLFile extends FileDecorator {
  constructor(filePath) {
    super(filePath);
  }

  convertFile(callback) {
    const fileContent = super.read();

    if (fileContent) {
      try {
        const yamlData = yaml.load(fileContent);

        if (Array.isArray(yamlData)) {
          const cityNames = yamlData.map((item) => ({
            Nome: item.Nome || item.nome, // Acesse o campo 'Nome' ou 'nome' dependendo do formato YAML
          }));
          callback(cityNames); // Chama o callback com a lista de objetos representando o conteúdo do arquivo YAML
        } else {
          console.error('O arquivo YAML não contém um formato válido para uma lista de cidades.');
          callback(null);
        }
      } catch (error) {
        console.error('Erro ao analisar o arquivo YAML:', error);
        callback(null);
      }
    } else {
      callback(null);
    }
  }
}
