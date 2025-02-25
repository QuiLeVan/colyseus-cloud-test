import protobuf, { Root, Type } from "protobufjs";

export class MessageHandler {
    private static root: Root;
    private static types: Map<string, Type> = new Map();

    static async initialize() {
        if (typeof (cc) !== 'undefined') {  
            await this.initializeClient();
        } else {
            await this.initializeServer();
        }
        
        // Cache message types
        this.types.set('GameAction', this.root.lookupType('game.GameAction'));
    }

    private static async initializeServer(): Promise<void> {
        this.root = await protobuf.load('src/proto/game.proto');
    }

    private static async initializeClient(): Promise<void> {
        return new Promise((resolve, reject) => {
            const { resources, TextAsset } = cc;
            resources.load('proto/game', TextAsset, (err, protoFile) => {
                if (err) {
                    console.error('Failed to load proto file:', err);
                    reject(err);
                    return;
                }

                try {
                    const content = protoFile.text;
                    this.root = protobuf.parse(content).root;
                    resolve();
                } catch (error) {
                    console.error('Failed to parse proto file:', error);
                    reject(error);
                }
            });
        });
    }

    static encode(messageType: string, payload: any): Uint8Array {
        const type = this.types.get(messageType);
        if (!type) throw new Error(`Unknown message type: ${messageType}`);

        const message = type.create(payload);
        return type.encode(message).finish();
    }

    static decode(messageType: string, buffer: Uint8Array): any {
        const type = this.types.get(messageType);
        if (!type) throw new Error(`Unknown message type: ${messageType}`);

        return type.decode(buffer);
    }
}