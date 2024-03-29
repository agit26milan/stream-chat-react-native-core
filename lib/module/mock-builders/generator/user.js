var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateStaticUser = exports.generateUser = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uuid = require("uuid");

var generateUser = function generateUser() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _extends2["default"])({
    banned: false,
    created_at: '2020-04-27T13:39:49.331742Z',
    id: (0, _uuid.v4)(),
    image: (0, _uuid.v4)(),
    name: (0, _uuid.v4)(),
    online: false,
    role: 'user',
    updated_at: '2020-04-27T13:39:49.332087Z'
  }, options);
};

exports.generateUser = generateUser;

var generateStaticUser = function generateStaticUser(userNumber) {
  switch (userNumber) {
    case 0:
      return generateUser({
        id: 'DannyBoi1',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51t29lLkg8L._AC_SL1000_.jpg',
        name: 'Dan'
      });

    case 1:
      return generateUser({
        id: 'GrantyBoi2',
        image: 'https://i.imgur.com/SLx06PP.png',
        name: 'Grant'
      });

    case 2:
      return generateUser({
        id: 'ViriBoi2',
        image: 'https://i.imgur.com/iNaC3K7.jpg',
        name: 'Vir'
      });

    default:
      return generateUser({
        id: 'NeiliBoi3',
        image: 'https://i.imgur.com/T68W8nR_d.webp?maxwidth=728&fidelity=grand',
        name: 'Neil'
      });
  }
};

exports.generateStaticUser = generateStaticUser;
//# sourceMappingURL=user.js.map