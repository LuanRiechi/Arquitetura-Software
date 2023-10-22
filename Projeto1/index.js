import sys from 'node:sys';

import FormaterHTML from './src/FormaterHTML.js';
import FormaterTXT from './src/FormaterTXT.js';
import CitiesReporter from './src/CitiesReporter.js';
import JSONFile from './src/Decorator/JSONFile.js';
import CSVFile from './src/Decorator/CSVFile.js';

const [cmd, script, param1] = process.argv;

const formaterStrategies = {
  'html': new FormaterHTML(),
  'txt': new FormaterTXT()
};
//Carregar arquivo no formato Json

// const filepath ='./data/cidades-2.json';
// const jsonFile = new JSONFile(filepath);
// const fileTratado = jsonFile.convertFile();
// let reporter = new CitiesReporter({
//       formaterStrategy: formaterStrategies[param1],
//       fileName: fileTratado
//     }),
//     output = reporter.Execute();
// console.log(output);

//Carrega arquivo no formato CSV

const filepath ='./data/cidades.csv';
const csvFile = new CSVFile(filepath);
csvFile.convertFile((data) => {
  if (data) {// 'data' é a lista de objetos representando o conteúdo do arquivo CSV
    let reporter = new CitiesReporter({
      formaterStrategy: formaterStrategies[param1],
      fileName: data
    }),
     output = reporter.Execute();
    console.log(output);
  } else {
    console.error('Não foi possível ler ou analisar o arquivo CSV.');
  }
});







