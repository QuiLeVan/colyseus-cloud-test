import { MapSchema, ArraySchema } from "@colyseus/schema";

export type CardSuit = "hearts" | "diamonds" | "clubs" | "spades";
export type CardRank = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";

export interface ICard {
  suit: CardSuit;
  rank: CardRank;
}

export interface IPokerPlayer {
  id: string;
  chips: number;
  bet: number;
  isDealer: boolean;
  isTurn: boolean;
  isPlaying: boolean;
  cards: ArraySchema<ICard>;
}

export type GamePhase = "waiting" | "dealing" | "betting" | "flop" | "turn" | "river" | "showdown";

export interface IPokerState {
  players: MapSchema<IPokerPlayer>;
  currentTurn: string;
  pot: number;
  phase: GamePhase;
  communityCards: ArraySchema<ICard>;
  minBet: number;
  currentBet: number;
} 