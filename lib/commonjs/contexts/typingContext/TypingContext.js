var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTypingContext = exports.useTypingContext = exports.TypingProvider = exports.TypingContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = require("../utils/getDisplayName");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/typingContext/TypingContext.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TypingContext = _react["default"].createContext({});

exports.TypingContext = TypingContext;

var TypingProvider = function TypingProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(TypingContext.Provider, {
    value: value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 3
    }
  }, children);
};

exports.TypingProvider = TypingProvider;

var useTypingContext = function useTypingContext() {
  return (0, _react.useContext)(TypingContext);
};

exports.useTypingContext = useTypingContext;

var withTypingContext = function withTypingContext(Component) {
  var WithTypingContextComponent = function WithTypingContextComponent(props) {
    var typingContext = useTypingContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, typingContext, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 12
      }
    }));
  };

  WithTypingContextComponent.displayName = "WithTypingContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithTypingContextComponent;
};

exports.withTypingContext = withTypingContext;
//# sourceMappingURL=TypingContext.js.map