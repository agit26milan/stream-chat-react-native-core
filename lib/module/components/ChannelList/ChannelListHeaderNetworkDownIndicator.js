var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelListHeaderNetworkDownIndicator = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelList/ChannelListHeaderNetworkDownIndicator.tsx";

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    width: '100%'
  },
  errorText: {
    fontSize: 14
  }
});

var ChannelListHeaderNetworkDownIndicator = function ChannelListHeaderNetworkDownIndicator() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$chann = _useTheme$theme.channelListHeaderErrorIndicator,
      container = _useTheme$theme$chann.container,
      errorText = _useTheme$theme$chann.errorText,
      _useTheme$theme$color = _useTheme$theme.colors,
      grey = _useTheme$theme$color.grey,
      white = _useTheme$theme$color.white;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: grey + "E6"
    }, container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.Text, {
    style: [styles.errorText, {
      color: white
    }, errorText],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, t('Reconnecting...')));
};

exports.ChannelListHeaderNetworkDownIndicator = ChannelListHeaderNetworkDownIndicator;
ChannelListHeaderNetworkDownIndicator.displayName = 'ChannelListHeaderNetworkDownIndicator{channelListHeaderErrorIndicator}';
//# sourceMappingURL=ChannelListHeaderNetworkDownIndicator.js.map