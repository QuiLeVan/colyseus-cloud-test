import { Schema, type, MapSchema, ArraySchema } from "@colyseus/schema";
import { ICard, IPokerPlayer, IPokerState, GamePhase, CardSuit, CardRank } from "@shared/schema/PokerRoomSchema";

class Card extends Schema implements ICard {
  @type("string") suit!: CardSuit;
  @type("string") rank!: CardRank;

  constructor(suit?: CardSuit, rank?: CardRank) {
    super();
    if (suit) this.suit = suit;
    if (rank) this.rank = rank;
  }
}

class PokerPlayer extends Schema implements IPokerPlayer {
  @type("string") id: string = "";
  @type("number") chips: number = 0;
  @type("number") bet: number = 0;
  @type("boolean") isDealer: boolean = false;
  @type("boolean") isTurn: boolean = false;
  @type("boolean") isPlaying: boolean = false;
  @type([Card]) cards = new ArraySchema<ICard>();
}

class PokerState extends Schema implements IPokerState {
  @type({ map: PokerPlayer }) players = new MapSchema<IPokerPlayer>();
  @type("string") currentTurn: string = "";
  @type("number") pot: number = 0;
  @type("string") phase: GamePhase = "waiting";
  @type([Card]) communityCards = new ArraySchema<ICard>();
  @type("number") minBet: number = 10;
  @type("number") currentBet: number = 0;
}

export { PokerState, PokerPlayer, Card }; 