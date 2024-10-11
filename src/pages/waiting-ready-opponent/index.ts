import { goTo } from "../../router";
import { state } from "../../state";
export async function initWFOReadyPage(containerEl: Element) {
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
  }  

  .main-title {

    font-size: 2.5rem;

}
  `;
  const { gameState } = await state.getState();

  div.innerHTML = `
  <h2 class="main-title">Esperando a que </h2>
  <h1 class="main-title">${await gameState.opponentName}</h1>
  <h2 class="main-title">presione <br> Play!...</h2>
  `;
  await state.checkIfBothAreReady();

  containerEl.appendChild(div);
  containerEl.appendChild(style);
}
