"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var socket_io_client_1 = __importDefault(require("socket.io-client"));
var context_1 = require("./context");
exports.SocketIOProvider = function (_a) {
    var url = _a.url, opts = _a.opts, children = _a.children;
    var socketRef = react_1.useRef(socket_io_client_1["default"](url, opts || {}));
    return (react_1["default"].createElement(context_1.SocketIOContext.Provider, { value: socketRef.current }, children));
};
//# sourceMappingURL=provider.js.map