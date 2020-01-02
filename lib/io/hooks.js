"use strict";
exports.__esModule = true;
var react_1 = require("react");
var context_1 = require("./context");
exports.useSocket = function (eventKey, callback) {
    var socket = react_1.useContext(context_1.SocketIOContext);
    var callbackRef = react_1.useRef(callback);
    callbackRef.current = callback;
    var socketHandlerRef = react_1.useRef(function () {
        if (callbackRef.current) {
            callbackRef.current.apply(this, arguments);
        }
    });
    var subscribe = function () {
        if (eventKey) {
            socket.on(eventKey, socketHandlerRef.current);
        }
    };
    var unsubscribe = function () {
        if (eventKey) {
            socket.removeListener(eventKey, socketHandlerRef.current);
        }
    };
    react_1.useEffect(function () {
        subscribe();
        return unsubscribe;
    }, [eventKey]);
    return { socket: socket, unsubscribe: unsubscribe, subscribe: subscribe };
};
exports.useLastMessage = function (eventKey) {
    var socket = react_1.useContext(context_1.SocketIOContext);
    var _a = react_1.useState(), data = _a[0], setData = _a[1];
    var subscribe = function () {
        if (eventKey) {
            socket.on(eventKey, setData);
        }
    };
    var unsubscribe = function () {
        if (eventKey) {
            socket.removeListener(eventKey, setData);
        }
    };
    react_1.useEffect(function () {
        subscribe();
        return unsubscribe;
    }, [eventKey]);
    return { data: data, socket: socket, unsubscribe: unsubscribe, subscribe: subscribe };
};
//# sourceMappingURL=hooks.js.map