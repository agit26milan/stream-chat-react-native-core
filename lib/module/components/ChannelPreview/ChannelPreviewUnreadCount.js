var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelPreviewUnreadCount = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelPreview/ChannelPreviewUnreadCount.tsx";

var styles = _reactNative.StyleSheet.create({
  unreadContainer: {
    alignItems: 'center',
    borderRadius: 8,
    flexShrink: 1,
    justifyContent: 'center'
  },
  unreadText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    paddingHorizontal: 5,
    paddingVertical: 1
  }
});

var ChannelPreviewUnreadCount = function ChannelPreviewUnreadCount(props) {
  var maxUnreadCount = props.maxUnreadCount,
      unread = props.unread;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$chann = _useTheme$theme.channelPreview,
      unreadContainer = _useTheme$theme$chann.unreadContainer,
      unreadText = _useTheme$theme$chann.unreadText,
      accent_red = _useTheme$theme.colors.accent_red;

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.unreadContainer, {
      backgroundColor: accent_red
    }, unreadContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, !!unread && _react["default"].createElement(_reactNative.Text, {
    numberOfLines: 1,
    style: [styles.unreadText, unreadText],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, unread > maxUnreadCount ? maxUnreadCount + "+" : unread));
};

exports.ChannelPreviewUnreadCount = ChannelPreviewUnreadCount;
//# sourceMappingURL=ChannelPreviewUnreadCount.js.map