import {initJuego} from "./pages/juego"
import {initInstructions} from "./pages/instructions"
import {initInicio} from "./pages/inicio/index"
import {initGanaste} from "./pages/resultado/ganaste"
import {initPerdiste} from "./pages/resultado/perdiste"
import { initPelea } from "./pages/pelea"
import { enterName } from "./pages/enterName"

const BASE_PATH = "/apx-desafio-ppt-nivel-2/"

function isGithubPages(){
    console.log(location.host.includes("github.io"))
    return location.host.includes("github.io")
}

const routes = [
    {
        path: /\/juego/,
        component: initJuego
    },
    {
        path: /\/instructions/,
        component: initInstructions
    },
    {
        path: /\/inicio/,
        component: initInicio
    },
    {
        path: /\/newGame/,
        component: enterName
    },
    {
        path: /\/resultadoGanaste/,
        component: initGanaste
    },
    {
        path: /\/resultadoPerdiste/,
        component: initPerdiste
    },
    {
        path: /\/pelea/,
        component: initPelea
    }
]

export function initRouter(container: any) {

    function goTo(path: string) {
        history.pushState({}, "", path);
        handleRoute(path);
    }

    function handleRoute(route: string) {
        let normalizedRoute = route;

        if (isGithubPages()) {
            normalizedRoute = route.replace(BASE_PATH, "/");
        }

        const matchedRoute = routes.find(r => r.path.test(normalizedRoute));

        if (matchedRoute) {
            const el = matchedRoute.component({ goTo });
            if (container.firstChild) {
                container.firstChild.remove();
            }
            container.appendChild(el);
            console.log(`Navegando a la ruta: ${normalizedRoute}`);
        } else {
            console.error("Ruta no encontrada:", normalizedRoute);
        }

        console.log("El handleRoute recibió una nueva ruta:", route);
    }

    // Redirigir si la URL actual es "/"
    if (location.pathname === "/" || location.pathname === BASE_PATH) {
        goTo("/inicio");  // Redirige a /inicio
    } else {
        handleRoute(location.pathname);  // Maneja la ruta actual
    }

    // Maneja los eventos de popstate (para navegar hacia atrás y hacia adelante)
    window.onpopstate = function () {
        handleRoute(location.pathname);
    };
}
