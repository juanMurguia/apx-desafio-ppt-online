import { goTo } from "../../router";
import { state } from "../../state";

export function initInstructionsPage(containerEl: Element) {
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
      color: #5A5A5A;
      padding-left: 10px;
      font-size: 2.1rem;
      text-align: center;
  }
  

  .bttn{
    background: transparent;
    border: 1px solid black;
  }
    `;

  div.innerHTML = `
    <h1 class="main-title">
      Presioná jugar y elegí <br> \n <br>
      PIEDRA, <br> \n <br>
      PAPEL o <br> \n <br>
      TIJERA <br> \n <br>
      antes de que pasen los 3 segundos.
    </h1>
    <button class="bttn">
      <custom-button class="instructions"></custom-button>
    </button>
    `;

  containerEl.appendChild(div);
  const bttn = document.querySelector(".bttn");

  bttn?.addEventListener("click", async () => {
    await state.setPlayerReadyStatus(true);
    goTo("/wfro");
  });
  containerEl.appendChild(style);
}
