import { Room, Client } from "colyseus";
import { Schema, type, MapSchema } from "@colyseus/schema";
import { IPlayer, IGameState } from "@shared/schema/DominoRoomSchema";
import { getRandomInt } from "@shared/utils";

// Base schema class that implements the shared interface
class Player extends Schema implements IPlayer {
  @type("string") id: string = "";
  @type("number") chips: number = 0;
  @type("boolean") isTurn: boolean = false;
}

// Base schema class that implements the shared interface
class GameState extends Schema implements IGameState {
  @type({ map: Player }) players = new MapSchema<IPlayer>();
  @type("string") currentTurn: string = "";
}

export class DominoRoom extends Room<GameState> {
  maxClients = 6;

  onCreate() {
    this.setState(new GameState()); // Initialize the room state

    this.onMessage("bet", (client: Client, message: { amount: number }) => {
      const player = this.state.players.get(client.sessionId);
      console.log("bet", getRandomInt(1, 100));
      if (player) {
        player.chips -= message.amount;
      }
    });
  }

  onJoin(client: Client) {
    console.log(client.sessionId, "joined! [Domino Room]");
    const player = new Player();
    player.id = client.sessionId;
    player.chips = 1000; // Default chips
    this.state.players.set(client.sessionId, player);
  }

  onLeave(client: Client) {
    console.log(client.sessionId, "left! [Domino Room]");
    this.state.players.delete(client.sessionId);
  }

  onDispose() {
    console.log("room", this.roomId, "disposing... [Domino Room]");
  }
}
