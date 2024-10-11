import "./components/button/index";
import "./components/hands/index";
import { initRouter } from "./router";
import { state } from "./state";
(function () {
  state.init();
  const style = document.createElement("style");
  document.body.appendChild(style);
  // @ts-ignore
  const imgUrl = require("url:./img/thisone.png");
  style.innerHTML = `
  body{ 
    center fixed;
    background-size: cover;
    position: relative;
  }
  .container{
    margin-top: 30px;
  }
  .go-home-container{
  display:flex;
  justify-content:center;
  align-items:center;
    margin-top: -27px;
    font-size: 25px;
    width: 120px;
    height: 47px;
    padding:16px 32px;
    background: #ededed;
    color: #5A5A5A;
    animation: flick 8s infinite alternate;
    border: 1px solid #5A5A5A;
    border-radius: 2rem;
    position: absolute
}
 
  `;

  initRouter();

  const rootElement = document?.querySelector(".root");

  if (rootElement) {
    rootElement.innerHTML = `
      <button class="go-home-container">Restart</button>
    `;

    const customButton = rootElement.querySelector(".go-home-container");

    if (customButton) {
      customButton.addEventListener("click", () => {
        localStorage.removeItem("localState");
        window.location.reload();
      });
    }
  } else {
    console.error("Elemento con la clase '.root' no encontrado.");
  }
})();
