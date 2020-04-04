"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var context_1 = require("./context");
exports.SSEProvider = function (_a) {
    var url = _a.url, opts = _a.opts, children = _a.children;
    if (!window) {
        return react_1["default"].createElement(react_1["default"].Fragment, null, children);
    }
    var eventSourceRef = react_1.useRef();
    if (!eventSourceRef.current) {
        eventSourceRef.current = new EventSource(url, opts);
    }
    return (react_1["default"].createElement(context_1.SSEContext.Provider, { value: eventSourceRef.current }, children));
};
//# sourceMappingURL=provider.js.map