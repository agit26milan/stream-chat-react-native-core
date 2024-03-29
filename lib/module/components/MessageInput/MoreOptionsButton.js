var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoreOptionsButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _ChannelContext = require("../../contexts/channelContext/ChannelContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _CircleRight = require("../../icons/CircleRight");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/MoreOptionsButton.tsx";

var MoreOptionsButtonWithContext = function MoreOptionsButtonWithContext(props) {
  var disabled = props.disabled,
      handleOnPress = props.handleOnPress;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      accent_blue = _useTheme$theme.colors.accent_blue,
      moreOptionsButton = _useTheme$theme.messageInput.moreOptionsButton;

  return _react["default"].createElement(_reactNativeGestureHandler.TouchableOpacity, {
    disabled: disabled,
    hitSlop: {
      bottom: 15,
      left: 15,
      right: 15,
      top: 15
    },
    onPress: handleOnPress,
    style: [moreOptionsButton],
    testID: "more-options-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, _react["default"].createElement(_CircleRight.CircleRight, {
    pathFill: accent_blue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevDisabled = prevProps.disabled,
      prevHandleOnPress = prevProps.handleOnPress;
  var nextDisabled = nextProps.disabled,
      nextHandleOnPress = nextProps.handleOnPress;
  var disabledEqual = prevDisabled === nextDisabled;
  if (!disabledEqual) return false;
  var handleOnPressEqual = prevHandleOnPress === nextHandleOnPress;
  if (!handleOnPressEqual) return false;
  return true;
};

var MemoizedMoreOptionsButton = _react["default"].memo(MoreOptionsButtonWithContext, areEqual);

var MoreOptionsButton = function MoreOptionsButton(props) {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      _useChannelContext$di = _useChannelContext.disabled,
      disabled = _useChannelContext$di === void 0 ? false : _useChannelContext$di;

  return _react["default"].createElement(MemoizedMoreOptionsButton, (0, _extends2["default"])({
    disabled: disabled
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 10
    }
  }));
};

exports.MoreOptionsButton = MoreOptionsButton;
MoreOptionsButton.displayName = 'MoreOptionsButton{messageInput}';
//# sourceMappingURL=MoreOptionsButton.js.map