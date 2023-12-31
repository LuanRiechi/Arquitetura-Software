import sys from 'node:sys';

import CitiesReporter from './src/CitiesReporter.js';
import JSONFile from './src/Decorator/JSONFile.js';
import CSVFile from './src/Decorator/CSVFile.js';
import XMLFile from './src/Decorator/XMLFile.js';
import HTMLFile from './src/Decorator/HTMLFile.js';
import YAMLFile from './src/Decorator/YAMLFile.js';
import Output from './src/Command/Output.js';
import OutputFormater from './src/Command/OutputFormater.js';

const [cmd, script, param0, param1] = process.argv;


const output = new Output();
const outputFormater = new OutputFormater({
  Output: output,
  Formater: param1
});

if (param0) {
  if (param0 == 'json') {
    // Carregar arquivo no formato Json
    const filepath = './data/cidades-2.json';
    const jsonFile = new JSONFile(filepath);
    const fileTratado = jsonFile.convertFile();
      let reporter = new CitiesReporter({
        OutputFormater: outputFormater,
        fileName: fileTratado
      }),
        print = reporter.Execute();
      console.log(print);

  }else if (param0 == 'csv') {
    //Carrega arquivo no formato CSV
    const filepath ='./data/cidades.csv';
    const csvFile = new CSVFile(filepath);
    csvFile.convertFile((data) => {
      if (data) {// 'data' é a lista de objetos representando o conteúdo do arquivo CSV
        let reporter = new CitiesReporter({
          OutputFormater: outputFormater,
          fileName: data
        }),
        print = reporter.Execute();
        console.log(print);
      } else {
        console.error('Não foi possível ler ou analisar o arquivo CSV.');
      }
    });

  }else if(param0 == 'xml'){
    //Carregar arquivo no formato XML
    const filepath ='./data/cidades.xml';
    const xmlFile = new XMLFile(filepath);
    xmlFile.convertFile((data) => {
      if (data) {
        let reporter = new CitiesReporter({
          OutputFormater: outputFormater,
          fileName: data
        }),
        print = reporter.Execute();
        console.log(print);
      } else {
        console.error('Não foi possível ler ou analisar o arquivo XML.');
      }
    });
  }else if(param0 == 'html'){
    //Carregar arquivo no formato HTML
    const filepath ='./data/cidades.html';
    const htmlFile = new HTMLFile(filepath);
    htmlFile.convertFile((data) => {
      if (data) {
        let reporter = new CitiesReporter({
          OutputFormater: outputFormater,
          fileName: data
        }),
        print = reporter.Execute();
        console.log(print);
      } else {
        console.error('Não foi possível ler ou analisar o arquivo HTML.');
      }
    });
  }else if (param0 == 'yaml'){
    //Carregar arquivo no formato YAML
    const filepath = './data/cidades.yaml';
    const yamlFile = new YAMLFile(filepath);
    yamlFile.convertFile((data) => {
      if (data) {
        let reporter = new CitiesReporter({
          OutputFormater: outputFormater,
          fileName: data
        }),
        print = reporter.Execute();
        console.log(print);
      } else {
        console.error('Não foi possível ler ou analisar o arquivo YAML.');
      }
    });
  }else{
    console.log("Tipo de entrada não permitida")
  }

}else {
  console.log("Informe o tipo do arquivo de entrada")
}








