var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMessageDetailsForState = exports.isEditingBoolean = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _utils = require("../../../utils/utils");

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var isEditingBoolean = function isEditingBoolean(editing) {
  return typeof editing === 'boolean';
};

exports.isEditingBoolean = isEditingBoolean;

var useMessageDetailsForState = function useMessageDetailsForState(message, initialValue) {
  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      fileUploads = _useState2[0],
      setFileUploads = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      imageUploads = _useState4[0],
      setImageUploads = _useState4[1];

  var _useState5 = (0, _react.useState)(!isEditingBoolean(message) && Array.isArray(message == null ? void 0 : message.mentioned_users) && message.mentioned_users.map(function (user) {
    return user.id;
  }) || []),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      mentionedUsers = _useState6[0],
      setMentionedUsers = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      numberOfUploads = _useState8[0],
      setNumberOfUploads = _useState8[1];

  var _useState9 = (0, _react.useState)(true),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      showMoreOptions = _useState10[0],
      setShowMoreOptions = _useState10[1];

  var initialTextValue = initialValue || '';

  var _useState11 = (0, _react.useState)(initialTextValue),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      text = _useState12[0],
      setText = _useState12[1];

  (0, _react.useEffect)(function () {
    if (text !== initialTextValue) {
      setShowMoreOptions(false);
    }
  }, [text]);
  var messageValue = typeof message === 'boolean' ? '' : "" + message.id + message.text + message.updated_at;
  (0, _react.useEffect)(function () {
    if (message && !isEditingBoolean(message)) {
      setText((message == null ? void 0 : message.text) || '');
      var newFileUploads = [];
      var newImageUploads = [];
      var attachments = Array.isArray(message.attachments) ? message.attachments : [];

      for (var _iterator = _createForOfIteratorHelperLoose(attachments), _step; !(_step = _iterator()).done;) {
        var _attachment = _step.value;

        if (_attachment.type === 'file') {
          var id = (0, _utils.generateRandomId)();
          newFileUploads.push({
            file: {
              name: _attachment.title || '',
              size: _attachment.file_size,
              type: _attachment.mime_type
            },
            id: id,
            state: 'finished',
            url: _attachment.asset_url
          });
        } else if (_attachment.type === 'image') {
          var _id = (0, _utils.generateRandomId)();

          newImageUploads.push({
            file: {
              name: _attachment.fallback
            },
            id: _id,
            state: 'finished',
            url: _attachment.image_url || _attachment.asset_url || _attachment.thumb_url
          });
        }
      }

      if (newFileUploads.length) {
        setFileUploads(newFileUploads);
      }

      if (newImageUploads.length) {
        setImageUploads(newImageUploads);
      }
    }
  }, [messageValue]);
  return {
    fileUploads: fileUploads,
    imageUploads: imageUploads,
    mentionedUsers: mentionedUsers,
    numberOfUploads: numberOfUploads,
    setFileUploads: setFileUploads,
    setImageUploads: setImageUploads,
    setMentionedUsers: setMentionedUsers,
    setNumberOfUploads: setNumberOfUploads,
    setShowMoreOptions: setShowMoreOptions,
    setText: setText,
    showMoreOptions: showMoreOptions,
    text: text
  };
};

exports.useMessageDetailsForState = useMessageDetailsForState;
//# sourceMappingURL=useMessageDetailsForState.js.map