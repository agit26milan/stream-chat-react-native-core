var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Thread = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireWildcard(require("react"));

var _ThreadFooterComponent = require("./components/ThreadFooterComponent");

var _MessageInput = require("../MessageInput/MessageInput");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _ThreadContext = require("../../contexts/threadContext/ThreadContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Thread/Thread.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ThreadWithContext = function ThreadWithContext(props) {
  var additionalMessageInputProps = props.additionalMessageInputProps,
      additionalMessageListProps = props.additionalMessageListProps,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
      closeThread = props.closeThread,
      _props$closeThreadOnD = props.closeThreadOnDismount,
      closeThreadOnDismount = _props$closeThreadOnD === void 0 ? true : _props$closeThreadOnD,
      disabled = props.disabled,
      loadMoreThread = props.loadMoreThread,
      _props$MessageInput = props.MessageInput,
      MessageInput = _props$MessageInput === void 0 ? _MessageInput.MessageInput : _props$MessageInput,
      MessageList = props.MessageList,
      onThreadDismount = props.onThreadDismount,
      thread = props.thread;
  (0, _react.useEffect)(function () {
    var loadMoreThreadAsync = function () {
      var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return loadMoreThread();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function loadMoreThreadAsync() {
        return _ref.apply(this, arguments);
      };
    }();

    if (thread != null && thread.id && thread.reply_count) {
      loadMoreThreadAsync();
    }
  }, []);
  (0, _react.useEffect)(function () {
    return function () {
      if (closeThreadOnDismount) {
        closeThread();
      }

      if (onThreadDismount) {
        onThreadDismount();
      }
    };
  }, []);
  if (!thread) return null;
  return _react["default"].createElement(_react["default"].Fragment, {
    key: "thread-" + thread.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, _react["default"].createElement(MessageList, (0, _extends2["default"])({
    FooterComponent: _ThreadFooterComponent.ThreadFooterComponent,
    threadList: true
  }, additionalMessageListProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  })), _react["default"].createElement(MessageInput, (0, _extends2["default"])({
    additionalTextInputProps: {
      autoFocus: autoFocus,
      editable: !disabled
    },
    threadList: true
  }, additionalMessageInputProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  })));
};

var Thread = function Thread(props) {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      MessageList = _useMessagesContext.MessageList;

  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
      closeThread = _useThreadContext.closeThread,
      loadMoreThread = _useThreadContext.loadMoreThread,
      reloadThread = _useThreadContext.reloadThread,
      thread = _useThreadContext.thread;

  return _react["default"].createElement(ThreadWithContext, (0, _extends2["default"])({
    client: client,
    closeThread: closeThread,
    loadMoreThread: loadMoreThread,
    MessageList: MessageList,
    reloadThread: reloadThread,
    thread: thread
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 5
    }
  }));
};

exports.Thread = Thread;
//# sourceMappingURL=Thread.js.map