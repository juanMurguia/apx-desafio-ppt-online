import { state } from "../../state";

export function enterRoom(params) {
    const div = document.createElement("div");
    div.className = "enterName-page";
    div.innerHTML = `
        <div class="init-page__title">
            <h1>Piedra Papel o Tijeras</h1>
        </div>

        <form action="#" method="POST" class="form">
            <label for="name">Ingresa tu nombre</label>
            <input type="text" id="name" name="name" required>
            <label for="roomId">Ingresa el código de la sala</label>
            <input type="text" id="roomId" name="roomId" required>
            <button type="submit" class="init-page__button">Empezar</button>
        </form>

        <div class="init-page__hands">
            <hands-el></hands-el>
        </div>
    `;
    const form = div.querySelector(".form");

    form?.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputName = (div.querySelector("#name") as HTMLInputElement).value;
        const inputRoomId = (div.querySelector("#roomId") as HTMLInputElement).value;
        const currentState = state.getState();
        currentState.name = inputName;
        currentState.roomId = inputRoomId;
        state.setState(currentState);

        state.signIn((err) => {
            if (err) {
                console.error('Hubo error en el sign in');
                return;
            }

            state.getExistingRoomId(inputRoomId.toString(), () => {
                state.joinRoom(inputRoomId, () => {
                    params.goTo(`/instructions`);
                });
            });
        });
    });

    return div;
}
