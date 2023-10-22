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
        }
    }
}