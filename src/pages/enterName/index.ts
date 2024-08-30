import {initRouter} from "../../router"

export function enterName(params){
    const div = document.createElement("div")
    div.className = "enterName-page"
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
        console.log("Nombre ingresado:", nombre); 

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre })  // Enviar el nombre como un objeto JSON
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Aquí puedes manejar lo que pasa después de enviar los datos correctamente, como redirigir al usuario
            //params.goTo("/");  // Navegar a la ruta indicada después del éxito
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });




    return div
}