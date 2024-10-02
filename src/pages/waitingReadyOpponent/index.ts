import { state } from "../../state";

export async function waitingReadyOpponent(params) {
  const div = document.createElement("div");
  div.setAttribute("class", "container");

  const style = document.createElement("style");
  style.setAttribute("class", "style");
  style.innerHTML = `
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .main-title {
      padding-left: 40px;
      color: #000;
    }
    .main-title {
      font-family: 'sunset-club';
      font-size: 2.5rem;
      animation: flicker 8s infinite alternate;
    }
  `;

  const gameState = await state.getState();

  const nameOpponent = gameState.nameOpponent || "oponente";

  div.innerHTML = `
    <h2 class="main-title">Esperando a que </h2>
    <h1 class="main-title">${nameOpponent}</h1>
    <h2 class="main-title">presione Play!</h2>
  `;

  await state.checkIfBothAreReady();

  return div;
}
