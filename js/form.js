class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
        this.playButton = createButton("Jogar");
        this.titleImg = createImg("./assets/TITULO.png", "game title");
        this.greeting = createElement("h2");
    }
}