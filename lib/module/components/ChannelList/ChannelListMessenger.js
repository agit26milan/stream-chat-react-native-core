var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelListMessenger = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _ChannelPreview = require("../ChannelPreview/ChannelPreview");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _ChannelsContext = require("../../contexts/channelsContext/ChannelsContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelList/ChannelListMessenger.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  flatList: {
    flex: 1
  },
  flatListContentContainer: {
    flexGrow: 1
  },
  statusIndicator: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
});

var StatusIndicator = function StatusIndicator() {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
      isOnline = _useChatContext.isOnline;

  var _useChannelsContext = (0, _ChannelsContext.useChannelsContext)(),
      error = _useChannelsContext.error,
      HeaderErrorIndicator = _useChannelsContext.HeaderErrorIndicator,
      HeaderNetworkDownIndicator = _useChannelsContext.HeaderNetworkDownIndicator,
      loadingChannels = _useChannelsContext.loadingChannels,
      refreshList = _useChannelsContext.refreshList;

  if (loadingChannels) return null;

  if (!isOnline) {
    return _react["default"].createElement(_reactNative.View, {
      style: styles.statusIndicator,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }
    }, _react["default"].createElement(HeaderNetworkDownIndicator, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }));
  } else if (error) {
    return _react["default"].createElement(_reactNative.View, {
      style: styles.statusIndicator,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }
    }, _react["default"].createElement(HeaderErrorIndicator, {
      onPress: refreshList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }
    }));
  }

  return null;
};

var renderItem = function renderItem(_ref) {
  var item = _ref.item;
  return _react["default"].createElement(_ChannelPreview.ChannelPreview, {
    channel: item,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  });
};

var keyExtractor = function keyExtractor(item) {
  return item.cid;
};

var ChannelListMessengerWithContext = function ChannelListMessengerWithContext(props) {
  var additionalFlatListProps = props.additionalFlatListProps,
      channels = props.channels,
      EmptyStateIndicator = props.EmptyStateIndicator,
      error = props.error,
      FooterLoadingIndicator = props.FooterLoadingIndicator,
      forceUpdate = props.forceUpdate,
      ListHeaderComponent = props.ListHeaderComponent,
      loadingChannels = props.loadingChannels,
      LoadingErrorIndicator = props.LoadingErrorIndicator,
      LoadingIndicator = props.LoadingIndicator,
      loadingNextPage = props.loadingNextPage,
      loadMoreThreshold = props.loadMoreThreshold,
      loadNextPage = props.loadNextPage,
      refreshing = props.refreshing,
      refreshList = props.refreshList,
      reloadList = props.reloadList,
      setFlatListRef = props.setFlatListRef;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$chann = _useTheme$theme.channelListMessenger,
      flatList = _useTheme$theme$chann.flatList,
      flatListContent = _useTheme$theme$chann.flatListContent,
      white_snow = _useTheme$theme.colors.white_snow;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!!loadingChannels !== loading) {
      setLoading(!!loadingChannels);
    }
  }, [loading, loadingChannels]);

  if (error && !refreshing && !loadingChannels && !(channels != null && channels.length)) {
    return _react["default"].createElement(LoadingErrorIndicator, {
      error: error,
      listType: "channel",
      loadNextPage: loadNextPage,
      retry: reloadList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 7
      }
    });
  }

  var onEndReached = function onEndReached() {
    if (loadNextPage) {
      loadNextPage();
    }
  };

  var ListFooterComponent = function ListFooterComponent() {
    return channels.length && ListHeaderComponent ? _react["default"].createElement(ListHeaderComponent, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 46
      }
    }) : null;
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactNative.FlatList, (0, _extends2["default"])({
    contentContainerStyle: [styles.flatListContentContainer, {
      backgroundColor: white_snow
    }, flatListContent],
    data: channels,
    extraData: forceUpdate,
    keyExtractor: keyExtractor,
    ListEmptyComponent: loading ? _react["default"].createElement(LoadingIndicator, {
      listType: "channel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 13
      }
    }) : _react["default"].createElement(EmptyStateIndicator, {
      listType: "channel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }
    }),
    ListFooterComponent: loadingNextPage ? _react["default"].createElement(FooterLoadingIndicator, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 48
      }
    }) : undefined,
    ListHeaderComponent: ListFooterComponent,
    onEndReached: onEndReached,
    onEndReachedThreshold: loadMoreThreshold,
    ref: setFlatListRef,
    refreshControl: _react["default"].createElement(_reactNative.RefreshControl, {
      onRefresh: refreshList,
      refreshing: refreshing,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 25
      }
    }),
    renderItem: renderItem,
    style: [styles.flatList, {
      backgroundColor: white_snow
    }, flatList],
    testID: "channel-list-messenger"
  }, additionalFlatListProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  })), _react["default"].createElement(StatusIndicator, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }
  }));
};

var ChannelListMessenger = function ChannelListMessenger(props) {
  var _useChannelsContext2 = (0, _ChannelsContext.useChannelsContext)(),
      additionalFlatListProps = _useChannelsContext2.additionalFlatListProps,
      channels = _useChannelsContext2.channels,
      EmptyStateIndicator = _useChannelsContext2.EmptyStateIndicator,
      error = _useChannelsContext2.error,
      FooterLoadingIndicator = _useChannelsContext2.FooterLoadingIndicator,
      forceUpdate = _useChannelsContext2.forceUpdate,
      ListHeaderComponent = _useChannelsContext2.ListHeaderComponent,
      loadingChannels = _useChannelsContext2.loadingChannels,
      LoadingErrorIndicator = _useChannelsContext2.LoadingErrorIndicator,
      LoadingIndicator = _useChannelsContext2.LoadingIndicator,
      loadingNextPage = _useChannelsContext2.loadingNextPage,
      loadMoreThreshold = _useChannelsContext2.loadMoreThreshold,
      loadNextPage = _useChannelsContext2.loadNextPage,
      refreshing = _useChannelsContext2.refreshing,
      refreshList = _useChannelsContext2.refreshList,
      reloadList = _useChannelsContext2.reloadList,
      setFlatListRef = _useChannelsContext2.setFlatListRef;

  return _react["default"].createElement(ChannelListMessengerWithContext, (0, _extends2["default"])({
    additionalFlatListProps: additionalFlatListProps,
    channels: channels,
    EmptyStateIndicator: EmptyStateIndicator,
    error: error,
    FooterLoadingIndicator: FooterLoadingIndicator,
    forceUpdate: forceUpdate,
    ListHeaderComponent: ListHeaderComponent,
    loadingChannels: loadingChannels,
    LoadingErrorIndicator: LoadingErrorIndicator,
    LoadingIndicator: LoadingIndicator,
    loadingNextPage: loadingNextPage,
    loadMoreThreshold: loadMoreThreshold,
    loadNextPage: loadNextPage,
    refreshing: refreshing,
    refreshList: refreshList,
    reloadList: reloadList,
    setFlatListRef: setFlatListRef
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 5
    }
  }));
};

exports.ChannelListMessenger = ChannelListMessenger;
ChannelListMessenger.displayName = 'ChannelListMessenger{channelListMessenger}';
//# sourceMappingURL=ChannelListMessenger.js.map