import { state } from "../../state";
export async function waitingOpponent({ goTo, roomId }) {
  const div = document.createElement("div");
  div.setAttribute("class", "container");

  const cs = state.getState();
  console.log("Estado actual en waitingOpponent:", cs); 

  if (!cs.rtdbRoomId) {
      console.error("rtdbRoomId no está definido en el estado. Verifica si el estado se ha actualizado correctamente.");
      div.innerHTML = `
          <h2 class="error">Error: no se ha encontrado la sala en la base de datos.</h2>
      `;
      return div;
  }

  div.innerHTML = `
      <h2 class="main-title">Invita a tu oponente con este código</h2>
      <h1 class="main-title">${roomId}</h1>
      <h2 class="main-title">Esperando al oponente...</h2>
  `;


  await state.checkForOpponent(() => {
    goTo("/instructions");
  });

  return div;
}