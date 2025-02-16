import { Room, Client } from "colyseus";
import { Schema, type, MapSchema } from "@colyseus/schema";

// 🎯 Define the player state
class Player extends Schema {
  @type("string") id: string = "";
  @type("number") chips: number = 0;
  @type("boolean") isTurn: boolean = false;
}

// 🎯 Define the game state
class GameState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
  @type("string") currentTurn: string = "";
}

export class DominoRoom extends Room<GameState> {
  maxClients = 6;

  onCreate() {
    this.setState(new GameState()); // Initialize the room state
    
    this.onMessage("bet", (client: Client, message: { amount: number }) => {
      const player = this.state.players.get(client.sessionId);
      if (player) {
        player.chips -= message.amount;
      }
    });
  }

  onJoin(client: Client) {
    const player = new Player();
    player.id = client.sessionId;
    player.chips = 1000; // Default chips
    this.state.players.set(client.sessionId, player);
  }

  onLeave(client: Client) {
    this.state.players.delete(client.sessionId);
  }
}
