import { _decorator, Component, Node, Label } from "cc";
import { ColyseusClient } from "../services/ColyseusClient";
import { Room } from "db://colyseus-sdk/colyseus.js";
import {
    IPokerState,
    IPokerPlayer,
    CardSuit,
    CardRank,
} from "db://shared/schema/PokerRoomSchema";
import { MessageHandler } from "db://shared/protobuf/MessageHandler";
import { game } from "db://shared/protobuf/generated/protos";

const { ccclass, property } = _decorator;

@ccclass("PokerScene")
export class PokerScene extends Component {
    @property(Label)
    private chipLabel: Label | null = null;

    @property(Label)
    private potLabel: Label | null = null;

    @property(Node)
    private cardContainer: Node | null = null;

    private room!: Room<IPokerState>;
    private myPlayer: IPokerPlayer | null = null;

    start() {
        this.connectToPokerRoom();
    }

    private async connectToPokerRoom() {
        try {
            this.room = await ColyseusClient.getClient().joinOrCreate(
                "poker_room"
            );
            console.log("joined [Poker Room] successfully!");
            this.setupRoomHandlers();
        } catch (error) {
            console.error("Failed to connect to poker room:", error);
        }
    }

    private setupRoomHandlers() {
        this.room.onStateChange((state) => {
            this.updateGameState(state);
        });

        this.room.onMessage(
            "dealCards",
            (cards: { suit: CardSuit; rank: CardRank }[]) => {
                this.displayCards(cards);
            }
        );

        this.room.onLeave((code) => {
            console.log("left poker room", code);
        });
    }

    private updateGameState(state: IPokerState) {
        // Update player info
        this.myPlayer = state.players.get(this.room.sessionId);
        if (this.myPlayer && this.chipLabel) {
            this.chipLabel.string = `Chips: ${this.myPlayer.chips}`;
        }

        // Update pot
        if (this.potLabel) {
            this.potLabel.string = `Pot: ${state.pot}`;
        }

        // Update UI based on game phase
        this.updatePhaseUI(state.phase);
    }

    private updatePhaseUI(phase: string) {
        // Enable/disable buttons based on game phase
        switch (phase) {
            case "betting":
                this.enableBettingControls();
                break;
            case "showdown":
                this.showResults();
                break;
            default:
                this.disableAllControls();
        }
    }

    private displayCards(cards: { suit: CardSuit; rank: CardRank }[]) {
        // Implementation for displaying cards visually
        console.log("Received cards:", cards);
    }

    // UI Control Methods
    private enableBettingControls() {
        // Enable betting buttons when it's player's turn
        if (this.myPlayer?.isTurn) {
            // Enable controls
        }
    }

    private disableAllControls() {
        // Disable all interactive controls
    }

    private showResults() {
        // Display round results
    }

    // Button click handlers
    public onBetClick(amount: number = 10) {
        if (this.myPlayer?.isTurn) {
            this.room.send("bet", { amount: 10 });
        }
    }

    public onFoldClick() {
        if (this.myPlayer?.isTurn) {
            this.room.send("fold");
        }
    }

    public onCheckClick() {
        if (this.myPlayer?.isTurn) {
            // this.room.send("check");
            // Sending a play card action
            const action: game.IGameAction = {
                actionType: 'playCard'
            };
            const action2 = MessageHandler.encode("GameAction", action);
            this.room.sendBytes("GameAction", action2);
        }
    }
}
