import fs from 'node:fs';

export default class CitiesReporter {
  constructor ({ formaterStrategy, fileName }) {
    this._formaterStrategy = formaterStrategy;
    this.fileName = fileName;
  }

  // _read (filename) {
  //   this._cities_json = fs.readFileSync(filename);
  // }

  // _parseJSON () {
  //   this._cities = JSON.parse(this._cities_json);
  // }

  Execute () {
    // this._read(filename);
    // this._parseJSON();
    return this._formaterStrategy.output(this.fileName);
  }

}





