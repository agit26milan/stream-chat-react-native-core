var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayReactionList = exports.ReactionButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

var _MessageOverlayContext = require("../../contexts/messageOverlayContext/MessageOverlayContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _icons = require("../../icons");

var _native = require("../../native");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageOverlay/OverlayReactionList.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AnimatedCircle = _reactNativeReanimated["default"].createAnimatedComponent ? _reactNativeReanimated["default"].createAnimatedComponent(_reactNativeSvg.Circle) : _reactNativeSvg.Circle;

var styles = _reactNative.StyleSheet.create({
  notLastReaction: {
    marginRight: 16
  },
  reactionList: {
    alignItems: 'center',
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: 'absolute'
  },
  selectedIcon: {
    position: 'absolute'
  }
});

var reactionData = [{
  Icon: _icons.LoveReaction,
  type: 'love'
}, {
  Icon: _icons.ThumbsUpReaction,
  type: 'like'
}, {
  Icon: _icons.ThumbsDownReaction,
  type: 'sad'
}, {
  Icon: _icons.LOLReaction,
  type: 'haha'
}, {
  Icon: _icons.WutReaction,
  type: 'wow'
}];

var ReactionButton = function ReactionButton(props) {
  var handleReaction = props.handleReaction,
      Icon = props.Icon,
      index = props.index,
      numberOfReactions = props.numberOfReactions,
      ownReactionTypes = props.ownReactionTypes,
      setOverlay = props.setOverlay,
      showScreen = props.showScreen,
      type = props.type;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_blue = _useTheme$theme$color.accent_blue,
      grey = _useTheme$theme$color.grey,
      _useTheme$theme$overl = _useTheme$theme.overlay.reactionsList,
      reaction = _useTheme$theme$overl.reaction,
      reactionSize = _useTheme$theme$overl.reactionSize;

  var selected = ownReactionTypes.includes(type);
  var animationScale = (0, _reactNativeReanimated.useSharedValue)(0);
  var hasShown = (0, _reactNativeReanimated.useSharedValue)(0);
  var scale = (0, _reactNativeReanimated.useSharedValue)(1);
  var selectedOpacity = (0, _reactNativeReanimated.useSharedValue)(selected ? 1 : 0);
  var onTap = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onEnd: function onEnd() {
      (0, _reactNativeReanimated.runOnJS)(_native.triggerHaptic)('impactLight');
      selectedOpacity.value = (0, _reactNativeReanimated.withTiming)(selected ? 0 : 1, {
        duration: 250
      }, function () {
        if (handleReaction) {
          (0, _reactNativeReanimated.runOnJS)(handleReaction)(type);
        }

        (0, _reactNativeReanimated.runOnJS)(setOverlay)('none');
      });
    },
    onFinish: function onFinish() {
      (0, _reactNativeReanimated.cancelAnimation)(scale);
      scale.value = (0, _reactNativeReanimated.withTiming)(1, {
        duration: 100
      });
    },
    onStart: function onStart() {
      (0, _reactNativeReanimated.cancelAnimation)(scale);
      scale.value = (0, _reactNativeReanimated.withTiming)(1.5, {
        duration: 100
      });
    }
  }, [handleReaction, selected, setOverlay, type]);
  (0, _reactNativeReanimated.useAnimatedReaction)(function () {
    if (showScreen.value > 0.8 && hasShown.value === 0) {
      return 1;
    }

    return 0;
  }, function (result) {
    if (hasShown.value === 0 && result !== 0) {
      hasShown.value = 1;
      animationScale.value = (0, _reactNativeReanimated.withSequence)((0, _reactNativeReanimated.withDelay)(60 * (numberOfReactions - (index + 1)), (0, _reactNativeReanimated.withTiming)(0.1, {
        duration: 50
      })), (0, _reactNativeReanimated.withTiming)(1.5, {
        duration: 250
      }), (0, _reactNativeReanimated.withTiming)(1, {
        duration: 250
      }));
    }
  }, [index, numberOfReactions]);
  var iconStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        scale: animationScale.value
      }, {
        scale: scale.value
      }]
    };
  }, []);
  var selectedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: selectedOpacity.value
    };
  });
  return _react["default"].createElement(_reactNativeGestureHandler.TapGestureHandler, {
    hitSlop: {
      bottom: Number(reaction.paddingVertical || 0) || Number(reaction.paddingBottom || 0) || styles.reactionList.paddingVertical,
      left: (Number(reaction.paddingHorizontal || 0) || Number(reaction.paddingLeft || 0) || styles.notLastReaction.marginRight) / 2,
      right: (Number(reaction.paddingHorizontal || 0) || Number(reaction.paddingRight || 0) || styles.notLastReaction.marginRight) / 2,
      top: Number(reaction.paddingVertical || 0) || Number(reaction.paddingTop || 0) || styles.reactionList.paddingVertical
    },
    maxDurationMs: 3000,
    onHandlerStateChange: onTap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [index !== numberOfReactions - 1 ? styles.notLastReaction : {}, reaction, iconStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }
  }, _react["default"].createElement(Icon, {
    height: reactionSize,
    pathFill: grey,
    width: reactionSize,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 9
    }
  }), _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [styles.selectedIcon, selectedStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  }, _react["default"].createElement(Icon, {
    height: reactionSize,
    pathFill: accent_blue,
    width: reactionSize,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 11
    }
  }))));
};

exports.ReactionButton = ReactionButton;

var OverlayReactionListWithContext = function OverlayReactionListWithContext(props) {
  var alignment = props.alignment,
      fill = props.fill,
      handleReaction = props.handleReaction,
      messageLayout = props.messageLayout,
      ownReactionTypes = props.ownReactionTypes,
      setReactionListHeight = props.setReactionListHeight,
      showScreen = props.showScreen,
      setOverlay = props.setOverlay,
      _props$supportedReact = props.supportedReactions,
      supportedReactions = _props$supportedReact === void 0 ? reactionData : _props$supportedReact;

  var _useTheme2 = (0, _ThemeContext.useTheme)(),
      _useTheme2$theme = _useTheme2.theme,
      white_snow = _useTheme2$theme.colors.white_snow,
      _useTheme2$theme$over = _useTheme2$theme.overlay,
      screenPadding = _useTheme2$theme$over.padding,
      _useTheme2$theme$over2 = _useTheme2$theme$over.reactionsList,
      radius = _useTheme2$theme$over2.radius,
      reactionList = _useTheme2$theme$over2.reactionList;

  var reactionListHeight = (0, _reactNativeReanimated.useSharedValue)(0);
  var reactionBubbleWidth = (0, _reactNativeReanimated.useSharedValue)(0);
  var reactionListLayout = (0, _reactNativeReanimated.useSharedValue)({
    height: 0,
    width: 0
  });

  var _useWindowDimensions = (0, _reactNative.useWindowDimensions)(),
      width = _useWindowDimensions.width;

  var animatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    var borderRadius = reactionList.borderRadius || styles.reactionList.borderRadius;
    var insideLeftBound = messageLayout.value.x - reactionListLayout.value.width + borderRadius > screenPadding;
    var insideRightBound = messageLayout.value.x + borderRadius < width - screenPadding;
    var left = !insideLeftBound ? screenPadding : !insideRightBound ? width - screenPadding - reactionListLayout.value.width : messageLayout.value.x - reactionListLayout.value.width + borderRadius;
    var top = messageLayout.value.y - reactionListLayout.value.height - radius * 2;
    return {
      left: left,
      top: top
    };
  });
  var animatedBigCircleProps = (0, _reactNativeReanimated.useAnimatedProps)(function () {
    return {
      cx: messageLayout.value.x - radius * 3,
      cy: messageLayout.value.y - radius * 3,
      fill: fill || white_snow,
      r: radius * 2
    };
  });
  var animateSmallCircleProps = (0, _reactNativeReanimated.useAnimatedProps)(function () {
    return {
      cx: messageLayout.value.x - radius,
      cy: messageLayout.value.y,
      fill: fill || white_snow,
      r: radius
    };
  });
  var showScreenStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        translateY: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [-reactionListHeight.value / 2, 0])
      }, {
        translateX: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [alignment === 'left' ? -reactionBubbleWidth.value / 2 : reactionBubbleWidth.value / 2, 0])
      }, {
        scale: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 0.8, 1], [0, 0, 1])
      }]
    };
  }, [alignment]);
  var numberOfReactions = supportedReactions.length;
  return _react["default"].createElement(_reactNative.View, {
    style: _reactNative.StyleSheet.absoluteFill,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    onLayout: function onLayout(_ref) {
      var layout = _ref.nativeEvent.layout;
      reactionBubbleWidth.value = layout.width;
    },
    style: showScreenStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNativeSvg["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 9
    }
  }, _react["default"].createElement(AnimatedCircle, {
    animatedProps: animatedBigCircleProps,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 11
    }
  }), _react["default"].createElement(AnimatedCircle, {
    animatedProps: animateSmallCircleProps,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 11
    }
  })), _react["default"].createElement(_reactNativeReanimated["default"].View, {
    onLayout: function onLayout(_ref2) {
      var _ref2$nativeEvent$lay = _ref2.nativeEvent.layout,
          height = _ref2$nativeEvent$lay.height,
          layoutWidth = _ref2$nativeEvent$lay.width;
      reactionListLayout.value = {
        height: height,
        width: layoutWidth
      };
      reactionListHeight.value = height;
      setReactionListHeight(height);
    },
    style: [styles.reactionList, {
      backgroundColor: white_snow
    }, animatedStyle, reactionList],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 9
    }
  }, supportedReactions == null ? void 0 : supportedReactions.map(function (_ref3, index) {
    var Icon = _ref3.Icon,
        type = _ref3.type;
    return _react["default"].createElement(ReactionButton, {
      handleReaction: handleReaction,
      Icon: Icon,
      index: index,
      key: type + "_" + index,
      numberOfReactions: numberOfReactions,
      ownReactionTypes: ownReactionTypes,
      setOverlay: setOverlay,
      showScreen: showScreen,
      type: type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 13
      }
    });
  }))));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevAlignment = prevProps.alignment,
      prevOwnReactionTypes = prevProps.ownReactionTypes;
  var nextAlignment = nextProps.alignment,
      nextOwnReactionTypes = nextProps.ownReactionTypes;
  var alignmentEqual = prevAlignment === nextAlignment;
  if (!alignmentEqual) return false;
  var ownReactionTypesEqual = prevOwnReactionTypes.length === nextOwnReactionTypes.length;
  if (!ownReactionTypesEqual) return false;
  return true;
};

var MemoizedOverlayReactionList = _react["default"].memo(OverlayReactionListWithContext, areEqual);

var OverlayReactionList = function OverlayReactionList(props) {
  var _useMessageOverlayCon = (0, _MessageOverlayContext.useMessageOverlayContext)(),
      data = _useMessageOverlayCon.data;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      supportedReactions = _useMessagesContext.supportedReactions;

  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
      setOverlay = _useOverlayContext.setOverlay;

  return _react["default"].createElement(MemoizedOverlayReactionList, (0, _extends2["default"])({}, data || {}, {
    setOverlay: setOverlay,
    supportedReactions: supportedReactions
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 5
    }
  }));
};

exports.OverlayReactionList = OverlayReactionList;
OverlayReactionList.displayName = 'OverlayReactionList{overlay{reactionList}}';
//# sourceMappingURL=OverlayReactionList.js.map