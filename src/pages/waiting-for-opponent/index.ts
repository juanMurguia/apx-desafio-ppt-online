import { goTo } from "../../router";
import { state } from "../../state";
export async function initWFOPage(containerEl: Element) {
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
  <h2 class="main-title">Invita a tu oponente con este codigo</h2>
  <h1 class="main-title">${await gameState.publicId}</h1>
  <h2 class="main-title">Good luck, have fun!</h2>
  `;
  await state.checkForOpponent();

  containerEl.appendChild(div);
  containerEl.appendChild(style);

  const contenedor = containerEl.querySelectorAll(".container");
  const estilos = containerEl.querySelectorAll(".style");
  window.addEventListener("load", () => {
    if (contenedor.length > 0) {
      contenedor[0].remove();
      estilos[0].remove();
    }
  });
}
