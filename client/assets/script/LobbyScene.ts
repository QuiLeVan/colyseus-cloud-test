import { _decorator, Component, director } from 'cc';
import { Room } from 'db://colyseus-sdk/colyseus.js';
import { ColyseusClient } from './services/ColyseusClient';
import { MessageHandler } from 'db://shared/protobuf/MessageHandler';
const { ccclass } = _decorator;

@ccclass('LobbyScene')
export class LobbyScene extends Component {
    private room!: Room;

    async start() {
        await MessageHandler.initialize();
        await this.connectToLobby();
    }

    private async connectToLobby() {
        try {
            const roomName = "my_room";
            this.room = await ColyseusClient.getClient().joinOrCreate(roomName, {
                // your join options here...
            });

            console.log("joined successfully!");
            this.setupRoomHandlers();
        } catch (error) {
            console.error("Failed to connect to lobby:", error);
        }
    }

    private setupRoomHandlers() {
        this.room.onMessage("message-type", (payload) => {
            // logic
        });

        this.room.onStateChange((state) => {
            console.log("state change:", state);
        });

        this.room.onLeave((code) => {
            console.log("left");
        });
    }

    update(deltaTime: number) {
        
    }

    public OpenDominoRoom() {
        // Switch to the Domino scene
        director.loadScene("DominoScene");
    }

    public OpenPokerRoom() {
        // Switch to the Domino scene
        director.loadScene("PokerScene");
    }
}

