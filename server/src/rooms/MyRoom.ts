import { Room, Client } from "@colyseus/core";
import { MyRoomState } from "./schema/MyRoomState";

export class MyRoom extends Room<MyRoomState> {
  maxClients = 4;

  onCreate (options: any) {
    this.setState(new MyRoomState());

    this.onMessage("type", (client, message) => {
      //
      // handle "type" message
      //
    });
  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined! [Lobby Room]");
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left! [Lobby Room]");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing... [Lobby Room]");
  }

}
