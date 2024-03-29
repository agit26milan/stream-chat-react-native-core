var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeReservedFields = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var removeReservedFields = function removeReservedFields(message) {
  var retryMessage = (0, _extends2["default"])({}, message);
  var reserved = ['cid', 'config', 'created_at', 'created_by', 'id', 'last_message_at', 'member_count', 'type', 'updated_at'];
  reserved.forEach(function (key) {
    delete retryMessage[key];
  });
  return retryMessage;
};

exports.removeReservedFields = removeReservedFields;
//# sourceMappingURL=removeReservedFields.js.map