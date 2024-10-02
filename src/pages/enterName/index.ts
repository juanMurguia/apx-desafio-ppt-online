import { state } from "../../state"

export function enterName(params: any){
    const div = document.createElement("div")
    div.className = "enterName-page container"
    div.innerHTML = `
        <div class="init-page__title">
            <h1>Piedra Papel o Tijeras</h1>
        </div>

        <form action="#" method="POST" class="form">
        <label for="nombre">Tu nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
        <button type="submit" class="init-page__button">Empezar</button>
    </form>

        <div class="init-page__hands">
            <hands-el></hands-el>
        </div>
    `

    const input = div.querySelector("input")
    const form = div.querySelector(".form")

    form?.addEventListener('submit',(e) => {
        e.preventDefault();
        const inputElement = input as HTMLInputElement;
        const nombre = inputElement.value;

        state.setPlayer(nombre)
        state.signIn((err)=>{
            if(err) console.error('hubo error en el sign in')

        state.askNewRoom(()=>{
            state.accessToRoom(() => {
                const cs = state.getState();
                const roomId = cs.roomId;
                console.log(cs)
                params.goTo(`/waitingOpponent/${roomId}`)
            })
        } );   
        })

    });




    return div
}