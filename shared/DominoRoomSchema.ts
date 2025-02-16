
export class Player {
  id: string = "";
  chips: number = 0;
  isTurn: boolean = false;
}

// 🎯 Define the game state
export class GameState {
  players: Map<string, Player> = new Map();
  currentTurn: string = "";
}
