import sys from 'node:sys';

import FormaterHTML from './src/FormaterHTML.js';
import FormaterTXT from './src/FormaterTXT.js';
import CitiesReporter from './src/CitiesReporter.js';
import File from './src/Decorator/File.js';
import JSONFile from './src/Decorator/JSONFile.js';
import FileDecorator from './src/Decorator/FileDecorator.js';



const [cmd, script, param1] = process.argv,
      filepath = './data/cidades-2.json';

const formaterStrategies = {
  'html': new FormaterHTML(),
  'txt': new FormaterTXT()
};

const jsonFile = new JSONFile(filepath);
const fileTratado = jsonFile.convertFile();

let reporter = new CitiesReporter({
      formaterStrategy: formaterStrategies[param1],
      fileName: fileTratado
    }),
    output = reporter.Execute();

console.log(output);






