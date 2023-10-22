import FileDecorator from './FileDecorator.js';

export default class JSONFile extends FileDecorator {
  constructor(filePath) {
    super(filePath);
  }

  convertFile() {
    try {
      this.cities = JSON.parse(super.read());
      return this.cities;
    } catch (error) {
      console.error('Erro ao analisar o arquivo JSON:', error);
      return null; // Trate o erro de acordo com suas necessidades
    }
  }
}
