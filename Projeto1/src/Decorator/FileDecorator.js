import File from './File.js';

export default class FileDecorator extends File {
  constructor (filePath) {
    super(filePath);
  }

  ConvertFile () {
    throw new Error('Should implement ConverFile method...');;
  }
}





