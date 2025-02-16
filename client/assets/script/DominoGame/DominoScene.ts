import { _decorator, Component, Node } from 'cc';
import { ColyseusClient } from '../services/ColyseusClient';
import { Room } from 'db://colyseus-sdk/colyseus.js';
const { ccclass, property } = _decorator;

@ccclass("DominoScene")
export class DominoScene extends Component {
  private room!: Room;

  start() {
    this.connectToDominoRoom();
  }

  update(deltaTime: number) {}

  private async connectToDominoRoom() {
    try {
      const roomName = "domino_room";
      this.room = await ColyseusClient.getClient().joinOrCreate(roomName, {
        // your join options here...
      });

      console.log("joined [Domino Room] successfully!");
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

  public Bet() {
    this.room.send("bet", { amount: 10 });
  }
}

