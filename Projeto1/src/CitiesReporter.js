
export default class CitiesReporter {
  constructor ({ formaterStrategy, fileName }) {
    this._formaterStrategy = formaterStrategy;
    this.fileName = fileName;
  }


  Execute () {
    return this._formaterStrategy.output(this.fileName);
  }

}





