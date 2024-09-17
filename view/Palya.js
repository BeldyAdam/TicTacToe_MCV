import Mezo from "./Mezo.js";

export default class Palya {
    #lista = [];
    #szuloElem;

    constructor(szuloElem, lista){
        /* this.#lepesszam = lepesszam; */
        this.#lista = lista;
        this.#szuloElem = szuloElem;
        this.#szuloElem.empty();
        this.kiir();
    }

    kiir() {
        /* this.#szuloElem.append(this.palyaOsszeallit(9)) */
        this.#lista.forEach((elem, index) => {
            new Mezo(elem, index, this.#szuloElem);
        })
    }

/*     palyaOsszeallit(szam){
        let szoveg = "";
        for (let index = 0; index < szam; index++) {
            szoveg += `<div class="box" id="box${index}"></div>`
        }
        return szoveg;
    } */
}
