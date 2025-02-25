import { Schema, MapSchema } from "@colyseus/schema";

export interface IPlayer extends Schema {
  id: string;
  chips: number;
  isTurn: boolean;
}

export interface IGameState extends Schema {
  players: MapSchema<IPlayer>;
  currentTurn: string;
} 