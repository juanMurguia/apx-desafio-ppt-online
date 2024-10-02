import { initJuego } from "./pages/juego";
import { initInstructions } from "./pages/instructions";
import { initInicio } from "./pages/inicio/index";
import { initGanaste } from "./pages/resultado/ganaste";
import { initPerdiste } from "./pages/resultado/perdiste";
import { initPelea } from "./pages/pelea";
import { enterName } from "./pages/enterName";
import { enterRoom } from "./pages/enterRoom";
import { waitingOpponent } from "./pages/waitingOpponent";
import { waitingReadyOpponent } from "./pages/waitingReadyOpponent";
interface RouteComponentParams {
  goTo: (path: string) => void;
  roomId?: string;
}

const BASE_PATH = "/apx-desafio-ppt-nivel-2/";

export function initRouter(container: HTMLElement) {
  function goTo(path: string) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  const routes = [
    {
      path: /\/juego/,
      component: ({ goTo }: RouteComponentParams) => initJuego({ goTo }),
    },
    {
      path: /\/instructions/,
      component: ({ goTo }: RouteComponentParams) => initInstructions({ goTo }),
    },
    {
      path: /\/inicio/,
      component: ({ goTo }: RouteComponentParams) => initInicio({ goTo }),
    },
    {
      path: /\/newGame/,
      component: ({ goTo }: RouteComponentParams) => enterName({ goTo }),
    },
    {
      path: /\/resultadoGanaste/,
      component: ({ goTo }: RouteComponentParams) => initGanaste({ goTo }),
    },
    {
      path: /\/resultadoPerdiste/,
      component: ({ goTo }: RouteComponentParams) => initPerdiste({ goTo }),
    },
    {
      path: /\/pelea/,
      component: ({ goTo }: RouteComponentParams) => initPelea({ goTo }),
    },
    {
      path: /\/enterRoom/,
      component: ({ goTo }: RouteComponentParams) => enterRoom({ goTo }),
    },
    {
      path: /\/waitingReadyOpponent/,
      component: ({ goTo }: RouteComponentParams) =>
        waitingReadyOpponent({ goTo }), // Se utiliza un handler en vez de async
    },
    {
      path: /^\/waitingOpponent\/([a-zA-Z0-9_-]+)$/,
      component: ({ goTo, roomId }: RouteComponentParams) =>
        waitingOpponent({ goTo, roomId }), // Pasa roomId como parámetro al componente
    },
  ];

  async function handleRoute(route: string) {
    let normalizedRoute = route;

    if (!normalizedRoute || normalizedRoute === "/") {
      normalizedRoute = "/inicio";
    }
    const matchedRoute = routes.find((r) => r.path.test(normalizedRoute));

    if (matchedRoute) {
      try {
        const roomIdMatch = normalizedRoute.match(
          /^\/waitingOpponent\/([a-zA-Z0-9_-]+)$/
        );
        const roomId = roomIdMatch ? roomIdMatch[1] : undefined;

        const routeComponentParams = roomId ? { goTo, roomId } : { goTo };

        const el = await matchedRoute.component(routeComponentParams);

        if (container.firstChild) {
          container.firstChild.remove();
        }
        if (el instanceof Node) {
          container.appendChild(el);
        } else {
          console.error("El componente retornado no es un nodo del DOM.");
        }
      } catch (error) {
        console.error("Error al manejar la ruta:", error);
      }
    } else {
      console.error("Ruta no encontrada:", normalizedRoute);
    }
  }

  handleRoute(location.pathname);

  window.addEventListener("popstate", () => {
    handleRoute(location.pathname);
  });
}
