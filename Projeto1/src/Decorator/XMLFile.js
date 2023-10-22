import FileDecorator from './FileDecorator.js';
import xml2js from 'xml2js';

export default class XMLFile extends FileDecorator {
  constructor(filePath) {
    super(filePath);
  }

  convertFile(callback) {
    const fileContent = super.read();

    if (fileContent) {
      xml2js.parseString(fileContent, (err, result) => {
        if (err) {
          console.error('Erro ao analisar o arquivo XML:', err);
          callback(null);
        } else {
          const cidades = result.cidades.cidade;
          callback(cidades); // Chama o callback com a lista de objetos representando o conteúdo do arquivo XML
        }
      });
    } else {
      callback(null);
    }
  }
}
