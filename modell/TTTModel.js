export default class TTTModel{
    #LISTA = [" "," "," "," "," "," "," "," "," "];
    #lepes;
    #aktElem;
    constructor(){
        this.#lepes = 0;
        this.#setAktElem();
    }

    #setAktElem(){
        if(this.#lepes % 2 === 0){
            this.#aktElem = "X"
        }else{
            this.#aktElem = "O"
        }
    }

/*     getAktElem(){
        return this.#aktElem;
    } */

    lepteto(index){
        this.#LISTA[index] = this.#aktElem;
        this.#lepes++;
        this.#setAktElem();
    }

    getList(){
        return this.#LISTA;
    }
}