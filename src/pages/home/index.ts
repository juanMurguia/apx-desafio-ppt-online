import { goTo } from "../../router";
export function initHomePage(containerEl: Element) {
  const div = document.createElement("div");
  div.setAttribute("class", "container");
  const style = document.createElement("style");
  style.setAttribute("class", "style");
  style.innerHTML = `
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-title {
    padding-left: 40px;
    color: #5A5A5A;
    text-align: center;
  }  

  .main-title {

    font-size: 4rem;

}
  .v2{
    font-size: 2rem;
    margin: 0px;
  }

  `;

  div.innerHTML = `
  <h1 class="main-title">¡Piedra, Papel o Tijera! 
   </h1>
  `;

  containerEl.appendChild(div);
  const newGameBttn = document.createElement("custom-button");
  newGameBttn.setAttribute("class", "new-game-home");
  const joinGameBttn = document.createElement("custom-button");
  joinGameBttn.setAttribute("class", "join-game");

  div.appendChild(newGameBttn);
  div.appendChild(joinGameBttn);

  newGameBttn.addEventListener("click", () => {
    goTo("/new-game");
  });
  joinGameBttn.addEventListener("click", () => {
    goTo("/join-game");
  });
  containerEl.appendChild(style);
}
