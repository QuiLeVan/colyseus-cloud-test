/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.game = (function() {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    var game = {};

    game.GameAction = (function() {

        /**
         * Properties of a GameAction.
         * @memberof game
         * @interface IGameAction
         * @property {string|null} [actionType] GameAction actionType
         * @property {game.IPlayCardAction|null} [playCard] GameAction playCard
         * @property {game.IDrawCardAction|null} [drawCard] GameAction drawCard
         */

        /**
         * Constructs a new GameAction.
         * @memberof game
         * @classdesc Represents a GameAction.
         * @implements IGameAction
         * @constructor
         * @param {game.IGameAction=} [properties] Properties to set
         */
        function GameAction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameAction actionType.
         * @member {string} actionType
         * @memberof game.GameAction
         * @instance
         */
        GameAction.prototype.actionType = "";

        /**
         * GameAction playCard.
         * @member {game.IPlayCardAction|null|undefined} playCard
         * @memberof game.GameAction
         * @instance
         */
        GameAction.prototype.playCard = null;

        /**
         * GameAction drawCard.
         * @member {game.IDrawCardAction|null|undefined} drawCard
         * @memberof game.GameAction
         * @instance
         */
        GameAction.prototype.drawCard = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * GameAction payload.
         * @member {"playCard"|"drawCard"|undefined} payload
         * @memberof game.GameAction
         * @instance
         */
        Object.defineProperty(GameAction.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["playCard", "drawCard"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new GameAction instance using the specified properties.
         * @function create
         * @memberof game.GameAction
         * @static
         * @param {game.IGameAction=} [properties] Properties to set
         * @returns {game.GameAction} GameAction instance
         */
        GameAction.create = function create(properties) {
            return new GameAction(properties);
        };

        /**
         * Encodes the specified GameAction message. Does not implicitly {@link game.GameAction.verify|verify} messages.
         * @function encode
         * @memberof game.GameAction
         * @static
         * @param {game.IGameAction} message GameAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.actionType != null && Object.hasOwnProperty.call(message, "actionType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.actionType);
            if (message.playCard != null && Object.hasOwnProperty.call(message, "playCard"))
                $root.game.PlayCardAction.encode(message.playCard, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.drawCard != null && Object.hasOwnProperty.call(message, "drawCard"))
                $root.game.DrawCardAction.encode(message.drawCard, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameAction message, length delimited. Does not implicitly {@link game.GameAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GameAction
         * @static
         * @param {game.IGameAction} message GameAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameAction message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GameAction} GameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GameAction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.actionType = reader.string();
                        break;
                    }
                case 2: {
                        message.playCard = $root.game.PlayCardAction.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.drawCard = $root.game.DrawCardAction.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GameAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GameAction} GameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameAction message.
         * @function verify
         * @memberof game.GameAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.actionType != null && message.hasOwnProperty("actionType"))
                if (!$util.isString(message.actionType))
                    return "actionType: string expected";
            if (message.playCard != null && message.hasOwnProperty("playCard")) {
                properties.payload = 1;
                {
                    var error = $root.game.PlayCardAction.verify(message.playCard);
                    if (error)
                        return "playCard." + error;
                }
            }
            if (message.drawCard != null && message.hasOwnProperty("drawCard")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.game.DrawCardAction.verify(message.drawCard);
                    if (error)
                        return "drawCard." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GameAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GameAction} GameAction
         */
        GameAction.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GameAction)
                return object;
            var message = new $root.game.GameAction();
            if (object.actionType != null)
                message.actionType = String(object.actionType);
            if (object.playCard != null) {
                if (typeof object.playCard !== "object")
                    throw TypeError(".game.GameAction.playCard: object expected");
                message.playCard = $root.game.PlayCardAction.fromObject(object.playCard);
            }
            if (object.drawCard != null) {
                if (typeof object.drawCard !== "object")
                    throw TypeError(".game.GameAction.drawCard: object expected");
                message.drawCard = $root.game.DrawCardAction.fromObject(object.drawCard);
            }
            return message;
        };

        /**
         * Creates a plain object from a GameAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GameAction
         * @static
         * @param {game.GameAction} message GameAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.actionType = "";
            if (message.actionType != null && message.hasOwnProperty("actionType"))
                object.actionType = message.actionType;
            if (message.playCard != null && message.hasOwnProperty("playCard")) {
                object.playCard = $root.game.PlayCardAction.toObject(message.playCard, options);
                if (options.oneofs)
                    object.payload = "playCard";
            }
            if (message.drawCard != null && message.hasOwnProperty("drawCard")) {
                object.drawCard = $root.game.DrawCardAction.toObject(message.drawCard, options);
                if (options.oneofs)
                    object.payload = "drawCard";
            }
            return object;
        };

        /**
         * Converts this GameAction to JSON.
         * @function toJSON
         * @memberof game.GameAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameAction
         * @function getTypeUrl
         * @memberof game.GameAction
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.GameAction";
        };

        return GameAction;
    })();

    game.PlayCardAction = (function() {

        /**
         * Properties of a PlayCardAction.
         * @memberof game
         * @interface IPlayCardAction
         * @property {number|null} [cardId] PlayCardAction cardId
         * @property {string|null} [playerId] PlayCardAction playerId
         */

        /**
         * Constructs a new PlayCardAction.
         * @memberof game
         * @classdesc Represents a PlayCardAction.
         * @implements IPlayCardAction
         * @constructor
         * @param {game.IPlayCardAction=} [properties] Properties to set
         */
        function PlayCardAction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayCardAction cardId.
         * @member {number} cardId
         * @memberof game.PlayCardAction
         * @instance
         */
        PlayCardAction.prototype.cardId = 0;

        /**
         * PlayCardAction playerId.
         * @member {string} playerId
         * @memberof game.PlayCardAction
         * @instance
         */
        PlayCardAction.prototype.playerId = "";

        /**
         * Creates a new PlayCardAction instance using the specified properties.
         * @function create
         * @memberof game.PlayCardAction
         * @static
         * @param {game.IPlayCardAction=} [properties] Properties to set
         * @returns {game.PlayCardAction} PlayCardAction instance
         */
        PlayCardAction.create = function create(properties) {
            return new PlayCardAction(properties);
        };

        /**
         * Encodes the specified PlayCardAction message. Does not implicitly {@link game.PlayCardAction.verify|verify} messages.
         * @function encode
         * @memberof game.PlayCardAction
         * @static
         * @param {game.IPlayCardAction} message PlayCardAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayCardAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cardId);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified PlayCardAction message, length delimited. Does not implicitly {@link game.PlayCardAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PlayCardAction
         * @static
         * @param {game.IPlayCardAction} message PlayCardAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayCardAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayCardAction message from the specified reader or buffer.
         * @function decode
         * @memberof game.PlayCardAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PlayCardAction} PlayCardAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayCardAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.PlayCardAction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cardId = reader.int32();
                        break;
                    }
                case 2: {
                        message.playerId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayCardAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PlayCardAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PlayCardAction} PlayCardAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayCardAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayCardAction message.
         * @function verify
         * @memberof game.PlayCardAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayCardAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cardId != null && message.hasOwnProperty("cardId"))
                if (!$util.isInteger(message.cardId))
                    return "cardId: integer expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            return null;
        };

        /**
         * Creates a PlayCardAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.PlayCardAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.PlayCardAction} PlayCardAction
         */
        PlayCardAction.fromObject = function fromObject(object) {
            if (object instanceof $root.game.PlayCardAction)
                return object;
            var message = new $root.game.PlayCardAction();
            if (object.cardId != null)
                message.cardId = object.cardId | 0;
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            return message;
        };

        /**
         * Creates a plain object from a PlayCardAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.PlayCardAction
         * @static
         * @param {game.PlayCardAction} message PlayCardAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayCardAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cardId = 0;
                object.playerId = "";
            }
            if (message.cardId != null && message.hasOwnProperty("cardId"))
                object.cardId = message.cardId;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            return object;
        };

        /**
         * Converts this PlayCardAction to JSON.
         * @function toJSON
         * @memberof game.PlayCardAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayCardAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayCardAction
         * @function getTypeUrl
         * @memberof game.PlayCardAction
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayCardAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.PlayCardAction";
        };

        return PlayCardAction;
    })();

    game.DrawCardAction = (function() {

        /**
         * Properties of a DrawCardAction.
         * @memberof game
         * @interface IDrawCardAction
         * @property {string|null} [playerId] DrawCardAction playerId
         */

        /**
         * Constructs a new DrawCardAction.
         * @memberof game
         * @classdesc Represents a DrawCardAction.
         * @implements IDrawCardAction
         * @constructor
         * @param {game.IDrawCardAction=} [properties] Properties to set
         */
        function DrawCardAction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DrawCardAction playerId.
         * @member {string} playerId
         * @memberof game.DrawCardAction
         * @instance
         */
        DrawCardAction.prototype.playerId = "";

        /**
         * Creates a new DrawCardAction instance using the specified properties.
         * @function create
         * @memberof game.DrawCardAction
         * @static
         * @param {game.IDrawCardAction=} [properties] Properties to set
         * @returns {game.DrawCardAction} DrawCardAction instance
         */
        DrawCardAction.create = function create(properties) {
            return new DrawCardAction(properties);
        };

        /**
         * Encodes the specified DrawCardAction message. Does not implicitly {@link game.DrawCardAction.verify|verify} messages.
         * @function encode
         * @memberof game.DrawCardAction
         * @static
         * @param {game.IDrawCardAction} message DrawCardAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawCardAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified DrawCardAction message, length delimited. Does not implicitly {@link game.DrawCardAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.DrawCardAction
         * @static
         * @param {game.IDrawCardAction} message DrawCardAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawCardAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DrawCardAction message from the specified reader or buffer.
         * @function decode
         * @memberof game.DrawCardAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.DrawCardAction} DrawCardAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawCardAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.DrawCardAction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DrawCardAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.DrawCardAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.DrawCardAction} DrawCardAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawCardAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DrawCardAction message.
         * @function verify
         * @memberof game.DrawCardAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DrawCardAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            return null;
        };

        /**
         * Creates a DrawCardAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.DrawCardAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.DrawCardAction} DrawCardAction
         */
        DrawCardAction.fromObject = function fromObject(object) {
            if (object instanceof $root.game.DrawCardAction)
                return object;
            var message = new $root.game.DrawCardAction();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            return message;
        };

        /**
         * Creates a plain object from a DrawCardAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.DrawCardAction
         * @static
         * @param {game.DrawCardAction} message DrawCardAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DrawCardAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.playerId = "";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            return object;
        };

        /**
         * Converts this DrawCardAction to JSON.
         * @function toJSON
         * @memberof game.DrawCardAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DrawCardAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DrawCardAction
         * @function getTypeUrl
         * @memberof game.DrawCardAction
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DrawCardAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/game.DrawCardAction";
        };

        return DrawCardAction;
    })();

    return game;
})();

module.exports = $root;
