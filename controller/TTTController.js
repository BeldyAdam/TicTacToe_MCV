import TTTModel from "../modell/TTTModel.js";
import Palya from "../view/Palya.js";

/* new Palya(0); */
/* const LISTA = [" "," "," "," "," "," "," "," "," ",]; */

export default class TTTController {
    constructor(){
        this.jatekTER = $(".jatekter");
        this.tttModel = new TTTModel();
        new Palya(this.jatekTER, this.tttModel.getList());
        this.#esemenykezelo();
    }

    #esemenykezelo(){
        $(window).on("kattintas", (event)=>{
            this.tttModel.lepteto(event.detail);
            new Palya(this.jatekTER, this.tttModel.getList());
        });
    }
}

