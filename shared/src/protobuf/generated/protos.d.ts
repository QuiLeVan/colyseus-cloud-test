import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace game. */
export namespace game {

    /** Properties of a GameAction. */
    interface IGameAction {

        /** GameAction actionType */
        actionType?: (string|null);

        /** GameAction playCard */
        playCard?: (game.IPlayCardAction|null);

        /** GameAction drawCard */
        drawCard?: (game.IDrawCardAction|null);
    }

    /** Represents a GameAction. */
    class GameAction implements IGameAction {

        /**
         * Constructs a new GameAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGameAction);

        /** GameAction actionType. */
        public actionType: string;

        /** GameAction playCard. */
        public playCard?: (game.IPlayCardAction|null);

        /** GameAction drawCard. */
        public drawCard?: (game.IDrawCardAction|null);

        /** GameAction payload. */
        public payload?: ("playCard"|"drawCard");

        /**
         * Creates a new GameAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameAction instance
         */
        public static create(properties?: game.IGameAction): game.GameAction;

        /**
         * Encodes the specified GameAction message. Does not implicitly {@link game.GameAction.verify|verify} messages.
         * @param message GameAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGameAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameAction message, length delimited. Does not implicitly {@link game.GameAction.verify|verify} messages.
         * @param message GameAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGameAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.GameAction;

        /**
         * Decodes a GameAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.GameAction;

        /**
         * Verifies a GameAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameAction
         */
        public static fromObject(object: { [k: string]: any }): game.GameAction;

        /**
         * Creates a plain object from a GameAction message. Also converts values to other types if specified.
         * @param message GameAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GameAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayCardAction. */
    interface IPlayCardAction {

        /** PlayCardAction cardId */
        cardId?: (number|null);

        /** PlayCardAction playerId */
        playerId?: (string|null);
    }

    /** Represents a PlayCardAction. */
    class PlayCardAction implements IPlayCardAction {

        /**
         * Constructs a new PlayCardAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPlayCardAction);

        /** PlayCardAction cardId. */
        public cardId: number;

        /** PlayCardAction playerId. */
        public playerId: string;

        /**
         * Creates a new PlayCardAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayCardAction instance
         */
        public static create(properties?: game.IPlayCardAction): game.PlayCardAction;

        /**
         * Encodes the specified PlayCardAction message. Does not implicitly {@link game.PlayCardAction.verify|verify} messages.
         * @param message PlayCardAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPlayCardAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayCardAction message, length delimited. Does not implicitly {@link game.PlayCardAction.verify|verify} messages.
         * @param message PlayCardAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPlayCardAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayCardAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayCardAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.PlayCardAction;

        /**
         * Decodes a PlayCardAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayCardAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.PlayCardAction;

        /**
         * Verifies a PlayCardAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayCardAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayCardAction
         */
        public static fromObject(object: { [k: string]: any }): game.PlayCardAction;

        /**
         * Creates a plain object from a PlayCardAction message. Also converts values to other types if specified.
         * @param message PlayCardAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.PlayCardAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayCardAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayCardAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DrawCardAction. */
    interface IDrawCardAction {

        /** DrawCardAction playerId */
        playerId?: (string|null);
    }

    /** Represents a DrawCardAction. */
    class DrawCardAction implements IDrawCardAction {

        /**
         * Constructs a new DrawCardAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IDrawCardAction);

        /** DrawCardAction playerId. */
        public playerId: string;

        /**
         * Creates a new DrawCardAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DrawCardAction instance
         */
        public static create(properties?: game.IDrawCardAction): game.DrawCardAction;

        /**
         * Encodes the specified DrawCardAction message. Does not implicitly {@link game.DrawCardAction.verify|verify} messages.
         * @param message DrawCardAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IDrawCardAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DrawCardAction message, length delimited. Does not implicitly {@link game.DrawCardAction.verify|verify} messages.
         * @param message DrawCardAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IDrawCardAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrawCardAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DrawCardAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.DrawCardAction;

        /**
         * Decodes a DrawCardAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DrawCardAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.DrawCardAction;

        /**
         * Verifies a DrawCardAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DrawCardAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DrawCardAction
         */
        public static fromObject(object: { [k: string]: any }): game.DrawCardAction;

        /**
         * Creates a plain object from a DrawCardAction message. Also converts values to other types if specified.
         * @param message DrawCardAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.DrawCardAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DrawCardAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DrawCardAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
