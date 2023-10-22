import fs from 'node:fs';

export default class File {
  constructor(filepath) {
    this.filepath = filepath;
  }

  read() {
    try {
      const fileContent = fs.readFileSync(this.filepath, 'utf8');
      return fileContent;
    } catch (error) {
      console.error('Erro ao ler o arquivo:', error);
      return null;
    }
  }
}
