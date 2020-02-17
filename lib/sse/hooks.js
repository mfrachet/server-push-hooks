"use strict";
exports.__esModule = true;
var react_1 = require("react");
var context_1 = require("./context");
exports.useLastSSE = function () {
    var _a = react_1.useState(undefined), data = _a[0], setData = _a[1];
    var _b = react_1.useState(undefined), error = _b[0], setError = _b[1];
    var eventSource = react_1.useContext(context_1.SSEContext);
    react_1.useEffect(function () {
        eventSource.onmessage = function (e) {
            setData(JSON.parse(e.data));
        };
        eventSource.onopen = function () {
            // tslint:disable-next-line:no-console
            console.log("Opened");
        };
        eventSource.onerror = function (e) {
            setError(e);
        };
    }, []);
    return { data: data, error: error };
};
//# sourceMappingURL=hooks.js.map