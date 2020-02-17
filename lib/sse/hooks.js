"use strict";
exports.__esModule = true;
var react_1 = require("react");
var context_1 = require("./context");
exports.useLastSSE = function (onOpen) {
    var _a = react_1.useState(undefined), data = _a[0], setData = _a[1];
    var _b = react_1.useState(undefined), error = _b[0], setError = _b[1];
    var eventSource = react_1.useContext(context_1.SSEContext);
    react_1.useEffect(function () {
        eventSource.onmessage = function (e) {
            setData(JSON.parse(e.data));
        };
        if (open) {
            eventSource.onopen = onOpen;
        }
        eventSource.onerror = function (e) {
            setError(e);
        };
        return function () { return eventSource.close(); };
    }, [onOpen]);
    return { data: data, error: error };
};
exports.useSSE = function (onMessage, onOpen) {
    var _a = react_1.useState(undefined), error = _a[0], setError = _a[1];
    var onMessageRef = react_1.useRef(undefined);
    onMessageRef.current = onMessage;
    var eventSource = react_1.useContext(context_1.SSEContext);
    react_1.useEffect(function () {
        eventSource.onmessage = function (e) {
            onMessageRef.current(JSON.parse(e.data));
        };
        if (open) {
            eventSource.onopen = onOpen;
        }
        eventSource.onerror = function (e) {
            setError(e);
        };
        return function () { return eventSource.close(); };
    }, []);
    return error;
};
//# sourceMappingURL=hooks.js.map