var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withChannelContext = exports.useChannelContext = exports.ChannelProvider = exports.ChannelContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = require("../utils/getDisplayName");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/channelContext/ChannelContext.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ChannelContext = _react["default"].createContext({});

exports.ChannelContext = ChannelContext;

var ChannelProvider = function ChannelProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(ChannelContext.Provider, {
    value: value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 3
    }
  }, children);
};

exports.ChannelProvider = ChannelProvider;

var useChannelContext = function useChannelContext() {
  return (0, _react.useContext)(ChannelContext);
};

exports.useChannelContext = useChannelContext;

var withChannelContext = function withChannelContext(Component) {
  var WithChannelContextComponent = function WithChannelContextComponent(props) {
    var channelContext = useChannelContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, channelContext, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 12
      }
    }));
  };

  WithChannelContextComponent.displayName = "WithChannelContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithChannelContextComponent;
};

exports.withChannelContext = withChannelContext;
//# sourceMappingURL=ChannelContext.js.map