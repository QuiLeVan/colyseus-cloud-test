import { MapSchema } from "@colyseus/schema";

export interface IPlayer {
  id: string;
  chips: number;
  isTurn: boolean;
}

// 🎯 Define the game state
export interface IGameState {
  players: MapSchema<IPlayer>;
  currentTurn: string;
}
