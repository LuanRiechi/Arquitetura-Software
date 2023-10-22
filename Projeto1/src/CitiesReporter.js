
export default class CitiesReporter {
  constructor ({ OutputFormater, fileName }) {
    this.OutputFormater = OutputFormater;
    this.fileName = fileName;
  }

  Execute () {
    return this.OutputFormater.Execute(this.fileName);
  }

}





