var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineUnreadIndicator = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _utils = require("../../utils/utils");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/InlineUnreadIndicator.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '100%'
  },
  text: {
    fontSize: 12
  }
});

var InlineUnreadIndicator = function InlineUnreadIndicator() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      bg_gradient_end = _useTheme$theme$color.bg_gradient_end,
      bg_gradient_start = _useTheme$theme$color.bg_gradient_start,
      grey = _useTheme$theme$color.grey,
      _useTheme$theme$messa = _useTheme$theme.messageList.inlineUnreadIndicator,
      container = _useTheme$theme$messa.container,
      text = _useTheme$theme$messa.text;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNativeSvg["default"], {
    height: 24,
    style: {
      position: 'absolute'
    },
    width: (0, _utils.vw)(100),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNativeSvg.Rect, {
    fill: "url(#gradient)",
    height: 24,
    width: (0, _utils.vw)(100),
    x: 0,
    y: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), _react["default"].createElement(_reactNativeSvg.Defs, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNativeSvg.LinearGradient, {
    gradientUnits: "userSpaceOnUse",
    id: "gradient",
    x1: 0,
    x2: 0,
    y1: 24,
    y2: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNativeSvg.Stop, {
    offset: 1,
    stopColor: bg_gradient_end,
    stopOpacity: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), _react["default"].createElement(_reactNativeSvg.Stop, {
    offset: 0,
    stopColor: bg_gradient_start,
    stopOpacity: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })))), _react["default"].createElement(_reactNative.Text, {
    style: [styles.text, {
      color: grey
    }, text],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, t('Unread Messages')));
};

exports.InlineUnreadIndicator = InlineUnreadIndicator;
//# sourceMappingURL=InlineUnreadIndicator.js.map