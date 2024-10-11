import { goTo } from "../../router";
import { state } from "../../state";

export function initJoinGamePage(containerEl: Element) {
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

    font-size: 4rem;

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
  .input, .name-input{
    text-align: center;
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 40px;
    width: 311px;
    height: 87px;
    background: gray;
    color: #5A5A5A;
    animation: flicker 8s infinite alternate;
    border: 0.2rem solid #fff;
    border-radius: 2rem;
  }
`;

  div.innerHTML = `
    <h1 class="main-title">Piedra ,<br> Papel o <br> Tijera</h1>
    <form class="form" for="formulario">
      <input type="text" class="input" id="formulario" placeholder="ingresa tu nombre">
      <input type="number" class="name-input" id="formulario" placeholder="room id">
      <button class="bttn">
      <custom-button class="join-game"></custom-button>
      </button>
    </form>
  `;

  containerEl.appendChild(div);
  const form = document.querySelector("form");

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name: HTMLInputElement = document.querySelector(".input");
    const roomId: HTMLInputElement = document.querySelector(".name-input");

    if (name.value == "") {
      return window.alert("Please enter your name");
    }
    if (roomId.value == "") {
      return window.alert("Please enter the room ID");
    }

    form.removeChild(document.querySelector(".bttn"));
    containerEl.appendChild(document.createElement("custom-button"));

    state.setName(name.value.toString());
    await state.signIn();
    await state.getExistingRoomId(roomId.value.toString());
    await state.joinRoom();

    containerEl.querySelector("custom-button").remove();
    goTo("/instructions");
  });
  containerEl.appendChild(style);
}
