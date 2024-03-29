var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var emojis = require("./emojis.ts");

var emojiNames = require("./emojiNames.ts");

var emojiLib = emojis.reduce(function (acc, cur) {
  acc[cur.name] = (0, _extends2["default"])({
    name: cur.name,
    names: cur.names
  }, cur.skin_variations ? {
    skin_variations: Object.values(cur.skin_variations).map(function (skin) {
      return String.fromCodePoint.apply(null, skin.unicode.split('-').map(function (unicode) {
        return "0x" + unicode;
      }));
    })
  } : {}, {
    sort_order: cur.sort_order,
    unicode: String.fromCodePoint.apply(null, cur.unicode.split('-').map(function (unicode) {
      return "0x" + unicode;
    }))
  });
  return acc;
}, {});
var emojiArray = emojiNames.map(function (_ref) {
  var _emojiLib$name;

  var name = _ref.name,
      names = _ref.names;
  return {
    name: name,
    names: (_emojiLib$name = emojiLib[name]) != null && _emojiLib$name.names ? (0, _toConsumableArray2["default"])(new Set([].concat((0, _toConsumableArray2["default"])(emojiLib[name].names), (0, _toConsumableArray2["default"])(names)))) : names
  };
}).sort(function (a, b) {
  return a.name < b.name ? -1 : 1;
});
module.exports = {
  emojiArray: emojiArray,
  emojiLib: emojiLib
};
//# sourceMappingURL=index.js.map