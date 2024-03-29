Object.defineProperty(exports, "__esModule", {
  value: true
});

var _useAppStateListener = require("./useAppStateListener");

Object.keys(_useAppStateListener).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useAppStateListener[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useAppStateListener[key];
    }
  });
});

var _useStreami18n = require("./useStreami18n");

Object.keys(_useStreami18n).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useStreami18n[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useStreami18n[key];
    }
  });
});
//# sourceMappingURL=index.js.map