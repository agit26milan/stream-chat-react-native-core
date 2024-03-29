var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoCompleteInput = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _CommandsHeader = require("./CommandsHeader");

var _EmojisHeader = require("./EmojisHeader");

var _ChannelContext = require("../../contexts/channelContext/ChannelContext");

var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");

var _SuggestionsContext = require("../../contexts/suggestionsContext/SuggestionsContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _utils = require("../../utils/utils");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AutoCompleteInput/AutoCompleteInput.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  inputBox: {
    flex: 1,
    fontSize: 14,
    includeFontPadding: false,
    padding: 0,
    paddingTop: 0,
    textAlignVertical: 'center'
  }
});

var computeCaretPosition = function computeCaretPosition(token, startOfTokenPosition) {
  return startOfTokenPosition + token.length;
};

var isCommand = function isCommand(text) {
  return text[0] === '/' && text.split(' ').length <= 1;
};

var AutoCompleteInputWithContext = function AutoCompleteInputWithContext(props) {
  var additionalTextInputProps = props.additionalTextInputProps,
      autoCompleteSuggestionsLimit = props.autoCompleteSuggestionsLimit,
      closeSuggestions = props.closeSuggestions,
      giphyActive = props.giphyActive,
      giphyEnabled = props.giphyEnabled,
      maxMessageLength = props.maxMessageLength,
      mentionAllAppUsersEnabled = props.mentionAllAppUsersEnabled,
      mentionAllAppUsersQuery = props.mentionAllAppUsersQuery,
      numberOfLines = props.numberOfLines,
      onChange = props.onChange,
      openSuggestions = props.openSuggestions,
      setGiphyActive = props.setGiphyActive,
      setInputBoxRef = props.setInputBoxRef,
      setShowMoreOptions = props.setShowMoreOptions,
      t = props.t,
      text = props.text,
      triggerSettings = props.triggerSettings,
      updateSuggestionsContext = props.updateSuggestions;
  var isTrackingStarted = (0, _react.useRef)(false);
  var selectionEnd = (0, _react.useRef)(0);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      textHeight = _useState2[0],
      setTextHeight = _useState2[1];

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      black = _useTheme$theme$color.black,
      grey = _useTheme$theme$color.grey,
      inputBox = _useTheme$theme.messageInput.inputBox;

  var handleChange = function handleChange(newText) {
    var fromUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!fromUpdate) {
      onChange(newText);
    } else {
      handleSuggestionsThrottled(newText);
    }
  };

  (0, _react.useEffect)(function () {
    handleChange(text, true);
  }, [text]);

  var startTracking = function startTracking(trigger) {
    var triggerSetting = triggerSettings[trigger];

    if (triggerSetting) {
      isTrackingStarted.current = true;
      var Component = triggerSetting.component;
      openSuggestions(typeof Component === 'string' ? Component : _react["default"].createElement(Component, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 53
        }
      }), trigger === ':' ? _react["default"].createElement(_EmojisHeader.EmojisHeader, {
        title: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }
      }) : trigger === '/' ? _react["default"].createElement(_CommandsHeader.CommandsHeader, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }
      }) : undefined);
    }
  };

  var stopTracking = function stopTracking() {
    isTrackingStarted.current = false;
    closeSuggestions();
  };

  var updateSuggestions = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(_ref) {
      var query, trigger, triggerSetting, _triggerSetting, _triggerSetting2;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _ref.query, trigger = _ref.trigger;

              if (!(0, _utils.isMentionTrigger)(trigger)) {
                _context.next = 8;
                break;
              }

              triggerSetting = triggerSettings[trigger];

              if (!triggerSetting) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return triggerSetting.dataProvider(query, text, function (data, queryCallback) {
                if (query === queryCallback) {
                  updateSuggestionsContext({
                    data: data,
                    onSelect: function onSelect(item) {
                      return onSelectSuggestion({
                        item: item,
                        trigger: trigger
                      });
                    }
                  });
                }
              }, {
                limit: autoCompleteSuggestionsLimit,
                mentionAllAppUsersEnabled: mentionAllAppUsersEnabled,
                mentionAllAppUsersQuery: mentionAllAppUsersQuery
              });

            case 6:
              _context.next = 19;
              break;

            case 8:
              if (!(0, _utils.isCommandTrigger)(trigger)) {
                _context.next = 15;
                break;
              }

              _triggerSetting = triggerSettings[trigger];

              if (!_triggerSetting) {
                _context.next = 13;
                break;
              }

              _context.next = 13;
              return _triggerSetting.dataProvider(query, text, function (data, queryCallback) {
                if (query !== queryCallback) {
                  return;
                }

                updateSuggestionsContext({
                  data: data,
                  onSelect: function onSelect(item) {
                    return onSelectSuggestion({
                      item: item,
                      trigger: trigger
                    });
                  }
                });
              }, {
                limit: autoCompleteSuggestionsLimit
              });

            case 13:
              _context.next = 19;
              break;

            case 15:
              _triggerSetting2 = triggerSettings[trigger];

              if (!_triggerSetting2) {
                _context.next = 19;
                break;
              }

              _context.next = 19;
              return _triggerSetting2.dataProvider(query, text, function (data, queryCallback) {
                if (query !== queryCallback) {
                  return;
                }

                updateSuggestionsContext({
                  data: data,
                  onSelect: function onSelect(item) {
                    return onSelectSuggestion({
                      item: item,
                      trigger: trigger
                    });
                  }
                }, _react["default"].createElement(_EmojisHeader.EmojisHeader, {
                  title: query,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 13
                  }
                }));
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateSuggestions(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSelectionChange = function handleSelectionChange(_ref3) {
    var end = _ref3.nativeEvent.selection.end;
    selectionEnd.current = end;
  };

  var onSelectSuggestion = function onSelectSuggestion(_ref4) {
    var item = _ref4.item,
        trigger = _ref4.trigger;

    if (!trigger || !triggerSettings[trigger]) {
      return;
    }

    var newTokenString = '';

    if ((0, _utils.isCommandTrigger)(trigger) && (0, _SuggestionsContext.isSuggestionCommand)(item)) {
      var triggerSetting = triggerSettings[trigger];

      if (triggerSetting) {
        newTokenString = triggerSetting.output(item).text + " ";
      }
    }

    if ((0, _utils.isEmojiTrigger)(trigger) && (0, _SuggestionsContext.isSuggestionEmoji)(item)) {
      var _triggerSetting3 = triggerSettings[trigger];

      if (_triggerSetting3) {
        newTokenString = _triggerSetting3.output(item).text + " ";
      }
    }

    if ((0, _utils.isMentionTrigger)(trigger) && (0, _SuggestionsContext.isSuggestionUser)(item)) {
      var _triggerSetting4 = triggerSettings[trigger];

      if (_triggerSetting4) {
        newTokenString = _triggerSetting4.output(item).text + " ";
      }
    }

    var textToModify = text.slice(0, selectionEnd.current);
    var startOfTokenPosition = textToModify.lastIndexOf(trigger, selectionEnd.current);
    var newCaretPosition = computeCaretPosition(newTokenString, startOfTokenPosition);
    var modifiedText = "" + textToModify.substring(0, startOfTokenPosition) + newTokenString;
    stopTracking();
    var newText = text.replace(textToModify, modifiedText);

    if (giphyEnabled && newText.startsWith('/giphy ')) {
      onChange(newText.slice(7));
      setGiphyActive(true);
    } else {
      onChange(newText);
    }

    selectionEnd.current = newCaretPosition || 0;

    if ((0, _utils.isMentionTrigger)(trigger) && (0, _SuggestionsContext.isSuggestionUser)(item)) {
      var _triggerSetting5 = triggerSettings[trigger];

      if (_triggerSetting5) {
        _triggerSetting5.callback(item);
      }
    }
  };

  var handleCommand = function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(text) {
      var actualToken;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (isCommand(text)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", false);

            case 2:
              if (!isTrackingStarted.current) {
                startTracking('/');
              }

              actualToken = text.trim().slice(1);
              _context2.next = 6;
              return updateSuggestions({
                query: actualToken,
                trigger: '/'
              });

            case 6:
              return _context2.abrupt("return", true);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleCommand(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleMentions = function handleMentions(_ref6) {
    var tokenMatch = _ref6.tokenMatch;
    var lastToken = tokenMatch == null ? void 0 : tokenMatch[tokenMatch.length - 1];
    var handleMentionsTrigger = lastToken && Object.keys(triggerSettings).find(function (trigger) {
      return trigger === lastToken[0];
    }) || null;

    if (!lastToken || lastToken.length <= 0) {
      stopTracking();
      return;
    }

    var actualToken = lastToken.slice(1);

    if (!handleMentionsTrigger) {
      return;
    }

    if (!isTrackingStarted.current) {
      startTracking('@');
    }

    updateSuggestions({
      query: actualToken,
      trigger: '@'
    });
  };

  var handleEmojis = function handleEmojis(_ref7) {
    var tokenMatch = _ref7.tokenMatch;
    var lastToken = tokenMatch == null ? void 0 : tokenMatch[tokenMatch.length - 1].trim();
    var handleEmojisTrigger = lastToken && Object.keys(triggerSettings).find(function (trigger) {
      return trigger === lastToken[0];
    }) || null;

    if (!lastToken || lastToken.length <= 0) {
      stopTracking();
      return;
    }

    var actualToken = lastToken.slice(1);

    if (!handleEmojisTrigger) {
      return;
    }

    if (!isTrackingStarted.current) {
      startTracking(':');
    }

    updateSuggestions({
      query: actualToken,
      trigger: ':'
    });
  };

  var handleSuggestions = function () {
    var _ref8 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(text) {
      var mentionTokenMatch, emojiTokenMatch;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(/\s/.test(text.slice(selectionEnd.current - 1, selectionEnd.current)) && isTrackingStarted.current)) {
                _context3.next = 4;
                break;
              }

              stopTracking();
              _context3.next = 12;
              break;

            case 4:
              _context3.t0 = giphyEnabled;

              if (!_context3.t0) {
                _context3.next = 9;
                break;
              }

              _context3.next = 8;
              return handleCommand(text);

            case 8:
              _context3.t0 = !_context3.sent;

            case 9:
              if (!_context3.t0) {
                _context3.next = 12;
                break;
              }

              mentionTokenMatch = text.slice(0, selectionEnd.current).match(/(?!^|\W)?@[^\s@]*\s?[^\s@]*$/g);

              if (mentionTokenMatch) {
                handleMentions({
                  tokenMatch: mentionTokenMatch
                });
              } else {
                emojiTokenMatch = text.slice(0, selectionEnd.current).match(/(?!^|\W)?:\w{2,}[^\s]*\s?[^\s]*$/g);
                handleEmojis({
                  tokenMatch: emojiTokenMatch
                });
              }

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleSuggestions(_x3) {
      return _ref8.apply(this, arguments);
    };
  }();

  var handleSuggestionsThrottled = (0, _throttle["default"])(handleSuggestions, 100, {
    leading: false
  });
  return _react["default"].createElement(_reactNative.TextInput, (0, _extends2["default"])({
    maxLength: maxMessageLength,
    multiline: true,
    onChangeText: function onChangeText(newText) {
      if (giphyEnabled && newText.startsWith('/giphy ')) {
        handleChange(newText.slice(7));
        setGiphyActive(true);
      } else {
        handleChange(newText);
      }
    },
    onContentSizeChange: function onContentSizeChange(_ref9) {
      var height = _ref9.nativeEvent.contentSize.height;

      if (!textHeight) {
        setTextHeight(height);
      }
    },
    onSelectionChange: handleSelectionChange,
    placeholder: giphyActive ? t('Search GIFs') : t('Send a message'),
    placeholderTextColor: grey,
    ref: setInputBoxRef,
    style: [styles.inputBox, {
      color: black,
      maxHeight: (textHeight || 17) * numberOfLines
    }, inputBox],
    testID: "auto-complete-text-input",
    value: text
  }, additionalTextInputProps, {
    onBlur: function onBlur(event) {
      if (additionalTextInputProps != null && additionalTextInputProps.onBlur) {
        additionalTextInputProps == null ? void 0 : additionalTextInputProps.onBlur(event);
      }

      setShowMoreOptions(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 5
    }
  }));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevGiphyActive = prevProps.giphyActive,
      prevT = prevProps.t,
      prevText = prevProps.text;
  var nextGiphyActive = nextProps.giphyActive,
      nextT = nextProps.t,
      nextText = nextProps.text;
  var giphyActiveEqual = prevGiphyActive === nextGiphyActive;
  if (!giphyActiveEqual) return false;
  var tEqual = prevT === nextT;
  if (!tEqual) return false;
  var textEqual = prevText === nextText;
  if (!textEqual) return false;
  return true;
};

var MemoizedAutoCompleteInput = _react["default"].memo(AutoCompleteInputWithContext, areEqual);

var AutoCompleteInput = function AutoCompleteInput(props) {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      giphyEnabled = _useChannelContext.giphyEnabled;

  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
      additionalTextInputProps = _useMessageInputConte.additionalTextInputProps,
      autoCompleteSuggestionsLimit = _useMessageInputConte.autoCompleteSuggestionsLimit,
      giphyActive = _useMessageInputConte.giphyActive,
      maxMessageLength = _useMessageInputConte.maxMessageLength,
      mentionAllAppUsersEnabled = _useMessageInputConte.mentionAllAppUsersEnabled,
      mentionAllAppUsersQuery = _useMessageInputConte.mentionAllAppUsersQuery,
      numberOfLines = _useMessageInputConte.numberOfLines,
      onChange = _useMessageInputConte.onChange,
      setGiphyActive = _useMessageInputConte.setGiphyActive,
      setInputBoxRef = _useMessageInputConte.setInputBoxRef,
      setShowMoreOptions = _useMessageInputConte.setShowMoreOptions,
      text = _useMessageInputConte.text,
      triggerSettings = _useMessageInputConte.triggerSettings;

  var _useSuggestionsContex = (0, _SuggestionsContext.useSuggestionsContext)(),
      closeSuggestions = _useSuggestionsContex.closeSuggestions,
      openSuggestions = _useSuggestionsContex.openSuggestions,
      updateSuggestions = _useSuggestionsContex.updateSuggestions;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  return _react["default"].createElement(MemoizedAutoCompleteInput, (0, _extends2["default"])({
    additionalTextInputProps: additionalTextInputProps,
    autoCompleteSuggestionsLimit: autoCompleteSuggestionsLimit,
    closeSuggestions: closeSuggestions,
    giphyActive: giphyActive,
    giphyEnabled: giphyEnabled,
    maxMessageLength: maxMessageLength,
    mentionAllAppUsersEnabled: mentionAllAppUsersEnabled,
    mentionAllAppUsersQuery: mentionAllAppUsersQuery,
    numberOfLines: numberOfLines,
    onChange: onChange,
    openSuggestions: openSuggestions,
    setGiphyActive: setGiphyActive,
    setInputBoxRef: setInputBoxRef,
    setShowMoreOptions: setShowMoreOptions,
    t: t,
    text: text,
    triggerSettings: triggerSettings,
    updateSuggestions: updateSuggestions
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 5
    }
  }));
};

exports.AutoCompleteInput = AutoCompleteInput;
AutoCompleteInput.displayName = 'AutoCompleteInput{messageInput{inputBox}}';
//# sourceMappingURL=AutoCompleteInput.js.map