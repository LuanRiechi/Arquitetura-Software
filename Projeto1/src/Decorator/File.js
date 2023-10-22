import fs from 'node:fs';

export default class File {
  constructor (filepath) {
    this.filepath = filepath;
  }

  read () {
    this.cities_json = fs.readFileSync(this.filepath);
    return this.cities_json
  }
}





