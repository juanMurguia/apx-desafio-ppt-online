import {initRouter} from "../../router"

export function initInicio(params){
    const div = document.createElement("div")
    div.className = "init-page"
    div.innerHTML = `
        <div class="init-page__title">
            <h1>Piedra Papel o Tijeras</h1>
        </div>
        <div class="init-page__button">
            <custom-button class="botonNewGame">Nuevo juego</custom-button>
        </div>
        <div class="init-page__button">
            <custom-button class="botonEnterRoom">Ingresar a una sala</custom-button>
        </div>
        <div class="init-page__hands">
            <hands-el></hands-el>
        </div>
    `
    const buttonNewGame = div.querySelector(".botonNewGame")
    const buttonEnterRoom = div.querySelector(".botonEnterRoom")

    buttonNewGame?.addEventListener("click",()=>{
        params.goTo("/newGame")
    })

    buttonEnterRoom?.addEventListener("click",()=>{
        params.goTo("/instructions")
    })

    return div
}