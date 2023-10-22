import FileDecorator from './FileDecorator.js';
import cheerio from 'cheerio';

export default class HTMLFile extends FileDecorator {
  constructor(filePath) {
    super(filePath);
  }

  convertFile(callback) {
    const fileContent = super.read();

    if (fileContent) {
      const $ = cheerio.load(fileContent);

      const cityNames = [];
      $('ul li').each((index, element) => {
        const cityName = $(element).text();
        cityNames.push({ Nome: cityName });
      });

      callback(cityNames); // Chama o callback com a lista de objetos representando o conteúdo do arquivo HTML
    } else {
      callback(null);
    }
  }
}
