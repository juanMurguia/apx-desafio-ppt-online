import { goTo } from "../../router";
import { state } from "../../state";

export function initNewGamePage(containerEl: Element) {
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

    font-size: 3.2rem;
    ;
}

.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  .bttn{
    background: gray;
    border: 1px solid #5A5A5A;
  }
  .input{
    text-align: center;
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 40px;
    width: 311px;
    height: 87px;
    background: transparent;
    color: gray;
    border: 0.2rem solid #5A5A5A;
    border-radius: 2rem;

  }
  `;

  div.innerHTML = `
    <h1 class="main-title">Piedra ,<br> Papel o <br> Tijera</h1>
    <form class="form" for="formulario">
      <input type="text" class="input" id="formulario" placeholder="ingresa tu nombre">
      <button class="bttn">
      <custom-button class="new-game"></custom-button>
      </button>
    </form>
  `;

  containerEl.appendChild(div);
  const form = document.querySelector("form");

  form.addEventListener("submit", async function action(e) {
    e.preventDefault();
    const data: HTMLInputElement = document.querySelector(".input");

    if (data.value == "") {
      return window.alert("Please enter your name");
    }

    form.removeChild(form.querySelector(".bttn"));
    containerEl.appendChild(document.createElement("custom-button"));

    state.setName(data.value.toString());
    await state.signIn();
    await state.askNewRoom();
    containerEl.querySelector("custom-button").remove();

    goTo("/waiting-for-opponent");
  });
  containerEl.appendChild(style);
}
