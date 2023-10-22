import Command from './Command.js';

export default class OutputFormater extends Command {
    constructor({ Output, Formater }) {
        super()
        this.Output = Output;
        this.Formater = Formater;
    }

    Execute(cities){
        if(this.Formater == 'html'){
            return this.Output.outputHTML (cities)
        }else if(this.Formater == 'txt'){
            return this.Output.outputTXT (cities)
        }else if(this.Formater =='json'){
            return this.Output.outputJSON(cities)
        }else if(this.Formater =='csv'){
            return this.Output.outputCSV(cities)
        }else if(this.Formater =='xml'){
            return this.Output.outputXML(cities)
        }else{
            return "Escolha um formato de saida valido"
        }
    }
}