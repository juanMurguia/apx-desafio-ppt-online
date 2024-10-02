import { rtdb } from "../server/db";
import { getDatabase, ref, onValue, update } from "firebase/database";
const API_BASE_URL = "http://localhost:3000";
type Jugada = "piedra" | "papel" | "tijeras";

type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};

const state = {
  data: {
    name: "",
    nameOpponent: "",
    userId: "",
    rtdbData: {},
    roomId: "",
    rtdbRoomId: "",
    online: false,
    ready: false,
    owner: true,
    gameReady: false,
    playersReady: false,
    currentGame: {
      computerPlay: "",
      myPlay: "",
      resultado: "",
    },
    history: [
      {
        myPoints: 0,
        computerPoints: 0,
      },
    ],
  },
  listenRoom(roomId) {
    const cs = this.getState();
    const chatroomsRef = ref(rtdb, "/rooms/" + cs.rtdbRoomId);

    onValue(chatroomsRef, (snapshot) => {
      const messagesFromServer = snapshot.val();
      console.log(messagesFromServer);
    });
  },
  listeners: [],
  init() {
    const lastStateVersion = localStorage.getItem("state");
  },
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback();
    }
    localStorage.setItem("state", JSON.stringify(newState));
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  setMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
  },
  setPlayer(name: string) {
    const cs = this.getState();
    cs.name = name;
    this.setState(cs);
  },

  signIn(callback) {
    const cs = this.getState();
    if (cs.name) {
      return fetch(API_BASE_URL + "/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre: cs.name }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          if (data.id) {
            cs.userId = data.id;
            this.setState(cs);
            callback();
          } else {
            throw new Error("No se recibió el ID del usuario.");
          }
        })
        .catch((error) => {
          console.error("Error en signIn:", error);
        });
    } else {
      console.log("Error: no hay nombre");
    }
  },
  askNewRoom(callback) {
    const cs = this.getState();
    if (cs.userId) {
      return fetch(API_BASE_URL + "/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cs),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          cs.roomId = data.id;
          cs.rtdbRoomId = data.rtdbRoomId || data.id;
          this.setState(cs);
          callback();
        })
        .catch((error) => {
          console.error("Error en askNewRoom:", error);
        });
    } else {
      console.error("Error: no hay usuario aún");
    }
  },
  accessToRoom(callback?) {
    const cs = this.getState();
    const roomId = cs.roomId;
    fetch(API_BASE_URL + "/rooms/" + roomId + "?userId=" + cs.userId)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        cs.rtdbRoomId = data.rtdbRoomId;
        this.setState(cs);
        if (callback) {
          callback();
        }
      });
  },
  async getExistingRoomId(roomId: string, cb) {
    const cs = this.getState();
    cs.roomId = roomId;

    try {
      const response = await fetch(`${API_BASE_URL}/room/${roomId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cs }),
      });

      if (!response.ok) {
        throw new Error(
          `Error al obtener el rtdbRoomId: ${response.statusText}`
        );
      }

      const data = await response.json();
      const privateId = data.privateId;
      if (!privateId) {
        throw new Error("No se recibió un privateId válido");
      }

      cs.rtdbRoomId = privateId;
      await this.setState(cs);
      cb();
    } catch (error) {
      console.error("Error al obtener el rtdbRoomId:", error.message);
    }
  },

  async joinRoom(roomId: string, onJoinSuccess: () => void) {
    const cs = this.getState();

    // Se asegura de que cuando te unes a una sala, no eres el owner
    const gameState = {
      ...cs,
      roomId,
      owner: false, // Se establece como false para indicar que es un invitado
    };

    try {
      const response = await fetch(`${API_BASE_URL}/room/${roomId}/join`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gameState }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Unido a la sala exitosamente:", data);

        if (onJoinSuccess) {
          onJoinSuccess();
        }

        // Verificar si el oponente está presente
        await this.checkForOpponent();
      }
    } catch (error) {
      console.error("Error al unirse a la sala:", error);
    }
  },

  async checkForOpponent(onPlayersReady) {
    const gameState = this.getState();
    const roomRef = ref(rtdb, `rooms/${gameState.rtdbRoomId}`);

    onValue(roomRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const { owner, guest } = data;

        // Si ambos jugadores están en la sala
        if (owner && guest) {
          // Asignar nombres en función de si el usuario actual es el owner o el guest
          if (gameState.userId === owner.userId) {
            // El usuario actual es el dueño, por lo tanto el oponente es el invitado
            gameState.name = owner.name;
            gameState.nameOpponent = guest.name;
          } else if (gameState.userId === guest.userId) {
            // El usuario actual es el invitado, por lo tanto el oponente es el dueño
            gameState.name = guest.name;
            gameState.nameOpponent = owner.name;
          }

          console.log(
            "Jugador actual:",
            gameState.name,
            "Oponente:",
            gameState.nameOpponent
          );
          gameState.playersReady = true;

          // Actualiza el estado con los nuevos nombres asignados
          this.setState(gameState);

          if (gameState.playersReady && onPlayersReady) {
            onPlayersReady();
          }
        }
      }
    });
  },

  async setGameReadyStatus(online: boolean, cb: () => void) {
    let data = await this.getState();

    if (online === true) {
      data.gameReady = online;
      this.setState(data);
      if (location.pathname === "/waitingOpponent") {
        cb();
      }
    }
  },
  async checkIfBothAreReady() {
    const gameState = await this.getState();
    const roomRef = ref(rtdb, `rooms/${gameState.rtdbRoomId}`);

    onValue(roomRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Datos recibidos de Firebase:", data);

      if (!data || !data.owner || !data.guest) {
        // Si faltan datos, salimos
        return;
      }

      // Verificamos si ambos están listos
      if (data.owner.ready && data.guest.ready) {
        // Cambia la ruta a la página de juego
        location.pathname = "/juego"; // Aquí haces la redirección

        // Puedes llamar a tu función de inicio de juego aquí si es necesario
        this.startGame(); // Asegúrate de tener una función startGame() adecuada
      } else if (data.owner.ready && !data.guest.ready) {
        this.waitingForOpponent(data.guest.name, false);
      } else if (!data.owner.ready && data.guest.ready) {
        this.waitingForOpponent(data.owner.name, false);
      }
    });
  },
  async setPlayerReadyStatus(status: boolean) {
    const cs = await this.getState();

    // Actualiza el estado local
    cs.ready = status;

    // Configura los nombres de acuerdo a quién está listo
    const updatedState = {
      ...cs,
      nameOpponent: cs.owner ? cs.nameOpponent : cs.name, // Actualiza el oponente dependiendo del dueño
    };

    try {
      const response = await fetch(`${API_BASE_URL}/room/${cs.roomId}/play`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gameState: updatedState,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Estado de juego actualizado correctamente:", result);
        await this.checkIfBothAreReady(); // Verifica si ambos están listos
      } else {
        console.error("Error al actualizar el estado de juego:", result);
      }
    } catch (error) {
      console.error(
        "Error en la petición para actualizar estado de juego:",
        error
      );
    }
  },
  async waitingForOpponent(name: string, bothReady: boolean) {
    let gameState = await this.getState();

    if (bothReady) {
      gameState.playersReady = bothReady;
      await this.setState(gameState);
      if (location.pathname === "/waitingReadyOpponent") {
        location.pathname = "/juego";
      }
    } else {
      // Asignar `nameOpponent` en función de si el jugador es el dueño o el invitado
      if (gameState.owner) {
        gameState.nameOpponent = name; // Si el jugador actual es el owner, `nameOpponent` es el invitado
      } else {
        gameState.nameOpponent = name; // Si el jugador actual es el guest, `nameOpponent` es el dueño
      }
      await this.setState(gameState);
    }
  },

  computerPlay() {
    const currentState = this.getState();
    const posibilidades: Jugada[] = ["papel", "piedra", "tijeras"];
    const jugadaAleatoria: Jugada =
      posibilidades[Math.floor(Math.random() * posibilidades.length)];

    currentState.currentGame.computerPlay = jugadaAleatoria;

    return jugadaAleatoria;
  },
  pushToHistory(play: Game) {
    const currentState = this.getState();
    currentState.history.push(play);
  },
  getHistory() {
    const currentState = this.getState();

    const history = localStorage.getItem("history");
    if (history) {
      const parsedHistory = JSON.parse(history);
      state.data.history = parsedHistory;
    }
    return currentState.history;
  },
  whoWins(myPlay: Jugada, computerPlay: Jugada) {
    const currentState = this.getState();
    let ganador = "";

    if (myPlay == "tijeras" && computerPlay == "papel") {
      ganador = "ganaste";
    } else if (myPlay == "papel" && computerPlay == "piedra") {
      ganador = "ganaste";
    } else if (myPlay == "piedra" && computerPlay == "tijeras") {
      ganador = "ganaste";
    } else if (myPlay == computerPlay) {
      ganador = "empate";
    } else {
      ganador = "perdiste";
    }

    currentState.currentGame.resultado = ganador;
    return ganador;
  },
  countPoints(resultado) {
    const currentState = this.getState();
    const history = this.getHistory();

    if (resultado == "ganaste") {
      history[currentState.history.length - 1].myPoints++;
    } else if (resultado == "perdiste") {
      history[currentState.history.length - 1].computerPoints++;
    }

    localStorage.setItem("history", JSON.stringify(currentState.history));
    return currentState.history;
  },
  restartGame() {
    const currentState = this.getState();
    const history = this.getHistory();
    history[currentState.history.length - 1].myPoints = 0;
    history[currentState.history.length - 1].computerPoints = 0;

    localStorage.setItem("history", JSON.stringify(currentState.history));
  },
};
export { state };
