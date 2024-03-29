var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelListFooterLoadingIndicator = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Spinner = require("../Spinner/Spinner");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelList/ChannelListFooterLoadingIndicator.tsx";

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});

var ChannelListFooterLoadingIndicator = function ChannelListFooterLoadingIndicator() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
      container = _useTheme.theme.channelListFooterLoadingIndicator.container;

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, _react["default"].createElement(_Spinner.Spinner, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
};

exports.ChannelListFooterLoadingIndicator = ChannelListFooterLoadingIndicator;
ChannelListFooterLoadingIndicator.displayName = 'ChannelListFooterLoadingIndicator{channelListFooterLoadingIndicator}';
//# sourceMappingURL=ChannelListFooterLoadingIndicator.js.map