var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelList = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ChannelListHeaderErrorIndicator = require("./ChannelListHeaderErrorIndicator");

var _ChannelListFooterLoadingIndicator = require("./ChannelListFooterLoadingIndicator");

var _ChannelListHeaderNetworkDownIndicator = require("./ChannelListHeaderNetworkDownIndicator");

var _ChannelListLoadingIndicator = require("./ChannelListLoadingIndicator");

var _ChannelListMessenger = require("./ChannelListMessenger");

var _useAddedToChannelNotification = require("./hooks/listeners/useAddedToChannelNotification");

var _useChannelDeleted = require("./hooks/listeners/useChannelDeleted");

var _useChannelHidden = require("./hooks/listeners/useChannelHidden");

var _useChannelTruncated = require("./hooks/listeners/useChannelTruncated");

var _useChannelUpdated = require("./hooks/listeners/useChannelUpdated");

var _useChannelVisible = require("./hooks/listeners/useChannelVisible");

var _useConnectionRecovered = require("./hooks/listeners/useConnectionRecovered");

var _useNewMessage = require("./hooks/listeners/useNewMessage");

var _useNewMessageNotification = require("./hooks/listeners/useNewMessageNotification");

var _useRemovedFromChannelNotification = require("./hooks/listeners/useRemovedFromChannelNotification");

var _useUserPresence = require("./hooks/listeners/useUserPresence");

var _useCreateChannelsContext = require("./hooks/useCreateChannelsContext");

var _usePaginatedChannels2 = require("./hooks/usePaginatedChannels");

var _Skeleton = require("./Skeleton");

var _ChannelPreviewMessenger = require("../ChannelPreview/ChannelPreviewMessenger");

var _EmptyStateIndicator = require("../Indicators/EmptyStateIndicator");

var _LoadingErrorIndicator = require("../Indicators/LoadingErrorIndicator");

var _ChannelsContext = require("../../contexts/channelsContext/ChannelsContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelList/ChannelList.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DEFAULT_FILTERS = {};
var DEFAULT_OPTIONS = {};
var DEFAULT_SORT = {};

var ChannelList = function ChannelList(props) {
  var _props$additionalFlat = props.additionalFlatListProps,
      additionalFlatListProps = _props$additionalFlat === void 0 ? {} : _props$additionalFlat,
      _props$EmptyStateIndi = props.EmptyStateIndicator,
      EmptyStateIndicator = _props$EmptyStateIndi === void 0 ? _EmptyStateIndicator.EmptyStateIndicator : _props$EmptyStateIndi,
      _props$FooterLoadingI = props.FooterLoadingIndicator,
      FooterLoadingIndicator = _props$FooterLoadingI === void 0 ? _ChannelListFooterLoadingIndicator.ChannelListFooterLoadingIndicator : _props$FooterLoadingI,
      _props$filters = props.filters,
      filters = _props$filters === void 0 ? DEFAULT_FILTERS : _props$filters,
      _props$HeaderErrorInd = props.HeaderErrorIndicator,
      HeaderErrorIndicator = _props$HeaderErrorInd === void 0 ? _ChannelListHeaderErrorIndicator.ChannelListHeaderErrorIndicator : _props$HeaderErrorInd,
      _props$HeaderNetworkD = props.HeaderNetworkDownIndicator,
      HeaderNetworkDownIndicator = _props$HeaderNetworkD === void 0 ? _ChannelListHeaderNetworkDownIndicator.ChannelListHeaderNetworkDownIndicator : _props$HeaderNetworkD,
      _props$List = props.List,
      List = _props$List === void 0 ? _ChannelListMessenger.ChannelListMessenger : _props$List,
      ListHeaderComponent = props.ListHeaderComponent,
      _props$LoadingErrorIn = props.LoadingErrorIndicator,
      LoadingErrorIndicator = _props$LoadingErrorIn === void 0 ? _LoadingErrorIndicator.LoadingErrorIndicator : _props$LoadingErrorIn,
      _props$LoadingIndicat = props.LoadingIndicator,
      LoadingIndicator = _props$LoadingIndicat === void 0 ? _ChannelListLoadingIndicator.ChannelListLoadingIndicator : _props$LoadingIndicat,
      _props$loadMoreThresh = props.loadMoreThreshold,
      loadMoreThreshold = _props$loadMoreThresh === void 0 ? 2 : _props$loadMoreThresh,
      _props$lockChannelOrd = props.lockChannelOrder,
      lockChannelOrder = _props$lockChannelOrd === void 0 ? false : _props$lockChannelOrd,
      _props$maxUnreadCount = props.maxUnreadCount,
      maxUnreadCount = _props$maxUnreadCount === void 0 ? 255 : _props$maxUnreadCount,
      _props$numberOfSkelet = props.numberOfSkeletons,
      numberOfSkeletons = _props$numberOfSkelet === void 0 ? 6 : _props$numberOfSkelet,
      onAddedToChannel = props.onAddedToChannel,
      onChannelDeleted = props.onChannelDeleted,
      onChannelHidden = props.onChannelHidden,
      onChannelVisible = props.onChannelVisible,
      onChannelTruncated = props.onChannelTruncated,
      onChannelUpdated = props.onChannelUpdated,
      onMessageNew = props.onMessageNew,
      onRemovedFromChannel = props.onRemovedFromChannel,
      onSelect = props.onSelect,
      _props$options = props.options,
      options = _props$options === void 0 ? DEFAULT_OPTIONS : _props$options,
      _props$Preview = props.Preview,
      Preview = _props$Preview === void 0 ? _ChannelPreviewMessenger.ChannelPreviewMessenger : _props$Preview,
      PreviewAvatar = props.PreviewAvatar,
      PreviewMessage = props.PreviewMessage,
      PreviewStatus = props.PreviewStatus,
      PreviewTitle = props.PreviewTitle,
      PreviewUnreadCount = props.PreviewUnreadCount,
      _setFlatListRef = props.setFlatListRef,
      _props$Skeleton = props.Skeleton,
      Skeleton = _props$Skeleton === void 0 ? _Skeleton.Skeleton : _props$Skeleton,
      _props$sort = props.sort,
      sort = _props$sort === void 0 ? DEFAULT_SORT : _props$sort;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      forceUpdate = _useState2[0],
      setForceUpdate = _useState2[1];

  var _usePaginatedChannels = (0, _usePaginatedChannels2.usePaginatedChannels)({
    filters: filters,
    options: options,
    sort: sort
  }),
      channels = _usePaginatedChannels.channels,
      error = _usePaginatedChannels.error,
      hasNextPage = _usePaginatedChannels.hasNextPage,
      loadingChannels = _usePaginatedChannels.loadingChannels,
      loadingNextPage = _usePaginatedChannels.loadingNextPage,
      loadNextPage = _usePaginatedChannels.loadNextPage,
      refreshing = _usePaginatedChannels.refreshing,
      refreshList = _usePaginatedChannels.refreshList,
      reloadList = _usePaginatedChannels.reloadList,
      setChannels = _usePaginatedChannels.setChannels;

  (0, _useAddedToChannelNotification.useAddedToChannelNotification)({
    onAddedToChannel: onAddedToChannel,
    setChannels: setChannels
  });
  (0, _useChannelDeleted.useChannelDeleted)({
    onChannelDeleted: onChannelDeleted,
    setChannels: setChannels
  });
  (0, _useChannelHidden.useChannelHidden)({
    onChannelHidden: onChannelHidden,
    setChannels: setChannels
  });
  (0, _useChannelTruncated.useChannelTruncated)({
    onChannelTruncated: onChannelTruncated,
    refreshList: refreshList,
    setChannels: setChannels,
    setForceUpdate: setForceUpdate
  });
  (0, _useChannelUpdated.useChannelUpdated)({
    onChannelUpdated: onChannelUpdated,
    setChannels: setChannels
  });
  (0, _useChannelVisible.useChannelVisible)({
    onChannelVisible: onChannelVisible,
    setChannels: setChannels
  });
  (0, _useConnectionRecovered.useConnectionRecovered)({
    refreshList: refreshList,
    setForceUpdate: setForceUpdate
  });
  (0, _useNewMessage.useNewMessage)({
    lockChannelOrder: lockChannelOrder,
    setChannels: setChannels
  });
  (0, _useNewMessageNotification.useNewMessageNotification)({
    onMessageNew: onMessageNew,
    setChannels: setChannels
  });
  (0, _useRemovedFromChannelNotification.useRemovedFromChannelNotification)({
    onRemovedFromChannel: onRemovedFromChannel,
    setChannels: setChannels
  });
  (0, _useUserPresence.useUserPresence)({
    setChannels: setChannels
  });
  var channelsContext = (0, _useCreateChannelsContext.useCreateChannelsContext)({
    additionalFlatListProps: additionalFlatListProps,
    channels: channels,
    EmptyStateIndicator: EmptyStateIndicator,
    error: error,
    FooterLoadingIndicator: FooterLoadingIndicator,
    forceUpdate: forceUpdate,
    hasNextPage: hasNextPage,
    HeaderErrorIndicator: HeaderErrorIndicator,
    HeaderNetworkDownIndicator: HeaderNetworkDownIndicator,
    ListHeaderComponent: ListHeaderComponent,
    loadingChannels: loadingChannels,
    LoadingErrorIndicator: LoadingErrorIndicator,
    LoadingIndicator: LoadingIndicator,
    loadingNextPage: loadingNextPage,
    loadMoreThreshold: loadMoreThreshold,
    loadNextPage: loadNextPage,
    maxUnreadCount: maxUnreadCount,
    numberOfSkeletons: numberOfSkeletons,
    onSelect: onSelect,
    Preview: Preview,
    PreviewAvatar: PreviewAvatar,
    PreviewMessage: PreviewMessage,
    PreviewStatus: PreviewStatus,
    PreviewTitle: PreviewTitle,
    PreviewUnreadCount: PreviewUnreadCount,
    refreshing: refreshing,
    refreshList: refreshList,
    reloadList: reloadList,
    setFlatListRef: function setFlatListRef(ref) {
      if (_setFlatListRef) {
        _setFlatListRef(ref);
      }
    },
    Skeleton: Skeleton
  });
  return _react["default"].createElement(_ChannelsContext.ChannelsProvider, {
    value: channelsContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 5
    }
  }, _react["default"].createElement(List, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 7
    }
  }));
};

exports.ChannelList = ChannelList;
//# sourceMappingURL=ChannelList.js.map