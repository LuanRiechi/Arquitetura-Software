import FileDecorator from './FileDecorator.js';
import { parse } from 'csv-parse'

export default class CSVFile extends FileDecorator {
  constructor(filePath) {
    super(filePath);
  }

  convertFile(callback) {
    const fileContent = super.read();
    
    if (fileContent) {
      parse(fileContent, {
        columns: true, // Se o arquivo CSV tiver cabeçalhos
        skip_empty_lines: true // Pular linhas em branco
      }, (err, data) => {
        if (err) {
          console.error('Erro ao analisar o arquivo CSV:', err);
          callback(null);
        } else {
          callback(data); // Chama o callback com a lista de objetos
        }
      });
    } else {
      callback(null);
    }
  }
}
