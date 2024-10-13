import { goTo } from "../../router";
import { state } from "../../state";

export function initNewGamePage(containerEl: Element) {
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
    color: #5A5A5A;
    font-size: 3.2rem;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bttn {
    background: gray;
    border: 1px solid #5A5A5A;
  }
  .input {
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
    <h1 class="main-title">Piedra, Papel o Tijera</h1>
    <form class="form" id="game-form">
      <input type="text" class="input" id="name-input" placeholder="ingresa tu nombre">
      <button type="submit" class="bttn">
        <custom-button class="new-game"></custom-button>
      </button>
    </form>
  `;

  containerEl.appendChild(div);
  const form = document.querySelector("#game-form");

  form?.addEventListener("submit", async function action(e) {
    e.preventDefault();
    const nameInput = form.querySelector("#name-input") as HTMLInputElement;

    if (nameInput.value.trim() === "") {
      return window.alert("Please enter your name");
    }

    form?.removeChild(form.querySelector(".bttn"));
    containerEl.appendChild(document.createElement("custom-button"));

    state.setName(nameInput.value.trim());

    try {
      await state.signIn();
      await state.askNewRoom();
      goTo("/waiting-for-opponent");
    } catch (error) {
      console.error("Error signing in:", error);
      return window.alert("Error signing in. Please try again.");
    } finally {
      nameInput.value = ""; // Limpia el input después de que se envíe
      containerEl.querySelector("custom-button").remove();
    }
  });

  containerEl.appendChild(style);
}
