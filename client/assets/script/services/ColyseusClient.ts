import Colyseus, { Client } from 'db://colyseus-sdk/colyseus.js';

export class ColyseusClient {
    private static client: Client;
    private static readonly ENDPOINT = 'ws://localhost:2567';

    public static getClient(): Client {
        if (!this.client) {
            this.client = new Colyseus.Client(this.ENDPOINT);
        }
        return this.client;
    }
} 