var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachmentSelectionBar = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _AttachmentPickerContext = require("../../../contexts/attachmentPickerContext/AttachmentPickerContext");

var _MessageInputContext = require("../../../contexts/messageInputContext/MessageInputContext");

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _native = require("../../../native");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AttachmentPicker/components/AttachmentSelectionBar.tsx";

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 6
  },
  icon: {
    marginHorizontal: 12
  }
});

var AttachmentSelectionBar = function AttachmentSelectionBar() {
  var _useAttachmentPickerC = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
      attachmentSelectionBarHeight = _useAttachmentPickerC.attachmentSelectionBarHeight,
      CameraSelectorIcon = _useAttachmentPickerC.CameraSelectorIcon,
      closePicker = _useAttachmentPickerC.closePicker,
      FileSelectorIcon = _useAttachmentPickerC.FileSelectorIcon,
      ImageSelectorIcon = _useAttachmentPickerC.ImageSelectorIcon,
      selectedPicker = _useAttachmentPickerC.selectedPicker,
      setSelectedImages = _useAttachmentPickerC.setSelectedImages,
      setSelectedPicker = _useAttachmentPickerC.setSelectedPicker;

  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
      compressImageQuality = _useMessageInputConte.compressImageQuality,
      hasFilePicker = _useMessageInputConte.hasFilePicker,
      imageUploads = _useMessageInputConte.imageUploads,
      pickFile = _useMessageInputConte.pickFile;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme$attac = _useTheme.theme.attachmentSelectionBar,
      container = _useTheme$theme$attac.container,
      icon = _useTheme$theme$attac.icon;

  var setPicker = function setPicker(selection) {
    if (selectedPicker === selection) {
      setSelectedPicker(undefined);
      closePicker();
    } else {
      setSelectedPicker(selection);
    }
  };

  var openFilePicker = function openFilePicker() {
    setSelectedPicker(undefined);
    closePicker();
    pickFile();
  };

  var takeAndUploadImage = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var photo;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSelectedPicker(undefined);
              closePicker();
              _context.next = 4;
              return (0, _native.takePhoto)({
                compressImageQuality: compressImageQuality
              });

            case 4:
              photo = _context.sent;

              if (!photo.cancelled) {
                setSelectedImages(function (images) {
                  return [].concat((0, _toConsumableArray2["default"])(images), [photo]);
                });
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function takeAndUploadImage() {
      return _ref.apply(this, arguments);
    };
  }();

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, container, {
      height: attachmentSelectionBarHeight != null ? attachmentSelectionBarHeight : 52
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.TouchableOpacity, {
    hitSlop: {
      bottom: 15,
      top: 15
    },
    onPress: function onPress() {
      return setPicker('images');
    },
    testID: "upload-photo-touchable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.icon, icon],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, _react["default"].createElement(ImageSelectorIcon, {
    numberOfImageUploads: imageUploads.length,
    selectedPicker: selectedPicker,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }))), hasFilePicker && _react["default"].createElement(_reactNative.TouchableOpacity, {
    hitSlop: {
      bottom: 15,
      top: 15
    },
    onPress: openFilePicker,
    testID: "upload-file-touchable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.icon, icon],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, _react["default"].createElement(FileSelectorIcon, {
    numberOfImageUploads: imageUploads.length,
    selectedPicker: selectedPicker,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }))), _react["default"].createElement(_reactNative.TouchableOpacity, {
    hitSlop: {
      bottom: 15,
      top: 15
    },
    onPress: takeAndUploadImage,
    testID: "take-photo-touchable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.icon, icon],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, _react["default"].createElement(CameraSelectorIcon, {
    numberOfImageUploads: imageUploads.length,
    selectedPicker: selectedPicker,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }))));
};

exports.AttachmentSelectionBar = AttachmentSelectionBar;
//# sourceMappingURL=AttachmentSelectionBar.js.map