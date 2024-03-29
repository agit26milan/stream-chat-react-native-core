var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _Loading = require("../../icons/Loading");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Spinner/Spinner.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  spinner: {
    height: 16,
    justifyContent: 'center',
    margin: 5,
    width: 16
  }
});

var Spinner = function Spinner() {
  var rotation = (0, _reactNativeReanimated.useSharedValue)(0);

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      accent_blue = _useTheme$theme.colors.accent_blue,
      spinner = _useTheme$theme.spinner;

  var animatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        rotate: rotation.value + "deg"
      }]
    };
  });
  (0, _react.useEffect)(function () {
    rotation.value = (0, _reactNativeReanimated.withRepeat)((0, _reactNativeReanimated.withTiming)(360, {
      duration: 800,
      easing: _reactNativeReanimated.Easing.linear
    }), -1);
  }, []);
  return _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [styles.spinner, animatedStyle, spinner],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, _react["default"].createElement(_Loading.Loading, {
    stopColor: accent_blue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }));
};

exports.Spinner = Spinner;
Spinner.displayName = 'Spinner{spinner}';
//# sourceMappingURL=Spinner.js.map