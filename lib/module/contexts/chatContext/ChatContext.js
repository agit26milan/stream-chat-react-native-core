var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withChatContext = exports.useChatContext = exports.ChatProvider = exports.ChatContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = require("../utils/getDisplayName");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/chatContext/ChatContext.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ChatContext = _react["default"].createContext({});

exports.ChatContext = ChatContext;

var ChatProvider = function ChatProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(ChatContext.Provider, {
    value: value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 3
    }
  }, children);
};

exports.ChatProvider = ChatProvider;

var useChatContext = function useChatContext() {
  return (0, _react.useContext)(ChatContext);
};

exports.useChatContext = useChatContext;

var withChatContext = function withChatContext(Component) {
  var WithChatContextComponent = function WithChatContextComponent(props) {
    var chatContext = useChatContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, chatContext, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 12
      }
    }));
  };

  WithChatContextComponent.displayName = "WithChatContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithChatContextComponent;
};

exports.withChatContext = withChatContext;
//# sourceMappingURL=ChatContext.js.map