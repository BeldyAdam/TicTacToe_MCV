export default class Mezo{
    #jel;
    #index;

    constructor(jel, index, szuloElem){
        this.#jel = jel;
        this.#index = index;
        this.szuloElem = szuloElem;
        this.kiir();
        this.gombElem = $(".card:last-child");
        /* this.kattintasEsemeny(); */
        if(this.#jel === " "){
            this.kattintasEsemeny();
        }
    }

    kiir(){
         this.szuloElem.append(`
         <div class="card col-lg-4" id="box">
         <p class="card-text">${this.#jel}</p>
         </div>`)
    };

    kattintasEsemeny(){
        this.gombElem.on("click", () => {
            const event = new CustomEvent("kattintas", { detail: this.#index});
            window.dispatchEvent(event);
            console.log(event);
        });
    }
}