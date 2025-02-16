import { _decorator, Component, Node } from 'cc';
import Colyseus, { Room } from 'db://colyseus-sdk/colyseus.js';
const { ccclass, property } = _decorator;

@ccclass('LobbyScene')
export class LobbyScene extends Component {
    async start() {
        const endpoint = 'ws://localhost:2567';
        const roomName = "my_room";
        
        const client = new Colyseus.Client(endpoint);
        const room: Room = await client.joinOrCreate(roomName, {
          // your join options here...
        });

        console.log("joined successfully!");

        room.onMessage("message-type", (payload) => {
          // logic
        });

        room.onStateChange((state) => {
          console.log("state change:", state);
        });

        room.onLeave((code) => {
          console.log("left");
        });
    }

    update(deltaTime: number) {
        
    }
}

