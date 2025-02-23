import { Room, Client } from "colyseus";
import { PokerState, PokerPlayer } from "./schema/PokerRoom";
import { MessageHandler } from "@shared/protobuf/MessageHandler";
import { game } from "@shared/protobuf/generated/protos";

export class PokerRoom extends Room<PokerState> {
    maxClients = 9;
    minPlayers = 1;

    onCreate() {
        this.setState(new PokerState());

        this.onMessage("bet", (client, message: { amount: number }) => {
            const player = this.state.players.get(client.sessionId);
            if (player && player.isTurn) {
                console.log("[PokerRoom] player bet", message.amount);
                this.handleBet(client, message.amount);
            }
        });

        this.onMessage("fold", (client) => {
            const player = this.state.players.get(client.sessionId);
            if (player && player.isTurn) {
                this.handleFold(client);
            }
        });

        this.onMessage("check", (client) => {
            const player = this.state.players.get(client.sessionId);
            if (player && player.isTurn) {
                this.handleCheck(client);
            }
        });

        this.onMessage("GameAction", (client, message) => {
            try {
                console.log("[PokerRoom] received GameAction", message);
                // Ensure message is properly converted to Uint8Array
                const buffer = new Uint8Array(message);
                const action = MessageHandler.decode("GameAction", buffer) as game.IGameAction;
                
                console.log("Received action:", action?.actionType);
                // Handle the action...
                this.handleGameAction(client, action);
                
            } catch (error) {
                console.error("Error processing GameAction:", error);
            }
        });

    }

    onJoin(client: Client) {
        console.log("[PokerRoom] player joined");
        const player = new PokerPlayer();
        player.id = client.sessionId;
        player.chips = 1000; // Starting chips
        player.isPlaying = true;

        //TODO: remove this line later
        const cheatMode = true;
        player.isTurn = cheatMode; // First player to join gets the turn
        this.state.players.set(client.sessionId, player);

        if (this.state.players.size >= this.minPlayers || cheatMode) {
            this.startNewRound();
        }
    }

    onLeave(client: Client) {
        const player = this.state.players.get(client.sessionId);
        if (player) {
            player.isPlaying = false;
            // Handle player leaving during active game
            if (this.state.phase !== "waiting") {
                this.handleFold(client);
            }
        }
        this.state.players.delete(client.sessionId);
    }

    private startNewRound() {
        console.log("[PokerRoom] start new round");
        // Initialize new round logic
        this.state.phase = "dealing";
        this.state.pot = 0;
        this.state.currentBet = this.state.minBet;
        // Deal cards, set dealer, etc.
    }

    private handleBet(client: Client, amount: number) {
        const player = this.state.players.get(client.sessionId);
        if (player && amount <= player.chips) {
            console.log("[PokerRoom] player bet");
            player.chips -= amount;
            player.bet += amount;
            this.state.pot += amount;
            this.moveToNextPlayer();
        }
    }

    private handleFold(client: Client) {
        const player = this.state.players.get(client.sessionId);
        if (player) {
            console.log("[PokerRoom] player folded");
            player.isPlaying = false;
            this.moveToNextPlayer();
        }
    }

    private handleCheck(client: Client) {
        const player = this.state.players.get(client.sessionId);
        if (player) {
            console.log("[PokerRoom] player checked");
            this.moveToNextPlayer();
        }
    }

    private moveToNextPlayer() {
        // Logic to move to next active player
    }

    private handleGameAction(client: Client, action: any) {
        // Handle game action logic
        switch (action.actionType) {
            case 'playCard':
                console.log("[PokerRoom] player played card");
                // Handle play card action
                break;
            case 'drawCard':
                console.log("[PokerRoom] player drew card");
                // Handle draw card action
                break;
        }
    }
}