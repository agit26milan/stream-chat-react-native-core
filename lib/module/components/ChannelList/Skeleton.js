var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Skeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _reactNativeSvg = require("react-native-svg");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelList/Skeleton.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var paddingLarge = 16;
var paddingMedium = 12;
var paddingSmall = 8;

var styles = _reactNative.StyleSheet.create({
  background: {
    height: 64,
    position: 'absolute',
    width: '100%'
  },
  container: {
    borderBottomWidth: 1,
    flexDirection: 'row'
  }
});

var Skeleton = function Skeleton() {
  var width = (0, _reactNative.useWindowDimensions)().width;
  var startOffset = (0, _reactNativeReanimated.useSharedValue)(-width);

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$chann = _useTheme$theme.channelListSkeleton,
      _useTheme$theme$chann2 = _useTheme$theme$chann.animationTime,
      animationTime = _useTheme$theme$chann2 === void 0 ? 1800 : _useTheme$theme$chann2,
      background = _useTheme$theme$chann.background,
      container = _useTheme$theme$chann.container,
      gradientStart = _useTheme$theme$chann.gradientStart,
      gradientStop = _useTheme$theme$chann.gradientStop,
      _useTheme$theme$chann3 = _useTheme$theme$chann.height,
      height = _useTheme$theme$chann3 === void 0 ? 64 : _useTheme$theme$chann3,
      maskFillColor = _useTheme$theme$chann.maskFillColor,
      _useTheme$theme$color = _useTheme$theme.colors,
      border = _useTheme$theme$color.border,
      grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
      white_snow = _useTheme$theme$color.white_snow;

  (0, _react.useEffect)(function () {
    startOffset.value = (0, _reactNativeReanimated.withRepeat)((0, _reactNativeReanimated.withTiming)(width, {
      duration: animationTime,
      easing: _reactNativeReanimated.Easing.linear
    }), -1);
  }, []);
  var animatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        translateX: startOffset.value
      }]
    };
  }, []);
  var d = (0, _reactNativeReanimated.useDerivedValue)(function () {
    var useableHeight = height - paddingMedium * 2;
    var boneHeight = (useableHeight - 8) / 2;
    var boneRadius = boneHeight / 2;
    var circleRadius = useableHeight / 2;
    var avatarBoneWidth = circleRadius * 2 + paddingSmall * 2;
    var detailsBonesWidth = width - avatarBoneWidth;
    return "M0 0 h" + width + " v" + height + " h-" + width + "z M" + paddingSmall + " " + height / 2 + " a" + circleRadius + " " + circleRadius + " 0 1 0 " + circleRadius * 2 + " 0 a" + circleRadius + " " + circleRadius + " 0 1 0 -" + circleRadius * 2 + " 0z M" + (avatarBoneWidth + boneRadius) + " " + paddingMedium + " a" + boneRadius + " " + boneRadius + " 0 1 0 0 " + boneHeight + "z M" + (avatarBoneWidth - boneRadius + detailsBonesWidth * 0.25) + " " + paddingMedium + " h-" + (detailsBonesWidth * 0.25 - boneRadius * 2) + " v" + boneHeight + " h" + (detailsBonesWidth * 0.25 - boneRadius * 2) + "z M" + (avatarBoneWidth - boneRadius + detailsBonesWidth * 0.25) + " " + (paddingMedium + boneHeight) + " a" + boneRadius + " " + boneRadius + " 0 1 0 0 -" + boneHeight + "z M" + (avatarBoneWidth + boneRadius) + " " + (paddingMedium + boneHeight + paddingSmall) + " a" + boneRadius + " " + boneRadius + " 0 1 0 0 " + boneHeight + "z M" + (avatarBoneWidth + detailsBonesWidth * 0.8 - boneRadius) + " " + (paddingMedium + boneHeight + paddingSmall) + " h-" + (detailsBonesWidth * 0.8 - boneRadius * 2) + " v" + boneHeight + " h" + (detailsBonesWidth * 0.8 - boneRadius * 2) + "z M" + (avatarBoneWidth + detailsBonesWidth * 0.8 - boneRadius) + " " + (height - paddingMedium) + " a" + boneRadius + " " + boneRadius + " 0 1 0 0 -" + boneHeight + "z M" + (avatarBoneWidth + detailsBonesWidth * 0.8 + boneRadius + paddingLarge) + " " + (paddingMedium + boneHeight + paddingSmall) + " a" + boneRadius + " " + boneRadius + " 0 1 0 0 " + boneHeight + "z M" + (width - paddingSmall - boneRadius) + " " + (paddingMedium + boneHeight + paddingSmall) + " h-" + (width - paddingSmall - boneRadius - (avatarBoneWidth + detailsBonesWidth * 0.8 + boneRadius + paddingLarge)) + " v" + boneHeight + " h" + (width - paddingSmall - boneRadius - (avatarBoneWidth + detailsBonesWidth * 0.8 + boneRadius + paddingLarge)) + "z M" + (width - paddingSmall * 2) + " " + (height - paddingMedium) + " a" + boneRadius + " " + boneRadius + " 0 1 0 0 -" + boneHeight + "z";
  }, []);
  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, {
      borderBottomColor: border
    }, container],
    testID: "channel-preview-skeleton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.background, {
      backgroundColor: white_snow
    }, background],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }), _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [animatedStyle, styles.background],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNativeSvg.Svg, {
    height: height,
    width: width,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNativeSvg.Rect, {
    fill: "url(#gradient)",
    height: height,
    width: width,
    x: 0,
    y: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }), _react["default"].createElement(_reactNativeSvg.Defs, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNativeSvg.LinearGradient, {
    gradientUnits: "userSpaceOnUse",
    id: "gradient",
    x1: 0,
    x2: width,
    y1: 0,
    y2: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, _react["default"].createElement(_reactNativeSvg.Stop, (0, _extends2["default"])({
    offset: 1,
    stopColor: grey_gainsboro
  }, gradientStart, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  })), _react["default"].createElement(_reactNativeSvg.Stop, (0, _extends2["default"])({
    offset: 0.5,
    stopColor: grey_gainsboro
  }, gradientStop, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  })), _react["default"].createElement(_reactNativeSvg.Stop, (0, _extends2["default"])({
    offset: 0,
    stopColor: grey_gainsboro
  }, gradientStart, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  })))))), _react["default"].createElement(_reactNativeSvg.Svg, {
    height: height,
    width: width,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNativeSvg.Path, {
    d: d.value,
    fill: maskFillColor || white_snow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  })));
};

exports.Skeleton = Skeleton;
Skeleton.displayName = 'Skeleton{channelListSkeleton}';
//# sourceMappingURL=Skeleton.js.map